import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Home() {
	const loc = window.localStorage.getItem("userPos");
	const navigate = useNavigate();
	console.log(loc);
	const [, setCookies] = useCookies(["access_token"]);
	return (
		<div className="cardHome">
			<div className="userNumber">
				<p>{loc}</p>
			</div>
			<p>
				<strong> Welcome! </strong>
			</p>
			<h6>You've been titled as Member {loc}</h6>
			<h6>Thank you for registering </h6>
			<button
				className="linkHome"
				onClick={() => {
					console.log("ok");
					setCookies("access_token", "");
					window.localStorage.removeItem("userID");
					navigate("/");
				}}
			>
				Logout
			</button>
		</div>
	);
}

export default Home;
