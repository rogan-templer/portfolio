import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false }

    // console.log('component this', this);
    
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
  }

  toggleDisplayBio() {
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
      </div>
    )
  }
}

export default App