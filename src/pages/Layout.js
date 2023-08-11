import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBackground";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <GradientBackground />
            <Outlet />
        </div>
    )
}

export default Layout