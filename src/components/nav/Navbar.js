import { Link } from "react-router-dom";
import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import DropdownNav from "./DropdownNav";

const Navbar = ({notHome, subPage}) => {

	const [dropdown, setDropdown] = useState(false);

	return (
		<>
			<nav
				className={`navbar navbar-expand weak-nav custom__nav 
				${subPage?"baw_container":''}`}
				id={notHome?"nav_color":""}
			>
				<div
					className="container-fluid"
					id="navbar_container">
					<Link
						className="navbar-brand"
						to="/"
					>Coins<span> & </span>Gifts</Link>
					<nav id="first">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/about" className="" id="home_nav">
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/blog" className="" id="blog_nav">
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/merch" className="" id="blog_nav">
									Merch
								</Link>
							</li>
							<li className="nav-item">
								<a href="htttps://wa.me/+2348137045484"
									className=""
									id="about_nav"
									target="__blank"
								>
									WhatsApp
								</a>
							</li>
						</ul>
					</nav>
					<nav className="ml-auto" id="second"></nav>
					<nav className="ml-auto" id="third">
						<ul className="navbar-nav">
							<li className="nav-item">
								<span onClick={() => setDropdown(!dropdown)}>
									<RiIcons.RiBarChartHorizontalLine />
								</span>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
			{
				dropdown?
				<DropdownNav
					closeDropdown={() => setDropdown(false)}
				/>:''
			}
		</>
	)
}

export default Navbar;