
import React from "react";

import Links from "./Links";


function About(props) { 
 const propBio=props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {propBio? <p>{props.bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links github={props.gitHub}
    linkedin={props.linkedIn}/>
    </div>
  );
}


export default About;
