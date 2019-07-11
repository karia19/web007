import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="alert alert-info">
    <strong>{message}</strong>
   </div>
  )
}

export default Notification