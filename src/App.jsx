import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation'; 
import { useState } from 'react';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


export const App = () => {
    return <Hangman />
    // return <CardGrid />
};


const Hangman = () => {
    const lives = 7;
    const dictionary = ["word", "super", "apple", "function", "things"]

    const getRandomWord = () => {
        const rIdx= Math.floor(Math.random() * dictionary.length);
        return dictionary[rIdx];
    }

    const getGuessUnderScores = (word) => {
        return Array(word.length).fill("_")
    }


    const rWord = getRandomWord();

    const [Guess, setGuess] = useState(getGuessUnderScores(rWord));
    const [chosenWord ,setChosenWord] = useState(rWord);
    const [tries, setTries] = useState(lives);       
    const [input, setInput] = useState("");

    const didWin = () => {
        return !Guess.includes("_");
    }

    const isGameOngoing = () => {
        return (tries > 0 && !didWin());
    }



        const retry = () => {
            const newRWord = getRandomWord();
            setChosenWord(newRWord);
            setGuess(getGuessUnderScores(newRWord));
            setTries(lives);
            setInput('');
        }


    const handleSubmit = () => {
        
        let inputInWord = false
        let guessCopy = [...Guess];
        for (let i = 0; i < chosenWord.length; i++){
            if (input == chosenWord[i]){
                guessCopy[i]=input;
                inputInWord = true;
            }
        }
        setGuess(guessCopy);

        if (!inputInWord) {
            setTries(tries => tries-1)
        }
    }


    const handleInputChange =(event) => {
        const value = event.target.value;
        setInput(value.length > 0? value[value.length -1] : "")
    }

    const gameOngoing = isGameOngoing();

    const { width, height } = useWindowSize()

    return (
        <div className='flex flex-col justify-center items-center h-100'>
            {didWin() && <Confetti width={width} height={height} />}
            
            <span className='text-3xl text-white'>Tries: {tries}</span>
            <span className='text-5xl text-white'>{Guess.join(" ")}</span>
            <input
            value={input}
            onChange={handleInputChange}
             className="border-2 text-white border-white rounded-md p-2 mt-5" placeholder="Type Answer Here"type='text'></input>
            <button 
            onClick={() => gameOngoing ? handleSubmit() :retry() }
             className='bg-white text-black   rounded-md  px-4 py-2 mt-5'>{gameOngoing ? "Submit" : "Retry"}</button>
        </div>
    );
}



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
        <div className="grid md:grid-cols-3 grid-cols-1">
            <div></div>
            <h1 className=" text-center h-30 text-5xl text-blue-300">Buffet</h1>
            <div></div>
            <Card name="Pizza" className="flex justify-center" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfUO3pBjHc4KSbs3aTVlnzarw4ubqbps94A-aOaJhcTqEeqU0zjwzi1bFh3w8ueXoY0IxzOcz9qDcfu_lbz87k6_pa5uqZ8lTtwCsfFOc" cost="$11.99" description="Sauce on bread with cheese"/>
            <Card name="Chicken wing" image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxrkX3cJulVJnGzbKV6CwCEVB0KcOhoEt2CORfV9WZm76YQJGG1Hjn_hBbNTKl-tBBSSuHwXo" cost="$7.99" description="A Chicken wing"/>
            <Card name="fried rice" image="https://therecipecritic.com/wp-content/uploads/2019/08/easy-fried-rice-4.jpg" cost="$5.99" description="brown rice with vegetables"/>
        </div>
    );
}

const Card = ({ name, image, cost, description }) => {
    return( 
        
        <div className="flex rounded-md justify-center bg-gray-200 text-center items-center flex-wrap h-auto w-6/7 px-10 py-3  m-10">
            <img src={image} style={{width: "300px", height: "200px", objectFit: "fill", border: "2px solid rgb(207, 114, 14)"}}/>
            <h1 className="font-semibold w-full">{name}</h1>
            <div className=" w-full">{description}</div>
            <div className=" w-full" >{cost}</div>
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