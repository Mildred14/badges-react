import React from 'react';
import '../styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import header from '../images/badge-header.svg'
import api from '../api'
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  }};

  componentDidMount(){
    this.fetchData();
  }
  
  fetchData = async e => {
    this.setState({loading: true, error:null})

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, form: data})
    } catch (error) {
      this.setState({loading: false, error: error })

    }

  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form, 
        [e.target.name]: e.target.value
      },
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form )
      this.setState({
        loading: false
      })
      this.props.history.push('/badges')
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }
  render() {
    if(this.state.loading) {
      return <PageLoading/>
    }
    return(
      <div>
        <div className='Badge__hero'>
          <img className="Badge__hero-image img-fluid" src={header} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstName || 'FIRST NAME'}
              lastName={this.state.form.lastName || 'LASST NAME'}
              email={this.state.form.email || 'EMAIL'}
              jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
              twitter={this.state.form.twitter || 'TWITTER'}
              />
            </div>
            <div className="col-6">
            <h1>Edit Attende</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeEdit;