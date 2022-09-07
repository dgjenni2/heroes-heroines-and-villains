import React from "react"
import { Link } from "react-router-dom"

export default function Villain() {
	return (
		<div className="container">
			<h1>Villain Archetypes</h1>
			<ul>
				<li>
					<Link to="/villains/abuser">Abuser</Link>
				</li>
				<li>
					<Link to="/villains/backstabber">Backstabber</Link>
				</li>
				<li>
					<Link to="/villains/betrayer">Betrayer</Link>
				</li>
				<li>
					<Link to="/villains/destroyer">Destroyer</Link>
				</li>
				<li>
					<Link to="/villains/derelict">Derelict</Link>
				</li>
				<li>
					<Link to="/villains/dictator">Dictator</Link>
				</li>
				<li>
					<Link to="/villains/femme-fatale">Femme Fatale</Link>
				</li>
				<li>
					<Link to="/villains/gladiator">Gladiator</Link>
				</li>
				<li>
					<Link to="/villains/gorgon">Gorgon</Link>
				</li>
				<li>
					<Link to="/villains/overbearing-mother">Overbearing Mother</Link>
				</li>
				<li>
					<Link to="/villains/punisher">Punisher</Link>
				</li>
				<li>
					<Link to="/villains/scorned-woman">Scorned Woman</Link>
				</li>
				<li>
					<Link to="/villains/seducer">Seducer</Link>
				</li>
				<li>
					<Link to="/villains/traitor">Traitor</Link>
				</li>
				<li>
					<Link to="/villains/troubled-maiden">Troubled Maiden</Link>
				</li>
				<li>
					<Link to="/villains/warlock">Warlock</Link>
				</li>
			</ul>
		</div>
	)
}
