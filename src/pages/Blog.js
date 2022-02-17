import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import BlogCard from "../components/card/BlogCard";
import NewestBlogCard from "../components/card/NewestBlogCard";
import { useEffect } from "react";

const loopList = [1,2,3]

const Blog = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	
	return (
		<>
			<Navbar
				notHome={true}
			/>
			<div className="jumbotron blog_header">
				<h1>Coins & Gifts Blog</h1>
				<p>Stories from the easiest and most 
					trusted place to buy, sell, and 
					use crypto
				</p>
				<form>
					<div className="card">
						<div className="d-flex justify-content-start" id="formcard_align">
							<input
								placeholder="Search Blog"
								className="form-control form-control-lg"
							/>
							<div id="form_selectbutton">
								<select className="categories">
									<option value="">All Categories</option>
									<option value="Cryptocurrency">Cryptocurrency</option>
									<option value="Blockchain">Blockchain</option>
									<option value="Bitcoin">Bitcoin</option>
									<option value="Etherium">Etherium</option>
									<option value="Trading">Trading</option>
									<option value="Others">Others</option>
								</select>
								<button type="submit">Search</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className="jumbotron blogcard_container">
				<div className="row">
					<div className="col-12">
						<NewestBlogCard />
					</div>
					<br />
					<br />
					{
						loopList.map((value, index) => {
							return (
								<div
									className="col-lg-4 col-md-6 col-sm-6"
									key={index}
								>
									<BlogCard />
								</div>
							)
						})
					}
				</div>
{/*				<div className="flex justify-center mt-20">
					<ul className="pagination">
						<li className="disabled">
							<a href="#/" tabindex="-1" className="paginate-prev-link">
								Prev
							</a>
						</li>
						<li className="paginate-link paginate-active-link">
							<a href="#/" tabindex="0">
								1
							</a>
						</li>
						<li className="paginate-link">
							<a href="#/" tabindex="0">
								2
							</a>
						</li>
						<li className="">
							<a href="#/" tabindex="0" className="paginate-next-link">
								Next
							</a>
						</li>
					</ul>
				</div>*/}
			</div>
			<br /><br /><br />
			<Footer notHome={true} />
		</>
	)
}

export default Blog;