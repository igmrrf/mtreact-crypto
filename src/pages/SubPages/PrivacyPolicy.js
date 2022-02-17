import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/nav/Footer";
import * as BsIcons from "react-icons/bs";
import { useEffect } from "react";

const PrivacyPolicy = () => {

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
				<h1>Privacy Policy</h1>
			</div>
			<div className="container privacydiv_container">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-9">
						<div className="single_privacy_div">
							<h2>Overview</h2>
							<p>This Privacy Policy applies to users, customers 
								employees, third parties, visitors, clients and 
								other connections (referred to as “you” or “Users”) 
								who order, sign up or interact with us or any of our 
								products, services, information, content, functions, 
								features and tools (“our Services” or “the Service”) 
								provided on our website, mobile application or API 
								(altogether referred to as “Coins & Gifts Platform”).
								<br />
								User reserves the right to exercise their privacy 
								and data protection rights under any applicable 
								law or regulation.
							</p>
						</div>
						<br />
						<div className="single_privacy_div">
							<h2>Consent</h2>
							<p>You accept and consent to the terms of this Privacy 
								Policy when you order, sign up or interact with us or 
								any of our Services regardless of how they are accessed 
								or used.
							</p>
						</div>
						<br />
						<div className="single_privacy_div">
							<h2>Changes to this Privacy Policy</h2>
							<p>We may modify this Privacy Policy from time to 
								time by publishing or uploading an updated version 
								on our website. The updated version will become 
								effective as of the published date.
								Furthermore, if any revised version includes a 
								substantial change in terms, Users shall be informed 
								via email (sent to the email address specified in 
									your account), by means of a notice on the Coins & Gifts 
								Platform.
							</p>
						</div>
						<br />
						<div className="single_privacy_div">
							<h2>Controler</h2>
							<p>Coins & Gifts is the controller and responsible for the 
								privacy of your personal data on the Coins & Gifts Platform.

								If you have any questions about this privacy policy or 
								our privacy practices, please contact us below –
								<br />
								Customer Service Desk
								Email address: <a href="mailto:hello@myCoins & Gifts.co">
									hello@myCoins & Gifts.co</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="jumbotron privacy_listingcontainer">
				<div className="row d-flex justify-content-center">
					<div className="col-xl-10">
						<div className="card privacy_listingcard">
							<h2>
								<BsIcons.BsBookmarkFill />
								The Data We Collect About You
							</h2>
							<p>Personal data or personal information, means any 
								information about an individual from which that 
								person can be identified. It does not include 
								data where the identity has been removed 
								(anonymous data).
							</p>
							<p>Further details are provided below.</p>
							<p><strong>1. Identity Data</strong></p>
							<p>Identity Data includes first name, maiden name, 
								last name, username or similar identifier, 
								marital status, title, date of birth, gender, 
								signature, billing address, delivery address, 
								email address, BVN etc.
							</p>
							<p>We may collect and process your Identity Data in 
								order to provide our Services, comply with applicable 
								laws and regulatory requirements, detect and prevent 
								fraud, protect our vital interests and that of others, 
								provide Service communications, provide customer 
								service, maintain data and information security, 
								facilitate corporate reorganisations, implement 
								direct marketing campaigns
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Disclosure Of Your Personal Data
							</h2>
							<p>We may share your personal data with certain 
								third-party which we deem necessary in order 
								to provide our Services effectively or comply 
								with applicable laws and regulatory requirements.
							</p>
							<p>Our engagement terms with these third parties 
								shall strictly require them to only use your 
								information in connection with the services 
								they perform for us and prohibit them from 
								selling your information to anyone else. 
								Such engagements shall also be subject to 
								professional duty of confidentiality where 
								applicable.
							</p>
							<p>Further information are set out below –</p>

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
								Third Party Websites
							</h2>
							<p>The Coins & Gifts Platform may contain links to 
								third-party websites and applications of 
								interest, including advertisements and external 
								services, that are not affiliated with us. Once 
								you have used these links to leave the Coins & Gifts 
								Platform, any information you provide to these 
								third parties is not covered by this Privacy 
								Policy, and we cannot guarantee the safety and 
								privacy of your information.
							</p>
							<p>
								Before visiting and providing any information 
								to any third-party websites, you should inform 
								yourself of the privacy policies and practices 
								(if any) of the third party responsible for that 
								website, and should take those steps necessary 
								to, in your discretion, protect the privacy of 
								your information.
							</p>
							<p>We are not responsible for the content or privacy 
								and security practices and policies of any third 
								parties, including other sites, services or 
								applications that may be linked to or from the 
								Coins & Gifts Platform.
							</p>
							<br />
							<br />
							<h2>
								<BsIcons.BsBookmarkFill />
								Data Security
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

export default PrivacyPolicy;