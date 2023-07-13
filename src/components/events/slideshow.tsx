import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const slideshow = () => {
    const images = [ 
        "images/1.png", 
        "images/2.png",
        "images/3.png",
    ];

    return (
		<div>
			<Carousel showThumbs={false} autoPlay>
				{images.map((each, index) => (
					<div key={index} className="">
						<img
							src={each} width={300} height={300}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default slideshow;