import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const OrbitalAnimation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const orbits = [
        {
            radius: 140, speed: 1, items: [
                { angle: 0, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop' },
                { angle: 180, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop' }
            ]
        },
        {
            radius: 220, speed: 0.7, items: [
                { angle: 90, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop' },
                { angle: 270, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop' }
            ]
        },
        {
            radius: 300, speed: 0.5, items: [
                { angle: 45, image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop' }
            ]
        }
    ];

    const GoogleLogo = () => (
        <Image src={'/dgc-lockup.png'} width={1000} height={1000} alt='google' className='' />
    );

    return (
        <div className="relative bg-[#1e1e1e] w-4xl h-4xl   ">
            <div className="relative ">
                {/* Center Google Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-24 h-24 rounded-full p-3 bg-black -800 border-4 border-yellow-600 flex items-center justify-center shadow-lg">
                        <GoogleLogo />
                    </div>
                </div>

                {/* Orbital rings and items */}
                {orbits.map((orbit, orbitIndex) => (
                    <div key={orbitIndex} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* Orbit ring */}
                        <div
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-yellow-600  `}
                            style={{
                                width: `${orbit.radius * 2}px`,
                                height: `${orbit.radius * 2}px`
                            }}
                        />

                        {/* Orbiting items */}
                        {orbit.items.map((item, itemIndex) => {
                            const currentAngle = (rotation * orbit.speed + item.angle) * (Math.PI / 180);
                            const x = Math.cos(currentAngle) * orbit.radius;
                            const y = Math.sin(currentAngle) * orbit.radius;

                            return (
                                <div
                                    key={itemIndex}
                                    className="relative  transition-transform"
                                    style={{
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                                    }}
                                >
                                    <div className="w-16 h-16 rounded-full border-4 border-yellow-600 overflow-hidden shadow-xl bg-gray-800">
                                        <img
                                            src={item.image}
                                            alt={`Orbit ${orbitIndex} Item ${itemIndex}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrbitalAnimation;