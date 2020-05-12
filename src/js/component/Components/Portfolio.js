import React from "react";
import Sparkle from "../../../img/SparkleSalon.jpg";
import PortfolioImg from "../../../img/portfolio.jpg";
import OnePage from "../../../img/one-page.jpg";
//import Image4 from "../../../img/4.jpg";

export class Portfolio extends React.Component {
	render() {
		return (
			<section
				className="sec"
				id="portfolio"
				style={{ background: "#191919" }}>
				<div className="container-fluid content">
					<div className="row mxw justify-content-center">
						<h3>Meet My Work</h3>
					</div>
					<div className="row row-cols-1 row-cols-md-4 justify-content-center text-center">
						<div
							data-aos="flip-left"
							className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src={PortfolioImg}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Portfolio Website <br />
										<span>my website.</span>
									</h5>
									<div className="row justify-content-center">
										<a
											href="#"
											className="btn btn-outline-secondary">
											Code
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							data-aos="flip-down"
							className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src={Sparkle}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Sparkle Salon <br />
										<span>Busines Website.</span>
									</h5>
									<div className="row">
										<a
											href="#"
											className="btn btn-outline-secondary"
											style={{ marginLeft: "15px" }}>
											Live
										</a>
										<a
											href="#"
											className="btn btn-outline-secondary"
											style={{ marginLeft: "20px" }}>
											Code
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							data-aos="flip-right"
							className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src={OnePage}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										Single Page Site <br />
										<span>one web page template.</span>
									</h5>
									<div className="row">
										<a
											href="#"
											className="btn btn-outline-secondary"
											style={{ marginLeft: "15px" }}>
											Live
										</a>
										<a
											href="#"
											className="btn btn-outline-secondary"
											style={{ marginLeft: "38px" }}>
											Code
										</a>
									</div>
								</div>
							</div>
						</div>
						{/*<div className="col-md-auto teamCard">
							<div className="card h-100 designerCard">
								<img
									src="4.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body designerDetail">
									<h5 className="card-title">
										John Doe <br />
										<span>Creative Director.</span>
									</h5>
								</div>
							</div>
                        </div>*/}
					</div>
				</div>
			</section>
		);
	}
}
