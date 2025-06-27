import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AgenticStorefront from "./pages/AgenticStoreFront";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<AgenticStorefront />} />
            </Routes>
          </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
