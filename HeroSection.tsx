import React from 'react'


const HeroSection = () => {
  return (
    <div className='main flex'>
    <div className='grid gap-8 md-grid-col-2'>

    <div className='w-[1280px] h-[800px] mt-[141px] '>
        <div className=' flex w-1/2  flex-col h-[300px] p-[0px 60px 0px 80px] gap-[24px] ml-[30px]  '>
            <img src='/image/Column.svg' alt='text'/>
           
         <div className='flex w-1/2 h-[700px]  ml-[900px] '>
         <img src="/image/image.svg" alt="model picture" />
         </div>
         </div>
        <div className=' w-[1280px] h-[228px] mt-[300px] ml-[100px] p-[80px 64px 80px 64px] gap-[64px] bg-[#F7F7F7]
'>
    <img src='/image/bar.svg' alt='bar'/>
</div>
</div>
      
    </div>
    </div>
  )
}

export default HeroSection;



