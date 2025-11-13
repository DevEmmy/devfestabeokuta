import React from 'react'

import Image from 'next/image'


type TitleHead = {
    title?: string,
}

const TitleHead = ({ title }: TitleHead) => {
    return (
        <div className='mb-10'>
            <div className="flex items-center justify-between">
                <div>
                    {
                        title ?

                            <h3 className=' text-gray-800 [#1e1e1e] text-4xl sm:text-5xl md:text-6xl lg:text-[78px] leading-tight sm:leading-[40px] font-bold text-center '>
                                {title}
                            </h3>
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
                    <h3 className='md:text-4xl font-medium'>
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
        </div>
    )
}

export default TitleHead