import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

export const App = () => {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

const Home = () => {
    return (
        <>
        <nav className="fixed w-full flex items-center justify-between bg-white">
            <div className="h-full m-4">
                <Link to="/">
                    <img className="h-9" src={`${process.env.FS_LINK}/src/logo.svg`} alt="FS Logo" />
                </Link>
            </div>
            <div>
                <Link to="/threejs" className="pr-7 hover:text-gray-500">ThreeJS</Link>
                <a className="pr-7 hover:text-gray-500" href={`${process.env.FS_LINK}`}>
                    Our Website
                </a>
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
                className="text-3xl md:text-5xl text-white text-center"
                repeat={Infinity}
            />
        </main>
        </>
    );
};