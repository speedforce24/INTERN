'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import 'animate.css/animate.min.css';

const AdvertBar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [showFirst, setShowFirst] = useState<boolean>(true);
    const [animationClass, setAnimationClass] = useState<string>('animate__bounceIn');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPrevScrollPos(window.pageYOffset);

            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                const isVisibleNew = currentScrollPos < prevScrollPos;
                setIsVisible(isVisibleNew);
                setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [prevScrollPos]);

    useEffect(() => {
        const cycleAnimation = () => {
            setAnimationClass('animate__bounceIn');

            setTimeout(() => {
                setShowFirst((prevShowFirst) => !prevShowFirst);
                setAnimationClass('animate__bounceIn');
            }, 1000);

            setTimeout(() => {
                setAnimationClass('animate__bounceInLeft');
            }, 4000);
        };

        const interval = setInterval(cycleAnimation, 2000);

        cycleAnimation();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fixed bg-green-600 text-white ${isVisible ? 'top-0' : 'bottom-0'} h-[60px] w-full z-1`}>
            <div className="flex flex-col sm:flex-row items-center justify-between h-[60px] p-2">
                <div className="flex items-center">
                    {showFirst ? (
                        <div className={`flex ${animationClass}`}>
                            <button className="button3 animate__animated animate__bounceIn">Fast Delivery</button>
                            <p className="ml-3 animate__animated animate__bounceInRight">To Benin, Lagos, Onitsha, Ibadan...</p>
                        </div>
                    ) : (
                        <p className={`animate__animated animate__bounceInLeft ${animationClass} text-left ml-3`}>To Benin, Lagos, Onitsha, Ibadan, Port Harcourt, Abuja, Kano, Uyo, Jos, Enugu</p>
                    )}
                </div>
                <div className="flex items-center justify-end mt-2 sm:mt-0">
                    <Image src="/img/call_pic2.png" alt="Call now" width={90} height={90} />
                    <Image src="/img/call_bg.png" alt="Advert" className="ml-10 sm:ml-0" width={290} height={290} />
                </div>
            </div>
        </div>
    );
};

export default AdvertBar;
