import * as React from "react";
import type { HeadFC } from "gatsby";
import "normalize.css";
import "../sass/index.scss";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
	return (
		<main>
			<Hero />
			<Intro />
			<Projects />
			<Contact />
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
