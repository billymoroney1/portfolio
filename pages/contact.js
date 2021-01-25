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
                            <li className="hover:text-rose-500 inline border-4 border-gray-600 rounded-xl p-2">
                                <Link href='/contact'>contact</Link>
                            </li>
                        </ul>
                            
                    </div>
                </div> 
            </nav>
                <Form />
            </div>
    )
}