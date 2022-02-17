import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Merchandise from "./pages/Merchandise";
// import PrivacyPolicy from "./pages/SubPages/PrivacyPolicy";
// import TermsConditions from "./pages/SubPages/TermsConditions";
// import HelpCenter from "./pages/SubPages/HelpCenter";
// import NotFound from "./pages/SubPages/NotFound";
import LoadingCard from "./components/card/LoadingCard";
import Aos from "aos";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Merchandise = lazy(() => import('./pages/Merchandise'));
const PrivacyPolicy = lazy(() => import('./pages/SubPages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/SubPages/TermsConditions'));
const HelpCenter = lazy(() => import('./pages/SubPages/HelpCenter'));
const NotFound = lazy(() => import('./pages/SubPages/NotFound'));

const App = () => {

	useEffect(() => {
		Aos.init({
			duration: "1300"
		});
	}, []);

	return (
		<div className="container-fluid p-0" id="application_container">
			<Suspense fallback={<LoadingCard />}>
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
			</Suspense>
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