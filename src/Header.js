import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header_logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Img Not Found"
                />
            </Link>

            <div
                className="header_search">
                <input
                    className="header_searchInput"
                    type="text"/>
                    <SearchIcon
                    className="header_searchIcon" />
                
            </div>
            <div className="header_nav">
                <Link to= {!user && "/login"}>
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_option_lineOne">
                            {user? user.email : 'Hello Guest'}
                        </span>
                        <span className="header_option_lineTwo">
                            {user ? 'Sing Out' : 'Sign In'}
                        </span>
                    </div>
                    </Link>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Returns
                    </span>
                    <span className="header_option_lineTwo">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_option_lineOne">
                        Your
                    </span>
                    <span className="header_option_lineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_option_lineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
