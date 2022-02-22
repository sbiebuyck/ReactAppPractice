import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/"> Home Page </Link>
            <Link to="/order"> Produce Page </Link>
            <Link to="/stores"> Stores Page </Link>
        </nav>
    );
};

export default NavBar;