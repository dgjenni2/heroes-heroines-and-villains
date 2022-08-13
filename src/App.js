import "./assets/App.css"
import "./assets/all.min.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hero from "./pages/HeroLanding"
import Heroine from "./pages/HeroineLanding"
import Villain from "./pages/VillainLanding"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ArchetypeInfo from "./pages/ArchetypeInfo"

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/heroes">
						<Route index element={<Hero />}></Route>
						<Route path=":archetypeId" element={<ArchetypeInfo />}></Route>
					</Route>
					<Route path="/heroines" element={<Heroine />}></Route>
					<Route path="/villains" element={<Villain />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
