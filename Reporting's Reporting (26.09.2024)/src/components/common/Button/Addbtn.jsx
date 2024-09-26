import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

function Addbtn() {
  return (
    // <div className='flex gap-1 '>
    // <PlusCircleOutlined className='text-[#014D4E] text-[15px]'/><button className='pb-[2px]   text-[#014D4E] font-semibold'>Add</button>
    // </div>
    <div>
    <Button type="text" className="h-[27px] text-[#1F405A] bg-[rgba(31,64,90,0.3)] w-[65px] text-[10px] font-bold">
    <PlusCircleOutlined className='text-[#1F405A] text-[15px]'/>Add</Button>
    </div>
  )
}

export default Addbtn
