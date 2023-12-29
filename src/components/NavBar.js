import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function NavBar() {
    return (
        <nav className="header">
            {/* logo on the left */}
            {/* <Link to="/"> */}
                <h1 className="header__logo">
                    Apoorv Sharma
                </h1>
            {/* </Link> */}
            {/* search box */}
            {/* <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div> */}
            {/* three links -> signin, orders, prime */}
            <div className="headerNav">
                <Link className="header__link" to="/Projects">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello,</span>
                        <span className="header__optionLineTwo">Sign-in</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link className="header__link" to="/WorkEx">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
            {/* basket and number */}

        </nav>
    )
}

export default NavBar;