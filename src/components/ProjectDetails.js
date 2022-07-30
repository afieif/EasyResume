import React, {useState} from 'react'

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
        width : "15vw"
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
      }
}

export default function ProjectDetails({formData,setFormData}) {
    const [count,setCount] = useState(0);
    return (
      <>
      <div style={Styles.Row}>
      <div style={Styles.Col}>
          <label>Title</label>
          <input type='text' placeholder='Enter title' style={Styles.TextBox} 
          value={formData.title[count]}
          onChange={(e)=>{
              setFormData({...formData,title : {...formData.title,  [count] :e.target.value}});
          }}
          />
      </div>
      <div style={Styles.Col}>
          <label>Project url</label>
          <input type='text' placeholder='Enter url' style={Styles.TextBox}
          value={formData.url[count]}
          onChange={(e)=>{
              setFormData({...formData,url : {...formData.url,  [count] :e.target.value}});
          }}
          />
      </div>
      </div>
      <div style={Styles.Row}>
          <div style={Styles.Col}>
          <label>Description</label>
          <textarea placeholder='Enter Description' rows="3" style={Styles.TextBoxLarge} 
              value={formData.description[count]}
              onChange={(e) => {setFormData({ ...formData, description:{...formData.description, [count]: e.target.value }});}}
          />
          </div>
      </div>
      <div style={Styles.RowCompact}>
          {count === 0 ? <input type='button' value='1' style={Styles.buttonActive}/> : <input type='button' value='1' onClick={()=>setCount(0)}/>}
          {count === 1 ? <input type='button' value='2' style={Styles.buttonActive}/> : <input type='button' value='2' onClick={()=>setCount(1)}/>}
          {count === 2 ? <input type='button' value='3' style={Styles.buttonActive}/> : <input type='button' value='3' onClick={()=>setCount(2)}/>}
  
      </div>
      </>)
}
