import React from 'react'

export default function PersonalDetails({formData,setFormData}) {
  return (
    <div className='grid row-3 parent'> 
      <div className='grid col-2'>
        <div className='label-input-group'>
          <label>Full Name</label>
          <input type='text' placeholder='Enter Full name' 
          name="Name"  
          value={formData.name}
          onChange={(e) => {setFormData({ ...formData, name: e.target.value });}}
          />
        </div>

        <div className='label-input-group'>
          <label>Phone Number</label>
          <input type='numeric' placeholder='Enter Phone number' name="Mobile" 
          value={formData.number}
          onChange={(e) => {setFormData({ ...formData, number: e.target.value });}}
          />
        </div>
      </div>

      <div className='grid col-3'>
        <div className='label-input-group'>
          <label>State</label>
          <input type='text' placeholder='Enter State' name="State" 
          value={formData.state}
          onChange={(e) => {setFormData({ ...formData, state: e.target.value });}}
          />
        </div>

        <div className='label-input-group'>
        <label>City</label>
          <input type='text' placeholder='Enter City' name="City" 
          value={formData.city}
          onChange={(e) => {setFormData({ ...formData, city: e.target.value });}}
          />
        </div>

        <div className='label-input-group'>
          <label>ZIP Code</label>
          <input type='text' placeholder='Enter ZIP Code' name="ZIP" 
          value={formData.zip}
          onChange={(e) => {setFormData({ ...formData, zip: e.target.value });}}
          />
        </div>
      </div>

      <div className='grid col-1'>
        <div className='label-input-group'>
          <label>About</label>
          <textarea placeholder='Mention a few words about yourself' rows="5"  name='Ábout'
          value={formData.about}
          onChange={(e) => {setFormData({ ...formData, about: e.target.value });}}
          />
        </div>
      </div>
    </div>
  )
}
