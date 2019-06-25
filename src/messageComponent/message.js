
import React from 'react'


const Message = ({ message }) => {
    if (message === "" ){
        return null
    } return (
        <div className="alert alert-info">
          <strong>{message}</strong>
        </div>
    )
}

export default Message;