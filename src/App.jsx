import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation'; 
import { useState } from 'react';


// const config = require("../shared/config");

export const App = () => {
    const lives = 7;
    const dictionary = ["word", "super", "apple", "function", "things"]

    const [correctGuess, setCorrectGuess] = useState([]);
    const [guess ,setGuess] = useState("");
    const [tries, setTries] = useState(lives);

    return (
        <div className='flex flex-col justify-center items-center h-100'>
            <span className='text-3xl text-white'>Tries:7</span>
            <span className='text-5xl text-white'>_ _ _ _</span>
            <input className="border-2 text-white border-white rounded-md p-2 mt-5" placeholder="Type Answer Here"type='text'></input>
            <button className='bg-white text-black   rounded-md  px-4 py-2 mt-5'>Submit</button>
        </div>
    );
};




// const OldApp = () => {
//     return (
//         const [counter, setCounter] = useState(0);
//         const [dark, setDark] = useState(false);

//         const darkModeHandler = () => {  
//             setDark(!dark);
//             document.body.classList.toggle('dark');
//         };

//         return (
//             <div className='flex justify-center items-center'>
//                 <span className="text-3xl">{counter}</span>
//                 <button 
//                     className='p-5 bg-white dark:bg-black dark:text-white rounded-xl'
//                     onClick={() => setCounter(counter + 1)}>Count the pixels
//                 </button>



//                 <button 
//                     className='p-5 bg-white dark:bg-black dark:text-white rounded-xl'
//                     onClick={() => darkModeHandler(dark)}>Change Mode
//                 </button>
//             </div>

       

//         // <Router>

//         //     <Routes>
//         //         <Route path="/" element={<Home />} />
//         //     </Routes>
//         // </Router>
//     );
// }


const CardGrid = () => {
    return (
        <div className="grid grid-cols-3 ">
            <div></div>
            <h1 className=" text-center h-30 text-5xl text-blue-300">Buffet</h1>
            <div></div>
            <Card name="Pizza" className="flex justify-center" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfUO3pBjHc4KSbs3aTVlnzarw4ubqbps94A-aOaJhcTqEeqU0zjwzi1bFh3w8ueXoY0IxzOcz9qDcfu_lbz87k6_pa5uqZ8lTtwCsfFOc" cost="$11.99" description="Sauce on bread with cheese"/>
            <Card name="Chicken wing" image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxrkX3cJulVJnGzbKV6CwCEVB0KcOhoEt2CORfV9WZm76YQJGG1Hjn_hBbNTKl-tBBSSuHwXo" cost="$7.99" description="A Chicken wing"/>
            <Card name="Cool Aid" image="data:image/jpeg;base64,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" cost="Free.99" description="JK just lemonade lol"/>
        </div>
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

export default App;