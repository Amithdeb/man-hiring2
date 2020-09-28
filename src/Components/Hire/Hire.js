import React from 'react';
const Hire = (props) => {
    const make=props.user
    console.log(make)
    const total= make.reduce((sum,x)=>sum+x.salary,0)
    return (
        <div style={{border:"2px solid red",backgroundColor:"black",color:'white',textAlign:"center"}}>
            <h1>HIRE SUMMARY</h1>
    <h3>number of hired people:{make.length}</h3>
            
    <h3>total taka needed for hired people:{total}</h3>
        </div>
    );
};
export default Hire;