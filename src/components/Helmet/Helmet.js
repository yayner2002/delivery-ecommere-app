

import React from 'react'

const Helmet = (props) => {
  document.title = `Yay Commerce App - ${props.title}`
  return (
    <div>{props.children}</div>
    
  )
}

export default Helmet