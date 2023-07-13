import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from "next/link";

const slideshow = () => {
    const images = [ 
        "images/1.png", 
        "images/2.png",
        "images/3.png",
    ];

    return (
		<div>
			<Carousel showThumbs={false} autoPlay infiniteLoop>
				{images.map((each, index) => (
					<div key={index}>
                        <Link href='/' passHref className='flex'>
                            <img
                                src={each}
                            />
                        </Link>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default slideshow;