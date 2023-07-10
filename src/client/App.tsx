import { Transition } from "react-transition-group";
import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import React, { useRef, useState } from "react";
import SideNavBar from "./Components/NavBar/SideNavBar";

function App() {
	const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
	const navRef = useRef<HTMLDivElement | null>(null);
	const defaultStyle = {
		transition: `opacity 300ms ease-in-out`,
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
		unmounted: {},
	};
	return (
		<div className="App ">
			<Navbar />
			<div className="flex flex-col lg:flex-row">
				<SideBar />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
