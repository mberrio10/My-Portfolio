# Portfolio Application

This template was develop using create-react-app boilerplate created by for 4Geeks Academy.
this is a professional, full-responsive, and high performance Portfolio, developed using HTML5,CSS3, Bootstrap, and React.js. you can dowload this repo overwrite and customize anything to your needs.

#### Download the boilerplate using git

```
$ git clone https://github.com/mberrio10/My-Portfolio.git
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

## This Aplication comes with AOS installed

to use AOS in this application 

```
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
Check the documenatation for [AOS](https://github.com/michalsnik/aos)

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
