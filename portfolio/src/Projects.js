import React, { Component } from "react";
import PROJECTS from './data/projects'

class Project extends Component {
  render() {
    // console.log('THIS.PROPS', this.props);

    const { title, image, description, link } = this.props.project
    
    return(
      <div className='grid grid-cols-2 gap-2 picture'>
        <h3 className='text-center'>{title}</h3>
          <p className='text-center'>{description}</p>
          <img src={image} alt='profile' style={{ width: 500, height: 280 }}/>
          <a href={link} className='text-center'>{link}</a>
      </div>
    )
  }
}

class Projects extends Component { 
  render() {
    return (
      <div className='text-center'>
      <h2>Projects</h2>
      <div>
        {
          PROJECTS.map(PROJECT => {
            return(
              <Project key={PROJECT.id} project={PROJECT}/>
            )
          })
        }
      </div>

      </div>
    )
  }
};

export default Projects