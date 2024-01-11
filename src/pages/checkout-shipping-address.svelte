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
					<a class="nav-link" href="/checkout-payment-method/"> 
						<span>Payment Method</span>
					</a>
				</li>
				<li>
					<a class="nav-link active" href="/checkout-shipping-address/">
						<span>Shipping Address</span> 
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
			<!-- Form -->
			<form class="form-elements">
				<div class="list">
					<ul class="grid grid-cols-1">
						<li class="item-content item-input item-input-with-value">
							<div class="item-inner">
								<div class="item-title item-label">Card Holder Name</div>
								<div class="item-input-wrap">
									<input type="text" placeholder="Your Name" value="Samuel Witwicky" class="form-control"/>
								</div>
							</div>
						</li>
						<li class="item-content item-input">
							<div class="item-inner">
								<div class="item-title item-label">Zip/postal Code</div>
								<div class="item-input-wrap">
									<input type="number" class="form-control"/>
								</div>
							</div>
						</li>
						<li class="item-content item-input">
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
						<li class="item-content item-input">
							<div class="item-inner">
								<div class="item-title item-label">State</div>
								<div class="item-input-wrap">
									<input type="text" placeholder="Enter here" class="form-control"/>
								</div>
							</div>
						</li>
						<li class="item-content item-input">
							<div class="item-inner">
								<div class="item-title item-label">City</div>
								<div class="item-input-wrap">
									<input type="text" placeholder="Enter here" class="form-control"/>
								</div>
							</div>
						</li>
						<li class="item-content item-input">
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
	<div class="toolbar toolbar-bottom footer-button padding container">
		<a href="/checkout-coupon-apply/" class="button-large button rounded-lg btn-icon button-fill">Next <i class="fas fa-caret-right"></i></a>
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