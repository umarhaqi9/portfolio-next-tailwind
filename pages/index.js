import { useEffect, useRef } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';


export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const btnLoading = document.querySelector('#load');
    const btnKirim = document.querySelector('#submit');
    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');

    emailjs.sendForm('service_a2w6pej', 'template_63vsmyr', form.current, 'r64VvUaQDUtl1e-ip')
      .then((result) => {
          console.log(result.text);
          btnLoading.classList.toggle('hidden');
          btnKirim.classList.toggle('hidden');
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  useEffect(() => {
    // Navbar Fixed
    window.onscroll = function() {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    }

    // Hamburger Script
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburgeractive');
      navMenu.classList.toggle('hidden');
    });

    // AOS
    AOS.init({
      duration: 800
    });
  })
  
  
  return (
    <>
      <Head>
        <title>Umar's Website</title>
        <link rel="icon" href="https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
      </Head>
      
      {/* Header Start */}

        <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
          <div className='container'>
            <div className='flex items-center justify-between relative'>
              <div className='px-4'>
                <a href='#home' className='font-bold text-lg text-sky-500 block py-6'>UmarHaqi</a>
              </div>
              <div className='flex items-center px-4'>
                <button id='hamburger' name='hamburger' type='button' 
                  className='block absolute right-4 lg:hidden'>
                  <span className='hamburgerline origin-top-left transition duration-300 ease-in-out'></span>
                  <span className='hamburgerline transition duration-300 ease-in-out'></span>
                  <span className='hamburgerline origin-bottom-left transition duration-300 ease-in-out'></span>
                </button>

                <nav 
                  id='nav-menu' 
                  className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full 
                            lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                  <ul className='block lg:flex'>
                    <li className='group'>
                      <a href='#home' className='text-base font-medium text-black py-2 mx-8 flex  group-hover:text-sky-500'>Home</a>
                    </li>
                    <li className='group'>
                      <a href='#about' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500'>About</a>
                    </li>
                    <li className='group'>
                      <a href='#portofolio' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500'>Portofolio</a>
                    </li>
                    <li className='group'>
                      <a href='#contact' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500'>Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

      {/* Header End */}

      {/* Hero Section Start */}
        <section id='home' className='pt-36'>
          <div className='container'>
            <div className='flex flex-wrap'>
              <div className='w-full self-center px-4 lg:w-1/2' data-aos="fade-right">
                <h1 className='text-base font-semibold text-sky-500 md:text-xl'>Hey everyone 👋, I'm <span className='block font-bold text-slate-900 text-4xl mt-1'>Umar Haqi</span></h1>
                <h2 className='font-medium text-slate-500 text-lg mt-2 mb-5 lg:text-2xl'>Student & 
                <span className='text-slate-900'> Front-End Developer</span></h2>
                <p className='font-base text-slate-500 mb-10 leading-relaxed'>
                Welcome to my personal website. This site will provide informations about <span className='font-bold text-slate-900'> myself.</span>
                </p>

                <a href='#contact' className='text-base font-semibold text-white bg-sky-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>
                  Contact Me
                </a>
              </div>
              <div className='w-full self-end px-4 lg:w-1/2'>
                <div className='relative mt-10 lg:mt-0 lg:right-0' data-aos="fade-left">
                  <img 
                    src='https://cdn.discordapp.com/attachments/989301099422949466/1017072294293672056/ppumar_1.png' 
                    alt=''
                    className='max-w-full mx-auto'
                  />
                  <span className='absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                    <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        fill="#0ea5e9" 
                        d="M50,-21.6C54.9,-1.2,42.2,19.7,23.6,33.3C5.1,46.9,-19.2,53.4,-38.8,41.8C-58.4,30.3,-73.4,0.8,-66.2,-22.9C-58.9,-46.6,-29.5,-64.5,-3.4,-63.3C22.6,-62.2,45.1,-42.1,50,-21.6Z" 
                        transform="translate(100 100) scale(1.1)" 
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Hero Section End */}

      {/* About Section Start */}
        <section id='about' className='pt-36 pb-32'>
          <div className='container'>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 mb-10 lg:w-1/2' data-aos="fade-up">
                <h4 className='font-bold uppercase text-sky-500 text-lg mb-3'>About Me</h4>
                <h2 className='font-bold text-slate-900 text-3xl mb-5 max-w-md lg:text-4xl'>Introduction</h2>
                <p className='font-small text-base text-slate-400 max-w-xl lg:text-lg'>
                  I'm a front-end developer. My very big interests are in HTML, 
                  CSS, reactJS, and Ionic React. I have been constantly trying my 
                  best to develop my front-end engineering skills for the past 2 
                  years. I'm a very open guy to making new friends. I am a very 
                  "try hard" person to achive the best outcome with the best of 
                  my abilites. It's not always perfect, but I will always make 
                  sure to give the best I can to finish a project.
                </p>
              </div>
              <div className='w-full px-4 lg:w-1/2' data-aos="fade-up">
                <h3 className='font-semibold text-slate-900 text-2xl mb-4 lg:text-3xl lg:pt-10'>Lets Start Communicating!</h3>
                <p className='font-small text-base text-slate-400 mb-6 lg:text-lg'>
                  Here are a few of my social media accounts if you want to stay in-touch.
                  I'm always open to making new friends along the way.
                </p>
                <div className='flex items-center'>
                  {/* Instagram */}
                  <a 
                    href='https://www.instagram.com/umar.haqi912/' 
                    target='_blank' 
                    className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white'>
                    <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  {/* Github */}
                  <a 
                    href='https://github.com/umarhaqi9' 
                    target='_blank' 
                    className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white'>
                    <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a 
                    href='https://twitter.com/UmarHaqi9' 
                    target='_blank' 
                    className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white'>
                    <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a 
                    href='https://www.linkedin.com/in/umar-haqi-6b8720170/' 
                    target='_blank' 
                    className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white'>
                    <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* About Section End */}

      {/* Portofolio Start */}

        <section id='portofolio' className='pt-36 pb-16 bg-slate-100'>
          <div className='container'>
            <div className='w-full px-4' data-aos="fade-up">
              <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-sky-500 mb-2'>Portofolio</h4>
                <h2 className='font-bold text-black text-3xl mb-4'>Newest Projects</h2>
                <p className='font-medium text-slate-500'>
                  Here are a few projects that I've recently done during my time learning about programming. 
                </p>
              </div>
            </div>

            <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
              <div className='mb-12 p-4 md:w-1/2' data-aos="fade-up">
                <div className='rounded-md shadow-md overflow-hidden'>
                  <img 
                    src='https://cdn.discordapp.com/attachments/989301099422949466/1017093062666764438/unknown.png' 
                    alt='Umar Portofolio'
                    width='w-full'/>
                </div>
                <h3 className='font-semibold text-xl text-black mt-5 mb-3'>Umar's Portofolio (React Bootstrap Ver.)</h3>
                <p className='font-small text-base text-slate-500 mb-5'>An alternative portofolio website of mine.</p>
                <a href='https://umar-portofolio.vercel.app/' target='_blank' className='text-base font-semibold text-white bg-sky-500 py-2 px-8 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500'>View</a>
              </div>
              <div className='mb-12 p-4 md:w-1/2' data-aos="fade-up">
                <div className='rounded-md shadow-md overflow-hidden'>
                  <img 
                    src='https://cdn.discordapp.com/attachments/989301099422949466/1001764374555410453/unknown.png' 
                    alt='Waddup'
                    width='w-full'/>
                </div>
                <h3 className='font-semibold text-xl text-black mt-5 mb-3'>Waddup</h3>
                <p className='font-small text-base text-slate-500 mb-5'>
                  A messenger application to help people communicate online.
                </p>
                <a href='https://waddup-eta.vercel.app/' target='_blank' className='text-base font-semibold text-white bg-sky-500 py-2 px-8 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500'>View</a>
              </div>
              <div className='mb-12 p-4 md:w-1/2' data-aos="fade-up">
                <div className='rounded-md shadow-md overflow-hidden'>
                  <img 
                    src='https://cdn.discordapp.com/attachments/989301099422949466/1001764375700459540/unknown.png' 
                    alt='SleepDisorder'
                    width='w-full'/>
                </div>
                <h3 className='font-semibold text-xl text-black mt-5 mb-3'>SleepDisorder</h3>
                <p className='font-small text-base text-slate-500 mb-5'>
                  A sleep disorder expert system to provide emergency diagnostic for users before going to the doctor.
                </p>
                <a href='https://sleepdisorderexsys.000webhostapp.com/' target='_blank' className='text-base font-semibold text-white bg-sky-500 py-2 px-8 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500'>View</a>
              </div>
              <div className='mb-12 p-4 md:w-1/2' data-aos="fade-up">
                <div className='rounded-md shadow-md overflow-hidden'>
                  <img 
                    src='https://cdn.discordapp.com/attachments/989301099422949466/1001764374874161187/unknown.png' 
                    alt='BMCalc'
                    width='w-full'/>
                </div>
                <h3 className='font-semibold text-xl text-black mt-5 mb-3'>BMCalc</h3>
                <p className='font-small text-base text-slate-500 mb-5'>
                  A BMI and BMR calculator to help users calculate their body mass.
                </p>
                <a href='https://bmi-and-bmr-calc.vercel.app/home' target='_blank' className='text-base font-semibold text-white bg-sky-500 py-2 px-8 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500'>View</a>
              </div>
            </div>
          </div>
        </section>

      {/* Portofolio End */}

      {/* Contact Start */}
        <div id='contact' className='pt-36 pb-32'>
          <div className='container'>
            <div className='w-full px-4' data-aos="fade-up">
              <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-sky-500 mb-2'>Contact</h4>
                <h2 className='font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl'>Message For Details</h2>
                <p className='font-medium text-slate-500 md:text-lg'>
                  If you are interested to know more or give a feedback, I'd be very open to it. 
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className='w-full lg:w-2/3 lg:mx-auto' data-aos="fade-up">
                <div className='w-full px-4 mb-8'>
                  <label for="name" className='text-base text-sky-500 font-bold'>Name</label>
                  <input type="text" name="user_name" id="name" className='w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500'/>
                </div>
                <div className='w-full px-4 mb-8'>
                  <label for="email" className='text-base text-sky-500 font-bold'>Email</label>
                  <input type="email" name="user_email" id="email" className='w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500'/>
                </div>
                <div className='w-full px-4 mb-8'>
                  <label for="message" className='text-base text-sky-500 font-bold'>Message</label>
                  <textarea type="text" name="message" id="message" className='w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500 h-32'/>
                </div>
                <div className='w-full px-4'>
                  <button id='submit' className='text-base font-semibold text-white bg-sky-500 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500'>Send</button>
                </div>
                <div className='w-full px-4'>
                  <button id='load' className='flex justify-center text-base font-semibold text-white bg-sky-300 py-3 px-8 rounded-full transition duration-500 hidden' disabled>
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-30" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      {/* Contact End */}

      {/* Footer Start */}
        <footer className='bg-slate-800 pt-24 pb-12'>
          <div className='container'>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 mb-12 text-slate-300 font-small md:w-1/3'>
                <h2 className='font-bold text-4xl text-white mb-5'>Umar Haqi</h2>
                <h3  className='font-bold text-2xl mb-2'>Contact</h3>
                <p className='mb-1'>umarhaqi9@gmail.com</p>
                <p className='mb-1'>+6287878712774</p>
                <p className='mb-1'>Tangerang Selatan</p>
              </div>
              <div className='w-full px-4 mb-12 md:w-1/3'>
                <h3 className='font-semibold text-xl text-white mb-5'>Links</h3>
                <ul className='text-slate-300'>
                  <li>
                    <a href='#home' className='inline-block text-base hover:text-teal-500 mb-3'>Home</a>
                  </li>
                  <li>
                    <a href='#about' className='inline-block text-base hover:text-teal-500 mb-3'>About</a>
                  </li>
                  <li>
                    <a href='#portofolio' className='inline-block text-base hover:text-teal-500 mb-3'>Portofolio</a>
                  </li>
                  <li>
                    <a href='#contact' className='inline-block text-base hover:text-teal-500 mb-3'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='w-full px-4 mb-12 md:w-1/3'>
                <h3 className='font-semibold text-xl text-white mb-5'>Projects</h3>
                <ul className='text-slate-300'>
                  <li>
                    <a href='https://waddup-eta.vercel.app/' className='inline-block text-base hover:text-teal-500 mb-3'>Waddup</a>
                  </li>
                  <li>
                    <a href='https://bmi-and-bmr-calc.vercel.app/' className='inline-block text-base hover:text-teal-500 mb-3'>BMCalc</a>
                  </li>
                  <li>
                    <a href='https://sleepdisorderexsys.000webhostapp.com/' className='inline-block text-base hover:text-teal-500 mb-3'>SleepDisorder</a>
                  </li>
                  <li>
                    <a href='https://gameboii.000webhostapp.com/' className='inline-block text-base hover:text-teal-500 mb-3'>Gameboii</a>
                  </li>
                  <li>
                    <a href='https://pti-uas-food-api.vercel.app/' className='inline-block text-base hover:text-teal-500 mb-3'>Foodies For Groupies</a>
                  </li>
                  <li>
                    <a href='https://umn.itch.io/witchahead' className='inline-block text-base hover:text-teal-500 mb-3'>WitchAhead</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full pt-10 border-t border-slate-600'>
              <div className='flex items-center justify-center mb-5'>
                {/* Instagram */}
                <a 
                  href='https://www.instagram.com/umar.haqi912/' 
                  target='_blank' 
                  className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-0 hover:bg-gradient-to-bl hover:from-purple-600 hover:via-pink-500  hover:to-yellow-300 hover:text-white'>
                  <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                {/* Github */}
                <a 
                  href='https://github.com/umarhaqi9' 
                  target='_blank' 
                  className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-slate-50 hover:bg-slate-50 hover:text-black'>
                  <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a 
                  href='https://twitter.com/UmarHaqi9' 
                  target='_blank' 
                  className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white'>
                  <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href='https://www.linkedin.com/in/umar-haqi-6b8720170/' 
                  target='_blank' 
                  className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-slate-300 border border-slate-300 hover:border-blue-600 hover:bg-blue-500 hover:text-white'>
                  <svg role="img" className='fill-current' width='20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className='font-small text-xs text-slate-400 text-center'>
                Copyright © Umar Haqi 2022, made with <a href='https://nextjs.org/' target='_blank' className='font-bold text-white'>Next.js</a> and <a href='https://tailwindcss.com/' target='_blank' className='font-bold text-sky-500'>Tailwind CSS</a>
              </p>
            </div>
          </div>
        </footer>
      {/* Footer End */}

    
    </>
  )
}
