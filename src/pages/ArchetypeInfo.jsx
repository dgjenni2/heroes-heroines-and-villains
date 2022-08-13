import React from "react"
import { useParams } from "react-router-dom"

export default function ArchetypeInfo() {
	let { archetypeId } = useParams()
	return (
		<div className="container">
			<h1>Specific Archetype: {archetypeId}</h1>
		</div>
	)
}
