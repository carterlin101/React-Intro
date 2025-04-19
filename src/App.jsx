import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

export const App = () => {
    return (
        
    
        <div className="grid grid-cols-3">
        <h1 className="text-center text-5xl text-blue-300">Buffet</h1>
        <Card name="Pizza" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfUO3pBjHc4KSbs3aTVlnzarw4ubqbps94A-aOaJhcTqEeqU0zjwzi1bFh3w8ueXoY0IxzOcz9qDcfu_lbz87k6_pa5uqZ8lTtwCsfFOc" cost="$11.99" description="Sauce on bread with cheese"/>
        <Card name="Chicken wing" image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxrkX3cJulVJnGzbKV6CwCEVB0KcOhoEt2CORfV9WZm76YQJGG1Hjn_hBbNTKl-tBBSSuHwXo" cost="$7.99" description="A Chicken wing"/>
        <Card name="Kool Aid" image="https://tinyurl.com/42a2p4ku" cost="Free.99" description="Kool-Aid is a popular powdered beverage mix brand owned by Kraft Heinz. It comes in various flavors and is typically mixed with water and sugar to make a sweet, refreshing drink. Kool-Aid also has a liquid version, offering a ready-to-drink option. However, overdose on Kool-aid may lead to death"/>
        </div>

        // <Router>

        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //     </Routes>
        // </Router>
    );
}


const Card = ({ name, image, cost, description }) => {
    return( 
        
        <div 
            className="#"
        >
            <h1>{name}</h1>
            <img src={image} style={{width: "200px", height: "200px", objectFit: "fill", border: "2px solid #65ada9"}}/>
            <div>{cost}</div>
            <div>{description}</div>
        </div>
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