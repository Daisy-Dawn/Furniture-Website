import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Clock = ({id}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval; //Declaring the interval variable to store the ID of the interval

  //Countdown function
  const countDown = () => {
    //Setting the destination date (30 days from now)
    const today = new Date();
    today.setDate(today.getDate() + 30); // Adding 30 days to the current date
    const destination = today.getTime();

    // Update clock function
    const updateClock = () => {
      //Calculating current time and time difference
      const now = new Date().getTime();
      const difference = destination - now;

      // Handling countdown completion
      if (difference <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        // Calculating remaining time
        const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const remainingMinutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Setting state with calculated values
        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    };

    // Initial call and interval setup
    updateClock(); // Initial call to set the initial values

    // Update the clock every second
    interval = setInterval(updateClock, 1000);
  };

  //useEffect hook to run countdown on component mount
  useEffect(() => {
    countDown();
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Utility function to add leading zeros
  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  const clockList = [
    {
      id: 1,
      time: addLeadingZero(days),
      text: "Days",
    },
    {
      id: 2,
      time: addLeadingZero(hours),
      text: "Hours",
    },
    {
      id: 3,
      time: addLeadingZero(minutes),
      text: "Minutes",
    },
    {
      id: 4,
      time: addLeadingZero(seconds),
      text: "Seconds",
    },
  ];
  return (
    <div className="text-white font-nunito ">
      <h2 className="xl:text-[40px] sm:text-[35px] text-[25px] font-bold text-center lg:text-left">Limited Offers</h2>
      <h2 className="lg:my-[2rem] my-[1rem] xl:text-[25px] sm:text-[20px] text-[18px] text-center lg:text-left font-semibold">
        Quality Family Soft Sofa Set
      </h2>

      {/* CLOCK SECTION */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-2  sm:gap-6">
        {clockList.map((clock) => (
          <div key={clock.id} className="flex sm:gap-5 lg:gap-2 xl:gap-0 gap-0 items-center">
            <div className="text-center w-[60px] sm:w-[80px]">
              <h2 className="xl:text-[30px] sm:text-[25px] text-[20px] font-bold">{clock.time}</h2>
              <p className="xl:text-[20px] sm:text-[18px] text-[15px] font-semibold"> {clock.text} </p>
            </div>
            {clock.id == 1 || clock.id == 2 || clock.id == 3 ? (
              <span className="xl:text-[30px] sm:text-[25px] text-[20px] font-bold">:</span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <button className="py-[8px] px-[20px] mt-[1.5rem] lg:mt-[3rem] w-fit mx-auto lg:mx-0  rounded-[10px] font-nunito bg-white hover:bg-lead hover:border-2 hover:border-white text-lead hover:text-white text-[16px] font-bold text-center flex items-center justify-center transition-all duration-300">
        <Link to={`shop/${id}`}>Visit Store</Link>
      </button>
    </div>
  );
};

export default Clock;
