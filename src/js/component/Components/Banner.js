import React from "react";
import bgBanner from "../../../img/bg-banner.jpg";
import myAvatar from "../../../img/myAvatar.png";

export class Banner extends React.Component {
	render() {
		return (
			<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
				<img className="bgBanner" src={bgBanner} />
				<div className="container-fluid">
					<div className="row mb-2 justify-content-end">
						<div className="col-lg-7 px-0">
							<h1 className="display-4 text-right">
								Hey! I`m Mike B. <br />
								<span>Full Stack Web Developer</span>
							</h1>
							<p className="lead my-3 text-right font-italic">
								Here to make your bussines Groovy
							</p>
						</div>
					</div>
				</div>
				<img className="myAvatar" src={myAvatar} />
			</div>
		);
	}
}
