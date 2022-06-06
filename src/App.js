import React from "react";
import Header from './components/Header/Header';
import SignUp from './components/SignPage/SignUp3';
import SignIn from './components/SignPage/SignIn3';
import Home from './components/HomPage/Home';
import Detail from './components/HomPage/Detail';
import Upload from './components/HomPage/upload';
import Cart from './components/HomPage/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { QueryClientProvider, QueryClient } from 'react-query'


const App = () => {
	return <div>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/cart" element={ <Cart /> } />
				<Route path="/detail/:id" element={ <Detail /> } />
				<Route path="/upload" element={ <Upload /> } />
				<Route path="/detail" element={ <Detail /> } />
				<Route path="/signUp" element={ <SignUp /> } />
				<Route path="/signIn" element={ <SignIn /> } />
			</Routes>
		</BrowserRouter>




	</div>;
};

export default App;
