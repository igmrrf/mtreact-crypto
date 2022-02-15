import * as ImIcons from "react-icons/im";

const LoadingCard = () => {
	return (
		<div className="fixed-top loading__card">
			<p><ImIcons.ImSpinner8 /></p>
		</div>
	)
}

export default LoadingCard;