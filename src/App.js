import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { MuiTypography } from "./pages/MuiTypography";
import { MuiButton } from "./pages/MuiButton";
import { MuiLayout } from "./pages/MuiLayout";
import { MuiCard } from "./pages/MuiCard";
import { MuiTextField } from "./pages/MuiTextField";

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<MuiTypography />} />
                    <Route path="/buttons" element={<MuiButton />} />
                    <Route path="/layouts" element={<MuiLayout />} />
                    <Route path="/cards" element={<MuiCard />} />
                    <Route path="/textfield" element={<MuiTextField />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
