import React, { useRef } from 'react'
import ContextMenu from './ContextMenu'
const ContextItem = ({ children }, style) => {
  const listItemRef = useRef()
  return (
    <li style={style} ref={listItemRef}>
      <p>{children}</p>

      <ContextMenu parent={listItemRef} children={children} />
    </li>
  )
}

export default ContextItem
