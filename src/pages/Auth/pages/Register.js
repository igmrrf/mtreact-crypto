import { Link } from "react-router-dom";

const Register = () => {
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
						placeholder="Email"
						name="cryptocrat-email"
						type="email"
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
				</div>
				<div className="form-group col-sm-6 col-12">
					<input
						className="form-control form-control-lg
							auth__input"
						placeholder="Confirm Password"
						name="cryptocrat-confirmpassword"
						type="password"
						required={true}
					/>
				</div>
				<div className="form-group col-12">
					<input
						className="form-control form-control-lg
							auth__input"
						placeholder="Referral Code (Optional)"
						name="cryptocrat-referralcode"
						type="text"
						required={true}
					/>
				</div>
			</div>
			<span id="agreement">
				By clicking the SignUp button below, you agree 
				to Patricia’s terms and service
			</span>
			<button id="auth__btn">
				Sign Up
			</button>
			<span id="auth_question">Already have an account ? 
				<Link to="/auth/signin"> Click here</Link>
			</span>
		</>
	)
}

export default Register;