import React from 'react'
import TitleHead from './TitleHead';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { Calendar, Microphone } from 'iconsax-react';

const Speaker = () => {

    const IconsaxPattern =
        "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23000' stroke-opacity='0.10' stroke-width='2' fill='none'%3E%3Crect x='10' y='10' width='25' height='25' rx='5'/%3E%3Cpath d='M60 15c10 10 10 30 0 40-10-10-10-30 0-40z'/%3E%3Ccircle cx='120' cy='25' r='12'/%3E%3Cpath d='M160 10l15 15-15 15-15-15z'/%3E%3Cpath d='M20 70l15 15 15-15'/%3E%3Cpath d='M80 60h20M90 50v20'/%3E%3Crect x='130' y='55' width='30' height='18' rx='3'/%3E%3Ccircle cx='175' cy='70' r='10'/%3E%3Cpath d='M20 120h25v25H20z'/%3E%3Cpath d='M70 120l20 10-20 10z'/%3E%3Cpath d='M110 110l10 20-20 10z'/%3E%3Ccircle cx='150' cy='120' r='12'/%3E%3Cpath d='M180 110h10v25h-10z'/%3E%3Cpath d='M30 160c10-15 30-15 40 0'/%3E%3Ccircle cx='95' cy='165' r='8'/%3E%3Cpath d='M130 150l15 15-15 15-15-15z'/%3E%3Cpath d='M165 150h25'/%3E%3Ccircle cx='185' cy='175' r='6'/%3E%3C/g%3E%3C/svg%3E\")";


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
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: IconsaxPattern,
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                    }}
                />
                <TitleHead title='Speaker' />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        speakerCards.map((item: any, i: number) => (
                            <div className={`${item.background} p-3 max-md:mb-7 border-3 border-[#1e1e1e] rounded-lg relative`} key={i}>
                                <Image src={`/./${item?.image}`} alt='item.name' width={1000} height={1000} className='w-full h-fit border-3 border-[#1e1e1e] rounded-sm' />


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

                <CustomButton
                    href="#schedule"
                    label="Apply to speak"
                    icon={<Microphone size="24" color="#EA4335" className='text-purple-400' />}
                    className="px-4 py-3 text-white mx-auto mb-10"
                />

            </div>
        </section>
    )
}

export default Speaker