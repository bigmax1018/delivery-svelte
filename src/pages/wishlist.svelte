<script>
  import { Link } from "framework7-svelte";
  import { onMount } from "svelte";
  import { getDocuments } from "../js/lotteries.js";
  import {
    APPWRITE_FOOD_COLLECTION_ID,
    FOOD_TAG_FAVOURITES,
  } from "../js/constants.js";

  let foodItems = [];

  onMount(async () => {
    foodItems = (await getDocuments(APPWRITE_FOOD_COLLECTION_ID)).documents;
  });
</script>

<div class="page">
  <div class="navbar navbar-style-1">
    <div class="navbar-inner">
      <Link back>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z"
            fill="black"
          />
        </svg>
      </Link>
      <div class="title">Favorites</div>
      <div class="right">
        <a href="#" class="link panel-open" data-panel="left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8.40009V21.0001C3 21.2653 3.10536 21.5197 3.29289 21.7072C3.48043 21.8947 3.73478 22.0001 4 22.0001H20C20.2652 22.0001 20.5196 21.8947 20.7071 21.7072C20.8946 21.5197 21 21.2653 21 21.0001V8.40009C21.0001 8.23646 20.96 8.07531 20.8833 7.93077C20.8066 7.78623 20.6956 7.66273 20.56 7.5711L12.56 2.1711C12.3946 2.05932 12.1996 1.99959 12 1.99959C11.8004 1.99959 11.6054 2.05932 11.44 2.1711L3.44 7.5711C3.30443 7.66273 3.19342 7.78623 3.11671 7.93077C3.03999 8.07531 2.99992 8.23646 3 8.40009ZM14 20.0001H10V14.0001H14V20.0001ZM5 8.9321L12 4.2071L19 8.9321V20.0001H16V13.0001C16 12.7349 15.8946 12.4805 15.7071 12.293C15.5196 12.1055 15.2652 12.0001 15 12.0001H9C8.73478 12.0001 8.48043 12.1055 8.29289 12.293C8.10536 12.4805 8 12.7349 8 13.0001V20.0001H5V8.9321Z"
              fill="#04764E"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Page Content -->
  <div class="page-content content-area pt-7">
    <!-- Search backdrop -->
    <div class="searchbar-backdrop"></div>

    <!-- Search -->
    <div class="container">
      <form
        data-search-container=".search-list"
        data-search-in=".item-title"
        class="searchbar searchbar-init search-box list-search-bx"
      >
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" placeholder="Search Here" />
            <i class="searchbar-icon" style="width: 24px; height: 24px;">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1839 0.0411987C4.55948 0.0411987 0 4.60068 0 10.2251C0 15.8496 4.55948 20.409 10.1839 20.409C15.8084 20.409 20.3678 15.8496 20.3678 10.2251C20.3678 4.60068 15.8084 0.0411987 10.1839 0.0411987ZM23.5803 23.5209C23.0136 24.0976 22.0815 24.1057 21.5048 23.5391L17.434 19.5391C18.2085 18.9354 18.9054 18.2372 19.5081 17.4619L23.5621 21.4454C24.1388 22.0121 24.147 22.9442 23.5803 23.5209ZM10.1839 2.87667C14.2424 2.87667 17.5323 6.16668 17.5323 10.2251C17.5323 14.2835 14.2423 17.5735 10.1839 17.5735C6.12548 17.5735 2.83552 14.2835 2.83552 10.2251C2.83552 6.16668 6.12553 2.87667 10.1839 2.87667Z"
                  fill="#D5D5D5"
                />
              </svg>
            </i>
          </div>
        </div>
      </form>
      <div class="list simple-list searchbar-not-found">
        <ul>
          <li>Nothing found</li>
        </ul>
      </div>
    </div>

    <div
      class="list search-list mt-0 mb-20 container dz-list searchbar-found item-list"
    >
      <ul class="grid grid-cols-1 medium-grid-cols-2 grid-gap">
		{#each foodItems as foodItem}
			{#if foodItem.Food_Tag == FOOD_TAG_FAVOURITES}
			<li class="col-100 medium-50 mb-20">
				<div class="wishlist-bx">
				  <div class="dz-media">
					<a href="/item-details/"
					  ><img src={foodItem.Food_Image} alt="" /></a
					>
				  </div>
				  <div class="dz-info">
					<div class="dz-head">
					  <h6 class="item-title">
						<a href="/item-details/">{foodItem.Food_Title}</a>
					  </h6>
					  <p>Variant : {foodItem.Food_Description}</p>
					</div>
					<div class="dz-meta">
					  <ul>
						<li class="price">${foodItem.Food_Price}</li>
						<li>
						  <label class="bookmark-btn">
							<input type="checkbox" checked />
							<span class="checkmark"></span>
						  </label>
						</li>
					  </ul>
					</div>
				  </div>
				</div>
			  </li>
			{/if}
		{/each}
      </ul>
    </div>
  </div>
</div>
