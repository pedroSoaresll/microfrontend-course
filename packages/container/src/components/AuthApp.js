import React from 'react'
import { component } from 'auth/AuthApp'
import MicroFrontend from "./MicroFrontend"


export default ({ onSignIn }) => {
  return <MicroFrontend component={component} onSignIn={onSignIn} />
}