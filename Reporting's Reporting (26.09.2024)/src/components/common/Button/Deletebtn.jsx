import React from 'react'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export default function Deletebtn() {
  return (
    <div className='flex gap-1 '>
      {/* <CloseCircleOutlined className='text-[#F22F23] text-[15px]'/>
      <button className='pb-[2px] text-[#F22F23] font-semibold'>Delete</button> */}
       <Button type="text" className="h-[27px] text-[#F22F23] bg-[rgba(242,47,35,0.3)] w-[65px] text-[10px] font-bold">
      <CloseCircleOutlined
       className="text-[15px] text-[#F22F23]"/>
      Delete</Button>
      </div>)
}
