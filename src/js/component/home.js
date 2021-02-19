import React, { useState, useEffect } from "react";

function Home() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 1000);
	}, []);
	return (
		<div className="text-center mt-5">
			<div className="card bg-dark" style={{ width: " 18rem" }}>
				<h5 className="card-title">Aura Arana</h5>
				<h1 style={{ color: "white" }}>{time}</h1>
			</div>
		</div>
	);
}
export default Home;
