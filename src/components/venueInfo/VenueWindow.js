import React from 'react'

import { Zoom } from 'react-awesome-reveal'

const VenueWindow = (props) => {
  return (
    <Zoom className='vn_item' delay={500}>
      <div>
        <div className="vn_outer" >
          <div className="vn_inner">
            <div className='vn_icon_square bck_red  '></div>
            <div
              className="vn_icon"
              style={{
                background: `url(${props.icon})`
              }}
            ></div>
            <div className="vn_title">
              {props.title}
            </div>
            <div className="vn_desc">
              {props.desc}
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  )
}

export default VenueWindow