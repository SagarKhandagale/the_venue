import React from 'react'
import { Button } from '@mui/material'
import TicketIcon from '../../resources/images/icons/ticket.png'
import { color } from '@mui/system'

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : 'large'}
      style={{
        background: "#8e8e8e",
        color: "#ffffff",
        ...props.style
      }}
    >
      {(props.iconTicket) &&
        <img
          src={TicketIcon}
          alt="ticket_icon"
          className='iconImage'
        />
      }
      {props.text}
    </Button>
  )
}

export default MyButton