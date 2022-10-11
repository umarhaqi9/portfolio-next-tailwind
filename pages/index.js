import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Script from 'next/script';
import Image from 'next/image';
import HTMLPic from '../public/html5.png';
import JSPic from '../public/javascript.png';
import BSPic from '../public/bootstrap.png';
import TSPic from '../public/ts.png';
import ReactPic from '../public/react.png';
import PHPPic from '../public/php.png';
import IonicPic from '../public/ionic.png';
import FigmaPic from '../public/figma.png';
import CIPic from '../public/codeigniter-logo.png';
import NextPic from '../public/nextjs.png';
import CSSPic from '../public/css.svg';
import Tailwind from '../public/Tailwind.svg';
import SocMedBtn from '../components/SocMedBtn';


export default function Home() {
  const form = useRef();
  
  // EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    const btnLoading = document.querySelector('#load');
    const btnKirim = document.querySelector('#submit');
    const alertMessage = document.querySelector('#alert');
    btnLoading.classList.toggle('hidden');
    btnKirim.classList.toggle('hidden');

    emailjs.sendForm('service_a2w6pej', 'template_63vsmyr', form.current, 'r64VvUaQDUtl1e-ip')
      .then((result) => {
          console.log(result.text);
          btnLoading.classList.toggle('hidden');
          btnKirim.classList.toggle('hidden');
          alertMessage.classList.toggle('hidden');
          setTimeout( 
            function () { 
              alertMessage.classList.toggle('hidden');
            }, 8500 
          );
      }, (error) => {
          console.log(error.text);
      });
  };

  // Data Project Portofolio
  const dataPortofolio = [
    {
      id: 1,
      projname: "Umar's Portofolio (React Bootstrap Ver.)",
      desc: "My first and alternative portofolio website of mine.",
      link: "https://umar-portofolio.vercel.app/",
      pic: "https://cdn.discordapp.com/attachments/989301099422949466/1017093062666764438/unknown.png"
    },
    {
      id: 2,
      projname: "Waddup",
      desc: "A messenger application to help people communicate online.",
      link: "https://waddup-eta.vercel.app/",
      pic: "https://cdn.discordapp.com/attachments/989301099422949466/1001764374555410453/unknown.png"
    },
    {
      id: 3,
      projname: "SleepDisorder",
      desc: "A sleep disorder expert system to provide emergency diagnostic for users before going to the doctor.",
      link: "https://sleepdisorderexsys.000webhostapp.com/",
      pic: "https://cdn.discordapp.com/attachments/989301099422949466/1001764375700459540/unknown.png"
    },
    {
      id: 4,
      projname: "BMCalc",
      desc: "A BMI and BMR calculator to help users calculate their body mass.",
      link: "https://bmi-and-bmr-calc.vercel.app/home",
      pic: "https://cdn.discordapp.com/attachments/989301099422949466/1001764374874161187/unknown.png"
    },
  ]

  
  // For Framer motion to track scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Navbar Fixed
    window.onscroll = function() {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector('#totop');

      if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
      } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
      }
    }

    // Hamburger Script
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('hamburgeractive');
      navMenu.classList.toggle('hidden');
    });
  
    // Outside Click to close navbar Hamburger
    window.addEventListener('click', function(e){
      if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');

      }
    })

    // Dark Mode
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');
    const home = document.querySelector('#home');
    
    darkToggle.addEventListener('click', function(){
      if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        home.classList.add('herodark-bg');
        home.classList.remove('hero-bg');
      } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        home.classList.remove('herodark-bg');
        home.classList.add('hero-bg');
      }
    })
  
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      darkToggle.checked = true;
      home.classList.add('herodark-bg');
      home.classList.remove('hero-bg');
    } else {
      document.documentElement.classList.remove('dark')
      darkToggle.checked = false;
      home.classList.remove('herodark-bg');
      home.classList.add('hero-bg');
    }
    
    // AOS
    AOS.init({
      duration: 800
    });

    // Framer stuff
    
  })
  
  return (
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1.1,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
      
        <Head>
          <title>Umar's Website</title>
          <link rel="icon" href="https://cdn.discordapp.com/attachments/841587576464736266/896039768499032064/20211008_212135.jpg" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          
          <Script onLoad={() => {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          }}/>
        </Head>
        
        {/* Header Start */}

          <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
            <div className='container'>
              <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                  <a href='https://umarhaqi9.vercel.app/' className='font-bold text-lg text-sky-500 block py-6'>UmarHaqi</a>
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
                              lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none 
                              dark:bg-slate-900 dark:shadow-slate-500 lg:dark:bg-transparent'>
                    <ul className='block lg:flex'>
                      <li className='group'>
                        <a href='#home' className='text-base font-medium text-black py-2 mx-8 flex  group-hover:text-sky-500 dark:text-white'>Home</a>
                      </li>
                      <li className='group'>
                        <a href='#about' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500 dark:text-white'>About</a>
                      </li>
                      <li className='group'>
                        <a href='#portofolio' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500 dark:text-white'>Portofolio</a>
                      </li>
                      <li className='group'>
                        <a href='#skills' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500 dark:text-white'>Skills</a>
                      </li>
                      <li className='group'>
                        <a href='#contact' className='text-base font-medium text-black py-2 mx-8 flex group-hover:text-sky-500 dark:text-white'>Contact</a>
                      </li>
                      <div className=' w-48 mx-auto mt-2 pt-2 border-t border-slate-300 lg:hidden'/>
                      <li className='flex items-center mx-8 py-2'>
                        <div className='flex'>
                          <span className='mr-2 text-sm dark:text-slate-500 text-black font-semibold dark:font-normal'>Light</span>
                          <input type="checkbox" className='hidden' id='dark-toggle'/>
                          <label for="dark-toggle">
                            <div className='flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1'>
                              <div className='toggle-circle h-4 w-4 rounded-full bg-white duration-300 ease-in-out'></div>
                            </div>
                          </label>
                          <span className='ml-2 text-sm text-slate-500 dark:text-white dark:font-semibold'>Dark</span>

                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <motion.div
              className="progress-bar"
              style={{ scaleX }}
            />
          </header>

        {/* Header End */}
        
        {/* Hero Section Start */}
          <section id='home' className='pt-36 hero-bg dark:bg-slate-900'>
            <div className='container'>
              <div className='flex flex-wrap'>
                <div className='w-full self-center px-4 lg:w-1/2' data-aos="fade-right">
                  <h1 className='text-base font-semibold text-sky-500 md:text-xl'>Hey everyone 👋, I'm <span className='block font-bold text-slate-900 text-4xl mt-1 dark:text-white'>Umar Haqi</span></h1>
                  <h2 className='font-medium text-slate-500 text-lg mt-2 mb-5 lg:text-2xl'>Student & 
                  <span className='text-slate-900 dark:text-white'> Front-End Developer</span></h2>
                  <p className='font-base text-slate-500 mb-10 leading-relaxed'>
                  Welcome to my personal website. This site will provide informations about <span className='font-bold text-slate-900 dark:text-white'> myself.</span>
                  </p>

                  <a href='#contact' className='text-base font-semibold text-white bg-sky-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>
                    Contact Me
                  </a>
                </div>
                <div className='w-full self-end px-4 lg:w-1/2'>
                  <div className='relative mt-10 lg:mt-9 lg:right-0' data-aos="fade-left">
                    <img 
                      src='https://cdn.discordapp.com/attachments/989301099422949466/1017072294293672056/ppumar_1.png' 
                      alt=''
                      className='relative z-10 max-w-full mx-auto'
                    />
                    <span className='absolute -bottom-0 left-1/2 -translate-x-1/2 md:scale-125'>
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
          <section id='about' className='pt-36 pb-32 dark:bg-slate-900'>
            <div className='container'>
              <div className='flex flex-wrap'>
                <div className='w-full px-4 mb-10 lg:w-1/2' data-aos="fade-up">
                  <h4 className='font-bold uppercase text-sky-500 text-lg mb-3'>About Me</h4>
                  <h2 className='font-bold text-slate-900 text-3xl mb-5 max-w-md lg:text-4xl dark:text-white'>Introduction</h2>
                  <p className='font-small text-base text-justify text-slate-400 max-w-2xl lg:text-lg'>
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
                  <h3 className='font-semibold text-slate-900 text-2xl mb-4 lg:text-3xl lg:pt-12 dark:text-white'>Lets Start Communicating!</h3>
                  <p className='font-small text-base text-justify text-slate-400 mb-6 max-w-2xl lg:text-lg'>
                    Here are a few of my social media accounts if you want to stay in-touch.
                    I'm always open to making new friends along the way.
                  </p>
                  <div className='flex items-center'>
                    <SocMedBtn/>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        {/* About Section End */}

        {/* Portofolio Start */}

          <section id='portofolio' className='pt-36 pb-16 bg-slate-100 dark:bg-slate-800'>
            <div className='container'>
              <div className='w-full px-4' data-aos="fade-up">
                <div className='max-w-xl mx-auto text-center mb-16'>
                  <h4 className='font-semibold text-lg text-sky-500 mb-2'>Portofolio</h4>
                  <h2 className='font-bold text-black text-3xl mb-4 dark:text-white'>Newest Projects</h2>
                  <p className='font-medium text-slate-500 md:text-lg'>
                    Here are a few projects that I've recently done during my time learning about programming. 
                  </p>
                </div>
              </div>

              <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
                {dataPortofolio.map((project, i) => {
                  return(
                    <div className='mb-12 p-4 md:w-1/2' data-aos="fade-up" key={i}>
                      <div className='rounded-md shadow-md overflow-hidden hover:scale-110 duration-300 ease-in-out'>
                        <a href={project.link} target='_blank'>
                          <img 
                            src={project.pic} 
                            alt={project.projname}
                            width='w-full'
                          />
                        </a>
                      </div>
                      <h3 className='font-semibold text-xl text-black mt-5 mb-3 dark:text-white'>{project.projname}</h3>
                      <p className='font-small text-base text-slate-500 mb-5'>{project.desc}</p>
                      <a href={project.link} target='_blank' className='text-base font-semibold text-white bg-sky-500 py-2 px-8 rounded-md hover:opacity-80 hover:shadow-lg transition duration-500'>View</a>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

        {/* Portofolio End */}

        {/* Skills Start */}
          <section id='skills' className='pt-36 pb-32 bg-slate-700 dark:bg-slate-300'>
            <div className='container'>
              <div className='w-full px-4' data-aos="fade-up">
                <div className='mx-auto text-center mb-16'>
                  <h4 className='font-semibold text-lg text-sky-500 mb-2'>Skills</h4>
                  <h2 className='font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-slate-900'>Familiar Skills</h2>
                  <p className='font-medium text-slate-500 md:text-lg'>
                    I've been learning many programming languages and frameworks throughout 
                    the years during my time learning to become a Front-end developer.
                    Here are a few languages and frameworks that I'm familiar with :
                  </p>
                </div>
              </div>

              <div className='w-full px-4' data-aos="fade-up">
                <div className='flex flex-wrap items-center justify-center'>
                  <a href='https://html.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={HTMLPic}/>
                  </a>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={CSSPic}/>
                  </a>
                  <a href='https://www.javascript.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={JSPic}/>
                  </a>
                  <a href='https://tailwindcss.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={Tailwind}/>
                  </a>
                  <a href='https://getbootstrap.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={BSPic}/>
                  </a>
                  <a href='https://www.typescriptlang.org/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={TSPic}/>
                  </a>
                  <a href='https://reactjs.org/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={ReactPic}/>
                  </a>
                  <a href='https://nextjs.org/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={NextPic}/>
                  </a>
                  <a href='https://www.php.net/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={PHPPic}/>
                  </a>
                  <a href='https://ionicframework.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={IonicPic}/>
                  </a>
                  <a href='https://www.figma.com/' className='max-w-[80px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={FigmaPic}/>
                  </a>
                  <a href='https://codeigniter.com/' className='max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 lg:mx-6 xl:mx-8' target="_blank">
                    <Image src={CIPic}/>
                  </a>
                </div>
              </div>
            </div>
          </section>
        {/* Skills End */}

        {/* Contact Start */}
          <section id='contact' className='pt-36 pb-32 dark:bg-slate-900'>
            <div className='container'>
              <div className='w-full px-4' data-aos="fade-up">
                <div className='max-w-xl mx-auto text-center mb-16'>
                  <h4 className='font-semibold text-lg text-sky-500 mb-2'>Contact</h4>
                  <h2 className='font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white'>Message For Details</h2>
                  <p className='font-small text-slate-500 md:text-lg'>
                    If you are interested to know more or give a feedback, I'd be very open to it. You can contact me through here :
                  </p>
                </div>
                
                <div id='alert' className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 duration-150 ease-in-out hidden" role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Your message has been sent!</span> Be sure to check your email for replies.
                  </div>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <div className='w-full lg:w-2/3 lg:mx-auto' data-aos="fade-up">
                  <div className='w-full px-4 mb-8'>
                    <label for="name" className='text-base text-sky-500 font-bold'>Name</label>
                    <input type="text" name="user_name" id="name" className='w-full bg-slate-200 dark:bg-slate-400 text-black p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 mt-2' required/>
                  </div>
                    <div className='w-full px-4 mb-8'>
                    <label for="email" className='text-base text-sky-500 font-bold'>Email</label>
                    <input type="email" name="user_email" id="email" className='w-full bg-slate-200 dark:bg-slate-400 text-black p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 mt-2' required/>
                  </div>
                  <div className='w-full px-4 mb-8'>
                    <label for="message" className='text-base text-sky-500 font-bold'>Message</label>
                    <textarea type="text" name="message" id="message" className='w-full bg-slate-200 dark:bg-slate-400 text-black p-3 rounded-md focus:outline-none focus:ring-sky-500 focus:ring-1 focus:border-sky-500 mt-2 h-32' required/>
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
          </section>
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
                      <a href='#home' className='inline-block text-base hover:text-sky-500 mb-3'>Home</a>
                    </li>
                    <li>
                      <a href='#about' className='inline-block text-base hover:text-sky-500 mb-3'>About</a>
                    </li>
                    <li>
                      <a href='#portofolio' className='inline-block text-base hover:text-sky-500 mb-3'>Portofolio</a>
                    </li>
                    <li>
                      <a href='#contact' className='inline-block text-base hover:text-sky-500 mb-3'>Contact</a>
                    </li>
                  </ul>
                </div>
                <div className='w-full px-4 mb-12 md:w-1/3'>
                  <h3 className='font-semibold text-xl text-white mb-5'>Projects</h3>
                  <ul className='text-slate-300'>
                    <li>
                      <a href='https://waddup-eta.vercel.app/' className='inline-block text-base hover:text-sky-500 mb-3'>Waddup</a>
                    </li>
                    <li>
                      <a href='https://bmi-and-bmr-calc.vercel.app/' className='inline-block text-base hover:text-sky-500 mb-3'>BMCalc</a>
                    </li>
                    <li>
                      <a href='https://sleepdisorderexsys.000webhostapp.com/' className='inline-block text-base hover:text-sky-500 mb-3'>SleepDisorder</a>
                    </li>
                    <li>
                      <a href='https://gameboii.000webhostapp.com/' className='inline-block text-base hover:text-sky-500 mb-3'>Gameboii</a>
                    </li>
                    <li>
                      <a href='https://pti-uas-food-api.vercel.app/' className='inline-block text-base hover:text-sky-500 mb-3'>Foodies For Groupies</a>
                    </li>
                    <li>
                      <a href='https://umn.itch.io/witchahead' className='inline-block text-base hover:text-sky-500 mb-3'>WitchAhead</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full pt-10 border-t border-slate-600'>
                <div className='flex items-center justify-center mb-5'>
                  <SocMedBtn/>
                </div>
                <p className='font-small text-xs text-slate-400 text-center'>
                  Copyright © Umar Haqi 2022, made with <a href='https://nextjs.org/' target='_blank' className='font-bold text-white'>Next.js</a> and <a href='https://tailwindcss.com/' target='_blank' className='font-bold text-sky-500'>Tailwind CSS</a>
                </p>
              </div>
            </div>
          </footer>
        {/* Footer End */}

        {/* Back To Top Start */}
        <a 
          id='totop'
          href='#home' 
          className=' flex justify-center items-center fixed z-[9999] bottom-5 right-5 h-14 w-14 bg-sky-500 rounded-full p-4 hidden hover:animate-pulse hover:-translate-y-2 duration-300 ease-in-out'>
          <span className='block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2'></span>
        </a>
        {/* Back To Top End */}

      </motion.div>
  )
}
