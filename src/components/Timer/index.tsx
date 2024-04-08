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
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Time for GMT+4
      const now = new Date().getTime() + 14400000;
      const distance = date.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <p>
        {days ? `${days} gün ` : ""}
        {hours ? `${hours} saat ` : ""}
        {minutes ? `${minutes} dəqiqə ` : ""}
        {seconds ? `${seconds} saniyə ` : ""}
      </p>
    </div>
  );
};

export default Timer;
