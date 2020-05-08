import React from "react";
import { Navbar } from "./Components/Navbar";
import { BrowserRoutee } from "react-router-dom";
import { Banner } from "./Components/Banner";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Portfolio } from "./Components/Portfolio";
import { Team } from "./Components/Team";
import { Contact } from "./Components/Contact";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Banner />
			<About />
			<Services />
			<Team />
			<Portfolio />
			<Contact />
		</React.Fragment>
	);
}
