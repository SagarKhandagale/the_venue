import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.805200323488!2d-71.09940648455506!3d42.34667637918787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63f253f6f%3A0xa2800dcb647a5504!2sFenway%20Park!5e0!3m2!1sen!2sus!4v1660446277532!5m2!1sen!2sus"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        title="gmaps"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location;