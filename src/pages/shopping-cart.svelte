<Page>
	<div class="navbar navbar-style-1">
		<div class="navbar-inner">
			<Link back>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</Link>
            <div class="title">Orders</div>
            <div class="right">
                <a href="#" class="link panel-open" data-panel="left">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 12C14 10.8955 13.1046 10 12 10C10.8954 10 10 10.8955 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z" fill="black"/>
						<path d="M14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1045 10.8954 22 12 22C13.1046 22 14 21.1045 14 20Z" fill="black"/>
						<path d="M14 4C14 2.89544 13.1046 2.00001 12 2.00001C10.8954 2.00001 10 2.89544 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4Z" fill="black"/>
					</svg>
				</a>
            </div>
        </div>
	</div>
	
	<div class="page-content pt-80 bottom-sp80">
		
		<!-- Search backdrop -->
		<div class="searchbar-backdrop"></div>
		
		<div class="container">
			<!-- Search -->
			<form data-search-container=".search-list" data-search-in=".item-title" class="searchbar searchbar-init search-box list-search-bx">
				<div class="searchbar-inner">
					<div class="searchbar-input-wrap">
						<input type="search"  placeholder="Search Order ID or Product"/>
						<i class="searchbar-icon" style="width: 24px; height: 24px;">
							<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.707 21.293L17.6 16.182C19.1017 14.3173 19.8314 11.9479 19.6388 9.56147C19.4462 7.17505 18.3459 4.9533 16.5645 3.35365C14.7832 1.754 12.4563 0.898212 10.063 0.962481C7.66967 1.02675 5.39207 2.00618 3.69913 3.69913C2.00618 5.39207 1.02675 7.66967 0.962481 10.063C0.898212 12.4563 1.754 14.7832 3.35365 16.5645C4.9533 18.3459 7.17505 19.4462 9.56147 19.6388C11.9479 19.8314 14.3173 19.1017 16.182 17.6L21.293 22.711C21.4816 22.8931 21.7342 22.9939 21.9964 22.9917C22.2586 22.9894 22.5094 22.8842 22.6948 22.6988C22.8802 22.5134 22.9854 22.2626 22.9877 22.0004C22.9899 21.7382 22.8891 21.4856 22.707 21.297V21.293ZM2.99999 10.333C2.99999 8.88242 3.43015 7.46442 4.23606 6.25833C5.04197 5.05224 6.18745 4.11222 7.52762 3.55716C8.86779 3.0021 10.3425 2.85692 11.7651 3.13998C13.1878 3.42305 14.4946 4.12164 15.5203 5.14742C16.5459 6.1732 17.2443 7.48009 17.5272 8.90281C17.8101 10.3255 17.6647 11.8002 17.1094 13.1403C16.5542 14.4804 15.614 15.6257 14.4078 16.4315C13.2016 17.2372 11.7836 17.6672 10.333 17.667C8.38871 17.6646 6.52477 16.8911 5.15005 15.5162C3.77534 14.1413 3.00211 12.2773 2.99999 10.333Z" fill="#BFBFBF"/>
							</svg>
						</i>
					</div>
				</div>
			</form>
			<div class="toolbar toolbar-bottom tabbar tab-style-1 mb-10">
				<div class="toolbar-inner">
					<Link tabLink="#tab-1" tabLinkActive>All</Link>
					<Link tabLink="#tab-2">On Delivery</Link>
					<Link tabLink="#tab-3">Done</Link>
				</div>
			</div>
		</div>
		
		<div class="container cart-list-area">
			<div class="list simple-list searchbar-not-found">
				<ul>
					<li>Nothing found</li>
				</ul>
			</div>
			<div class="tabs">
				<div id="tab-1" class="tab tab-active">
					<div class="list cart-list search-list searchbar-found item-list">
						<ul>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/picpops.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Sweet Lemon Indonesian Tea</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/piccombo.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Hot Coppuccino Latte with Mocha</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$8.6</li>
													<li class="">1x</li>
													<li class="text-primary item-total">$8.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/picwaffle.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Arabica Latte Ombe Coffee</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="tab-2" class="tab">
					<div class="list cart-list search-list searchbar-found item-list">
						<ul>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/piccoke.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Original Hot Coffee</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/piccheese.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Hot Coppuccino Latte with Mocha</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/picsalad.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Arabica Latte Ombe Coffee</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div id="tab-3" class="tab">
					<div class="list cart-list search-list searchbar-found item-list">
						<ul>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/picventi.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Sweet Lemon Indonesian Tea</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/piccoffee.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Original Hot Coffee</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
							<li class="swipeout cart-item">
								<div class="item-content swipeout-content">
									<div class="item-inner">
										<div class="item-media">
											<a href="/item-details/"><img src="assets/img/menus/picservilleta.jpg" alt=""></a>
										</div>
										<div class="item-info">
											<div class="item-head">
												<h6 class="item-title"><a href="/item-details/">Sweet Lemon Indonesian Tea</a></h6>
											</div>
											<div class="item-foot">
												<ul>
													<li class="item-price">$5.8</li>
													<li class="">2x</li>
													<li class="text-primary item-total">$11.6</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="swipeout-actions-right">
									<a href="#" class="swipeout-delete">
										<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z" fill="white"/>
										</svg>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
	
	<!-- Toolbar -->
	<div class="toolbar toolbar-bottom container footer-button padding">
		<a href="/order-details/" class="button-large button button-fill rounded-xl">PLACE ORDER</a>
	</div>
	
</Page>

<script>
	import { Page, Link } from 'framework7-svelte';
</script>