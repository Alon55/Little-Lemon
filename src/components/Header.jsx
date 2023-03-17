import React from "react";
import LunchDiningSharpIcon from '@mui/icons-material/LunchDiningSharp';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import lemon from '../assets/lemon.png'

function Header() {
    return (
        <header style={{ fontFamily: 'cursive' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <LunchDiningSharpIcon />
                <div style={{ display: 'flex', alignItems: 'center', color: '#495E57' }}>
                    <img style={{ width: 50 }} src={lemon} alt="lemon logo" />
                    <span>LITTLE LEMON</span>
                </div>
                <ShoppingBasketOutlinedIcon style={{ color: '#495E57' }} />
            </div>
            <div style={{ backgroundColor: '#495E57', padding: '5px 10px' }}>
                <h1 style={{ color: '#F4CE14', margin: 0 }}>Little Lemon</h1>
                <p style={{ color: '#FFF', margin: 0 }}>London</p>
            </div>
        </header>
    );
}

export default Header
