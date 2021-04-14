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
    props.isRightClicked && setIsOpen(true)
  }, [props.isRightClicked])

  useEffect(() => {
    const hideMenu = (e) => {
      const parent = props.parent.current
      if (parent.contains(e.target)) {
        e.preventDefault()
      }
      if (!parent.contains(e.target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', hideMenu)

    return () => {
      window.removeEventListener('click', hideMenu)
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
