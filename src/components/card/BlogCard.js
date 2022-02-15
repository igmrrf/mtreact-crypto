// import BlogImg from "../../assets/img/blog_img.webp";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const BlogCard = () => {
	return (
		<>
		<div className="card blog_card" data-aos="fade-up">
			<Link to="/blog/content112">
				<img
					src={`https://res.cloudinary.com/cryptocrat/image/upload/v1644850947/blog_img_ejrubq.webp`}
					alt="blogheaderimg"
					width="640"
					height="360"
					className="img-fluid"
				/>
			</Link>
				<div className="blog_cardbody">
					<div class="blog_cardmeta">
						<span>Cryptocurrency</span>
						<BsIcons.BsCircleFill />
						<span>SOL</span>
						<BsIcons.BsCircleFill />
						<span>1 min</span>
					</div>
					<h5 className="blog_cardtitle">
						<Link to="/blog/content112">
							The future of crypto in Africa is promising
							- CEO CryptoSS says...
						</Link>
					</h5>
					<p className="blog_description">
						Knowing CryptoSS, you should know that we are at 
						the forefront of every conversation and innovation 
						happening in our industry...
					</p>
				</div>
		</div>
		</>
	)
}

export default BlogCard;