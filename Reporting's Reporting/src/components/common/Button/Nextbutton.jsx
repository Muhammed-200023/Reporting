import React from 'react';
import { Button, Modal } from 'antd';

const { confirm } = Modal;

const NextButton = ({ isSaved, onClick }) => {
  const handleClick = () => {
    if (isSaved) {
      confirm({
        title: 'Are you sure you want to move to the next page?',
        okText:"Yes",
        cancelText:"No",
        onOk() {
          onClick();
        },
      });
    } else {
      Modal.error({
        title: 'Save Required',
        content: 'Please save your changes before proceeding.',
      });
    }
  };

  return (
    <Button
      className="h-[30px] w-[87px] border-[#014D4E] text-[#014D4E] border-[1.5px] rounded-[10px] border-solid"
      onClick={handleClick}
    >
      Next
    </Button>
  );
};

export default NextButton;
