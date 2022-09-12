import React, { useState } from 'react'

export default function Skills({formData,setFormData}) {
    const [skill,setSkill] = useState("");
    function del(item){
      setFormData(formData.filter((i)=>i!==item));
    }
  return (
    <>
    <div className='grid parent w-fix'>
    <div className='grid col-1'>    
    <div className='wrap'>
            {formData.map((item)=>{
                return (
                    <span className='skill-box' onClick={()=>del(item)}>{item}</span>
                )
            })}
        </div>
    <div className='label-input-group'>
        <label>Skills</label>
        <input type='text' placeholder='Enter Skills'
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
        <span className='prompt'>click on a skill to delete</span>
    </div>
    </div>
    </div>
    </>
  )
}
