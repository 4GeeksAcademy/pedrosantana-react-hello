import React from "react";

const data = {
	title: "Card title",
	description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
	imgUrl: "https://picsum.photos/500/325",
	buttonUrl: "https://reactjs.org/",
	buttonLabel: "Find out more!"
}

function BootstrapCard(){
	return (
		<div className="card m-5">
			<img className="card-img-top" src={data.imgUrl} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{data.title}</h5>
				<p className="card-text">{data.description}</p>
			</div>
			<div class="card-footer text-center text-muted">
				<a href="https://reactjs.org/" className="btn btn-primary">
					{data.buttonLabel}
				</a>
  			</div>
		</div>
	);
}

function BootstrapCards(){
	return (
		<div className="d-flex">
			<BootstrapCard />
			<BootstrapCard />
			<BootstrapCard />
			<BootstrapCard />
		</div>
	);
}

export default BootstrapCards;
