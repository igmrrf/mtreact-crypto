import { Link } from "react-router-dom";

const Login = () => {
	return (
		<>
			<div className="row">
				<div className="form-group col-sm-6 col-12">
					<input
						className="form-control form-control-lg
							auth__input"
						placeholder="Username"
						name="cryptocrat-username"
						type="text"
						required={true}
					/>
				</div>
				<div className="form-group col-sm-6 col-12">
					<input
						className="form-control form-control-lg
							auth__input"
						placeholder="Choose Password"
						name="cryptocrat-password"
						type="password"
						required={true}
					/>
					<Link
						id="forgot_password"
						to="/forgotpassword">
					Forgot Password?</Link>
				</div>
			</div>
			<span id="agreement">
				By clicking the SignUp button below, you agree 
				to Patricia’s terms and service
			</span>
			<button id="auth__btn">
				Sign Up
			</button>
			<span id="auth_question">New to Cryptocrat ? <Link to="/auth/signup">
				Click here</Link>
			</span>
		</>
	)
}

export default Login;