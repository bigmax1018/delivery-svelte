<div class="page">
	<div class="navbar navbar-style-1">
		<div class="navbar-inner">
			<Link back>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</Link>
            <div class="title">Checkout</div>
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
	<div class="page-content pt-60 bottom-sp80 checkout-details">
		<div class="sticky-top bg-white pb-20">
			<ul class="nav-wizard container">
				<li>
					<a class="nav-link" href="/checkout-shipping-address/"> 
						<span>Shipping Address</span> 
					</a>
				</li>
				<li>
					<a class="nav-link active" href="/checkout-payment-method/">
						<span>Payment Method</span>
					</a>
				</li>
				<li>
					<a class="nav-link" href="/checkout-coupon-apply/">
						<span>Coupon Apply</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="container">
			<div class="list accordion-list dz-accordion dz-list">
				<ul>
					<li class="accordion-item accordion-item-opened">
						<a href="#" class="item-link item-content">
							<div class="item-inner">
								<div class="item-title">Credit Card</div>
							</div>
						</a>
						<div class="accordion-item-content">
							<div class="item-content-inner mb-30">
								<!-- Payment Swiper -->
								<swiper-container space-between={15} slides-per-view={'auto'} centered-slides={false} class="swiper-container swiper-init payment-swiper item-swiper demo-swiper-multiple demo-swiper-multiple-auto">
									<!-- <div class="swiper-wrapper"> -->
										<swiper-slide style="width: auto">
											<div class="payment-card">
												<div class="card-media">
													<img src="assets/img/card/card1.png" alt="">
												</div>
												<div class="card-info">
													<div class="clearfix">
														<h5 class="card-name">Credit Card</h5>
														<p class="card-number">1234 **** **** ****</p>
													</div>
													<div class="bottom-info">
														<p>04 / 25</p>
														<p>KEVIN HARD</p>
													</div>
												</div>
											</div>
										</swiper-slide>
										<swiper-slide style="width: auto">
											<div class="payment-card">
												<div class="card-media">
													<img src="assets/img/card/card2.png" alt="">
												</div>
												<div class="card-info">
													<div class="clearfix">
														<h5 class="card-name">Credit Card</h5>
														<p class="card-number">1234 **** **** ****</p>
													</div>
													<div class="bottom-info">
														<p>04 / 25</p>
														<p>KEVIN HARD</p>
													</div>
												</div>
											</div>
										</swiper-slide>
									<!-- </div> -->
								</swiper-container>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<a href="#" class="item-link item-content">
							<div class="item-inner">
								<div class="item-title">Bank Transfer</div>
							</div>
						</a>
						<div class="accordion-item-content">
							<div class="item-content-inner">
								<!-- Form -->
								<form class="form-elements">
									<div class="list">
										<ul class="grid grid-cols-1 medium-grid-cols-2 grid-gap">
											<li class="item-content item-input col-100 item-input-with-value">
												<div class="item-inner">
													<div class="item-title item-label">Card Holder Name</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Your Name" value="Samuel Witwicky" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-100">
												<div class="item-inner">
													<div class="item-title item-label">Card Number</div>
													<div class="item-input-wrap">
														<input type="number" placeholder="1234 5678 9101 1121" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-50">
												<div class="item-inner">
													<div class="item-title item-label">Month/Year</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Enter here" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-50">
												<div class="item-inner">
													<div class="item-title item-label">CVV</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Enter here" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-100">
												<div class="item-inner">
													<div class="item-title item-label">Country</div>
													<div class="item-input-wrap input-dropdown-wrap">
														<select class="form-control default-select input-with-value">
															<option>Choose your country</option>
															<option>USA</option>
															<option>China</option>
															<option>India</option>
														</select>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-100">
												<div class="item-inner">
													<div class="checkbox-form-control">
														<label class="checkbox">
															<!-- <input type="checkbox" @change="showField"> -->
															<input type="checkbox">
															<i class="icon-checkbox"></i> 
														</label>
														<!-- <p class="checkbox-text" @click="showField">Save shipping address</p> -->
														<p class="checkbox-text">Save shipping address</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</form>
							</div>
						</div>
					</li>
					<li class="accordion-item">
						<a href="#" class="item-link item-content">
							<div class="item-inner">
								<div class="item-title">Virtual Account</div>
							</div>
						</a>
						<div class="accordion-item-content">
							<div class="item-content-inner">
								<!-- Form -->
								<form class="form-elements">
									<div class="list">
										<ul class="grid grid-cols-1 medium-grid-cols-2 grid-gap">
											<li class="item-content item-input col-100 item-input-with-value">
												<div class="item-inner">
													<div class="item-title item-label">Card Holder Name</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Your Name" value="Samuel Witwicky" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-100">
												<div class="item-inner">
													<div class="item-title item-label">Card Number</div>
													<div class="item-input-wrap">
														<input type="number" placeholder="1234 5678 9101 1121" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-50">
												<div class="item-inner">
													<div class="item-title item-label">Month/Year</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Enter here" class="form-control"/>
													</div>
												</div>
											</li>
											<li class="item-content item-input col-50">
												<div class="item-inner">
													<div class="item-title item-label">CVV</div>
													<div class="item-input-wrap">
														<input type="text" placeholder="Enter here" class="form-control"/>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</form>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="checkout-total">
				<p class="title">Total Payment</p>
				<h2 class="checkout-total">$158.0</h2>
			</div>
		</div>
	</div>
	<div class="toolbar toolbar-bottom footer-button padding container">
		<a href="/checkout-shipping-address/" class="button-large button rounded-lg btn-icon button-fill">Next <i class="fas fa-caret-right"></i></a>
	</div>
</div>

<script>
	import { Link } from 'framework7-svelte';
</script>

<style>
	.item-content::before,
	.item-content::after {
		content: none !important;
	}
</style>