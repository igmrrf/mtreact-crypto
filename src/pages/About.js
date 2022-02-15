import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
// import AboutImg from "../assets/img/photo-1529156069898-49953e39b3ac.jpeg";
// import AboutLogo from "../assets/img/logo.png";
// import JourneyShip from "../assets/img/journey_ship.png";
// import MedalImg from "../assets/img/medal.png";
import { useEffect } from "react";

const About = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Navbar
				notHome={true}
			/>

			<div className="jumbotron about__header">
				<h1>Meet the Magicians</h1>
				<img
					src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850946/photo-1529156069898-49953e39b3ac_d1j4op.jpg`}
					alt="cryptocrat_humans"
					data-aos="fade-right"
				/>
			</div>
			<div className="jumbotron about_contentdiv">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-md-8">
						<h1>Who are Cryptans?</h1>
						<p>We’re a bunch of misfits who believe that crypto can be 
							simplified into its easiest form. Together, 
							we have created a really interesting place to work. 
							From our lollipop moments to our ambiance and work ethics
							that encourage growth, Cryptocrat has the best company 
							culture style in Africa.
						</p>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 text-center">
						<img
							src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850953/logo_bozhqb.png`}
							alt="cryptocrat_logo"
							className="img-fluid"
							data-aos="fade-in"
						/>
					</div>
				</div>
			</div>
			<div className="jumbotron about__journeydiv">
				<div className="row">
					<div className="col-xl-8 col-lg-8 col-md-8">
						<img
							src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850950/journey_ship_mnju0n.png`}
							alt="journey_ship"
							data-aos="fade-top"
						/>
						<h1>Our Journey So Far</h1>
						<p>Highlighting Our Milestones And Major Accomplishments</p>
					</div>
					<div className="col-xl-2 col-lg-3 col-md-3 text-center">
						<img
							src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850953/medal_zcrwrn.png`}
							alt="cryptocrat_medal"
							className="img-fluid"
							data-aos="fade-right"
						/>
					</div>
				</div>
			</div>

			<br />
			<br />
			<Footer notHome={true} />
		</>
	)
}

export default About;