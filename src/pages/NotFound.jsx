import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<div className="container">
			<h1>Page not Found</h1>
			<Link to="/">Return to Home</Link>
		</div>
	)
}
