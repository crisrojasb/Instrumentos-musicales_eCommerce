import React from 'react'
import Logo from "../../imgs/holding-instruments.jpg"; //from freepik.com

export const Header = () => {
    return (
        <div>
            <header>
                {/* <div className='menu'>
                    <box-icon name='menu'></box-icon>
                </div> */}
                <a href='#'>
                    <div className='logo'>
                        <img src={Logo} alt=''/>
                    </div>
                </a>
                <ul>
                    <li>
                        <a href='#'>Inicio</a>
                    </li>
                    <li>
                        <a href='#'>Productos</a>
                    </li>
                </ul>
                <div className='cart'>
                    <box-icon name="cart"></box-icon>
                    <span className="total_item">0</span>
                </div>
            </header>
        </div>
    )
}