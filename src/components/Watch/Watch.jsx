import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import './Watch.css'

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increaseState = () =>{
        const newSteps = steps +1;
        setSteps(newSteps)
    }
    useEffect(()=>{

    },[steps])
    
    return (
        <div className='watch'>
            <h2>this is my smart watch!!</h2>
            <p>Steps:{steps}</p>
            <button onClick={increaseState}>De Dour....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;