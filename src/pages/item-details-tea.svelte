
	<div class="page light">
		
		<div class="navbar navbar-style-1 navbar-transparent">
			<div class="navbar-inner">
				<Link back>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
					</svg>
				</Link>
				<div class="title">Starbucks</div>
				<div class="right">
					<!-- <a href="#" class="add-wishlist-btn" on:click={openDemo1}> -->
					<a href="#" class="add-wishlist-btn">
						<i class="far fa-bookmark"></i>
						<i class="fas fa-bookmark"></i>
					</a>
				</div>
			</div>
		</div>
		
		<div class="page-content item-details pt-0 pb-0">
			
			<div class="dz-banner-heading bg-primary">
				<img src="../assets/img/products/single/pic2.png" class="bnr-img" alt=""/>
			</div>
			
			<div class="dz-banner-height"></div>
			
			<div class="fixed-content container">
				<div class="clearfix">
					<h3 class="ma-0">Te Coco Congelado</h3>
					<p>Te con sabores de chocolate de Indonesia.</p>
				</div>
				<div class="item-rating">4.4</div>
				<div class="dz-range">
					<div class="pl-20 pr-20">
						<div class="range-slider range-slider-init" data-min="0" data-max="100" data-step="4" data-value="25"></div>
					</div>
					<ul class="label-list">
						<li>Small</li>
						<li>Medium</li>
						<li>Large</li>
						<li>Xtra Large</li>
					</ul>
				</div>
				<div class="price-bx">
					<h2 class="price"><sup>$</sup>250<del>$299</del></h2>
					<div class="stepper stepper-init stepper-round">
						<div class="stepper-button-minus"></div>
						<div class="stepper-input-wrap">
							<input type="text" value="0" min="0" max="100" step="1" readonly />
						</div>
						<div class="stepper-button-plus"></div>
					</div>
				</div>	
					
				<p class="mt-0 mb-30">*)Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
				
				<a href="/checkout-payment-method/" on:click={placeOrder} class="button-large button rounded-xl button-fill">Place order <span>$17.4</span></a>
				
			</div>
			
		</div>
		
	</div>

<!-- <script>
export default (props) => {
    const openDemo1 = () => {
		$('.add-wishlist-btn').toggleClass('active');
    }
	return $render;
}
</script> -->

<script>
    import { Link } from 'framework7-svelte';
    import { foodStore } from '../js/store.js';
    import { onDestroy } from 'svelte';

    let unsubscribe = foodStore.subscribe(value => {
        console.log(value);
    });

    function placeOrder() {
        foodStore.set("Te Congelado");
    }

    onDestroy(() => {
        unsubscribe();
    });
</script>