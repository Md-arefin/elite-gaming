import { useState, useEffect } from 'react';

const Countdown = () => {


    const [countdownDate] = useState(new Date("jul 5, 2023 15:37:25").getTime());
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        // Countdown is over
        clearInterval(interval);
      } else {
        // Calculate remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

    return (


        <div className='transition duration-150 ease-out hover:ease-in'>
            <div className="stats bg-white text-black shadow w-full text-center">

                <div className="stat">
                    <div className="stat-title font-semibold lg:text-3xl text-black">Level Up Your Summer Gaming:
                    <span  className='lg:hidden'> <br/></span>
                     Unbeatable Deals on Elite Gear!</div>

                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max ml-10 lg:ml-96 mt-3">
                        <div className="flex flex-col">
                            <span className="countdown text-2xl lg:text-5xl">
                                <span style={{ "--value": `${timeRemaining.days}` }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown  text-2xl lg:text-5xl">
                                <span style={{ "--value": `${timeRemaining.hours}` }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown  text-2xl lg:text-5xl">
                                <span style={{ "--value": `${timeRemaining.minutes}` }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown  text-2xl lg:text-5xl">
                                <span style={{ "--value": `${timeRemaining.seconds}` }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <div className="text-red-500 font-bold text-3xl mt-5">30% Discount</div>
                </div>

            </div>
        </div>
    );
};

export default Countdown;