import React, { Component } from "react";
import Projects from './Projects'

class App extends Component {
  state = { displayBio: false }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    return (
      <div>
      <h1>Hello!</h1>
      <p>My name is Rogan. I am a Fullstack Software and Web Developer</p>
      <p>I have gathered together some projects here that I have been working on.</p>
      {
        this.state.displayBio ? (
          <div>
          <p>I live in Auckland and have recently pivoted into tech after a prior career as an Underwriter in the Life and disability Insurance world.</p>
          <p>When I am not working I spend time with my family and have been developing a healthy obsession with surfing.</p>
          <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
          )
      }
      <hr/>
      <Projects/>
      </div>
    )
  }
}

export default App