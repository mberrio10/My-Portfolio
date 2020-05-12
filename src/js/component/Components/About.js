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
							Hi, I`m Mike Berrio a passionate about technology
							and the arts, I am a full-stack web developer and a
							musician, these have always been my two great
							passions wherein through them, I have been able to
							exploit my creativity, tenacity, and my focus on
							every detail. I am excited to program because as
							well as with music, I can develop pieces that allow
							people to express, interact, and project their
							ideas. On the other hand, I`m excited to share as a
							team the same purpose to take a project forward. I`m
							always keeping up with the latest trends in
							programming and constant learning.
						</p>
						<button
							type="button"
							data-aos="fade-up-right"
							className="btn btn-dark">
							Check My Resume
						</button>
					</div>
				</div>
			</section>
		);
	}
}
