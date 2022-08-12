import "./assets/App.css"
import "./assets/all.min.css"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hero from "./pages/Hero"
import Heroine from "./pages/Heroine"
import Villain from "./pages/Villain"
import About from "./pages/About"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="container">
					<h1>
						<i className="fa-solid fa-book"></i> Archetypes of Story
					</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/hero">Heroes</Link>
							</li>
							<li>
								<Link to="/heroine">Heroines</Link>
							</li>
							<li>
								<Link to="/villain">Villains</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/hero" element={<Hero />}></Route>
					<Route path="/heroine" element={<Heroine />}></Route>
					<Route path="/villain" element={<Villain />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</main>
			<footer>
				<div className="container">All rights reserved 2022</div>
			</footer>
		</div>
	)
}

export default App

/**(possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Navigate, Na

vigationType, Outlet, Route, Router, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createPath, createRoutesFromChildren, createSe

archParams, generatePath, matchPath, matchRoutes, parsePath, renderMatches, resolvePath, unstable_HistoryRouter, useHref, useInRouterContext, useLinkClickHandler,

 useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams)
 */
