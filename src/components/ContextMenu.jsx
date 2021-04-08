import React, { useState, useEffect } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
const ContextMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleEdit = () => {
    console.log('edit')
    setIsOpen(false)
  }
  const handleDelete = () => {
    console.log('delete')
    setIsOpen(false)
  }
  useEffect(() => {
    const parent = props.parent.current
    const showMenu = (e) => {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      }
    }
    const hideMenu = (e) => {
      if (parent.contains(e.target)) {
        e.preventDefault()
      }
      if (!parent.contains(e.target)) {
        setIsOpen(false)
      }
    }
    parent.addEventListener('contextmenu', showMenu)
    window.addEventListener('click', hideMenu)
    window.addEventListener('contextmenu', hideMenu)

    return () => {
      parent.removeEventListener('contextmenu', (e) => showMenu)
      window.removeEventListener('click', hideMenu)
      window.removeEventListener('contextmenu', hideMenu)
    }
  })
  return isOpen ? (
    <div className='menu'>
      {props.children}
      <div className='btn-container'>
        <button type='button' className='btn' onClick={handleEdit}>
          <FaEdit />
        </button>
        <button type='button' className='btn' onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  ) : null
}

export default ContextMenu
