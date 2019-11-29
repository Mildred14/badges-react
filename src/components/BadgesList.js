import React from 'react';
import '../styles/BadgesList.css'
class BadgesList extends React.Component {
  render(){
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge)=> {
          return(
            <li key={badge.id} className='list-content'>
              <div>
                <img className='list-avatar' src={badge.avatarUrl}></img>
              </div>
              <div className='list-text'>
                <p className='list-name'>{badge.firstName}{badge.lastName}</p>
                <p className='list-twitter'>@{badge.twitter}</p>
                <p className='list-jobtitle'>{badge.jobTitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
    
  }
}

export default BadgesList;