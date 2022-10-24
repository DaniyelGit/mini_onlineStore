


function App() {
  return (
	 <div className="wrapper clear">
	  <header className="header d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} src="/images/logo.png" alt="logo" />
				<div className="headerInfo">
					<h3 className="text-uppercase">react sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="headerRight d-flex align-center">
				<li className="align-center">
					<img width={18} height={18} src="images/basket-icon.svg" alt="basket-icon" />
					<span>49 бел.руб.</span>
				</li>
				<li>
					<img width={20} height={20} src="/images/heart-icon.svg" alt="heart-icon" />
					<img src="/images/user-icon.svg" alt="" />
				</li>
		</ul>
	  </header>
		<section className="content p-40">
			<h1>Все кроссовки</h1>

			<div className="card">
				<img width={133} height={112} src="/images/products/image-1.jpg" alt="images" />
				<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
				<div>
					<div>
						<div>
							<span>Цена:</span>
							<b>350 бел.руб</b>
						</div>
						<button>
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
