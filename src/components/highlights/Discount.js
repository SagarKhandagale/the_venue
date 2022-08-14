import React, { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton';

const Discount = () => {

  const [percentVal, setPercentVal] = useState(0);

  const percentage = () => {
    if (percentVal < 30) {
      setTimeout(() => {
        setPercentVal(percentVal + 1);
      }, 20);
    }
  }

  useEffect(() => {
    percentage();
  }, [percentVal]);

  return (
    <div className='center_wrapper'>
      <div className="discount_wrapper">

        <Fade
          onVisibilityChange={(inView) => {
            console.log(inView);

            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{percentVal}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide left>
          <div className="discount_description">
            <h3>Purchase ticket before 20th Jan</h3>
            <p>
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
            <MyButton
              text='Purchase Ticket'
              link='https://google.com'
              size="small"
              style={{
                background: "#ffa800",
                color: "#ffffff"
              }}
              iconTicket={true}
            />
          </div>
        </Slide>



      </div>
    </div>
  )
}

export default Discount