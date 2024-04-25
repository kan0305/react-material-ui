import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { MuiTypography } from "./pages/MuiTypography";
import { MuiButton } from "./pages/MuiButton";
import { MuiLayout } from "./pages/MuiLayout";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<MuiTypography />} />
                    <Route path="/buttons" element={<MuiButton />} />
                    <Route path="/layouts" element={<MuiLayout />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
