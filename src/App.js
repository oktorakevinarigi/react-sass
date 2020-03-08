import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="showcase">
			<div className="container">
				<nav>
					<h1 className="logo">My Website</h1>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#service">Services</a></li>
					</ul>
				</nav>

				<div className="showcase-content">
					<div>
						<h1>Make Your Marketing Real</h1>
						<p className="my-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							eligendi tempore atque laborum. Quisquam nemo at non. Corrupti,
							vitae dolore.
						</p>
						<a href="#learn" className="btn-primary">Learn More</a>
						<a href="#sign" className="btn-secondary">Sign Up</a>
					</div>
					<img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt="" />
				</div>
			</div>
		</header>
    </div>
  );
}

export default App;
