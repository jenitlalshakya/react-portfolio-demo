import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<>
			<Navbar />
			
			<div id="home"><Home /></div>
			<div id="about"><About /></div>
			<div id="projects"><Projects /></div>
			<div id="contact"><Contact /></div>

			<Footer />
		</>
	);
}

export default App;
