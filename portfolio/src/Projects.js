import React, { Component } from "react";
import PROJECTS from './data/projects'

class Projects extends Component {
  render() {
    return (
      <div>
      <h2>Projects</h2>
      <div>
        {
          PROJECTS.map(PROJECT => {
            return(
              <div>{PROJECT.title}</div>
            )
          })
        }
      </div>
      </div>
    )
  }
}