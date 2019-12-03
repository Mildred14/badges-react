import React from 'react';
import '../styles/BadgesList.css'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

class BadgesList extends React.Component {
  render(){
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge)=> {
          return(
            <li key={badge.id} className='list-content'>
              <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}/edit`}>
              <div>
                <Gravatar 
                className='Badge__avatar'
                email = {badge.email}
                alt='Avatar'/>
              </div>
              <div className='list-text'>
                <p className='list-name'>{badge.firstName}{badge.lastName}</p>
                <p className='list-twitter'>@{badge.twitter}</p>
                <p className='list-jobtitle'>{badge.jobTitle}</p>
              </div>
              </Link>
            </li>
          )
        })}
      </ul>
    )
    
  }
}

export default BadgesList;