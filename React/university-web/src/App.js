// Valid JSX

import Header from "./components/Header";



function App() {
    const universityName = "University Hub";

    return (
        <div className="main-container">
        <Header/>
        
            <h1>Welcome to {universityName}</h1>
            <p>Manage your academic life here.</p>
        </div>
    );
}

export default App;