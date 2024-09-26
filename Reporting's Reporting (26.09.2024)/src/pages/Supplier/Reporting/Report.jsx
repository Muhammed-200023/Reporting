import { Tabs, Modal } from 'antd';
import React, { useEffect } from 'react';
import NextButton from '../../../components/common/Button/Nextbutton';
import Resetbtn from '../../../components/common/Button/Resetbtn';
import SaveButton from '../../../components/common/Button/Savebutton';
import GenerateTabContent from '../../../components/common/GenerateTabContent';
import { setreportingData, setactiveTabKey, setisSaved, setLookupTable, resetReportForm,populateReportForm, resetEmissionSaved } from '../../../redux/slices/reportingSlice';
import { ExistingUser } from './ExistingUser'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { apiRequest } from '../../../services/apiService';

const { confirm } = Modal;

const Report = () => {
  const dispatch = useDispatch();
  const { activeTabKey, reportingData, isSaved, ReportForm, emissionSaved, SwitchState } = useSelector((state) => state.reporting);

  const supplier_id=12321;
  const username="MHD" 

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const Reportresult = await apiRequest("GET", "/report");
        console.log(Reportresult)
        dispatch(setreportingData(Reportresult));
        const Lookup=await apiRequest("GET","/lookup")
        console.log(Lookup)
        dispatch(setLookupTable(Lookup));
        dispatch(populateReportForm(ExistingUser));
      } catch (error) {
        console.error('Error fetching report Data:', error);
      }
    };
    fetchPageData();
  }, [dispatch]);

  const handleSaveClick = async () => {
    dispatch(setisSaved(true));
    try {
      const selectedPillar = reportingData.find((data) => data.pillarName === activeTabKey);
      const reportFormState = ReportForm[activeTabKey] || {};
      const emissionSaveState = emissionSaved[activeTabKey] || {};
      const switchState = SwitchState[activeTabKey] || {};
  
      if (!reportFormState || !emissionSaveState || !switchState) {
        console.error(`States not properly defined for activeTabKey: ${activeTabKey}`);
        return;
      }
  
      const payload = {
        id: "",
        supplierId: supplier_id, 
        year: "2024", 
        pillar_report_id: selectedPillar.id, 
        pillar_id: selectedPillar.pillar_id,  
        pillar_name: activeTabKey,
        reportQuestionAnwsers: Object.keys(reportFormState).map((questionId) => ({
          questionId,
          isSelected: switchState[questionId] || true, 
          totalEmissionSaved: emissionSaveState[questionId] || 0, 
          response: [
            {
              emissionSaved: "1M", 
              answers: Object.keys(reportFormState[questionId].inputFields).map((fieldId) => ({
                fieldId, 
                value: reportFormState[questionId].inputFields[fieldId] || "", 
              }))
            }
          ]
        })),
        
        reportTableAnwsers: [],  
        updated_dt: new Date().toISOString(),
        updated_user: username  
      };
  
      const response = await axios.post('http://localhost:8080/api/save', payload);
      console.log(payload)
      
      if (response.status === 200) {
        dispatch(setisSaved(true));
        console.log('Save successful:', response.data);
      }
    } catch (error) {
      console.error('Error saving report:', error);
     
    }
  };
  


  const handleResetClick = () => {
    confirm({
      title: 'Are you sure you want to Reset the values in this page?',
      okText: "Yes",
      cancelText: "No",
      onOk() {
        dispatch(resetReportForm({ pillarName: activeTabKey }));
        dispatch(resetEmissionSaved({ pillarName: activeTabKey }));
      },
    });
  };

  const handleNextClick = () => {
    const currentIndex = reportingData.findIndex(
      (item) => item.pillarName === activeTabKey
    );
    const nextIndex = (currentIndex + 1) % reportingData.length;
    dispatch(setactiveTabKey(reportingData[nextIndex].pillarName));
    dispatch(setisSaved(false));
  };

  const items = reportingData.map((reportData) => ({
    key: reportData.pillarName,
    label: (
      <span className={`pb-1 text-[#1F405A] font-semibold ${activeTabKey === reportData.pillarName ? 'border-[#1F405A] border-b-[3px]' : ''}`}>
        {reportData.pillarName}
      </span>
    ),
    children: <GenerateTabContent Data={reportData} />,
  }));

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        items={items}
        tabBarStyle={{
          backgroundColor: 'white',
          color: '#1F405A',
          height: '45px',
          boxShadow: "none",
          margin: 0,
          pointerEvents: "none",
        }}
        className="customizing-tabs bg-white w-auto h-auto"
        tabBarGutter={0}
      />
      <br />
      <div className="w-auto flex justify-end mr-[50px] gap-2.5">
        <Resetbtn onClick={handleResetClick} />
        <SaveButton onClick={handleSaveClick} />
        <NextButton isSaved={isSaved} onClick={handleNextClick} />
      </div>
      <br />
    </div>
  );
};

export default Report;
