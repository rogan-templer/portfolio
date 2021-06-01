import React, { Component } from "react";
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'


class App extends Component {
  state = { displayBio: false }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render() {
    return (
      <div className='container'>
          <div className='grid'> 
            <h1 className='col'>Hello!</h1>
            <p className='col'>My name is Rogan. I am a Fullstack Software and Web Developer</p>
            <p className='col'>I have gathered together some projects here that I have been working on.</p>
          </div>
        {
          this.state.displayBio ? (
            <div className='col'>
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
        <hr/>
        <SocialProfiles/>
      </div>
    )
  }
}

export default App