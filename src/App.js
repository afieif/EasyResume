import { useState } from "react";
import EduDetails from "./components/EduDetails";
import PersonalDetails from "./components/PersonalDetails";
import WorkDetails from "./components/WorkDetails";
import Skills from "./components/Skills";
import ProjectDetails from "./components/ProjectDetails";
import Preview from "./components/Preview";

const Styles = {
  BodyStyle : {
  backgroundColor : "#312F2F",
  width : "100vw",
  height : "100vh",
  display : "flex",
  flexDirection : "column",
  justifyContent : "center",
  alignItems : "center",
  color : "white",
  fontFamily : "monospace"
  },
  FormStyle : {
    backgroundColor : "#22181c",
    width : "50vw",
    height : "60vh",
    borderRadius : "10px",
    padding : "50px",
  },
  Row : {
    display : "flex",
    justifyContent : "space-around",
    alignItems : "left",
    marginBottom : "20px",
  },
  Button : {
    padding : "10px 25px",
    backgroundColor : "#84dccf", 
    border : "none",
    borderRadius : "10px",
    marginBottom : "10px"
  },
  header : {
    fontSize : '20px',
    marginBottom : '15px'
  }
}

function App() {
  const [step,SetStep] = useState(5);
  const [personalData,setPersonalData] = useState({
    name : "",
    number : "",
    state : "",
    city : "",
    zip : "",
    about : ""
  });
  const [eduData,setEduData] = useState({
    institute : {0 : "",1 : "",2 : ""},
    qualification : {0 : "",1 : "",2 : ""},
    year : {0 : "",1 : "",2 : ""},
    score : {0 : "",1 : "",2 : ""}
  });  
  const [workData,setWorkData] = useState({
    company : {0 : "",1 : "",2 : ""},
    title : {0 : "",1 : "",2 : ""},
    duration : {0 : "",1 : "",2 : ""},
    description : {0 : "",1 : "",2 : ""}
  });

  const [projectData,setProjectData] = useState({
    title : {0 : "",1 : "",2 : ""},
    url : {0 : "",1 : "",2 : ""},
    description : {0 : "",1 : "",2 : ""}
  });
  
  const [skills,setSkills] = useState([]);

  const FormStep = () => {
    if(step===0)
    {
      return(<>
      <div style={Styles.header}>Personal Data</div>
      <PersonalDetails formData={personalData} setFormData={setPersonalData}/>
      </>)
    }
    else if(step === 1)
    {
      return(<>
        <div style={Styles.header}>Education</div>
        <EduDetails formData={eduData} setFormData={setEduData}/>
      </>)
    }
    else if(step === 2)
    {
      return(<>
      <div style={Styles.header}>Experience</div>
      <WorkDetails formData={workData} setFormData={setWorkData}/>
      </>)
    }
    else if(step === 3)
    {
      return(<>
      <div style={Styles.header}>Skills</div>
      <Skills formData={skills} setFormData={setSkills}/>
      </>)
    }
    else if(step === 4)
    {
      return(<>
      <div style={Styles.header}>Projects</div>
      <ProjectDetails formData={projectData} setFormData={setProjectData}/>
      </>)
    }
    else{
      return(<>
      <div style={Styles.header}>Preview</div>
      <Preview personalData={personalData} eduData={eduData} skillData={skills} projectData={projectData} workData={workData}/>
      </>)
    }
  };

  return (
    <div style={Styles.BodyStyle}>
      <div style={Styles.FormStyle}>
        {FormStep()}
        <div style={Styles.Row}>
          <input type='button' value="Prev" hidden={step===0} style={Styles.Button} onClick={()=>SetStep(step-1)}/>
          <input type='button' value="Next" hidden={step===5} style={Styles.Button} onClick={()=>SetStep(step+1)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
