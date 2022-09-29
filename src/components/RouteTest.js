import { Link } from "react-router-dom";

const RouteTest = () => {
	return (
		<>
			<Link to={"/"}>HOME</Link>
			<br />
			<Link to={"/diary"}>DIARY</Link>
			<br />
			<Link to={"/new"}>New</Link>
			<br />
			<Link to={"/edit"}>EDIT</Link>
		</>
	);
};

export default RouteTest;
