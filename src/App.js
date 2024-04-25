import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { MuiTypography } from "./pages/MuiTypography";
import { MuiButton } from "./pages/MuiButton";
import { MuiLayout } from "./pages/MuiLayout";
import { MuiCard } from "./pages/MuiCard";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<MuiTypography />} />
                    <Route path="/buttons" element={<MuiButton />} />
                    <Route path="/layouts" element={<MuiLayout />} />
                    <Route path="/cards" element={<MuiCard />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
