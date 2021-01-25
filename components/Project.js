import React, {useState} from 'react'
import Image from 'next/image'

export default function Form(props){
    const [click, setClick] = useState(false)

    return(
        <div className="bg-gray-300 rounded-md shadow-md sm:flex sm:flex-col md:inline-grid md:grid-cols-2 md:grid-rows-6">
            <div className="row-span-4 self-center ml-5 mt-5">
                <Image 
                    src={props.img}
                    alt='project 1'
                    width={512}
                    height={280}
                />
            </div>
            
            <p className='text-center self-center text-3xl'>{props.name}</p>
            <p className='row-span-2 col-span-2 row-start-5 self-center ml-10 mr-10'>{props.info}</p>
            <ul className='self-center text-center text-2xl'>
                <li className='inline-block px-6 bg-gray-200 text-black ml-3 mr-3 rounded-full py-3 px-6 hover:bg-cyan-400'>    
                    <button className='border-3 border-gray-800'><a href={props.git} target='_blank'>Github</a></button>
                </li>
                <li className='inline-block px-6 bg-gray-200 border-3 border-gray-800 text-black ml-3 mr-3 rounded-full py-3 px-6 hover:bg-cyan-400'>
                    <button className='border-3 border-gray-800'><a href={props.deployed} target='_blank'>Try It</a></button>
                </li>
            </ul>

            <ul className='self-center text-center row-span-2'>
                {props.technologies.map((t) => {
                    return <Image
                        src={'/' + t + '.png'}
                        alt={t}
                        width={75}
                        height={75}
                        />
                })}
            </ul>
        </div>
    )
}