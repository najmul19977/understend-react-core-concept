import React from 'react';
import './Knob.css'

const Knob = (props) => {
    return (
        <div className='knob'>
            <h3>This is knob Component</h3>
            <p>Steps here is:{props.steps}</p>
        </div>
    );
};

export default Knob;