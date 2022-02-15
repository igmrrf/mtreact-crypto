// import BitcoinImg from "../../assets/img/bitcoin.svg";
// import FooterHeadImg from "../../assets/img/footer_headimage.webp";
import { Link } from "react-router-dom";
// import CompanyLogo from "../../assets/img/app_logo.svg";

const Footer = ({notHome, merchPage}) => {
	return (
	<>
		{
			notHome?'':
			<div className="w-100">
		    	<img
		    		src={`https://res.cloudinary.com/cryptocrat/image/upload/
		    			v1644850955/footer_headimage_bwlg53.jpg`}
		    		alt="footer_headimg"
		    		className="img-fluid footer_headimg"
		    	/>
	    	</div>
		}
	    <footer className={`footer ${merchPage?'merch_footer':''}`}>
	        <div className="container-fluid">
	            <div className="footer__top">
	                <div className="row">
	                    <div className="col-sm-10">
	                        <div className="footer__top__logo">
	                            <Link to="/">
	                                Cryptocrat
	                            </Link>
	                        </div>
	                        <br />
							<p id="short_note">
	                            Cryptocrat is an alternative payment solutions 
	                            company that facilitates the easy use of 
	                            cryptocurrencies for everyday transactions. 
	                            By harnessing the intrinsic power of Blockchain 
	                            technology, Cryptocrat is set to make Crypto 
	                            easy for mankind, hereby creating a new and 
	                            sustainable path for the present and future 
	                            generations.
							</p>
	                    </div>
	                    <div
	                    	className="col-sm-2"
	                    	id="footer__top__imagecol"
	                    >
	                        <div className="footer__top__image">
	                            <img
	                            	src={`https://res.cloudinary.com/cryptocrat/image/
	                            		upload/v1644850950/bitcoin_bkffew.svg`}
	                            	alt="bicoinimg"
	                            	className="w-100"
	                            	data-aos="flip-left"
	                            />
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className="footer__option">
	                <div className="row footer__optionrow">
{/*	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>Product</h5>
	                            <ul>
	                                <li><Link to="/">Refill</Link></li>
	                                <li><Link to="/">Hank</Link></li>
	                                <li><Link to="/">Cryptocrat Card</Link></li>
	                                <li><Link to="/">Cryptocrat Merch</Link></li>
	                            </ul>
	                        </div>
	                    </div>*/}
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>Company</h5>
	                            <ul>
	                                <li><Link to="/about">About Us</Link></li>
	                                <li><a href="htttps://wa.me/+2348137045484"
										className=""
										id="about_nav"
										target="__blank">WhatsApp</a></li>
	                                <li><Link to="/merch">Cryptocrat Merch</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>Learn</h5>
	                            <ul>
	                                <li><Link to="/blog">Blog</Link></li>
	                                <li><Link to="/help-center">Help Center</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>Legal</h5>
	                            <ul>
	                                <li><Link to="/privacy-policy">
	                                	Privacy Policy</Link></li>
	                                <li><Link to="/terms-of-service">
	                                	Terms & Conditions</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>

{/*	                <div className="row footer__optionrow">
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
							<img
								src={CompanyLogo}
								alt="company_logo"
								className="img-fluid"
								style={{display: "block"}}
							/>
							<br />
							<span className="copyright_text">© 2022 Cryptocrat.</span>
							<span className="copyright_text">All Rights Reserved</span>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>Contact</h5>
	                            <ul>
	                                <a
	                                	to="/null"
	                                	style={{
	                                		display: "block",
	                                		color: "#DEF5F2",
	                                		fontSize: "16px",
	                                		fontFamily: "var(--proxima)"
	                                	}}
	                                >
	                                	hello@cryptocrat.co</a>
	                                <a
	                                	to="/null"
	                                	style={{
	                                		display: "block",
	                                		color: "#DEF5F2",
	                                		fontSize: "16px",
	                                		fontFamily: "var(--proxima)"
	                                	}}
	                                >
	                                	support@cryptocrat.co</a>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>United Kingdom</h5>
	                            <p className="footer_location">
	                            	2nd Floor College House,
									17 King Edwards Road RUISLIP
									London HA4 7AE.</p>
	                        </div>
	                    </div>
	                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
	                        <div className="footer__option__item">
	                            <h5>United States</h5>
	                            <p className="footer_location">
									251 Little Falls Drive,
									Wilmington DE 19807.
	                            </p>
	                        </div>
	                    </div>
	                </div>*/}
	            </div>
	        </div>
	    </footer>
    </>
	)
}

export default Footer;
