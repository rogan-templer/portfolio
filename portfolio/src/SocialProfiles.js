import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return(
      <span className='flex flex-auto'>
        <a href={link}>
          <img src={image} alt='social icons' style={{ width: 35, height: 35, margin: 5 }} />
        </a>
      </span>
      
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return(
      <div className='text-center'>
      <h2>Connect with me</h2>
      <div>
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE } />
        })
      }
      </div>
      </div>
    )
  }
}



export default SocialProfiles

// <img src={image} alt='social links' style={{ width: 200, height: 120}}/>
//         <a href={link}>{link}</a>