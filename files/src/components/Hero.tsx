import React, { useState } from "react";
import useInterval from "../utils/useInterval";

type Props = {};
const workTitles = ["UI Developer", "UX Designer", "Problem Solver"];

const Hero = (props: Props) => {
	const [workTitleIndex, setWorkTitleIndex] = useState(0);

	useInterval(() => {
		setWorkTitleIndex((current) => (current + 1) % workTitles.length);
	}, 2000);

	return (
		<section className="hero">
			<h1 className="hero__name">IndianSage</h1>
			<h1 className="hero__work">{workTitles[workTitleIndex]}</h1>
		</section>
	);
};

export default Hero;
