import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

const VenueInfo = () => {

	const windowValues = [
		{ title: 'Event Date & Time', desc: 'Sep 20, 2022 @1:20 pm' },
		{ title: 'Event Location', desc: 'Fenway Park, Boston ' }
	]

	return (
		<div className='bck_black'>
			<div className="center_wrapper">
				<div className="vn_wrapper">

					<Zoom className='vn_item' triggerOnce>
						<div>
							<div className="vn_outer" >
								<div className="vn_inner">
									<div className='vn_icon_square bck_red  '></div>
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_calendar})`
										}}
									></div>
									<div className="vn_title">
										{windowValues[0].title}
									</div>
									<div className="vn_desc">
										{windowValues[0].desc}
									</div>
								</div>
							</div>
						</div>
					</Zoom>

					<Zoom className='vn_item' delay={500}>
						<div>
							<div className="vn_outer" >
								<div className="vn_inner">
									<div className='vn_icon_square bck_red  '></div>
									<div
										className="vn_icon"
										style={{
											background: `url(${icon_location})`
										}}
									></div>
									<div className="vn_title">
										{windowValues[1].title}
									</div>
									<div className="vn_desc">
										{windowValues[1].desc}
									</div>
								</div>
							</div>
						</div>
					</Zoom>

				</div>
			</div>
		</div>
	)
}

export default VenueInfo