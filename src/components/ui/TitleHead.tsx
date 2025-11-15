import React from 'react'

import Image from 'next/image'
import { div } from 'framer-motion/client'


type TitleHead = {
    title?: string,
}

const TitleHead = ({ title }: TitleHead) => {
    return (
        <div className='mb-10'>
            <div className="flex items-center justify-between relative">
                <div>
                    {
                        title ?

                            <div className='relative'>
                                <h3 className=' text-gray-800 [#1e1e1e] z-99 text-4xl sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center '>
                                    {title}


                                </h3>

                            </div>
                            :

                            <Image
                                src='/./devfest-2025.png'
                                alt='DevFest Logo'
                                width={100}
                                height={100}
                                className='h-12 md:w-[250px] xl:w-[350px] sm:h-12 object-cover'
                                unoptimized
                            />
                    }
                </div>

                <div className='flex items-center  gap-10'>
                    <h3 className='md:text-4xl font-medium max-lg:hidden'>
                        Gdg abeokuta
                    </h3>

                    <div className='bg-white border-3 border-[#1e1e1e] /80 rounded-full p-3 shadow flex items-center '>

                        <Image
                            src='/./avatar-c1.png'
                            alt='DevFest Logo'
                            width={100}
                            height={100}
                            className='h-12 md:w-[250px] xl:w-[350px] sm:h-12 object-cover'
                            unoptimized
                        />

                    </div>
                </div>

            </div>

            <Image
                src='/./glyph.svg'
                alt='glyph'
                width={60}
                height={100}
                className=' h-12 md:w-[78px] xl:w-[120px] sm:h-12 object-cover  rotate-180 -mt-7 xl:-mt-12 ml-10'
                unoptimized
            />



        </div>
    )
}

export default TitleHead