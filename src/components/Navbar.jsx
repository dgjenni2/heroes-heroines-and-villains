import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
	return (
		<nav className={props.className}>
			<ul className="header__navigation__list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/heroes">Heroes</Link>
				</li>
				<li>
					<Link to="/heroines">Heroines</Link>
				</li>
				<li>
					<Link to="/villains">Villains</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}
