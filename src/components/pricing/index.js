import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton'

const Pricing = () => {

  const priceState = {
    price: [100, 150, 200],
    position: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
    ],
    linkto: ['http://sales.b', 'http://sales.m', 'http://sales.s'],
    delay: [500, 0, 500]
  }

  const showBoxes = () => {
    return priceState.price.map((box, index) => (
      <Zoom key={index} className='pricing_item' delay={priceState.delay[index]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.price[index]}</span>
            <span>${priceState.position[index]}</span>
          </div>
          <div className="pricing_description">
            {priceState.desc[index]}
          </div>
          <div className="pricing_buttons">
            <MyButton 
              text="Purchase"
              style={{
                color:"ffffff"
              }}
              link={priceState.linkto[index]}
            />
          </div>
        </div>
      </Zoom>
    ));
  }

  return (
    <div className='bck_black'>
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">
          { showBoxes() }
        </div>
      </div>
    </div>
  )
}

export default Pricing