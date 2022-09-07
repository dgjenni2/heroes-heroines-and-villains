import React from "react"
import { useParams } from "react-router-dom"

export default function ArchetypeInfo() {
	let { archetypeId } = useParams()
	let heroes = require("../assets/heroArchetypeData.json")

	if (!heroes[archetypeId]) {
		return <h1>Archetype not found.</h1>
	}

	let heroData = heroes[archetypeId]

	return (
		<div className="container">
			<h2>
				<i className={heroData.icon}></i>
				{heroData.name.toUpperCase()}
			</h2>
			<h3>
				Aliases:
				{heroData.aliases.reduce((currentString, nextValue) => {
					if (currentString === " ") {
						return currentString + nextValue
					}
					return currentString + ", " + nextValue
				}, " ")}
			</h3>

			<h3>Summary</h3>
			{heroData.summary.map((paragraph, key) => {
				return <p key={key}>{paragraph}</p>
			})}
			<h3>Motives and Priorities</h3>
			<ul className="md-col-2 lg-col-3">
				{heroData.motives_priorities.map((motive, key) => {
					return (
						<li className="no-list-bullet text-center" key={key}>
							{motive}
						</li>
					)
				})}
			</ul>
			<h3>Potential Conflicts</h3>
			<ul>
				{heroData.story_arcs.map((arc, key) => {
					return <li key={key}>{arc}</li>
				})}
			</ul>
			<h3>Examples</h3>
			<p>
				{heroData.examples.reduce((currentString, nextValue) => {
					if (currentString === "") {
						return nextValue
					}
					return currentString + ", " + nextValue
				}, "")}
			</p>
		</div>
	)
}
