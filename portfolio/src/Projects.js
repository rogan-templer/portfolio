import React, { Component } from "react";
import PROJECTS from './data/projects'

class Project extends Component {
  render() {
    // console.log('THIS.PROPS', this.props);

    const { title, image, description, link } = this.props.project
    
    return(
      <div className=''>
        <div className='col m-8'>
          <img src={image} alt='profile' />
        </div>  
      
        <div >
          <h3 className=''>{title}</h3>
          <p className=''>{description}</p>  
          <a href={link}>See the project on Github here</a>
        </div>  
      </div>
    )
  }
}

class Projects extends Component { 
  render() {
    return (
      <div className='grid'>
      <h2 className='col'>Projects</h2>
      <div>
        {
          PROJECTS.map(PROJECT => {
            return(
              <Project key={PROJECT.id} project={PROJECT} />
            )
          })
        }
      </div>

      </div>
    )
  }
};

export default Projects

// style={{ width: 500, height: 280 }}