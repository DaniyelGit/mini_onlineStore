


function App() {
  return (
	 <div className="wrapper clear">
	  <header className="header d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="/images/logo.png" alt="logo" />
				<div className="header__info">
					<h3>react sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="nav headerRight d-flex align-center">
				<li className="nav__price d-flex align-center">
					<img width={20} height={20} className="mr-10" src="images/basket-icon.svg" alt="basket-icon" />
					<span>49.00 руб.</span>
				</li>
				<li className="nav__user">
					<img width={20} height={20} src="/images/heart-icon.svg" alt="heart-icon" />
					<img src="/images/user-icon.svg" alt="" />
				</li>
		</ul>
	  </header>
		<section className="content p-40">
			<h1 className="mb-40">Все кроссовки</h1>

			<div className="d-flex justify-between">
				<div className="card">
				<img width={133} height={112} src="/images/products/image-1.jpg" alt="images" />
				<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
				<div className="d-flex justify-between align-center">
					<div className="card__price d-flex flex-column">
						<span>Цена:</span>
						<b>350.00 руб</b>
					</div>
					<button className="button">
						<img width={11} height={11} src="/images/plus-icon.svg" alt="plus-icon" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/images/products/image-1.jpg" alt="images" />
				<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
				<div className="d-flex justify-between align-center">
					<div className="card__price d-flex flex-column">
						<span>Цена:</span>
						<b>350.00 руб</b>
					</div>
					<button className="button">
						<img width={11} height={11} src="/images/plus-icon.svg" alt="plus-icon" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/images/products/image-1.jpg" alt="images" />
				<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
				<div className="d-flex justify-between align-center">
					<div className="card__price d-flex flex-column">
						<span>Цена:</span>
						<b>350.00 руб</b>
					</div>
					<button className="button">
						<img width={11} height={11} src="/images/plus-icon.svg" alt="plus-icon" />
					</button>
				</div>
			</div>
			<div className="card">
				<img width={133} height={112} src="/images/products/image-1.jpg" alt="images" />
				<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
				<div className="d-flex justify-between align-center">
					<div className="card__price d-flex flex-column">
						<span>Цена:</span>
						<b>350.00 руб</b>
					</div>
					<button className="button">
						<img width={11} height={11} src="/images/plus-icon.svg" alt="plus-icon" />
					</button>
				</div>
			</div>
			</div>

			
		</section>
	 </div>
  );
}

export default App;
