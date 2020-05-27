# Portfolio Application

This template was develop using create-react-app boilerplate created by for 4Geeks Academy.
this is a professional, full-responsive, and high performance Portfolio, developed using HTML5,CSS3, Bootstrap, and React.js. you can dowload this repo overwrite and customize anything to your needs.

#### Download the boilerplate using git

```
$ git clone https://github.com/mberrio10/My-Portfolio.git
$ cd react-hello
```

##### and install the npm package:
```
$ npm install
```

## Run the application!

For Windows, Mac, Linux or Gitpod, start the webpack server with live reload:
- `$ npm run start`

You can update the `styles/index.scss` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## OnScroll Navbar change!

in the Navbar component you can change the `addEventlistener` to your liking 
```Javascript
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
	}
```
and you have to style the element with the inline style attribute, the value must be a JavaScript object:
```Javascript
<nav
	id="navbar-example2"
	className="navbar navbar-expand-lg fixed-top navbar-light"
	style={{
		backgroundColor: `${this.state.navchange}`,
		zIndex: "1000",
		transition: "0.6s"
	}}>
```
## This Aplication comes with AOS installed!

to use AOS in this application set animation using data-aos attribute for example:
```Javascript
<div data-aos="fade-in"></div>
```
Make sure to import script, styles and initialize AOS:

```Javascript
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
							///
						</p>
					</div>
				</div>
			</section>
		);
	}
}
```
Check the documenatation for [AOS](https://github.com/michalsnik/aos) for more detail info.

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
