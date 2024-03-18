import React from 'react'

const Userdata =[
    {
        name:"Ajithkumar",
        address:"Villupuram",
        role:"Front-End-Developer",
        skills: ["UI/UX","Front-End-Developer","HTML","CSS","React Js","Node Js"],
        profile:true,
        img:"images/ajith.jpeg"

    },
    {
        name:"Raja",
        address:"Cuddalore",
        role:"Back-End-Developer",
        skills: ["Java","Back-End-Developer","HTML","CSS","springbot","glassfish"],
        profile:false,
        img:"images/raja.jpeg"

    },
    {
        name:"Vijay",
        address:"Chennai",
        role:"Full-Stack-Developer",
        skills: ["UI/UX","Full-End-Developer","HTML","CSS","React Native",,"java","python"],
        profile:true,
        img:"images/vijay.jpeg"

    },
    {
        name:"Vickey",
        address:"Chengalpattu",
        role:"flutter-Developer",
        skills: ["UI/UX","Full-End-Developer","HTML","CSS","React Native",,"java","python"],
        profile:false,
        img:"images/vickey.jpeg"

    },
    {
        name:"Pushbaraj",
        address:"Vedathangal",
        role:"Front-End-Developer",
        skills: ["UI/UX","Front-End-Developer","HTML","CSS","React Js","Node Js"],
        profile:true,
        img:"images/pushbaraj.jpeg"

    },
    {
        name:"Vimal",
        address:"Kanchipuram",
        role:"FlutterDeveloper",
        skills: ["Java","Python","HTML","CSS","springbot","glassfish"],
        profile:false,
        img:"images/Vimal.jpeg"

    },
    {
        name:"Malli",
        address:"Viruthachallam",
        role:"Full-Stack-Developer",
        skills: ["Full-stack-Developer","HTML","CSS","Flutter",,"java","python"],
        profile:true,
        img:"images/gayethri.jpeg"

    },
    {
        name:"Priya",
        address:"Chengalpattu",
        role:"MERN STACK",
        skills: ["UI/UX","Front-Developer","HTML","CSS","React Native","java","python"],
        profile:false,
        img:"images/Malli.jpeg"

    },

]

function Usercard(props) 
{
return(
    <div className="card-container">
        <span className={props.profile ? "pro" : "pro2"}>{props.profile ? "Online" : "Offline"}</span>
    
            <img src={props.img} alt="ajith"></img>
 
        
        <h1 className="nickname">{props.name}</h1>
        <h3>{props.address}</h3>
        <p>{props.role}</p>
         <div className="buttons"> 
        <button>Message</button>
         <button className="following">Following</button>
         </div>   
         <div className="skills">
            <div className="skillheading">Skills</div>
            <ul>
               {props.skills.map((skill,index)=>(
               <li key={index}>  {skill}</li>))}
                </ul>
                
        </div> 
    </div>
)
}
export const Profile = () => {
  return (
    <>
 {Userdata.map((data,index)=>(
    
   <Usercard key={index}
   name={data.name}
   address={data.address}
   role={data.role}
   profile={data.profile}
   img={data.img} 
   skills={data.skills}/>
    
 ))}
</>
  );
};
// <Usercard  name="Sathiya ultra legend" address="Villupuram" role="Front-End-Developer" msg="Message" follows="Following" skills={["UI/UX","Front-End-Developer","HTML","CSS","React Js","Node Js"]} profile={false} img="images/vijay.jpeg" />