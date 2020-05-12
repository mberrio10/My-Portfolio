import React from "react";
import { Navbar } from "./Components/Navbar";
//import { BrowserRoutee } from "react-router-dom";
import { Banner } from "./Components/Banner";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
//import { Photoshop } from "./Components/Photoshop";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<div
				data-spy="scroll"
				data-target="#navbar-example2"
				data-offset="0">
				<Navbar />
				<Banner />
				<About />
				<Services />
				<Portfolio />
				{/*<Photoshop />*/}
				<Contact />
			</div>
		</React.Fragment>
	);
}
