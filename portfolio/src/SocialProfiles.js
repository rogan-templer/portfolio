import React, { Component } from 'react';
import SOCIALS from './data/socialProfiles'

class Social extends Component {
  render() {

    const { link, image } = this.props.social

    return(
      <div>
        <img src={image} alt='social links'/>
        <a href={link}>{link}</a>
      </div>
    )
  }
}

class Socials extends Component {
  render() {
    return(
      <div>
      {
        SOCIALS.map(SOCIAL => {
          return(
            <Social key={SOCIAL.id} social={SOCIAL}/>
          )
        })
      }
      </div>
    )
  }
}

export default Socials