import Link from 'next/link'
import Image from 'next/image'


export default function Layout({children}){
    return (
        <div className="font-sans bg-cyan-300">
            <nav className='bg-cyan-300 text-gray-700 shadow-lg'>
                    <div className="container mx-auto">
                        <div className="flex justify-around">
                        <a className="text-3xl font-bold p-3">billy moroney</a>
                        <ul className="space-x-10 sm:self-center text-xl sm:border-none">
                            <li className="hover:text-rose-500 inline border-4 rounded-xl p-2">
                                <Link href='/'>home</Link>
                            </li>
                            <li className="hover:text-rose-500 inline border-4 rounded-xl p-2">
                                <Link href='/contact'>contact</Link>
                            </li>
                        </ul>
                            
                    </div>
                </div> 
            </nav>
            
            <div className='w-full opacity-85 bg-teal-100 flex flex-col items-center justify-around text-xl p-20'>
                {/* <h1 className='font-extrabold text-center text-4xl pb-6'>About Me</h1> */}
                    <img src='http://placekitten.com/300/300' className='rounded-3xl' />
                    <p className='md:w-3/5 text-black pt-8'>I'm a full-stack software engineer in Chicago with a background in music, writing, and teaching. I fell in love with coding because it gives me opportunities to solve difficult problems and be creative every day.</p>
                    <p className='md:w-2/5 text-black pt-8'>I coded some Java in high school, fell in love with visual/audio programming tools like Max and Reactor, and was motivated by those interests to learn full-stack development at General Assembly.</p>
                    <p className='pt-8'>I also make <a href='https://billymoroney.bandcamp.com/releases' className='text-cyan-500' target='_blank'>music</a></p>
            </div>
            <div className='flex flex-col space-y-6 pb-6'>
                <div className="w-full h-40 bg-rose-500 text-white shadow-lg flex items-center justify-around align-middle font-extrabold text-center text-4xl">
                    <span>Projects</span>
                </div>
                <div className="container mx-auto w-4/5 flex flex-col space-y-6">
                    {children}
                </div>
            </div>
            <footer className="w-full bg-rose-600 text-white text-xl">
                <div className="container mx-auto flex justify-around items-center">
                    <ul className="pt-12 pb-12 space-x-10 self-center text-l">
                        <li className="inline-block border-4 border-cyan-500 border-opacity-70 hover:border-opacity-100 rounded-xl p-2">
                            <a href='https://github.com/billymoroney1' target='_blank'>Github</a>
                        </li>
                        <li className="inline-block border-4 border-cyan-500 border-opacity-70 hover:border-opacity-100 rounded-xl p-2">
                            <a href='/resume.pdf'>Resume</a>
                        </li>
                        <li className="inline-block border-4 border-cyan-500 border-opacity-70 hover:border-opacity-100 rounded-xl p-2">
                            <a href='https://www.linkedin.com/in/william-moroney-b43044138/' target="_blank" download>Linkedin</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}