import React from 'react'
import IMG from "../../imgs/acoustic-guitar.jpg"

export const ProductList = () => {
    return (
        <>
        <h1 className="title">Productos</h1>
        <div className="products">
            <div className="product">
                <a href="#">
                    <div className="product_img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="product_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="price">$340</p>
                </div>
                <div className="button">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            <div className="product">
                <a href="#">
                    <div className="product_img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="product_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="price">$340</p>
                </div>
                <div className="button">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            <div className="product">
                <a href="#">
                    <div className="product_img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="product_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="price">$340</p>
                </div>
                <div className="button">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            <div className="product">
                <a href="#">
                    <div className="product_img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="product_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="price">$340</p>
                </div>
                <div className="button">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>

            <div className="product">
                <a href="#">
                    <div className="product_img">
                        <img src={IMG} alt=""/>
                    </div>
                </a>
                <div className="product_footer">
                    <h1>Title</h1>
                    <p>Categoria</p>
                    <p className="price">$340</p>
                </div>
                <div className="button">
                    <button className="btn">
                        Añadir al carrito
                    </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}