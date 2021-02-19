import React, { useState, useEffect } from "react";

function Home() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 1000);
	}, []);

	if (time === 10) {
		setTime(0);
		setTime2(time2 + 1);
	}
	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
				<div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
                <div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
                <div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
                <div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
                <div className="col-1 card bg-dark" style={{ width: " 18rem" }}>
					<h5 className="card-title"></h5>
					<h1 style={{ color: "white" }}>{time}</h1>
				</div>
                
			</div>
		</div>
	);
}
export default Home;
