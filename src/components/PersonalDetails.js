import React from 'react'

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
      }
}

export default function PersonalDetails({formData,setFormData}) {
  return (
    <> 
    <div style={Styles.Row}>
    <div style={Styles.Col}>
        <label>Full Name</label>
        <input type='text' placeholder='Enter Full name' 
        name="Name" style={Styles.TextBox} 
        value={formData.name}
        onChange={(e) => {setFormData({ ...formData, name: e.target.value });}}
        />
    </div>
    <div style={Styles.Col}>
        <label>Phone Number</label>
        <input type='numeric' placeholder='Enter Phone number' name="Mobile" style={Styles.TextBox}
        value={formData.number}
        onChange={(e) => {setFormData({ ...formData, number: e.target.value });}}
        />
    </div>
    </div>
    <div style={Styles.Row}>
    <div style={Styles.Col}>
        <label>State</label>
        <input type='text' placeholder='Enter State' name="State" style={Styles.TextBox}
        value={formData.state}
        onChange={(e) => {setFormData({ ...formData, state: e.target.value });}}
        />
    </div>
    <div style={Styles.Col}>
        <label>City</label>
        <input type='text' placeholder='Enter City' name="City" style={Styles.TextBox}
        value={formData.city}
        onChange={(e) => {setFormData({ ...formData, city: e.target.value });}}
        />
    </div>
    <div style={Styles.Col}>
        <label>ZIP Code</label>
        <input type='text' placeholder='Enter ZIP Code' name="ZIP" style={Styles.TextBox}
        value={formData.zip}
        onChange={(e) => {setFormData({ ...formData, zip: e.target.value });}}
        />
    </div>
    </div>
    <div style={Styles.Row}>
        <div style={Styles.Col}>
            <label>About</label>
            <textarea placeholder='about' rows="5" style={Styles.TextBoxLarge} name='Ábout'
            value={formData.about}
            onChange={(e) => {setFormData({ ...formData, about: e.target.value });}}
            />
        </div>
    </div>
    </>
  )
}
