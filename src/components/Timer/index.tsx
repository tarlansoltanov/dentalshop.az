import { useState, useEffect } from "react";

interface Props {
  end_date: string | Date;
  className: string;
}

const Timer = ({ end_date, className }: Props) => {
  const date = new Date(end_date);
  date.setHours(date.getHours() + 24);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Time for GMT+4
      const now = new Date().getTime() ;   //+14400000
      const distance = date.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      // setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  console.log(days,"hours");
  

  return (
    <div className={className}>
      <div className="containerData1">
      <p className="timerTextStyle">
      {days}</p>
        <p className="timerTextStyle2">
        Gün</p>
        </div>
<div className="lineData"></div>
        <div className="containerData1">
      <p className="timerTextStyle">
      {hours ? `${hours}` : ""}</p>
        <p className="timerTextStyle2">
        {hours ? ` Saat` : ""}</p>
        </div>
        <div className="lineData"></div>

        <div className="containerData1">
      <p className="timerTextStyle">
      {minutes ? `${minutes}` : ""}</p>
        <p className="timerTextStyle2">
        {minutes ? ` Dəqiqə` : ""}</p>
        </div> 
        {/* {seconds || minutes || hours || days ? `${seconds} saniyə ` : ""} */}
  
    </div>
  );
};

export default Timer;
