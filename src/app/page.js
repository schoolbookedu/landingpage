import Image from 'next/image'
import Accordion from '@/components/Accordion'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  const primaryBtn = 'inline-block rounded border-2 border-[#407BFF] bg-[#407BFF] px-6 py-4 text-xs font-medium capitalize leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]' 
  const secondaryBtn = 'text-white inline-block rounded border-2 border-[#ffffff] px-6 py-4 text-xs font-medium capitalize leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10' 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
     <section className='w-full flex flex-col justify-center items-center lg:flex-row bg-[#0B004E] py-[50px] lg:py-[100px] px-[20px] lg:px-[150px] '>
        <div className='w-full lg:w-[50%] flex '>
          <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-white capitalize text-2xl lg:text-5xl font-bold leading-snug lg:leading-snug'>The Schooling experience gets better with us</h1>
            <p className='text-white lg:leading-7 text-base'>Putting first the needs of instructors and students in higher institutions of learning with our data driven solutions and improving the schooling experience of our users is our top priority at Schoolbook</p>
            <div className='flex flex-col sm:flex-row lg:justify-start justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <button
              className={primaryBtn}> 
                SignUp as a Tutor
              </button>
              <button
              className={secondaryBtn}> 
                SignUp as a Student
              </button>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-[50%]  mt-8 lg:mt-0 flex flex-row justify-center space-x-4 sm:space-x-10'>
          <div className='flex justify-center items-center'>
            <Image src='/bg-image.png' width='216' height='216' />
          </div>
          <div className='flex flex-row lg:flex-col justify-center items-center space-y-0 space-x-4 lg:space-y-10'>
            <Image src='/bg-image2.png' width='172' height='172' />
            <Image src='/bg-image3.png' width='172' height='172' />
          </div>
        </div>
     </section>
     <section className='py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] flex flex-col-reverse lg:flex-row bg-[#fff]'>
      <div className='w-full  mt-20 lg:mt-10 flex flex-col justify-center lg:justify-left items-center '>   
        <Image src="/student-signup 1.png" alt="Student Signup" width='394' height='270' className='rounded-xl border-8 border-[#0B004EE5] w-[80%] lg:w-[70%] h-[80%] lg:h-[70%]'/>    
        <Image src="/tutor_signup 1.png" alt="Tutor Signup" width='394' height='270' className='rounded-xl border-8 border-[#0B004EE5] ml-20 md:ml-28 lg:ml-12 mt-[-100px] lg:mt-[-150px] w-[70%] lg:w-[70%] h-[70%] lg:h-[70%]'/>
      </div>
      <div className='w-full   text-center lg:text-left'>
        <h2 className='text-[#407BFF] uppercase font-normal text-2xl leading-9'>WHAT WE ARE ABOUT</h2>
        <h1 className='text-[#000] capitalize text-xl lg:text-3xl font-bold leading-snug lg:leading-snug mt-5'>A learning platform that works for students and instructors</h1>
        <p className='text-[#000] lg:text-sm font-normal lg:leading-7 mt-5'>Our data driven solution is designed to cater for both major players in the academic enviroment. Our product provides solutions to the challenges of students, catering for the niche of nursing mothers, working class business men and women to physically challenge students and aged instructors. Enabling instructors have total control of their time.</p>
        <div className='mt-10'> 
        <button
              className={primaryBtn}> 
                Read More
              </button>
        </div>
      </div>
     </section>
     <section className='w-full text-center py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] flex flex-col bg-[#fff] space-y-5'>
      <h2 className='text-[#407BFF] uppercase font-normal text-2xl leading-9'>TOOLS WE PROVIDE</h2>
      <h1 className='text-[#000] capitalize text-xl lg:text-3xl font-bold leading-snug lg:leading-snug '>We provide the best of tools to keep you going</h1>
        <div className='mt-5'>
        <Accordion />
        </div> 
     </section>
     <section className='h-[600px] w-full relative'>
      <Image src='/overlay-img.png' alt='overlayed-img' layout="fill" objectFit="cover" quality={100}/>
      <div className="space-y-5 absolute m-auto text-center lg:px-[250px] md:px-[150px] px-[20px] py-3 w-full right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className='text-[#FFEE52] text-2xl font-normal '>OUR MARKETPLACE</h2>
        <h1 className='text-[#ffffff] text-4xl font-bold'>The SchoolBook Marketplace</h1>
        <p className='text-[#ffffff] text-lg font-normal leading-8'>Our marketplace provides students with fast customer access to sell their
          unused school items, distressed sale items, and explore a variety of products,
          boosting their economic well-being.</p>
        <div className='mt-5'>
        <button
              className={primaryBtn}> 
                Read More
              </button>
        </div>
      </div>
     </section>
     <section className='w-full py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] flex flex-col lg:flex-row bg-[#fff]'>
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-start space-y-5'>
          <h2 className='text-[#407BFF] font-normal lg:text-2xl text-xl'>OUR STORIES</h2>
          <h1 className='text-[#000000] font-bold lg:text-4xl text-2xl'>Users Testimonials</h1>
        </div>
        <div className='w-full lg:w-[50%] lg:border-l-2 lg:border-[#0B004E] lg:px-2'>
          <Testimonial />
        </div>
     </section>
     <section className='w-full py-[50px] lg:py-[100px] px-[20px] lg:px-[200px] flex flex-col lg:flex-row bg-[#ffffff]'>
              <div className='w-full bg-[#0B004E] py-[30px] lg:py-[80px] px- sm:px-12 text-center space-y-8'>
                <h2 className='text-[#ffffff] font-bold text-xl sm:text-4xl'>Ready to get started?</h2>
                <p className='text-[#ffffff] font-normal text-base sm:text-xl leading-7'>You can drive that schooling process <br/>using schoolbook</p>
                <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                <button
              className={primaryBtn}> 
                SignUp as a Tutor
              </button>
              <button
              className={secondaryBtn}> 
                SignUp as a Student
              </button>
                </div>
              </div>
     </section>

    </main>
  )
}

