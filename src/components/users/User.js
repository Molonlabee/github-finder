import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <Spinner />;

    return (
      <>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card.grid-2'>
            <div className='all-center'></div>
            <img src={avatar_url} className='round-img' alt='profile' style={{width: '150px'}} />
            <h1>{name}</h1>
        <p>Location: {location}</p>
        </div>
        <div>
            {bio && <>
                <h3>Bio</h3>
                <p>{bio}</p>
                </>}
                <a herf={html_url} className='btn btn-dark my-1'>
                 Github Profile
                </a>
              <ul>
                  <li>
                      {login && <>
                      <strong>Username: </strong> {login}
                      </>}
                  </li>
                  <li>
                      {company && <>
                      <strong>Company: </strong> {company}
                      </>}
                  </li>
                  <li>
                      {blog && <>
                      <strong>Website: </strong> {blog}
                      </>}
                  </li> 
              </ul>
        </div>
      </>
    );
  }
}

export default User;
