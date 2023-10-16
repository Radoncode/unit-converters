import { Outlet } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="container mx-auto">
            <div>
                HERE THE NAVIGATION
            </div>
            <div>
                <Outlet />
            </div>
        </div>
        
    )
}

export default Navigation;