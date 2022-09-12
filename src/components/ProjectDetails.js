import React, {useState} from 'react'

export default function ProjectDetails({formData,setFormData}) {
    const [count,setCount] = useState(0);
    return (
      <div className='grid parent row-2'>
      <div className='grid col-2'>
      <div className='label-input-group'>
          <label>Title</label>
          <input type='text' placeholder='Enter title' 
          value={formData.title[count]}
          onChange={(e)=>{
              setFormData({...formData,title : {...formData.title,  [count] :e.target.value}});
          }}
          />
      </div>
      <div className='label-input-group'>
          <label>Project url</label>
          <input type='text' placeholder='Enter url' 
          value={formData.url[count]}
          onChange={(e)=>{
              setFormData({...formData,url : {...formData.url,  [count] :e.target.value}});
          }}
          />
      </div>
      </div>
      <div className='grid col-1'>
          <div className='label-input-group'>
          <label>Description</label>
          <textarea placeholder='Enter Description' rows="3" 
              value={formData.description[count]}
              onChange={(e) => {setFormData({ ...formData, description:{...formData.description, [count]: e.target.value }});}}
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
    </div>)
}
