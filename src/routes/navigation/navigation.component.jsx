import { Link, Outlet } from "react-router-dom";
import logo from '../../converter.svg';


const Navigation = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="block p-6">
                    <img src={logo}  alt="logo converter" />
                </Link>
                <ul  className="flex space-x-10">
                    <li>
                        <Link to="/currency" className="block border-solid border-1 p-6">
                            Currency
                        </Link>
                    </li>
                    <li >
                        <Link to="/length" className="block border-solid border-1 p-6">
                            Length
                        </Link>
                    </li>
                    <li >
                        <Link to="/weight" className="block border-solid border-1 p-6">
                            Weight
                        </Link>    
                    </li>
                    <li >
                        <Link to="/volume" className="block border-solid border-1 p-6">
                            Volume
                        </Link>
                    </li>
                    <li>
                        <Link to="/area" className="block border-solid border-1 p-6">
                            Area
                        </Link>
                    </li>
                </ul>                          
            </div>
            <div className="px-3">
                <Outlet />
            </div>
        </div>
        
    )
}

export default Navigation;