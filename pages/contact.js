import Link from 'next/link'
import Form from '../components/Form.js'

export default function Contact() {
    return (
        <div>
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
                <Form />
            </div>
    )
}