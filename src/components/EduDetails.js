import React, { useState } from 'react'

const Styles = {
    Col : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        alignItems : "left",
        marginBottom : "20px",
      }, 
      Row : {
        display : "flex",
        justifyContent : "space-around",
        alignItems : "left",
        marginBottom : "20px",
      },
      TextBox : {
        padding : "10px",
        border : "none",
        borderRadius : "2px",
        width : "15vw"
      },
      TextBoxLarge : {
        padding : "10px",
        border : "none",
        borderRadius : "2px",
        width : "45vw",
      },
      RowCompact : {
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "left",
        marginBottom : "60px",
        marginTop : "40px"
      },
      buttonActive : {
        backgroundColor : "#84dccf",
        padding : '10px', 
        border : 'none',
        borderRadius : '8px'
      }
}

export default function EduDetails({formData,setFormData}) {
    const [count,setCount] = useState(0);
  return (
    <>
    <div style={Styles.Row}>
    <div style={Styles.Col}>
        <label>Institute</label>
        <input type='text' placeholder='Enter Institute Name' style={Styles.TextBox} 
        value={formData.institute[count]}
        onChange={(e)=>{
            setFormData({...formData,institute : {...formData.institute,  [count] :e.target.value}});
        }}
        />
    </div>
    <div style={Styles.Col}>
        <label>Qualification</label>
        <input type='text' placeholder='Enter Qualification' style={Styles.TextBox}
        value={formData.qualification[count]}
        onChange={(e)=>{
            setFormData({...formData,qualification : {...formData.qualification,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div style={Styles.Row}>
    <div style={Styles.Col}>
        <label>Year</label>
        <input type='text' placeholder='(eg : 2020-2024)' style={Styles.TextBox}
        value={formData.year[count]}
        onChange={(e)=>{
            setFormData({...formData,year : {...formData.year,  [count] :e.target.value}});
        }}
        />
    </div>
    <div style={Styles.Col}>
        <label>Score</label>
        <input type='text' placeholder='Enter Score' style={Styles.TextBox}
        value={formData.score[count]}
        onChange={(e)=>{
            setFormData({...formData,score : {...formData.score,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div style={Styles.RowCompact}>
        {count === 0 ? <input type='button' value='1' style={Styles.buttonActive}/> : <input type='button' value='1' onClick={()=>setCount(0)}/>}
        {count === 1 ? <input type='button' value='2' style={Styles.buttonActive}/> : <input type='button' value='2' onClick={()=>setCount(1)}/>}
        {count === 2 ? <input type='button' value='3' style={Styles.buttonActive}/> : <input type='button' value='3' onClick={()=>setCount(2)}/>}

    </div>
    </>
  )
}
