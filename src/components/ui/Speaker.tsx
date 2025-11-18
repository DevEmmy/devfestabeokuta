import React from 'react'
import TitleHead from './TitleHead';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { Calendar, Microphone } from 'iconsax-react';
import DoodleBg from './DoodleBg';
import ComingSoonMask from './ComingSoonMask';

const Speaker = () => {


    const speakerCards = [
        {
            image: "speaker1.jpg",
            name: "Olaosebikan emmy",
            job: "gdg lead",
            program: "Innovation Hub",
            background: "bg-[#FF7DAF]",
            desc: "A space where brilliant minds come together to create, learn, and build the future."
        },
        {
            image: "speaker2.jpg",
            name: "Olagoke Oyetunji",
            job: "gdg lead",
            program: "Tech Conference",
            background: "bg-[#FFD427]",
            desc: "Experience the energy of technology, collaboration, and groundbreaking ideas."
        },
        {
            image: "speaker3.jpg",
            name: "Abolade ilerioluwa",
            job: "gdg lead",
            program: "Developer Meetup",

            background: "bg-[#CCF6C5]",
            desc: "Connect with passionate developers, share insights, and grow together."
        }
    ];

    return (
        <section className='bg-[#f0f0f0] min-h-screen pt-20 relative' id='speakers'>
            <div className='  general-space flex flex-col gap-36  rounded-t-[10rem]'>

                <DoodleBg color='#1e1e1e' opacity={0.06} />

                <TitleHead title='Speaker' />


                <ComingSoonMask>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 max-md:gap-20'>
                        {
                            speakerCards.map((item: any, i: number) => (
                                <div className={`${item.background} p-3 max-md:mb-7 border-3 border-[#1e1e1e] rounded-lg relative ${i > 0 && 'max-md:hidden'}`} key={i}>
                                    <Image src={`/${item?.image}`} alt='item.name' width={1000} height={1000} className='w-full h-fit border-3 border-[#1e1e1e] rounded-sm' />


                                    <div className="flex justify-between">
                                        <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e]' />

                                        <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e]' />
                                    </div>

                                    <div className='bg-[#f0f0f0] rounded-lg border-3 border-[#1e1e1e] font-semibold w-fit p-3 absolute -top-10 translate-x-1/3 '>
                                        {item?.name}
                                        <div className='text-right text-[#444] text-sm font-medium'>
                                            ~ {item?.job}
                                        </div>
                                    </div>

                                    <div className='bg-[#f0f0f0] p-3 shadow flex flex-col gap-3 rounded-lg border-3 border-[#1e1e1e]'>
                                        <h3 className='text-2xl font-semibold'>{item?.program}</h3>
                                        <p>{item?.desc}</p>
                                    </div>


                                    <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -top-5 -left-3' />

                                    <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -top-5 -right-3' />

                                    <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -bottom-5 -left-3' />

                                    <div className='bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -bottom-5 -right-3' />
                                </div>
                            ))
                        }
                    </div>
                </ComingSoonMask>



                <CustomButton
                    href="#schedule"
                    label="Apply to speak"
                    icon={<Microphone size="24" color="#EA4335" className='text-purple-400' />}
                    className="px-4 py-3 text-white bg-black mx-auto mb-10 hover:bg-[#374151] hover:text-gray-200"
                />

            </div>
        </section>
    )
}

export default Speaker