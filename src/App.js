import Main from "./components/Main";
import Navbar from "./components/Navbar";
import DataContextProvider from "./context/DataContext";

function App() {
	return (
		<DataContextProvider>
			<Navbar />
			<Main />
		</DataContextProvider>
	);
}

export default App;
