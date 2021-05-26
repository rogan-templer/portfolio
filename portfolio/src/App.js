import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false }
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
          </div>
          ) : null
      }
      </div>
    )
  }
}

export default App