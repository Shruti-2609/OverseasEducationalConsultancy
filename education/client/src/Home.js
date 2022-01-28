import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {

  const [name,setname]=useState();
  const [email ,setemail]=useState();
  const [mobile,setmobile]=useState();
  const [nearestoffice , setnearestoffice]=useState();
  const [interestedcountry,setinterestedcountry]=useState();
  const [upcomingintake,setupcomingintake]=useState();
  const [courseinterest,setcourseinterest]=useState();

  const registerClient=async(e)=>{

    e.preventDefault();
     
    const data={
        name,
        email,
        mobile,
        nearestoffice,
        interestedcountry,
        upcomingintake,
        courseinterest
    }
  console.log(data);               
    
  try {     
   const   config={
          headers:{
              "Content-Type" : "application/json"
          }
      }
      
      if(!name || !email || !mobile || !interestedcountry || !nearestoffice || !upcomingintake || !courseinterest){
          alert("please fill all fields");
          return;
      }else{
            
        const response = await axios.post("http://localhost:8000/register" , data, config);
        alert(response);
        console.log(response.status)

        alert(JSON.stringify(response.data));

      }

      
  } catch (error) {
      alert(error)
  }

    




  }

    return (
        <div className="">

        {/* navigation bar  */}

        <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-600 via-purple-600 to-gray-300 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Edu-Global</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
       Services
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        
      </a>
      <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Contact Us
      </a>
    </div>
    
  </div>
</nav>

      
    {/* slide bar */}
    <section class="flex text-gray-700 body-font bg-gray-700 h-screen " style={{backgroundImage:`url(./images/mainbg.jpg)`,backgroundPosition:'center',backgroundSize:"cover"}}>
  <div class="  mx-auto flex px-5 py-24 md:flex-row flex-col justify-end ">

    <div class="w-1/2 h-48 flex flex-col md:items-center items-center text-center justify-end   pt-12 ">

      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black ">
      An Opportunity that makes life better
      </h1>

      <p class="mb-8 leading-relaxed">An ISO certified educational service provider and consultancy firm, Global Education is dedicated to provide quality consultancy services and skill development programs to educational institutes.

{/* In today’s fast-paced world, skills are the real currency that can get you ahead of the race. Committed to increasing the quality of education for a number of educational institutes, we are focusing on issues around admission, training, branding and skill development. Partnering with Global Education is your first step towards choosing excellence. */}

</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none
         hover:bg-indigo-600 rounded text-lg">Read More</button>
        
      </div>
    </div>
   </div> 
  
</section>


        {/* details on contact partners */}

       
            <div className="grid max-h-full grid-cols-1 gap-2 p-12 bg-gray-700 justify-items-center md:grid-cols-3 sm:grid-cols-2">

                <div className="w-64 h-full p-4 text-white bg-blue-600 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white fa fa-user"></i></h1>
                    <h1 className='text-2xl'>
                        Review course
                    </h1>
                    <p>
                        check which course resonates with your interest
                    </p>
                </div>

                <div className="w-64 h-full p-4 text-white bg-red-500 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white far fa-comments"></i></h1>
                    <h1 className='text-2xl'>
                        Reach Us
                    </h1>
                    <p>Fill in the information for us to revert</p>
                </div>

                <div className="w-64 h-full p-4 text-white bg-green-600 rounded-2xl">
                    <h1><i className="p-2 text-4xl text-white fas fa-globe"></i></h1>
                    <h1 className='text-2xl'>
                        Rise with Us
                    </h1>
                    <p>A mentor for global education</p>
                </div>

            </div>

      


        <div className="bg-gray-700 ">
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 ">

                <div className="flex flex-col items-start ">
                    <h1 className="text-4xl font-bold text-gray-200">Global study <span className="">destination</span></h1>
                    <p className="text-2xl font-bold text-gray-200">__________________________________</p>
                </div>
                <div className="grid justify-items-center ">
                   <div className='w-24 h-full'>
                       <button className="p-2 bg-blue-600 rounded-lg">read more</button>
                   </div>
                   
                </div>



            </div>

           {/* country images */}

            <div className="grid grid-cols-1 gap-4 p-4 text-black justify-items-center md:grid-cols-3">
                <div className="w-11/12 rounded-2xl ">
                    <img className=" rounded-2xl" src="./images/country.images/australia.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Australia</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/canada.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">UK</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/germany.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Canada</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-4 justify-items-center md:grid-cols-3">
                <div className="w-11/12 rounded-xl">
                    <img className="rounded-2xl" src="./images/country.images/newzealand.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">Germany</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/uk.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">New Zealand</h3>
                </div>
                <div className="w-11/12 ">
                    <img className="rounded-2xl" src="./images/country.images/usa.jpg" alt=""/>
                    <h3 className="p-2 text-xl font-semibold text-white">USA</h3>
                </div>
            </div>

        </div>
       {/* registration form  */}

        <div className=" bg-gradient-to-br from-pink-400 via-red-400 to-cyan-500">

            <div className="" id="background-image" style={{backgroundImage:`url(./images/formbg.jpg)`,backgroundPosition:'center',backgroundSize:"cover"}}>
                <div className="grid w-full p-8 justify-items-start">
                    <form className="p-4 bg-blue-600 border-2 border-green-900 rounded-2xl">
                        <h1 className="text-3xl font-semibold text-white ">Request <span>Information</span></h1>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                           
                            <input type="text" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="name" onChange={(e)=>setname(e.target.value)} placeholder="name*"/>
                        </div>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                          
                            <input type="email" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" onChange={(e)=>setemail(e.target.value)} placeholder="email*"/>
                        </div>
                        <div className="p-4 font-semibold text-white rounded-2xl ">
                         
                            <input type="text" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="mobile" onChange={(e)=>setmobile(e.target.value)} placeholder="mobile*"/>
                        </div>



                        <div className="p-4">

                            <div className="pb-4">
                                <div className="font-semibold text-white rounded-2xl">
                                   
                                    <select onChange={e=>setnearestoffice(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="nearestoffice">

                                        <option>nearest office*</option>
                                        <option>mumbai</option>
                                        <option>kolkatta</option>
                                        <option>new delhi</option>
                                        <option>bangalore</option>
                                    </select>
                                </div>
                            </div>
                          

                                <div className="pb-4">
                                   
                                    <select onChange={e=>setinterestedcountry(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="country" >
                                        <option>Interest country*</option>
                                        <option>usa</option>
                                        <option>canada</option>
                                        <option>australia</option>
                                        <option>japan</option>
                                    </select>
                                </div>
                            
                        
                        
                            <div className="">

                                <div className="pb-4">
                                 
                                    <select onChange={e=>setupcomingintake(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="month">

                                        <option>select upcoming intake*</option>
                                        <option>january</option>
                                        <option>march</option>
                                        <option>april</option>
                                        <option>june</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pb-4">

                               
                                
                                    <select onChange={e=>setcourseinterest(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="course">
                                        <option>course interest in*</option>
                                        <option>b.tech</option>
                                        <option>mba</option>
                                        <option>bba</option>
                                        <option>m.tech</option>
                                    </select>
     
                            </div>
                        </div>
                      
                            <div className="">
                                <button onClick={registerClient} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" >Register now</button>
                            </div>
                      
                    </form>
                </div>
            </div>

        </div>

       {/* boxex  */}
        <div className="bg-gray-700">
            <div className="">

                <div className="pt-4">
                    <h1 className="text-4xl font-bold text-gray-200">Test <span className="">preparation</span></h1>
                    <p className="text-2xl text-white">__________________________________</p>
                </div>

            </div>


            <div className="grid grid-cols-1 gap-4 p-12 justify-items-center md:grid-cols-3">
                <div className="grid items-center w-9/12 h-40 text-center bg-green-400 shadow-2xl justify-items-center rounded-2xl">
                    <h1 className="text-4xl">GMAT</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-blue-500 justify-items-center rounded-2xl ">
                    <h1 className="text-4xl ">IELTS</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-red-500 justify-items-center rounded-2xl">
                    <h1 className="text-4xl ">PTE</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-12 justify-items-center md:grid-cols-3">
                <div className="grid items-center w-9/12 h-40 text-center bg-green-400 justify-items-center rounded-2xl">
                    <h1 className="text-4xl">TOEFL</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-blue-500 justify-items-center rounded-2xl ">
                    <h1 className="text-4xl ">SAT</h1>
                </div>
                <div className="grid items-center w-9/12 h-40 text-center bg-red-500 justify-items-center rounded-2xl">
                    <h1 className="text-4xl ">GRE</h1>
                </div>
            </div>

        </div>

        <div className="p-12 bg-gray-700" id='services'>
           

                <div className="p-4">
                    <h1 className="p-2 text-4xl font-bold text-gray-200">What we <span className="">offer</span></h1>
                    <p className="pb-4 text-white">__________________________________</p>
                </div>
              

            {/* proposal */}
            <div className="grid grid-cols-1 gap-4 text-white justify-items-center md:grid-cols-5">
                <div className="">
                    <img className="rounded-2xl" src="./images/one.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">Education counseling</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/two.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">country information</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/three.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">selection of course</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/four.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">Admission </h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/five.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">financial estimation</h5>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-4 justify-items-center md:grid-cols-5 ">
                <div className="">
                    <img className="rounded-2xl" src="./images/country.images/uk.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">visa services</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/four.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">accomodation </h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/seven.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">travel guidance</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/country.images/australia.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">carrier abroad</h5>
                </div>
                <div className="">
                    <img className="rounded-2xl" src="./images/six.jpg" alt=""/>
                    <h5 className="p-2 text-xl font-semibold text-white">safety</h5>
                </div>
            </div>
        </div>


        <div className="p-4 bg-gray-700">
         

                <div className="">
                    <h1 className="p-2 text-4xl font-bold text-gray-200">How Global opportunity is <span className="">challenging
                            now</span></h1>
                    <p className="pb-4 text-white ">__________________________________</p>
                </div>
             



            

           {/* country images  */}
            <div className="grid grid-cols-1 gap-6 p-12 md:grid-cols-2">
                <div className="p-12 bg-gray-400 rounded-2xl">
                    <h2 className="text-xl font-semibold text-white">A. P. J. Abdul Kalam</h2>
                    <p className='pt-4 text-gray-300'>Avul Pakir Jainulabdeen Abdul Kalam (/ˈəbdəl kəˈlɑːm/ (About this soundlisten); 15 October 1931 –
                        27 July 2015) was an Indian aerospace scientist who served as the 11th president of India from
                        2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace
                        engineering. He spent the next four decades as a scientist and science administrator, mainly at
                        the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation
                        (ISRO) and was intimately involved in India's civilian space programme and military missile
                        development efforts.[1] He thus came to be known as the Missile Man of India for his work on the
                        development of ballistic missile and launch vehicle technology.[2][3][4] He also played a
                        pivotal organisational, technical, and political role in India's Pokhran-II nuclear tests in
                        1998, the first since the original nuclear test by India in 1974.[5]
                    </p>
                </div>
                <div className="p-12 bg-gray-400 rounded-2xl">
                    <h2 className="text-xl font-semibold text-white ">Bill Gates</h2>
                    <p className='pt-4 text-gray-300'>
                        William Henry Gates III (born October 28, 1955) is an American business magnate, software
                        developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his
                        late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions
                        of chairman, chief executive officer (CEO), president and chief software architect, while also
                        being the largest individual shareholder until May 2014.[4] He is considered one of the best
                        known entrepreneurs of the microcomputer revolution of the 1970s and 1980s.
                    </p>
                </div>

            </div>

        </div>

        <div className="p-8 bg-blue-700">
            <div className="grid grid-cols-2 gap-2 justify-items-center md:grid-cols-4">
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl fas fa-hotel"></i></h2>
                    <h3 className='pt-2 text-4xl'>700+</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Institutions Partners</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i class="fas fa-graduation-cap text-4xl"></i></h2>
                    <h3 className='pt-2 text-4xl'>50000+</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Satisfied Students</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl fas fa-star"></i></h2>
                    <h3 className='pt-2 text-4xl'>5</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Rated On Social Media</h5>
                </div>
                <div className="p-4 text-white ">
                    <h2><i className="text-4xl far fa-building"></i></h2>
                    <h3 className='pt-2 text-4xl'>30</h3>
                    <h5 className='pt-2 text-xl font-semibold'>Offices PAN India</h5>
                </div>

            </div>

        </div>
       

             {/* footer  */}

            <div className="grid grid-cols-1 gap-2 bg-gray-700 justify-items-center md:grid-cols-2" id='contact'>
                <div className="p-4">
                    <h4 className="pb-1 font-semibold text-gray-200">Explore Countries</h4>
                    <p className='text-gray-400'>Study in USA | Study in Canada | Study in Australia | Study in UK | Study in New Zealand | Study
                        in Ireland | Study in Germany | Study in Singapore | Study in Switzerland | Study in Malaysia |
                        Study in Dubai | Explore All Countries</p>
                    <h4 className="pt-1 pb-1 font-semibold text-gray-200">Exams</h4>
                    <p className='text-gray-400'>GMAT | GRE | IELTS | PTE | SAT | TOEFL</p>
                    <h4 className="pt-1 pb-1 font-semibold text-gray-200">Financial assistance</h4>
                    <p className='text-gray-400'>Scholarships for Germany | Scholarships for New Zealand | Scholarships for Australia |
                        Scholarships for UK</p>
                    <h4 className="pt-1 pb-1 font-semibold text-gray-200">Other links</h4>
                    <p className='text-gray-400'>Careers | Image Gallery | Video Gallery | Contact Us | Sitemap</p>
                </div>

                <div className="p-4 text-white">
                    <h1 className='text-3xl'>EDU - GL<span><i className="text-3xl fas fa-globe"></i></span>BAL</h1>
                    <p className="text-2xl text-blue-700">___________________________</p>
                    <p className='p-8'>
                       Edu - Global Pvt. Ltd. is India’s leading education consultant that undertakes students’
                        recruitment from India for its 700+ Institution partners across the globe.

                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-3 bg-blue-700 justify-items-center md:grid-cols-2">
                <div className="p-3 font-semibold text-white">
                    <p>@ COPYRIGHT 2022 Edu-Global. ALL RIGHTS RESERVED.</p>

                </div>
                <div className="">
                    <p className="p-3">
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-facebook"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-whatsapp"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-youtube"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-instagram"></i></a>
                        <a href="#"><i className="pr-4 text-2xl text-white fab fa-linkedin"></i></a>
                    </p>

                </div>

            </div>

    


         {/* container end  */}

    </div>
    )
}

export default Home
