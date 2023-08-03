import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function FrontPage() {
	return <Navbar />;
}

const Navbar = () => {
	return (
		<div className="card">
			<p>
				Join our community, where your
				<strong> unique number</strong> marks the beginning of an extraordinary
				adventure. Be part of something bigger, right from the start
			</p>
			<Link to="/auth" className="link">
				Login / SignUp
			</Link>
		</div>
	);
};

export default FrontPage;
