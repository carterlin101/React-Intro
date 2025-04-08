import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const App = () => {
    return (
        <>
            <nav className="fixed w-full flex items-center justify-between bg-white">
                <div className="h-full m-4.5">
                    <img className="h-9" src="https://fs.education/src/logo.svg"></img>
                </div>
                <div className="">
                    <a className="pr-7 hover:text-gray-500" href="https://fs.education">Our Website</a>
                </div>
            </nav>
            <main className="w-screen h-screen flex justify-center items-center">
                <TypeAnimation
                    sequence={[
                        'Hello FS Fellow',
                        2000,
                        'Hello FS Web Developer',
                        2000,
                        'Hello Future Problem Solver',
                        2000,
                        'We welcome all programming enthusiasts',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-3xl md:text-5xl text-white"
                    repeat={Infinity}
                />
            </main>
        </>
    );
}