import React from "react";
import _ from "lodash";
import myIcon from "../../../img/MyIcon64.png";

export class Navbar extends React.Component {
	state = [];

	componentDidMount() {
		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const colorscroll =
					window.scrollY < 100 ? "transparent" : "black";
				this.setState({ navchange: colorscroll });
			}, 100)
		);
		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const togglescroll = window.scrollY < 100 ? "white" : "#8c9a3d";
				this.setState({ togglechange: togglescroll });
			}, 100)
		);

		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const fontscroll = window.scrollY < 100 ? "white" : "#8c9a3d";
				this.setState({ fontchange: fontscroll });
			}, 100)
		);

		document.addEventListener(
			"scroll",
			_.throttle(() => {
				const sizescroll =
					window.scrollY < 100 ? "40px 1rem" : "0px 1rem";
				this.setState({ sizechange: sizescroll });
			}, 100)
		);
	}
	render() {
		return (
			<nav
				id="navbar-example2"
				className="navbar navbar-expand-lg fixed-top navbar-light"
				style={{
					backgroundColor: `${this.state.navchange}`,
					padding: `${this.state.sizechange}`,
					zIndex: "1000",
					transition: "0.6s"
				}}>
				<div className="container">
					<a
						className="navbar-brand"
						style={{
							color: `${this.state.fontchange}`
						}}
						href="#">
						<img
							src={myIcon}
							className="img-fluid MyLogo"
							alt="Responsive image"
						/>
					</a>
					<button
						className="navbar-toggler"
						style={{
							backgroundColor: `${this.state.togglechange}`
						}}
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-item nav-link active"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#about">
								About
							</a>
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#services">
								Services
							</a>
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#portfolio">
								Portfolio
							</a>
							{/*<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#photoshop">
								Graphic Design
							</a>*/}
							<a
								className="nav-item nav-link"
								style={{
									color: `${this.state.fontchange}`
								}}
								href="#contact">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
