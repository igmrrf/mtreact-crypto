import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import { Link } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect } from "react";

const HelpCenter = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	
	return (
		<>
			<Navbar
				notHome={true}
			/>
			<div className="jumbotron helpcenter_container">
				<div className="row justify-content-center">
					<div className="col-xl-8 col-md-9 col-sm-11 col-12">
						<div className="card helpcenter_bodycard">
							<h1>How can we help?</h1>
							<p>
								Get answers and explore everything you need to know 
								about your question at <br /> your fingertips. 
								If you have any further questions please Contact us
							</p>
							<br />
							<br />
							<form id="helpcenter_form">
								<div className="d-flex justify-content-start">
									<input
										placeholder="How can we help you today?"
										className="form-control form-control-lg"
									/>
									<button type="submit">Search</button>
								</div>
							</form>
							<br />
							<br />
							<ScrollContainer className="custom_helps">
								<Link to="/">
									<div
										className="card customhelp_card"
										id="first"
									>
										<p>FAQs</p>
										<span>Get quick answers to the most popular 
										questions</span>
									</div>
								</Link>
								<Link to="/">
									<div
										className="card customhelp_card"
										id="second"
									>
										<p>Report an issue</p>
										<span>Get quick answers to the most popular 
										questions</span>
									</div>
								</Link>
								<Link to="/">
									<div
										className="card customhelp_card"
										id="third"
									>
										<p>Create a Ticket</p>
										<span>Get quick answers to the most popular 
										questions</span>
									</div>
								</Link>
								<Link to="/">
									<div
										className="card customhelp_card"
										id="fourth"
									>
										<p>Leave Feedback</p>
										<span>Get quick answers to the most popular 
										questions</span>
									</div>
								</Link>
								<Link to="/">
									<div
										className="card customhelp_card"
										id="fifth"
									>
										<p>Crypto Dictionary</p>
										<span>Get quick answers to the most popular 
										questions</span>
									</div>
								</Link>
							</ScrollContainer>
						</div>
					</div>
				</div>
			</div>

			<Footer
				notHome={true}
			/>
		</>
	)
}

export default HelpCenter;