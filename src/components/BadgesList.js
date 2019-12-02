import React from 'react';
import '../styles/BadgesList.css'
import {Link} from 'react-router-dom'
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