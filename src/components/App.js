import React from "react";
import { useState,useEffect } from "react";
import Banner from './Banner';
import logo from './../assets/logo.png';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css';
import '../styles/App.css';


const App = () =>{
	const saveCart = localStorage.getItem('');
	const [cart,updateCart] = useState(JSON.parse(saveCart) ? JSON.parse() : []);

	useEffect(()=>{
		localStorage.setItem('cart',JSON.stringify(cart))
	},[cart]);

	return(
		<div>
			<Banner>
				<img src={logo} alt="logo-la-maison-jungle" className="lmj-logo"/>
				<h1 className="lmj-title">La maison jungle</h1>
			</Banner>
			<div className="lmj-layout-inner" style={{ display:'grid',width:'100%',gridTemplateColumns:'reapte(auto-fill,1fr)' }}>
				<Cart cart={cart} updateCart={updateCart}/>
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer/>
		</div>
	);
}

export default App