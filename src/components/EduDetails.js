import React, { useState } from 'react'

export default function EduDetails({formData,setFormData}) {
    const [count,setCount] = useState(0);
  return (
    <div className='grid row-3 parent'>
    <div className='grid col-2'>
    <div className='label-input-group'>
        <label>Institute</label>
        <input type='text' placeholder='Enter Institute Name' 
        value={formData.institute[count]}
        onChange={(e)=>{
            setFormData({...formData,institute : {...formData.institute,  [count] :e.target.value}});
        }}
        />
    </div>
    <div className='label-input-group'>
        <label>Qualification</label>
        <input type='text' placeholder='Enter Qualification'
        value={formData.qualification[count]}
        onChange={(e)=>{
            setFormData({...formData,qualification : {...formData.qualification,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div className='grid col-2'>
    <div className='label-input-group'>
        <label>Year</label>
        <input type='text' placeholder='(eg : 2020-2024)'
        value={formData.year[count]}
        onChange={(e)=>{
            setFormData({...formData,year : {...formData.year,  [count] :e.target.value}});
        }}
        />
    </div>
    <div className='label-input-group'>
        <label>Score</label>
        <input type='text' placeholder='Enter Score' 
        value={formData.score[count]}
        onChange={(e)=>{
            setFormData({...formData,score : {...formData.score,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div className='grid col-1'>
    <div className='grid-item'>
        {count === 0 ? <input type='button' value='1' className='button-2'/> : <input type='button' value='1' onClick={()=>setCount(0)} className='button-2 inactive'/>}
        {count === 1 ? <input type='button' value='2' className='button-2'/> : <input type='button' value='2' onClick={()=>setCount(1)} className='button-2 inactive'/>}
        {count === 2 ? <input type='button' value='3' className='button-2'/> : <input type='button' value='3' onClick={()=>setCount(2)} className='button-2 inactive'/>}
    </div>

    </div>
    </div>
  )
}
