import { useEffect } from 'react'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Form from './Form.js'


export default function Layout({children}){
    useEffect(() => {
        Aos.init({duration: 1000, dataAosOnce: true})
    }, [])
    return (
        <div id='top' className="font-sans bg-cyan-300 font-manrope font-light">
            <nav className='bg-cyan-300 text-gray-700 shadow-lg'>
                    <div data-aos='fade-left' className="container mx-auto">
                        <div className="flex justify-around">
                        <a className="sm:text-m md:text-3xl font-bold p-3">billy moroney</a>
                        <ul className="sm:text-s sm:p-1 md:space-x-10 sm:self-center md:text-xl">
                            <li className="hover:text-rose-500 inline border-4 border-gray-600 rounded-xl p-2 transition duration-400 ease-in-out">
                                <Link href='https://portfolio.billymoroney1.vercel.app/#projects'>projects</Link>
                            </li>
                            <li className="inline border-4 border-gray-600 hover:text-rose-500 rounded-xl p-2">
                                <a href='/resume.pdf'>resume</a>
                            </li>
                            <li className="hover:text-rose-500 inline border-4 border-gray-600 rounded-xl p-2">
                                <Link href='https://portfolio.billymoroney1.vercel.app/#contact'>contact</Link>
                            </li>
                        </ul>
                            
                    </div>
                </div> 
            </nav>
            
            <div className='w-full opacity-85 bg-cyan-100 flex flex-col space-y-32 items-center justify-around text-xl'>
                {/* <h1 className='font-extrabold text-center text-4xl pb-6'>About Me</h1> */}
                    <p data-aos="fade-up" className='sm:w-4/5 md:w-3/5 text-black md:text-3xl p-8 mt-32 mb-32 bg-rose-600 rounded-xl text-gray-100'>I'm a full-stack software engineer in Chicago with a background in music, writing, and teaching. I fell in love with coding because it gives me opportunities to solve difficult problems and be creative every day.</p>
                    <div data-aos="fade-up" className="w-full h-40 bg-rose-600 text-gray-100 shadow-lg flex items-center justify-around align-middle font-extrabold text-center text-4xl">
                    <span>About Me</span>
                    </div>
                    <div data-aos="fade-up" className="md:grid md:gap-3 md:grid-cols-2 md:text-2xl sm:w-full md:w-3/5 md:m-12 md:justify-items-center md:items-center sm:text-center">
                        <div className='flex justify-around'>
                            <img src='/profile.png' className='rounded-xl' style={{height: '300px', width: '300px'}} />
                        </div>
                        <p className='text-black align-middle m-4'>I learned some Java in high school, started working extensively with visual/audio programming tools like Max and Reactor in college, and was motivated by those interests to learn full-stack development at General Assembly.</p>
                    </div>
                    <hr data-aos="fade-up" className='border-12 border-gray-900 w-3/5'></hr>
                    <div data-aos="fade-up" className="md:grid md:gap-3 md:grid-cols-2 md:text-2xl w-3/5 md:m-12 justify-items-center items-center pb-32">
                        <p className='pt-8 pb-8 text-2xl text-center'>I also make <a href='https://billymoroney.bandcamp.com/releases' className='text-cyan-500' target='_blank'>music</a></p>
                        <img src='/assistant.jpeg' className='rounded-xl' style={{height: '300px', width: '275px'}} />
                    </div>
            </div>
            <div id='projects' data-aos="fade-up" className='flex flex-col space-y-6 pb-6'>
                <div className="w-full h-40 bg-rose-600 text-gray-100 shadow-lg flex items-center justify-around align-middle font-extrabold text-center text-4xl">
                    <span>Projects</span>
                </div>
                <div className="container mx-auto w-4/5 flex flex-col space-y-6">
                    {children}
                </div>
            </div>
            <div id='contact'>
                <Form />
            </div>
            <footer data-aos="fade-up" id='contact' className="w-full bg-rose-600 text-white text-xl flex flex-col items-center">
                <div className="container mx-auto flex justify-around items-center">
                    <ul className="pt-12 pb-12 space-x-10 self-center text-l">
                        <li className="animate-pulse inline-block rounded-xl p-2">
                            <a href='https://github.com/billymoroney1' target='_blank'><img src='/github.png' style={{width: '50px', height: '50px'}}/></a>
                        </li>
                        <li className="animate-pulse inline-block rounded-xl p-2">
                            <a href='https://www.linkedin.com/in/william-moroney-b43044138/' target="_blank" download><img src='/linkedin.png' style={{width: '50px', height: '50px'}}/></a>
                        </li>
                    </ul>
                </div>
                <a href='https://portfolio.billymoroney1.vercel.app/#top' className='pb-7'>Top</a>
            </footer>
        </div>
    )
}