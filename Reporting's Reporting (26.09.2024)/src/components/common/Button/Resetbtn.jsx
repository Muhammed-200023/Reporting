import React from 'react';
import { Button } from 'antd';

function Resetbtn({ onClick }) {
  return (
    <div>
      <Button
        className="h-[30px] w-[87px] border-[#1F405A] text-[#1F405A] border-[1.5px] rounded-[10px] border-solid"
        onClick={onClick}  
      >
        Reset
      </Button>
    </div>
  );
}

export default Resetbtn;
