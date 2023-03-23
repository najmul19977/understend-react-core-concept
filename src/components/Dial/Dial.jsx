import React from 'react';
import Knob from '../Knob/Knob';
import './Dial.css'

const Dial = (props) => {
    return (
        <div className='dial'>
            <h3>This is dial component</h3>
            <p>Your steps counts:{props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;