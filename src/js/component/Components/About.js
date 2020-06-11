import React from "react";
//import codeMatrix from "../../../img/matrix-code.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export class About extends React.Component {
	render() {
		Aos.init({ duration: 2000 });
		return (
			<section className="sec about" id="about">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<h3 data-aos="fade-down">Who I am</h3>
						<p data-aos="fade-up" className="text-center lead">
							I am a passionate full stack web developer and
							musician, passionate about technology and the arts.
							These two have always been my two great passions
							wherein through them I have been able to exploit my
							creativity, tenacity, and attention to detail. I
							like to develop because just like music, its a way
							to express myself and allows others to do so as
							well. I am adaptable in group projects as well as
							individual ones. I am always trying to keep up with
							the latest trends in programming, so that I can keep
							constantly learning.
						</p>
						<a
							href="https://firebasestorage.googleapis.com/v0/b/portfolio-images-eba3c.appspot.com/o/Mike_Berrio_Resume_2020.pdf?alt=media&token=0807d651-ba71-428e-b018-15203d073674"
							data-aos="fade-up-right"
							className="btn btn-secondary btn-lg active"
							role="button"
							aria-pressed="true">
							Check My Resume
						</a>
					</div>
				</div>
			</section>
		);
	}
}
