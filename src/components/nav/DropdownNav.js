import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownNav = ({closeDropdown}) => {
	return (
		<nav id="dropdown_nav">
			<p>
				<span>Cryptocrat</span> 
				<FaIcons.FaTimes onClick={closeDropdown} />
			</p>
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
					<a
						href="htttps://wa.me/+2348137045484"
						className=""
						id="about_nav"
						target="__blank"
					>
						WhatsApp
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default DropdownNav;