import React, { useRef, useState } from 'react'
import ContextMenu from './ContextMenu'
const ContextItem = ({ children }, style) => {
  const listItemRef = useRef()
  const [isRightClicked, setIsRightClicked] = useState(false)
  return (
    <li
      style={style}
      ref={listItemRef}
      onContextMenu={(e) => {
        e.preventDefault()
        setIsRightClicked(e)
      }}
    >
      <p>{children}</p>

      <ContextMenu
        parent={listItemRef}
        children={children}
        isRightClicked={isRightClicked}
      />
    </li>
  )
}

export default ContextItem
