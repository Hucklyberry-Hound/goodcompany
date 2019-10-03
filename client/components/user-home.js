import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Navbar} from './navbar'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <React.Fragment>
      <Navbar />
      <div>
        <h3>Welcome, {email}</h3>
      </div>
    </React.Fragment>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
