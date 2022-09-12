import React from 'react'
import './Print.css'

const Print = () =>{     
  //console.log('print');  
  let printContents = document.getElementById('printablediv').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents; 
}

export default function Preview({personalData,eduData,skillData,projectData,workData}) {
  return (
    <div className='parent'>
    <div id='printablediv'>
    <div className='page'>
      <div className='section'>
      <div>{personalData.name}</div>
      <div>{personalData.number}</div>
      <div>{personalData.state}, {personalData.city} {personalData.zip}</div>
      <div>{personalData.about}</div>
      </div>
      <hr/>
      <h3>Education</h3>
      <div className='section'>
      {
      eduData.qualification[0]?
      <>
      <div>{eduData.qualification[0]}</div>
      <div>{eduData.institute[0]}</div>
      <div>{eduData.year[0]}, {eduData.score[0]}</div>
      </>:<></>
      }

      {
      eduData.qualification[1]?
      <>
      <div>{eduData.qualification[1]}</div>
      <div>{eduData.institute[1]}</div>
      <div>{eduData.year[1]}, {eduData.score[1]}</div>
      </>:<></>
      }

      {
      eduData.qualification[2]?
      <>
      <div>{eduData.qualification[2]}</div>
      <div>{eduData.institute[2]}</div>
      <div>{eduData.year[2]}, {eduData.score[2]}</div>
      </>:<></>
      }
      </div>
      <hr/>
      <h3>Experience</h3>
      <div className='section'>

      {
      workData.title[0]?
      <>
      <div>{workData.title[0]}</div>
      <div>{workData.company[0]}, {workData.duration[0]}</div>
      <div>{workData.description[0]}</div>
      </>:<></>
      }

      {
      workData.title[1]?
      <>
      <div>{workData.title[1]}</div>
      <div>{workData.company[1]}, {workData.duration[1]}</div>
      <div>{workData.description[1]}</div>
      </>:<></>
      }

      {
      workData.title[2]?
      <>
      <div>{workData.title[2]}</div>
      <div>{workData.company[2]}, {workData.duration[2]}</div>
      <div>{workData.description[2]}</div>
      </>:<></>
      }

      </div>
      <hr/>

      <h3>Projects</h3>
      <div className='section'>
      {
      projectData.title[0]?
      <>
      <div>{projectData.title[0]}</div>
      <div>{projectData.url[0]}</div>
      <div>{projectData.description[0]}</div>
      </>:<></>
      }

      {
      projectData.title[1]?
      <>
      <div>{projectData.title[1]}</div>
      <div>{projectData.url[1]}</div>
      <div>{projectData.description[1]}</div>
      </>:<></>
      }

      {
      projectData.title[2]?
      <>
      <div>{projectData.title[2]}</div>
      <div>{projectData.url[2]}</div>
      <div>{projectData.description[2]}</div>
      </>:<></>
      }
      </div>
      <hr/>

      <h3>Skills</h3>
      <div className='section'>
      {
        skillData.map((item)=>{
          return(<span>{item}{" "}</span>)
        })
      }
      </div>
      <hr/>


    </div>
    </div>
    <div className='page-view'>
      <div className='section'>
      <div>{personalData.name}</div>
      <div>{personalData.number}</div>
      <div>{personalData.state}, {personalData.city} {personalData.zip}</div>
      <div>{personalData.about}</div>
      </div>
      <hr/>
      <h3>Education</h3>
      <div className='section'>
      {
      eduData.qualification[0]?
      <>
      <div>{eduData.qualification[0]}</div>
      <div>{eduData.institute[0]}</div>
      <div>{eduData.year[0]}, {eduData.score[0]}</div>
      </>:<></>
      }

      {
      eduData.qualification[1]?
      <>
      <div>{eduData.qualification[1]}</div>
      <div>{eduData.institute[1]}</div>
      <div>{eduData.year[1]}, {eduData.score[1]}</div>
      </>:<></>
      }

      {
      eduData.qualification[2]?
      <>
      <div>{eduData.qualification[2]}</div>
      <div>{eduData.institute[2]}</div>
      <div>{eduData.year[2]}, {eduData.score[2]}</div>
      </>:<></>
      }
      </div>
      <hr/>
      <h3>Experience</h3>
      <div className='section'>

      {
      workData.title[0]?
      <>
      <div>{workData.title[0]}</div>
      <div>{workData.company[0]}, {workData.duration[0]}</div>
      <div>{workData.description[0]}</div>
      </>:<></>
      }

      {
      workData.title[1]?
      <>
      <div>{workData.title[1]}</div>
      <div>{workData.company[1]}, {workData.duration[1]}</div>
      <div>{workData.description[1]}</div>
      </>:<></>
      }

      {
      workData.title[2]?
      <>
      <div>{workData.title[2]}</div>
      <div>{workData.company[2]}, {workData.duration[2]}</div>
      <div>{workData.description[2]}</div>
      </>:<></>
      }

      </div>
      <hr/>

      <h3>Projects</h3>
      <div className='section'>
      {
      projectData.title[0]?
      <>
      <div>{projectData.title[0]}</div>
      <div>{projectData.url[0]}</div>
      <div>{projectData.description[0]}</div>
      </>:<></>
      }

      {
      projectData.title[1]?
      <>
      <div>{projectData.title[1]}</div>
      <div>{projectData.url[1]}</div>
      <div>{projectData.description[1]}</div>
      </>:<></>
      }

      {
      projectData.title[2]?
      <>
      <div>{projectData.title[2]}</div>
      <div>{projectData.url[2]}</div>
      <div>{projectData.description[2]}</div>
      </>:<></>
      }
      </div>
      <hr/>

      <h3>Skills</h3>
      <div className='section'>
      {
        skillData.map((item)=>{
          return(<span>{item}{" "}</span>)
        })
      }
      </div>
      <hr/>


    </div>
    <div className='printbtn' onClick={Print}>Print</div>
    </div>
  )
}
