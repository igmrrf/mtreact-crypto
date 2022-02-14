import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import HeroImg from "../assets/img/merch_headimg.png";
import MerchImg1 from "../assets/img/merch_shirt.png";
import MerchImg2 from "../assets/img/merch_jean.png";
import MerchImg3 from "../assets/img/merch_jacket.png";
import MerchImg4 from "../assets/img/merch_hoodies.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Merchandise = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div
				className="merch__header"
				style={{backgroundImage: `url(${HeroImg})`}}
			>
				<Navbar />
				<div className="jumbotron merchcustom__header">
					<div className="row">
						<div className="col-12">
							<div data-aos="fade-in">
								<h1>Cryptocrat</h1>
								<h2>Merch!</h2>
								<p id="merch_headerdescription">
									Stand out from the crowd with our unique 
									collection for crypto enthusiasts.
								</p>
							</div>
{/*							<br /><br />
							<Link to='/merch' id="merchcollection_link">
								View Collection
							</Link>*/}
							<br /><br /><br /><br /><br /><br />
							<div className="row">
								<div className="col-lg-3 col-6 merchcard_col">
									<Link to="/merch"
										className="merchcard_link"
										data-aos="flip-left">
										<div className="card merchitems_card">
											<img
												src={MerchImg1}
												alt="merchshirt_image"
											/>
											<p>shirt</p>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-6 merchcard_col">
									<Link to="/merch"
										className="merchcard_link"
										data-aos="flip-right">
										<div className="card merchitems_card">
											<img
												src={MerchImg2}
												alt="merchjoggers_image"
											/>
											<p>joggers</p>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-6 merchcard_col">
									<Link to="/merch"
										className="merchcard_link"
										data-aos="flip-left">
										<div className="card merchitems_card">
											<img
												src={MerchImg3}
												alt="merchjacket_image"
											/>
											<p>jacket</p>
										</div>
									</Link>
								</div>
								<div className="col-lg-3 col-6 merchcard_col">
									<Link to="/merch"
										className="merchcard_link"
										data-aos="flip-right">
										<div className="card merchitems_card">
											<img
												src={MerchImg4}
												alt="merchhoodies_image"
											/>
											<p>hoodies</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer
				notHome={true}
				merchPage={true}
			/>
		</>
	)
}

export default Merchandise;