import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import { textOutline } from 'ionicons/icons';
const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);


  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      // day: 'numeric',
      year: 'numeric',

    });
  };

  return (
    <div className='date-time'>
        <span className='date-time-txt'>
            {formatDate(time)} 
            <br/> 
            {time.toLocaleTimeString()}
        </span>

    </div>


  );
};

export default Clock;
