import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div className='bg-[#FFFFFF] py-[50px] lg:py-[100px] px-[20px] lg:px-[150px]'>
      <h1 className='text-[#000] capitalize text-xl lg:text-3xl font-bold leading-snug lg:leading-snug mt-5'>About Us</h1>
      <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>
       {` Schoolbook is a teaching and study platform for instructors and students in higher institutions of learning, bridging the challenges of schooling and improving the schooling experience. A mobile and web application that offers convenient and on - demand access to tutoring and resources for students and tutors. it facilitate easy information exchange and assimilation, available on both iOS and Android marketplaces.`}</p>
   
      <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{`Sub product includes a retail marketplace sub, creating a connection between students who need to find people who need to exchange their used school items for value and open access to a wider consumer reach for remote vendors within the campus.`}</p>
        
      <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{`Schoolbook is focused on empowering Nigerian students by providing them with a platform that brings the classroom experience outside the walls of a traditional classroom. Schoolbook aims to inspire and motivate students to take charge of their education and embrace learning in a new and dynamic way. The brand reflects a commitment to leveraging technology to enhance the learning process and create an engaging and interactive environment for students, we aim to revolutionize the way Nigerian students learn and achieve their academic goals and improve the teaching process and experience for academic instructors.`}</p>
        
      <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{`Learning Management Systems: Schoolbook is developing and offering a comprehensive learning management system (LMS) tailored to the Nigerian higher education system. Our learning Management system LMS can streamline course management, facilitate online collaboration, host a live library and addressing the specific requirements of Nigerian universities and lecturers, Schoolbook is positioning to become a leading provider of learning management solutions in the country.`}</p>
       
      <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{` Our marketplace offers where students can find buyers for items they no longer need after session or school season, quick access to costumers for distress sales items, expanding their consumer reach and allowing them to explore different products. This marketplace can be further expanded to include students - friendly price ranges, facilitating affordable access to necessary items and enhancing students' economic well -being.`}</p>
      <div className='flex flex-col lg:flex-row py-[50px] lg:py-[100px]'>
        <div className='w-full lg:w-[60%]'>
          <Image src="/about1.png" alt="about-img" width="629" height="394" className='w-[100%] h-[394px] object-cover '/>
        </div>
        <div className='w-full lg:w-[40%] flex flex-row'>
          <Image src="/about2.png" alt="about-img" width="244" height="394" className='w-[50%] h-[394px] object-cover object-right'/>
          <Image src="/about3.png" alt="about-img" width="244" height="394" className='w-[50%] h-[394px] object-cover object-left'/>
        </div>
      </div>
      <div>
        <h1 className='text-[#000] capitalize text-xl lg:text-3xl font-bold leading-snug lg:leading-snug mt-5'>
          Mission
        </h1>
        <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{`Our mission is to use technology to drive and enhance the teaching and learning experiences of academic instructors and students within tertiary institutions in Nigeria, while expanding the consumer and market reach of remote vendors within academic campus.`}</p>
        <h1 className='text-[#000] capitalize text-xl lg:text-3xl font-bold leading-snug lg:leading-snug mt-5'>
          Vision
        </h1>
        <p className='text-[#000] text-left lg:text-sm font-normal lg:leading-7 mt-5 lg:px-24'>{`To empower and provide every academic player with the necessary learning tools for schooling and learning across institutions of learning in Nigeria to measure up to global standards.`}</p>
      </div>
    </div>
  )
}

export default about