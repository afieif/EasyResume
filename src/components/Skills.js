import React, { useState } from 'react'

const Styles = {
    Col : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        alignItems : "left",
        marginBottom : "15px",
      }, 
      Row : {
        display : "flex",
        justifyContent : "space-around",
        alignItems : "left",
        marginBottom : "15px",
      },
      TextBox : {
        padding : "10px",
        border : "none",
        borderRadius : "2px",
        width : "500px"
      },
      TextBoxLarge : {
        padding : "5px",
        border : "none",
        borderRadius : "2px",
        width : "45vw",
      },
      RowCompact : {
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "left",
        marginBottom : "40px",
        marginTop : "30px"
      },
      buttonActive : {
        backgroundColor : "#84dccf",
        padding : '10px', 
        border : 'none',
        borderRadius : '8px'
      },
      skills : {
        padding : '20px',
        width : "500px",
        overflowX : "auto" 
      },
      skillItem : {
        padding : '5px',
        borderRadius : '2px',
        backgroundColor : '#84BDDB',
        marginRight : '1px',
        marginTop : '10px'
      }
}

export default function Skills({formData,setFormData}) {
    const [skill,setSkill] = useState("");
  return (
    <>
    <div style={Styles.Row}>
    <div style={Styles.Col}>
        <div style={Styles.skills}>
            {formData.map((item)=>{
                return (
                    <span style={Styles.skillItem}>{item}<span>X</span></span>
                )
            })}
        </div>
        <label>Skills</label>
        <input type='text' placeholder='Enter Skills' style={Styles.TextBox} 
        value={skill}
        onKeyDown ={ (e) =>{
            if(e.key === 'Enter')
            {
                setFormData([...formData,skill]);
                console.log(formData);
                setSkill('');
            }
        }}
        onChange={(e)=>{
            setSkill(e.target.value);
        }}
        />
    </div>
    </div>
    </>
  )
}
