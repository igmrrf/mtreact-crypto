import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import * as BsIcons from "react-icons/bs";
import { useEffect } from "react";

const TermsConditions = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	
	return (
		<>
			<Navbar
				notHome={true}
				subPage={true}
			/>
			<div className="jumbotron privacy_header">
				<h1>Terms Of Service</h1>
			</div>
			<div className="container privacydiv_container">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-9">
						<div className="single_privacy_div">
							<h2>Introduction</h2>
							<p>
								This Terms of Use (this “Agreement”) is an agreement 
								between you and Cryptocrat OÜ (“Cryptocrat” or “We”) 
								and governs your use of all Cryptocrat Services. 
								You unconditionally accept and agree to be bound 
								by the terms and conditions in this Terms of Use 
								including the Privacy Policy as well any applicable 
								laws and guidelines when you access the Cryptocrat 
								Platform or use any of the Cryptocrat Services. 
								If you disagree with any part hereof, please do 
								not use the Cryptocrat Platform or any of the Cryptocrat 
								Services. You should read this Agreement carefully.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="jumbotron privacy_listingcontainer">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-9">
						<div className="card privacy_listingcard">
							<h2>
								<BsIcons.BsBookmarkFill />
								Our Services
							</h2>
							<p>Cryptocrat is a financial technologies services provider 
							and acts as such by creating, hosting, maintaining and 
							providing Cryptocrat Services our website, mobile 
							application or API (altogether referred to as 
								“Cryptocrat Platform”).
							</p>
							<p>Cryptocrat Services refers to the services which enable 
							you and other users congregated on the Cryptocrat Platform 
							to –</p>
							<p>(a) Send, receive, buy and sell cryptocurrency such as 
							bitcoin and Ethereum (“cryptocurrency transactions”) 
							via a cryptocurrency wallet hosted by Cryptocrat;</p>
							<p>(b) pay for bills and services such as airtime,
							 data, electricity, cable TV (“refill transactions) 
							 via a fiat wallet hosted by Cryptocrat (altogether 
							 	referred to as the “Cryptocrat Services”)</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Eligibility
							</h2>
							<p>
								To be eligible to use or access the Cryptocrat Platform 
								and the Cryptocrat Services, the following conditions 
								must be met by you –
							</p>

							<p><strong>(a) Third party identity verification 
								service providers </strong>
								– In order to detect and prevent fraudulent 
								transactions and comply with applicable laws 
								and regulatory requirements, we may share your 
								personal data with third party identity 
								verification service providers who shall verify 
								your identity against available public records 
								and other third-party databases.
							</p>
							<p><strong>(b)  Banks and other financial institution 
								partners </strong>
								– In order to process payments and withdrawals 
								and comply with applicable laws and regulatory 
								requirements we may share your personal data 
								with banks and financial institutions.
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								KYC Information
							</h2>
							<p>
								You hereby acknowledge that in order to use or 
								access the Cryptocrat Platform or Cryptocrat Services, 
								you must provide us with correct and updated 
								Personal Information.
							</p>
							<p>
								Personal Information may include –identity data, 
								identity documents, transaction data, and technical 
								data. Your Personal Information shall be properly 
								protected and kept confidential at all times.
							</p>
							<p>
								We may use, process, store and transfer your Personal 
								Information in order to –
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Security and unauthorised use
							</h2>
							<p>
								We have put in place appropriate security measures 
								(and contractually require third parties we share 
								your information with to maintain) appropriate 
								physical, technical and administrative safeguards 
								to prevent the personal data from being accidentally 
								loss, misuse or in an unauthorised access, alteration 
								or disclosure of your personal data. In addition, 
								we limit access to your personal data to those 
								employees, agents, contractors and other third 
								parties who have a business need to know. They will 
								only process your personal data on our instructions, 
								and they are subject to a duty of confidentiality.
							</p>
							<p>
								The security of your personal information it is 
								instructive to note that no method of electronic 
								transmission or storage of data guarantees 100% 
								security. Thus, we strive to use commercially 
								acceptable means to protect your personal 
								information and we cannot guarantee its absolute 
								security.
							</p>
							<p>
								Based on the foregoing, we have established 
								appropriate procedures to deal with any suspected 
								personal data breach and will notify you and any 
								applicable regulator of a breach where we are 
								legally required to do so.
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Payment Methods
							</h2>
							<p>
								Fiat wallets on the Cryptocrat Platform may be funded 
								via Electronic Funds Transfer, Mobile Money or Card 
								Payments as applicable for the user’s region.
							</p>
							<p>
								Users in South Africa may fund their fiat wallets via 
								Visa and MasterCard. If you choose to fund your fiat 
								wallet using this payment option, you agree that 
								Cryptocrat’s outlet country at the time of presenting 
								payment options to you is South Africa and that the 
								transaction currency is South African Rand (ZAR).
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Responsibility
							</h2>
							<p>
								Cryptocrat takes responsibility for all aspects relating 
								to the Cryptocrat Services, customer service and support, 
								and dispute resolution.
							</p>
						</div>
					</div>
				</div>
				<br />
			</div>
			<Footer
				notHome={true}
			/>
		</>
	)
}

export default TermsConditions;