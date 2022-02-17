import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
// import CryptoUniverseImg from "../assets/img/cryptouniverse.svg";
import HeaderCard from "../components/card/HeaderCard";
// import AboutImg from "../assets/img/photo-1529156069898-49953e39b3ac.jpeg";
// import PaymentGateway from "../assets/img/payment_gateway.svg";
// import GlobeImg from "../assets/img/girl.svg";
import { Link } from "react-router-dom";
// import CryptoDevice from "../assets/img/crypto_device.webp";
import * as RiIcons from "react-icons/ri";
import { useEffect } from "react";

const Home = () => {

	useEffect(() => {
		// window.scrollTo(0,0);
	}, []);
	
	return (
		<>
			<header
				className="hero__header"
				style={{backgroundImage: "url('https://images.unsplash.com/photo-1640457298166-fe3eddec2d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')"}}
			>
				<Navbar />
				<HeaderCard />
			</header>
			<div className="container-fluid">
				<div
					className="row universe-wrapper">
					<div className="col-xl-8 col-lg-9 col-md-9 col-12"
						id="universe-wrappercol">
						<h4>Coins & Gifts 
						<span>To The Crypto Rescue</span></h4>
						<br />
						<p id="description">We like to think of ourselves as 
							superheroes here at Cryptocrat. We aren’t in the 
							business of doing things just because they are
							routine. We are in the business of creating 
							solutions that are simply mind-blowing.
						</p>
						<br />
						<div
							id="about__card"
							className="card about__card"
							data-aos="fade-in"
						>
							<img
								src={`https://crypto.com/static/exchangeGlobal-cb1534638b50402d13c683fbfe9abf51.png`}
								alt="aboutus_picture"
					    		width="640"
					    		height="360"
							/>
							<p>
								<Link to="/about">
									<span id="text">
										Wanna know more about us ?
									</span> <span id="arrow">⟶</span>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div
					className="row d-flex justify-content-center about-crypto">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-7 col-12"
						id="about-cryptocol" data-aos="fade-down">
						<h4>
							Buy & Sell Crypto with Confidence
						</h4>
						<br />
						<p id="description">Ever imagined crypto being fun as 
							well as functional? Well, we too have, and we have 
							created Cryptocrat to do just that. Come on board 
							and experience crypto the redefined way.
						</p>
{/*						<Link to='/start'>
							Get started for free
						</Link>
						<br />*/}
						<img
							src={`https://res.cloudinary.com/cryptocrat/image/upload/
								v1644850944/payment_gateway_wtkou4.svg`}
							alt="payment gateway"
							className="gateway_img"
				    		width="640"
				    		height="360"
						/>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-5 
						col-12 order-sm-last order-first">
						<img
							src={`https://res.cloudinary.com/cryptocrat/image/upload/
								v1644850954/girl_vceyth.svg`}
							alt="globe_img"
							className="globe_img"
							data-aos="fade-right"
				    		width="640"
				    		height="360"
						/>
					</div>
				</div>

				<div className="row d-flex justify-content-center 
					crypto-explained">
					<div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
						<img
							src={`https://crypto.com/static/defi-2c236a0a49cff7cf950c83b008b87b4a.png`}
							className="img-fluid crypto_explainedImg"
							alt="CryptoDevice"
							data-aos="flip-right"
				    		width="640"
				    		height="360"
						/>
					</div>
					<div className="col-xl-8 col-lg-8 col-md-7 col-12">
						<h4>
							Crypto
							<span>Trading, Simplified</span>
						</h4>
						<br />
						<p id="description">Think lifting a feather is effortless? 
						Try trading with Cryptocrat</p>

						<div className="row">
							<div className="col-lg-6 col-md-8 col-sm-6 col-10">
								<div
									className="card crypto_benefitscard"
									data-aos="fade-up">
									<p>
										<span><RiIcons.RiSendPlaneFill /></span>
										Real time wallet value
									</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-8 col-sm-6 col-10">
								<div
									className="card crypto_benefitscard"
									data-aos="fade-up">
									<p>
										<span><RiIcons.RiSendPlaneFill /></span>
										Seamless Crypto transactions
									</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-8 col-sm-6 col-10">
								<div
									className="card crypto_benefitscard"
									data-aos="fade-up">
									<p>
										<span><RiIcons.RiSendPlaneFill /></span>
										Real time Crypto values
									</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-8 col-sm-6 col-10">
								<div
									className="card crypto_benefitscard"
									data-aos="fade-up">
									<p>
										<span><RiIcons.RiSendPlaneFill /></span>
										Crypto answers at your fingertips
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row d-flex justify-content-center 
					cryptocrat-advantages">
					<div className="col-md-4 col-sm-4 col-12">
						<div className="card card_one">
							<div data-aos="fade-up">
								<h4>Cryptocrat is secure and trustworthy</h4>
								<br />
								<p>Trusted by millions globally for its secure
								platform, we are confident to say that your 
								crypto is in the right hands.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-12">
						<div className="card card_two">
							<div data-aos="fade-up">
								<h4>Cryptocrat is easy-to-use</h4>
								<br />
								<p>Everyone loves an easy-to-use platform, 
								that is why our top priority is providing 
								you with seamless services you can enjoy 
								without breaking a sweat.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-12">
						<div className="card card_three">
							<div data-aos="fade-up">
								<h4>Cryptocrat is built for you</h4>
								<br />
								<p>Every one of our services is built with you 
								in mind. Beating our chest we can say, we give 
								you the best crypto experience.</p>
							</div>
						</div>
					</div>
				</div>

{/*				<div className="row d-flex justify-content-center newsletter-row">
					<div className="col-12">
						<div className="card newsletter__card">
							<h4>Subscribe To Our Newsletter</h4>
							<br />
							<p>Apart from a man tripping down the different 
							crypto dips, there's a lot to explore in the Crypto 
							space and we'd love to share that with you. Be it our 
							product update, a new crypto fact, or a random recipe 
							we pasted by accident.</p>
							<br />

							<form
								className="newsletter__form"
							>
								<div className="row">
									<div className="col-md">
										<input
											type="email"
											className="form-control"
											placeholder="Enter Email Address"
											id="subscribe-input"
											required={true}
											name="subscribe-input"
											aria-label="Enter Email Address"
										/>
									</div>
									<div className="col-md-auto">
										<button
											className="subscribe-btn"
											type="submit"
											id="subscribe-btn"
											aria-label="subscribe-btn"
											name="subscribe-btn"
										>
											Subscribe For Free
										</button>
									</div>
								</div>
							</form>

						</div>
					</div>
				</div>*/}
			</div>
			<Footer />
		</>
	)
}

export default Home;