import { useEffect } from "react";
import "./App.css";

function App() {
	const newFeatures = [
		"search by distribution, instructor, day & time",
		"search multiple subjects concurrently",
		"improved calendar ui (jony ives approved)",
		"baller draft courses view",
		"cute about page to commend our contributors <3",
	];
	useEffect(() => {
		console.log("Easter Egg!");
		console.log("Checkout the New Features:");
		newFeatures.map((feature) => console.log(feature));
	}, []);

	return (
		<div className="App">
			<p>
				time to <b>hatch.</b> a new plan <br /> coming 11/12
			</p>
		</div>
	);
}

export default App;
