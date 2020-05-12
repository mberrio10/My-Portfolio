import React from "react";
import htmlIcon from "../../../img/html.png";
import cssIcon from "../../../img/css.png";
import psIcon from "../../../img/Ps.png";
import bootstrapIcon from "../../../img/Bootstrap.png";
import jsIcon from "../../../img/Js.png";
import ajaxIcon from "../../../img/ajax.png";
import nodeIcon from "../../../img/node.png";
import reactIcon from "../../../img/react.png";
import phpIcon from "../../../img/php.png";
import mysqlIcon from "../../../img/Mysql.png";
import apiIcon from "../../../img/api.png";
import githubIcon from "../../../img/github.png";

export class Services extends React.Component {
	render() {
		return (
			<section className="sec services" id="services">
				<div className="container content">
					<div className="row mxw justify-content-center">
						<div className="col-lg-12">
							<h3>My Languages</h3>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-12">
							<ul className="list-group list-group-horizontal-md">
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid htmlIcon"
										src={htmlIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid cssIcon"
										src={cssIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid psIcon"
										src={psIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid bootstrapIcon"
										src={bootstrapIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid jsIcon"
										src={jsIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid ajaxIcon"
										src={ajaxIcon}
									/>
								</li>
							</ul>
							<ul className="list-group list-group-horizontal-md">
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid nodeIcon"
										src={nodeIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid reactIcon"
										src={reactIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid phpIcon"
										src={phpIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid mysqlIcon"
										src={mysqlIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid apiIcon"
										src={apiIcon}
									/>
								</li>
								<li
									data-aos="zoom-in"
									className="list-group-item">
									<img
										className="img-fluid gitIcon"
										src={githubIcon}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
