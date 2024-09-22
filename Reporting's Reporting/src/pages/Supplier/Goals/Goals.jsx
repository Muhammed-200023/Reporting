import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Tabs } from "antd";
import GenerateTabContent from "../../../components/common/GenerateTabContent";
import SaveButton from "../../../components/common/Button/Savebutton";
import NextButton from "../../../components/common/Button/Nextbutton";
import { apiRequest } from "../../../services/apiService";
import {setActiveTabKey,setgoalsData,setLoading,setIsSaved } from "../../../redux/slices/goalsSlice";
import Resetbtn from "../../../components/common/Button/Resetbtn";
import "./Goals.css";

const Goals = () => {
  const dispatch = useDispatch();
  const { activeTabKey, goalsData, loading, isSaved } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    const fetchPageData = async () => {
      dispatch(setLoading(true));
      try {
        const result = await apiRequest("GET", "/data");
        dispatch(setgoalsData(result));
      } catch (error) {
        console.error("Error fetching page content:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchPageData();
  }, [dispatch]);

  const handleGoalsSave = () => {
    dispatch(setIsSaved(true));
  };

  const handleNextClick = () => {
    const currentIndex = goalsData.findIndex(
      (item) => item.pillarName === activeTabKey
    );
    const nextIndex = (currentIndex + 1) % goalsData.length;
    dispatch(setActiveTabKey(goalsData[nextIndex].pillarName));
    dispatch(setIsSaved(false));
  };
  

  const items = goalsData.map((goals) => ({
    key: goals.pillarName,
    label: goals.pillarName,
    children: <GenerateTabContent Data={goals} />,
  }));

  return (
    <div>
      {loading ? (
        <Spin tip="Loading" size="large" />
      ) : (
        <Tabs
          activeKey={activeTabKey}
          items={items}
          onChange={(key) => dispatch(setActiveTabKey(key))}
          tabBarStyle={{
            backgroundColor: "#014D4E",
            height: "45px",
            marginBottom: 0,
            pointerEvents: "none",
          }}
          className="custom-tabs ml-[10px] bg-white mb-[17px] rounded-t-[20px] rounded-b-[20px] w-auto h-auto shadow-md"
          tabBarGutter={0}
        />
      )}
      <br />
      <div className="w-auto flex justify-end  mr-[50px] gap-2.5">
        <Resetbtn />
        <SaveButton onClick={handleGoalsSave} />
        <NextButton isSaved={isSaved} onClick={handleNextClick} />
      </div>
      <br />
    </div>
  );
};

export default Goals;

