


function App() {
	return (
		<div className="wrapper clear">

			<div className="overlay">
				<div className="drawer">
					<h2 className="drawer__title">Корзина<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" /></h2>


					<div className="items">
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-1.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>

						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 271</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
						<div className="cartItem d-flex align-center">
							<div style={{ backgroundImage: 'url(/images/products/image-2.jpg)' }} className="cartItem__img"></div>
							<div className="cartItem__content flex mr-20">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>350.00 руб.</b>
							</div>
							<img className="cartItem__remove-btn" src="/images/btn-remove.svg" alt="btn-remove" />
						</div>
					</div>

					<div className="cartTotalBlock">
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<b>700.00 руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>25.00 руб.</b>
							</li>
						</ul>
						<button className="greenButton">
							Оформить заказ
							<img src="/images/arrow-btn.svg" alt="arrow-icon" />
						</button>
					</div>

				</div>
			</div>

			<header className="header d-flex justify-between align-center">
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


			<section className="content">
				<div className="d-flex align-center justify-between mb-40">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/images/search-icon.svg" alt="search-icon" />
						<input placeholder="Поиск..."></input>
					</div>
				</div>

				<div className="d-flex flex-wrap justify-between">
					<div className="card">
						<div className="card__favorite">
							<img src="/images/liked-icon.svg" alt="liked-icon" />
						</div>
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
						<div className="card__favorite">
							<img src="/images/unliked-icon.svg" alt="liked-icon" />
						</div>
						<img width={133} height={112} src="/images/products/image-2.jpg" alt="images" />
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
						<div className="card__favorite">
							<img src="/images/unliked-icon.svg" alt="liked-icon" />
						</div>
						<img width={133} height={112} src="/images/products/image-3.jpg" alt="images" />
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
						<div className="card__favorite">
							<img src="/images/unliked-icon.svg" alt="liked-icon" />
						</div>
						<img width={133} height={112} src="/images/products/image-4.jpg" alt="images" />
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
