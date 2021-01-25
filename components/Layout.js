import Link from 'next/link'


export default function Layout({children}){
    return (
        <div className="font-sans">
            <nav className='bg-gray-900 text-gray-200 shadow-lg'>
                    <div className="container mx-auto">
                        <div className="flex justify-around">
                        <a className="text-3xl font-bold p-3">billy moroney</a>
                        <ul className="space-x-10 sm:self-center text-xl border-t sm:border-none">
                            <li className="hover:text-green-500 sm:inline-block">
                                <Link href='/'>home</Link>
                            </li>
                            <li className="hover:text-green-400 sm:inline-block">
                                <Link href='/contact'>contact</Link>
                            </li>
                        </ul>
                            
                    </div>
                </div> 
            </nav>
            
            <div className='w-full opacity-85 bg-cyan flex flex-col items-center justify-around text-xl p-20'>
                <h1 className='font-extrabold text-center text-4xl pb-6'>About Me</h1>
                <p className='w-2/5 text-black'>I'm a full-stack software engineer with a background in music, writing, and teaching. I fell in love with coding because it gives me opportunities to solve difficult problems and be creative every day.</p>
            </div>
            <div className='flex flex-col space-y-6 pb-6'>
                <div className="w-full h-40 bg-black text-white shadow-lg flex items-center justify-around align-middle font-extrabold text-center text-4xl">
                    <span>Projects</span>
                </div>
                <div className="container mx-auto w-4/5 flex flex-col space-y-6">
                    {children}
                </div>
            </div>
            <footer className="w-full bg-black text-white text-xl">
                <div className="container mx-auto flex justify-around items-center">
                    <ul className="pt-12 pb-12 space-x-10 self-center text-l">
                        <li className="inline-block">
                            <a href='https://github.com/billymoroney1' target='_blank'>Github</a>
                        </li>
                        <li className="inline-block">
                            <a href='/resume.pdf'>Resume</a>
                        </li>
                        <li className="inline-block">
                            <a href='https://www.linkedin.com/in/william-moroney-b43044138/' target="_blank" download>Linkedin</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}