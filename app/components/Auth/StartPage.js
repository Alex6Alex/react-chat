import React from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'

export default class StartPage extends React.Component {
  render() {
    return(
      <div className='start-page'>
        <div className='auth-block'>
          <SignIn/>
          <SignUp/>
        </div>
      </div>
    )
  }

}
