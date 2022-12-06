import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
    <Navbar/>
    
    <div className=' mt-10 px-10'>
    <div className='md:columns-1 lg:columns-2 mt-10'> 

    <div >
    <img src="../img/kiki.png" alt="ME" className='h-100 rounded-md mt-18'/>
  </div>

  <div className='pt-10 bg-gradient-to-tl from-sky-400 to-sky-200 rounded-md '>
  <h1 className='font-extrabold text-black text-[40px] mb-5'> Hello I'm Kinya, <br/> nice to meet you</h1>
    <h1 className='text-black  text-[20px] place-content-center pl-20 pr-20 mb-5 md:text-center lg:text-justify'> I am a passionate lady with a business-minded acumen aiming to learn, grow and
    contribute to the well-being of the society and community at large. </h1>
    <h1 className='text-black  text-[20px] place-content-center pl-20 pr-20 mb-10 md:text-center lg:text-justify'> 
    Currently, I am a 4th-year student at The Catholic University of Eastern Africa pursuing a <span className='font-bold' > Bachelor of Arts and Social Sciences in Economics. </span> 
    </h1>
    <a className='text-sky-600 text-[20px] font-bold border-2 border-sky-600 px-2 py-1 rounded-md'  href='https://drive.google.com/file/d/1Mp6FOa6IenYFBSAQYgIWOmJ8k5yN2uQB/view' > My Resume</a> 
    <br/>
    <br/>
    </div>

</div>


<h1 className='font-semibold text-black text-[30px] mb-5 mt-10'> My Work Experiences</h1>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10 px-10  border-y-4 rounded-md py-6' >
<img src='../img/AFC.png' alt='#' className='h-60 w-60' /> 
<br/>
<br/>
<br/>
<a className='font-semibold text-sky-500 text-[20px] mt-5'> Intern at  <span className='italic font-bold'> Agricultural Finance Coorporation</span> </a>
<p className=' text-black text-[20px] mt-5 md:text-center lg:text-justify'> My main duties were: Daily customer service through correspondence and handling of walk-in clients, Conducting client interviews and account analysis of potential loan
beneficiaries to ascertain creditworthiness, Preparation of credit appraisals, Posting of imprest returns and preparation of bank reconciliation documents, Field inspections of farms and agricultural industries of loan beneficiaries and Collection of returns and arrear. </p>
</div>

<div className='columns-1 md:columns-1 lg:columns-2 mb-5 mt-10 px-10 border-b-4 py-6' >
<img src='../img/laylands.png' alt='#' className='h-60 w-60' /> 
<br/>
<br/>
<br/> 
<br/>
<a className='font-semibold text-sky-500 text-[20px] mt-5'>  Social Media Manager at <span className='italic font-bold'>Laylands Elegance Salon </span> </a>
<p className=' text-black text-[20px] mt-5 md:text-center lg:text-justify'> I was responsible for Creating social media content such as videos, reels & posters, Planning and developing social media campaigns, Engaging with customers and responding to comments and inquiries, Posting of content across all social media platforms daily, Crafting catchy content campaigns and analyzing engagement and Fast responding to client inquiries on social media platforms </p>
<br/>
<br/>
<Link className='text-sky-600 text-[20px] font-semibold border-2 border-sky-600 px-2 py-1 rounded-md ' to= '/Aboutme'> View some of my work</Link>
</div>

<div className='columns-1 md:columns-1 lg:columns-2 px-10 border-b-4 rounded-md py-6'>
<img src='../img/nafisika.png' alt='#' className='h-60 w-60' /> 
<br/>
<br/>
<br/>
<br/>
<a className='font-semibold text-sky-500 text-[20px] mt-5'> Training and Development Intern at <span className='italic font-bold'> Nafisika Trust</span> </a>
<p className=' text-black text-[20px] mt-5 md:text-center lg:text-justify'> I was tasked in Creating of graphic design posters for social media, Researching, planning, and organizing training programs, and webinars for inmates, prison officers, and staff members, Training inmates, prison officers, and staff members on selected topics, Preparing training aids such as agendas, handouts, and evaluation forms and  Report writing after each training and at the completion of each program. </p>
<br/>
<br/>
</div>

<div className=' h-[400px] md:h-[300px] lg:h-[250px] mt-10 mb-5 bg-gradient-to-tl from-sky-400 to-sky-200 rounded-md ' > 
<h1 className='text-[25px] text-black font-bold mb-5 pt-10'> Interested  in collaborating with me? </h1>
<p className='text-[20px] text-black mb-5'> I am always open to discuss any work or partnership opportunities</p>

<a className='text-sky-600 text-[20px] font-bold border-2 border-sky-600 px-2 py-1 rounded-md 'href='mailto:kirikakinya@gmail.com'>Drop me an email</a> <br/><br/>
<a
className=" text-[15px] "
href="https://www.linkedin.com/in/kinya-kirika-38b032207/"
>
 LinkedIn 
</a>

</div>

</div>


</div>
    
  )
}

export default Home

