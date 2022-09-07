import React from "react"
import { Link } from "react-router-dom"

export default function Hero() {
	let heroes = require("../assets/heroArchetypeData.json")

	return (
		<div className="container">
			<h1>Hero Archetypes</h1>
			<ul className="md-col-2 lg-col-3">
				{Object.keys(heroes).map((archetypeName, key) => {
					let archetype = heroes[archetypeName]
					let archetypeLink = "/heroes/" + archetypeName
					return (
						<li key={key}>
							<Link to={archetypeLink}>{archetype.name}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
