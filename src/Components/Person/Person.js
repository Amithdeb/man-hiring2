import React from 'react';


const Person = (props) => {
        console.log(props)
    return (
        <div style={{width:"40%",backgroundColor:"black",color:"white",border:"2px solid red",textAlign:"center",margin:"30px",padding:"5px"}}>
            <h4>Name:  {props.person.name}</h4>
    <h4>Email:  {props.person.email}</h4>
    <h4>Salary needed for hiring:   {props.person.salary}</h4>
    <button onClick={()=>props.handlePeople(props.person)} >HIRE ME</button>
    <br/><br/>
        </div> 
    );

};

export default Person;