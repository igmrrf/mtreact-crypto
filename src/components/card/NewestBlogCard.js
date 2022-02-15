import { Link } from "react-router-dom";
// import NewBlogImg from "../../assets/img/newblog_img.webp";
import * as BsIcons from "react-icons/bs";

const NewestBlogCard = () => {
	return (
		<>
			<div className="card newestblog_card" data-aos="flip-left">
				<Link to="/blog/content101" id="content">
					<img
						src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850944/newblog_img_dh28la.webp`}
						alt="newest_blog_header_image"
						className="blogpost_img"
						layout="responsive"
					/>
					<div className="newestblog_cardbody">
						<p>Crypto: The Secret Ingredient Of The Future</p>
						<span id='description'>
							Everyone has that favorite meal that they can cook with 
							their eyes closed. While some recipes are easily 
							available for anyone to learn from, some come with 
							more complicated..
						</span>
						<div className="newestblog_cardmeta">
							<span>7 months ago</span>
							<BsIcons.BsCircleFill />
							<span>2 mins</span>
						</div>
					</div>
				</Link>
			</div>
			<br /><br />
		</>
	)
}

export default NewestBlogCard;