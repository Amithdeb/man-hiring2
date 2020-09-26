import React from 'react';

const Hire = (props) => {
    const make=props.user
    return (
        <div>
            <h1>HIRE SUMMARY</h1>
    <h3>number of hired people:{make.length}</h3>
            <br/><br/>
            <h3>total taka needed for hired people:</h3>
        </div>
    );
};

export default Hire;