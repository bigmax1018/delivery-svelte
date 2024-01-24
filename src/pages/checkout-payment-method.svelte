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
										<path d="M3 8.40009V21.0001C3 21.2653 3.10536 21.5197 3.29289 21.7072C3.48043 21.8947 3.73478 22.0001 4 22.0001H20C20.2652 22.0001 20.5196 21.8947 20.7071 21.7072C20.8946 21.5197 21 21.2653 21 21.0001V8.40009C21.0001 8.23646 20.96 8.07531 20.8833 7.93077C20.8066 7.78623 20.6956 7.66273 20.56 7.5711L12.56 2.1711C12.3946 2.05932 12.1996 1.99959 12 1.99959C11.8004 1.99959 11.6054 2.05932 11.44 2.1711L3.44 7.5711C3.30443 7.66273 3.19342 7.78623 3.11671 7.93077C3.03999 8.07531 2.99992 8.23646 3 8.40009ZM14 20.0001H10V14.0001H14V20.0001ZM5 8.9321L12 4.2071L19 8.9321V20.0001H16V13.0001C16 12.7349 15.8946 12.4805 15.7071 12.293C15.5196 12.1055 15.2652 12.0001 15 12.0001H9C8.73478 12.0001 8.48043 12.1055 8.29289 12.293C8.10536 12.4805 8 12.7349 8 13.0001V20.0001H5V8.9321Z" fill="#04764E"/>
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
						<span>Dropoff Location</span> 
					</a>
				</li>
				<li>
					<a class="nav-link active" href="/checkout-payment-method/">
						<span>Payment Method</span>
					</a>
				</li>
				<li>
					<a class="nav-link" href="/tracking/">
						<span>Drone Tracking</span>
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
													<img src="../assets/img/card/card1.png" class="rounded-2xl" alt="">
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
													<img src="../assets/img/card/card2.png" alt="">
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