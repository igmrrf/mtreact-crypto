import NotFoundImage from "../../assets/img/404_image1.jpg";

const NotFound = () => {
	return (
        <div className="fixed-top notfound__card">
            <div>
                <img
                    src={NotFoundImage}
                    alt="NotFoundImage"
                />
                <h3>Page Not Found</h3>
            </div>
        </div>
	)
}

export default NotFound;