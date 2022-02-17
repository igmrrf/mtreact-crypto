import * as AiIcons from "react-icons/ai";

const HeaderCard = () => {
	return (
		<>
		<div className="jumbotron custom__header">
			<div className="header">
				<h1 id="header_text1">Crypto Moving</h1>
				<h2 id="header_text2">At Your Own Pace</h2>
				<p id="subheader_text">
					<strong>
						Join thousands of people globally, buy and sell 
						cryptocurrencies the fast and secure way.
					</strong>
				</p>
				<br />
				<div className="app__buttons">
					<a href="htttp://wa.me/+2348137045484">
						<AiIcons.AiOutlineWhatsApp />
						Whatsapp
					</a>
					<a href="htttp://wa.me/+2348137045484" id="second">
						<AiIcons.AiOutlineMessage />
						Livechat
					</a>
				</div>
			</div>
			<div className="mobiledevice_heroImg">
				<img
					src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850950/bitcoin_bkffew.svg`}
					alt="mobiledevice_svg"
					data-aos="fade-down"
				    width="640"
				    height="360"
				/>
			</div>
		</div>
		</>
	)
}

export default HeaderCard;