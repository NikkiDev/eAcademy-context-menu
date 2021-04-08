import React from 'react'
import './Context.scss'
import ContextItem from './ContextItem'

const Context = () => {
  return (
    <ul className='list'>
      <ContextItem>Library</ContextItem>
      <ContextItem>Files</ContextItem>
      <ContextItem>Gallery</ContextItem>
      <ContextItem>Gallery</ContextItem>
    </ul>
  )
}

export default Context
