import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
	return (
		<nav className={props.className}>
			<Link to="/">Home</Link>
			<Link to="/heroes">Heroes</Link>
			{/* <Link to="/villains">Villains</Link> */}
			<Link to="/about">About</Link>
		</nav>
	)
}
