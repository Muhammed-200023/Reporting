import {Tabs,Modal} from 'antd'
import React from 'react'
import { useEffect } from 'react'
import NextButton from '../../../components/common/Button/Nextbutton'
import Resetbtn from '../../../components/common/Button/Resetbtn'
import SaveButton from '../../../components/common/Button/Savebutton'
import GenerateTabContent from '../../../components/common/GenerateTabContent'
import { setreportingData,setactiveTabKey,setisSaved,setLookupTable,resetReportForm,resetEmissionSaved} from '../../../redux/slices/reportingSlice'
import { ReportJSON } from './ReportData'
import { Lookup } from './LookupTable'
import { useDispatch, useSelector } from 'react-redux'

const { confirm } = Modal;

  const Report = ()=> {

    const dispatch = useDispatch();
    const { activeTabKey, reportingData, isSaved} = useSelector((state) => state.reporting);

    useEffect(() => {
      const fetchPageData = async () => {
        try {
          dispatch(setreportingData(ReportJSON));
        } catch (error) {
          console.error('Error fetching report Data:', error);
        } 
      };
      fetchPageData();
    }, [dispatch]);

    useEffect(()=>{
      const fetchLookup= async()=>{
        try{
          dispatch(setLookupTable(Lookup))
        }
        catch(error){
          console.log("error fetching lookuptable:error")
        }
      }
      fetchLookup();
    },[dispatch]);

    const handleReportSave = () => {
      dispatch(setisSaved(true));
    };

    const handleResetClick = () => {
      confirm({
        title: 'Are you sure you want to Reset the values in this page?',
        okText:"Yes",
        cancelText:"No",
        onok() {
          dispatch(resetReportForm({ pillarName: activeTabKey }));
          dispatch(resetEmissionSaved({pillarName: activeTabKey}));
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
      <span className={`pb-1 text-[#014D4E] font-semibold ${activeTabKey === reportData.pillarName? 'border-[#014D4E] border-b-[3px] ' : '' }`}>
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
            color:"#014D4E",
            height: '45px',
            boxShadow:"none",
            margin:0,
            pointerEvents: "none",
          }}

          className="customizing-tabs  bg-white w-auto h-auto "
          tabBarGutter={0}
        />
      <br />
      <div className="w-auto flex justify-end mr-[50px] gap-2.5">
      <Resetbtn onClick={handleResetClick}/>
        <SaveButton onClick={handleReportSave}/>
        <NextButton isSaved={isSaved} onClick={handleNextClick}/>
      </div>
      <br />
    </div>
  )
}

export default Report