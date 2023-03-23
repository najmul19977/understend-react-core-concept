import React from 'react';
import DeciceDetails from '../DeviceDetails/DeciceDetails';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I have a device:{props.name}</h3>
            <h2>price:{props.price}</h2>
            <DeciceDetails></DeciceDetails>
        </div>
    );
};

export default Device;