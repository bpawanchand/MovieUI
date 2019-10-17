import React, { Fragment, useState } from 'react';
import register from '../actions/register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Gateway = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  const { fname, lname, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    register();
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div>
          <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand' href='#'>
              Movie Database
            </a>
          </nav>
        </div>

        <div className='pt-4'>
          <form>
            <div className='form-group'>
              <input
                type='text'
                value={fname}
                name='fname'
                required
                className='form-control'
                placeholder='FirstName'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                value={lname}
                name='lname'
                required
                className='form-control'
                placeholder='LastName'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                value={email}
                required
                className='form-control'
                placeholder='Email ID'
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='password'
                name='password'
                value={password}
                required
                className='form-control'
                placeholder='Password'
                onChange={e => onChange(e)}
              />
            </div>
          </form>
          <button
            type='submit'
            className='btn btn-info'
            onSubmit={e => onSubmit(e)}
          >
            Create
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Gateway.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Gateway);
