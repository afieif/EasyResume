import React, {useState} from 'react'

export default function WorkDetails({formData,setFormData}) {
  const [count,setCount] = useState(0);
  return (
    <div className='grid row-3 parent'>
    <div className='grid col-2'>
    <div className='label-input-group'>
        <label>Company</label>
        <input type='text' placeholder='Enter Company Name' 
        value={formData.company[count]}
        onChange={(e)=>{
            setFormData({...formData,company : {...formData.company,  [count] :e.target.value}});
        }}
        />
    </div>
    <div className='label-input-group'>
        <label>Job title</label>
        <input type='text' placeholder='Enter Job Title' 
        value={formData.title[count]}
        onChange={(e)=>{
            setFormData({...formData,title : {...formData.title,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div className='grid col-1'>
    <div className='label-input-group'>
        <label>Duration</label>
        <input type='text' placeholder='(eg : 2020-2024)'
        value={formData.duration[count]}
        onChange={(e)=>{
            setFormData({...formData,duration : {...formData.duration,  [count] :e.target.value}});
        }}
        />
    </div>
    </div>
    <div className='grid col-1'>
        <div className='label-input-group'>
        <label>Description</label>
        <textarea placeholder='Enter Description' rows="3" name='Ábout'
            value={formData.about}
            onChange={(e) => {setFormData({ ...formData, about: e.target.value });}}
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
