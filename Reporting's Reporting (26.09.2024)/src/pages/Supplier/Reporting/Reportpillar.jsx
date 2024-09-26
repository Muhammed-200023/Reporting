import React, { useState } from "react";
import { Tabs, Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import Report from "./Report";
import './Report.css';

function Reportpillar() {
  const [activeTab, setActiveTab] = useState('1'); 

  const items = [
    {
      key: '1',
      label: 'Sustainability Reporting',
      children: 'Sustainability Reporting',
    },
    {
      key: '2',
      label: 'CDP Details',
      children: 'CDP Details',
    },
    {
      key: '3',
      label: 'Reporting',
      children: <Report />,
    },
  ];

  const onTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div>
            {activeTab === '3' && (
              <div className="mb-[15px] flex justify-end">
                <Button className="font-semibold text-[#1F405A] border-solid border-[1.5px] border-[#1F405A] rounded-[20px]">
                  <DownloadOutlined className="text-[25px] " />PDF Download
                </Button>
              </div>
            )}
            <Tabs
              items={items}
              activeKey={activeTab}
              onChange={onTabChange}
              tabBarStyle={{
                backgroundColor:'#1F405A',
                height: '45px',
                marginBottom: 0,
              }}
              className="custom-tabs bg-white rounded-t-[20px] rounded-b-[20px] w-auto h-auto shadow-md"
            />
            </div>
  );
}

export default Reportpillar;