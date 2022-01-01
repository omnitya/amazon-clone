import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />

                <div className="home_row">
                    <Product 
                        id='12112'
                        title = "The lean Startup: How Constant Innovation creates Radically Successful Business paperback"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {199}
                        rating = {3}
                    />
                    <Product 
                        id='12113'
                        title = "Dell Inspiron 11 Gen i5 Laptop: Number# 1 In Category Of : Best Laptop For Professional Gamers"
                        image = "https://m.media-amazon.com/images/I/41Ix2JelnmL._SL500_AC_SS125_FMwebp_.jpg"
                        price = {90199}
                        rating = {4}
                    />
                    
                </div>

                <div className="home_row">
                <Product 
                    id='12112'
                    title = "The lean Startup: How Constant Innovation creates Radically Successful Business paperback"
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price = {199}
                    rating = {3}
                />
                <Product 
                    id='12113'
                    title = "Dell Inspiron 11 Gen i5 Laptop: Number# 1 In Category Of : Best Laptop For Professional Gamers"
                    image = "https://m.media-amazon.com/images/I/41Ix2JelnmL._SL500_AC_SS125_FMwebp_.jpg"
                    price = {90199}
                    rating = {4}
                />
                <Product 
                    id='12112'
                    title = "The lean Startup: How Constant Innovation creates Radically Successful Business paperback: How Constant Innovation creates Radically Successful Business paperback"
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price = {199}
                    rating = {3}
                />
                    
                </div>

                <div className="home_row">
                <Product 
                    id='12113'
                    title = "Dell Inspiron 11 Gen i5 Laptop: Number# 1 In Category Of : Best Laptop For Professional Gamers"
                    image = "https://m.media-amazon.com/images/I/41Ix2JelnmL._SL500_AC_SS125_FMwebp_.jpg"
                    price = {90199}
                    rating = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
