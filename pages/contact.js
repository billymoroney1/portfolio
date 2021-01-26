import Link from 'next/link'
import Form from '../components/Form.js'

export default function Contact() {
    return (
        <div className="font-sans bg-cyan-300 font-manrope font-light">
            <nav className='bg-cyan-300 text-gray-700 shadow-lg'>
                    <div className="container mx-auto">
                        <div className="flex justify-around">
                        <a className="text-3xl font-bold p-3">billy moroney</a>
                        <ul className="space-x-10 sm:self-center text-xl sm:border-none">
                            <li className="hover:text-rose-500 inline border-4 border-gray-600 rounded-xl p-2">
                                <Link href='/'>home</Link>
                            </li>
                            <li className="inline border-4 border-gray-600 hover:text-rose-500 rounded-xl p-2">
                                <a href='/resume.pdf'>resume</a>
                            </li>
                            <li className="hover:text-rose-500 inline border-4 border-gray-600 rounded-xl p-2">
                                <Link href='/contact'>contact</Link>
                            </li>
                        </ul>
                            
                    </div>
                </div> 
            </nav>
                <Form />
            <footer className="w-full bg-rose-600 text-white text-xl">
                <div className="container mx-auto flex justify-around items-center">
                    <ul className="pt-12 pb-12 space-x-10 self-center text-l">
                        <li className="inline-block rounded-xl p-2">
                            <a href='https://github.com/billymoroney1' target='_blank'><img src='/github.png' style={{width: '50px', height: '50px'}}/></a>
                        </li>
                        <li className="inline-block rounded-xl p-2">
                            <a href='https://www.linkedin.com/in/william-moroney-b43044138/' target="_blank" download><img src='/linkedin.png' style={{width: '50px', height: '50px'}}/></a>
                        </li>
                    </ul>
                </div>
            </footer>
            </div>
    )
}