<div class="page">
	<div class="navbar navbar-style-1">
		<div class="navbar-inner">
			<Link back>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</Link>
            <div class="title">Write Reviews</div>
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
	<div class="page-content bg-gray pt-70">
		<div class="review-product">
			<div class="container inner-content">
				<div class="dz-media">
					<img src="assets/img/menus/menu1.jpg" alt=""/>
				</div>
				<div class="dz-content">
					<h5 class="title">Brewed Coppuccino Latte with Creamy Milk</h5>
					<p>Breverages</p>
				</div>
			</div>
		</div>
		<div class="write-reviews-box container">
			<div class="reviews-head text-align-center">
				<h4 class="title mt-0 mb-10">What do you think?</h4>
				<p class="text-black ma-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
			</div>
			<div class="rating-info">
				<h2 class="rating-text">4.0</h2>
				<ul class="rating-list">
					<li class="rating-star"><i class="fas fa-star"></i></li>
					<li class="rating-star"><i class="fas fa-star"></i></li>
					<li class="rating-star"><i class="fas fa-star"></i></li>
					<li class="rating-star"><i class="fas fa-star"></i></li>
					<li><i class="fas fa-star"></i></li>
				</ul>
			</div>
			<form class="form-elements">
				<div class="list">
					<ul class="grid grid-cols-1">
						<li class="item-content item-input col-100 item-input-with-value">
							<div class="item-inner">
								<div class="item-input-wrap">
									<textarea placeholder="Write your review here" class="form-control"></textarea>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<a href="/home/" class="button-large rounded-xl button button-fill">SEND</a>
			</form>
		</div>
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