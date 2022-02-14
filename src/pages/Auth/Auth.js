import AuthImage from "../../assets/img/auth_image.svg";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Auth = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-xl-6 col-lg-6 p-0" id="auth_image_col">
					<div className="jumbotron auth_image_card">
						<div className="auth_header">
							<span><Link to="/">
								Cryptocrat</Link></span>
						</div>
						<img
							src={AuthImage}
							alt="auth_image"
							className="img-fluid"
						/>
						<h1>We are simply <b>BUILT</b> for you </h1>
					</div>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-12 p-0">
					<div className="jumbotron auth__form_div">
						<form>
							<h1 id="auth__brand">
								<Link to="/">
									Cryptocrat</Link></h1>
							<legend>Welcome !</legend>
							<span id="legend">Let's get to know you</span>
							<br />
							<Switch>
								<Route path={`/auth/signup`}>
									<Register/>
								</Route>
								<Route path={`/auth/signin`}>
									<Login/>
								</Route>
								<Route>
									<Login/>
								</Route>
							</Switch>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth;