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
            image: "headshot1.jpg",
            name: "Oluwole Majiyagbe",
            job: "FullStack Developer, Monitaur.AI",
            program: "GraphQL Development",
            background: "bg-[#CCF6C5]",
            desc: "GraphQL for Beginners: Asking for What You Need"
        },
        {
            image: "headshot2.jpg",
            name: "Uchenna Nnamadim",
            job: "Senior QA Engineer, MedMe Health",
            program: "Quality Assurance & Testing",
            background: "bg-[#A0E7E5]",
            desc: "Taming Flaky Tests: From Headaches to Confidence"
        },
        {
            image: "headshot3.jpg",
            name: "Rufai Kudus",
            job: "Senior Software Engineer, Sterling Bank Ng",
            program: "Search Technologies",
            background: "bg-[#CCF6C5]",
            desc: "Vector-Powered Search: Building Intelligent Systems That Actually Understand Users"
        },
        {
            image: "headshot4.jpg",
            name: "Samuel Chinedu",
            job: "Growth and Digital Marketing Specialist",
            program: "Marketing Automation",
            background: "bg-[#FFD427]",
            desc: "The Accidental Engineer: What Marketing Automation Taught Me About Building Scalable Systems."
        },
        {
            image: "headshot5.jpg",
            name: "Adedoyinsola Adeyeye",
            job: "Product Manager, Moniepoint",
            program: "Product Management & Cloud Strategy",
            background: "bg-[#CCF6C5]",
            desc: "Beyond Features: How Systems Thinking and Cloud Strategy Are Redefining Product Management"
        },
        {
            image: "headshot6.jpg",
            name: "Adeshina Lasisi",
            job: "Senior Backend Engineer, Nomba Financial Services",
            program: "Distributed Systems",
            background: "bg-[#FFD427]",
            desc: "Building Distributed Systems with gRPC"
        },
        {
            image: "headshot7.jpg",
            name: "Cindy Shontan",
            job: "Senior Product Designer",
            program: "AI & UX Design",
            background: "bg-[#F7D6E0]",
            desc: "Designing for the Age of Agents: Creating Trustworthy Experiences with AI- Powered Interfaces"
        },
        {
            image: "headshot8.jpg",
            name: "Jesimiel Williams",
            job: "Creative and Visual Director, Stutern",
            program: "Product Development & Storytelling",
            background: "bg-[#F7D6E0]",
            desc: "Humanizing Code: How Storytelling can Build Products People Use"
        },
        {
            image: "headshot9.jpg",
            name: "Mileke Kolawole",
            job: "Cloud Engineer",
            program: "Serverless Architecture",
            background: "bg-[#A0E7E5]",
            desc: "Serverless for Startups: Accelerating Time-to-Market with GCP"
        },
        {
            image: "headshot10.jpg",
            name: "Bashir Hamza",
            job: "Senior Software Engineer",
            program: "AI Development Tools",
            background: "bg-[#F7D6E0]",
            desc: "Giving Your AI Eyes: Bringing the Power of Chrome DevTools to Your Coding Assistant using MCP."
        }
    ];

    return (
        <section className='bg-[#f0f0f0] min-h-screen pt-20 relative' id='speakers'>
            <div className='  general-space flex flex-col  rounded-t-[10rem]'>

                <DoodleBg color='#1e1e1e' opacity={0.06} />

                <TitleHead title='Speaker' />


                <div className="flex overflow-x-visible overflow-y-hidden max-md:py-5 gap-5 md:gap-10 pb-16 w-full -mt-10">
                    {speakerCards.map((item: any, i: number) => (
                        <div
                            className={`${item.background} max-md:h-fit p-3 border-3 border-[#1e1e1e] rounded-lg relative max-md:min-w-[80vw] max-md:w-full max-md:max-w-full md:min-w-[400px] md:max-w-sms`}
                            key={i}
                        >
                            <Image
                                src={`/${item?.image}`}
                                alt={item?.name}
                                width={1000}
                                height={1000}
                                className="w-full min-h-[300px] max-h-[301px] md:min-h-[400px] md:max-h-[401px] object-cover object-top border-3 border-[#1e1e1e] rounded-sm"
                            />

                            <div className="flex justify-between">
                                <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e]" />
                                <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e]" />
                            </div>



                            <div className="bg-[#f0f0f0] p-3 shadow flex flex-col gap-3 rounded-lg border-3 border-[#1e1e1e]">
                                <h3 className="text-2xl font-semibold">{item?.name}</h3>
                                <em className="text-right text-[#444] text-sm font-medium line-clamp-2 ">~ {item?.job}</em>

                                <p className='pt-3 font-mono text-sm'> <span className='font-bold'>
                                    TITLE: </span> {item?.desc}</p>
                            </div>

                            {/* <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -top-5 -left-3" />
                            <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -top-5 -right-3" />
                            <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -bottom-5 -left-3" />
                            <div className="bg-[#f0f0f0] size-5 border-2 border-[#1e1e1e] absolute -bottom-5 -right-3" /> */}
                        </div>
                    ))}
                </div>




                {/* <CustomButton
                    label="Apply to speak"
                    icon={<Microphone size="24" color="#EA4335" className='text-purple-400' />}
                    className="px-4 py-3 text-white bg-black mx-auto mb-10 hover:bg-[#374151] hover:text-gray-200"
                    disabled={true}
                /> */}

            </div>
        </section>
    )
}

export default Speaker