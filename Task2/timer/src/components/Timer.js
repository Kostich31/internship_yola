import React, { useState, useEffect, useRef } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isStart, setTimer] = useState(false);
    const interval = useRef(null);

    function startTimer() {
        setTimer(!isStart);
    }

    function resetTimer() {
        setSeconds(0);
        setTimer(false);
    }

    useEffect(() => {
        if (isStart) {
            interval.current = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isStart && seconds !== 0) {
            clearInterval(interval.current);
        }
        return () => clearInterval(interval.current);
    }, [isStart, seconds]);

    return (
        <div className='content'>
            <Typography variant="h3" component="div"> {seconds} </Typography>
                <ButtonGroup component="div">
                    <Button onClick={startTimer}>{isStart ? 'Stop' : 'Start'}</Button>
                    <Button onClick={resetTimer}>Reset</Button>
                </ButtonGroup>
        </div>

    );
};

export default Timer;
