import React from "react"
import { useState } from "react"
import Navbar from "./Navbar"

export default function Header() {
	const [displayNavbar, toggleDisplayNavbar] = useState(false)

	const getNavbarClass = () => {
		return displayNavbar
			? "header__navigation display-block"
			: "header__navigation"
	}

	return (
		<header>
			<div className="container flex align-center">
				<h1>
					<i className="fa-solid fa-book fa-fw"></i> Story Archetypes
				</h1>
				<div className="mobile">
					<i
						onClick={() => toggleDisplayNavbar(!displayNavbar)}
						className="fa-solid fa-bars fa-fw"
					></i>
				</div>
			</div>
			<div className="container">
				<Navbar className={getNavbarClass()} />
			</div>
		</header>
	)
}
