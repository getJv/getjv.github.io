import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotifyToast from "./components/NotifyToast.tsx";


function App() {

    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <div className="mt-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </div>
            <NotifyToast />
        </BrowserRouter>
    );
}

export default App;
