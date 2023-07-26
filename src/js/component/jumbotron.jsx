import React from "react";

const data = {
	title: "A Warm Welcome!",
	description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	buttonUrl: "https://reactjs.org/",
	buttonLabel: "Call to action!"
}
const Jumbotron = () => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{data.title}</h1>
			<p className="lead">{data.description}</p>
			<a className="btn btn-primary btn-lg" href={data.buttonUrl} role="button">
				{data.buttonLabel}
			</a>
		</div>
		);
};

export default Jumbotron;