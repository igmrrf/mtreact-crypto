import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Merchandise from "./pages/Merchandise";
import PrivacyPolicy from "./pages/SubPages/PrivacyPolicy";
import TermsConditions from "./pages/SubPages/TermsConditions";
import HelpCenter from "./pages/SubPages/HelpCenter";
import NotFound from "./pages/SubPages/NotFound";
import Aos from "aos";

const App = () => {

	useEffect(() => {
		Aos.init({
			duration: "1600"
		});
	}, []);

	return (
		<div className="container-fluid p-0" id="application_container">
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route path="/privacy-policy">
					<PrivacyPolicy />
				</Route>
				<Route path="/terms-of-service">
					<TermsConditions />
				</Route>
				<Route path="/help-center">
					<HelpCenter />
				</Route>
				<Route path="/merch">
					<Merchandise />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</div>
	)
}

export default App;


// Home Page ☠
// About Us ☠
// Blog ☠
// Help Center ☠
// Privacy Policy ☠
// Terms & Conditions ☠
// Merchandise

// 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