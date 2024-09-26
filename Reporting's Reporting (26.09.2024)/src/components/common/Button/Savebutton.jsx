import React from 'react';
import { Button, notification } from 'antd';

const SaveButton = ({ onClick }) => {
  return (
    <Button
      className="h-[30px] w-[87px] border-[#1F405A] text-[#1F405A] border-[1.5px] rounded-[10px] border-solid"
      onClick={() => {
        onClick();
        notification.success({
          message: 'Fields Saved',
          description: 'Your changes have been saved successfully.',
        });
      }}
    >
      Save
    </Button>
  );
};


export default SaveButton;
