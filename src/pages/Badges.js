import React from 'react'
import {Link} from 'react-router-dom';
import api from '../api'
import '../styles/Badges.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgesList from '../components/BadgesList'

class Badges extends React.Component {
  state = {
    loading: true, 
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    })
    try {
      const data = await api.badges.list()
      this.setState({
        loading: false,
        data: data
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    if(this.state.loading === true && !this.state.data){
      return <PageLoading/>
    }
    if(this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges_container">
              <img className="Badges_conf-logo" src={confLogo}/>
            </div>
          </div>
        </div>
        <div className='Badges__container'>
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>

          <div className="Badge__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data}/>
              {this.state.loading && 'Loading...'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges;