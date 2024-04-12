import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Types(props) {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [timerRunning, setTimerRunning] = useState(false);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        let interval = null;

        if (timerRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        clearInterval(interval);
                        setDisplayMessage(true);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timerRunning, minutes, seconds]);

    const handleClickStart = () => {
        setTimerRunning(true);
    };

    const handleClickStop = () => {
        setTimerRunning(false);
    };

    const handleClickRestart = () => {

        setMinutes(25);
        setSeconds(0);
        setDisplayMessage(false);
        setTimerRunning(false);

    }




    return (

        <div className="container bg-red-500 border border-red-500 rounded p-40 max-h-40 mx-auto w-2/5 h-32 relative">
            <div className="container mt-1 mx-auto absolute top-0 left-0 flex justify-center">
                <div>
                    <div className="hover:bg-red-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"></div>
                    <div className="">
                        <div className="flex justify-center flex-col font-bold text-9xl text-white px-">
                            {timerMinutes}:{timerSeconds}
                            <div className="text-5xl flex flex-row py-6 px-3 space-x-6">
                                <button className="hover:bg-red-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => handleClickStart()}>Start</button>
                                <button className="hover:bg-red-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => handleClickStop()}>Stop</button>
                                <button className="hover:bg-red-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => handleClickRestart()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>

                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );

}

const Pomodoro = () => {
    return (
        <>
            <Header />
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <h1 className="font-bold text-3xl"> Pomodoro Technique </h1>
                </div>
                <Types />
            </section>
            <Link to='/pomodoro'></Link>
        </>
    );
};

export default Pomodoro;
