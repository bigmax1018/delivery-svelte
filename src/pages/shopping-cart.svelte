<script>
  import { f7, Page, Link } from "framework7-svelte";
  import { onMount } from "svelte";
  import {
    APPWRITE_FOOD_COLLECTION_ID,
    FOOD_TAG_FAVOURITES,
  } from "../js/constants.js";
  import { create, getDocuments } from "../js/lotteries";
  let foodItems = [];

  // get all food items when the page is loaded.
  onMount(async () => {
    foodItems = (await getDocuments(APPWRITE_FOOD_COLLECTION_ID)).documents;
  });

  let foodImage = "";
  let fileinput;

  // Upload and get the url of food image in file upload tag
  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      foodImage = e.target.result;
    };
  };

  // Upload food items to AppWrite
  const uploadFoodItem = async (e) => {
    e.preventDefault();
    let foodTitle = "";
    let foodDescription = "";
    let foodPrice = 0;
    let foodTag = "";
    let foodNum = 0; //not using now
    let foodCalories = ""; //not using now
    let foodStorageDate = 1; //not using now
    let foodProductionPlace = ""; //not using now

    // get values from form tags
    const formData = new FormData(e.target);

    foodTitle = formData.get("food_title");
    foodDescription = formData.get("food_description");
    foodPrice = formData.get("food_price");
    foodTag = formData.get("food_tag");

    const data = {
      Food_Image: foodImage,
      Food_Title: foodTitle,
      Food_Description: foodDescription,
      Food_Price: foodPrice,
      Food_Price_Old: foodPrice, //privious price of food is equals to the current price when it's uploaded at first
      Food_Tag: foodTag,
    };

    try {
      await create(APPWRITE_FOOD_COLLECTION_ID, data);

      // Notification
      let uploadNotification = f7.notification.create({
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>',
        title: "Uploaded successfully!",
        text: "You successfully uploaded food to your store.",
        closeTimeout: 3000,
      });

      uploadNotification.open();
    } catch (exception) {
      // Notification for error
      let uploadErrorNotification = f7.notification.create({
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="28" height="28" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 88.11 h 40.852 c 3.114 0 5.114 -3.307 3.669 -6.065 L 48.669 4.109 c -1.551 -2.959 -5.786 -2.959 -7.337 0 L 0.479 82.046 c -1.446 2.758 0.555 6.065 3.669 6.065 H 45 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 64.091 L 45 64.091 c -1.554 0 -2.832 -1.223 -2.9 -2.776 l -2.677 -25.83 c -0.243 -3.245 2.323 -6.011 5.577 -6.011 h 0 c 3.254 0 5.821 2.767 5.577 6.011 L 47.9 61.315 C 47.832 62.867 46.554 64.091 45 64.091 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><circle cx="44.995999999999995" cy="74.02600000000001" r="4.626" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/></g></svg>',
        title: "Failed to upload!",
        text: "You have a problem while uploading food to your store.",
        closeTimeout: 3000,
      });

      uploadErrorNotification.open();

      console.error("Error occured while uploading food: ", exception);
    }

    // Clear all input tags after upload
    document.getElementById("id_Food_Image").src =
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png";
    const form = document.getElementById("foodInfoForm");
    form.reset();

    // Clear input tags after submit
  };
</script>

<Page>
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
      <div class="title">Orders</div>
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

  <div class="page-content pt-0 bottom-sp0">
    <!-- Search backdrop -->
    <div class="searchbar-backdrop"></div>

    <div class="container">
      <!-- Search -->
      <form
        data-search-container=".search-list"
        data-search-in=".item-title"
        class="searchbar searchbar-init search-box list-search-bx"
      >
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" placeholder="Search Order ID or Product" />
            <i class="searchbar-icon" style="width: 24px; height: 24px;">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.707 21.293L17.6 16.182C19.1017 14.3173 19.8314 11.9479 19.6388 9.56147C19.4462 7.17505 18.3459 4.9533 16.5645 3.35365C14.7832 1.754 12.4563 0.898212 10.063 0.962481C7.66967 1.02675 5.39207 2.00618 3.69913 3.69913C2.00618 5.39207 1.02675 7.66967 0.962481 10.063C0.898212 12.4563 1.754 14.7832 3.35365 16.5645C4.9533 18.3459 7.17505 19.4462 9.56147 19.6388C11.9479 19.8314 14.3173 19.1017 16.182 17.6L21.293 22.711C21.4816 22.8931 21.7342 22.9939 21.9964 22.9917C22.2586 22.9894 22.5094 22.8842 22.6948 22.6988C22.8802 22.5134 22.9854 22.2626 22.9877 22.0004C22.9899 21.7382 22.8891 21.4856 22.707 21.297V21.293ZM2.99999 10.333C2.99999 8.88242 3.43015 7.46442 4.23606 6.25833C5.04197 5.05224 6.18745 4.11222 7.52762 3.55716C8.86779 3.0021 10.3425 2.85692 11.7651 3.13998C13.1878 3.42305 14.4946 4.12164 15.5203 5.14742C16.5459 6.1732 17.2443 7.48009 17.5272 8.90281C17.8101 10.3255 17.6647 11.8002 17.1094 13.1403C16.5542 14.4804 15.614 15.6257 14.4078 16.4315C13.2016 17.2372 11.7836 17.6672 10.333 17.667C8.38871 17.6646 6.52477 16.8911 5.15005 15.5162C3.77534 14.1413 3.00211 12.2773 2.99999 10.333Z"
                  fill="#BFBFBF"
                />
              </svg>
            </i>
          </div>
        </div>
      </form>
      <div class="toolbar toolbar-bottom tabbar tab-style-1 mb-2">
        <div class="toolbar-inner">
          <Link tabLink="#tab-1" tabLinkActive>All</Link>
          <Link href="/fakeorder/" class="bg-yellow-300 rounded-3xl px-8">Fake Order</Link>
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
              {#each foodItems as foodItem}
                {#if foodItem.Food_Tag == FOOD_TAG_FAVOURITES}
                  <li class="swipeout cart-item">
                    <div class="item-content swipeout-content">
                      <div class="item-inner">
                        <div class="item-media">
                          <a href="/item-details/"
                            ><img src={foodItem.Food_Image} alt="" /></a
                          >
                        </div>
                        <div class="item-info">
                          <div class="item-head">
                            <h6 class="item-title">
                              <a href="/item-details/">{foodItem.Food_Title}</a>
                            </h6>
                          </div>
                          <div class="item-foot">
                            <ul>
                              <li class="item-price">${foodItem.Food_Price}</li>
                              <li class="">2x</li>
                              <li class="text-primary item-total">
                                {foodItem.Food_Price_Old}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-delete">
                        <svg
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.707 6.40708L15.707 0.407082C15.5195 0.219611 15.2652 0.114296 15 0.114296C14.7348 0.114296 14.4805 0.219611 14.293 0.407082L0.293 14.4071C0.105451 14.5946 5.66374e-05 14.8489 0 15.1141V21.1141C0 21.3793 0.105357 21.6336 0.292893 21.8212C0.48043 22.0087 0.734784 22.1141 1 22.1141H7C7.26519 22.114 7.51951 22.0086 7.707 21.8211L21.707 7.82108C21.8945 7.63355 21.9998 7.37924 21.9998 7.11408C21.9998 6.84891 21.8945 6.59461 21.707 6.40708ZM6.586 20.1141H2V15.5281L12 5.52808L16.586 10.1141L6.586 20.1141ZM18 8.70008L13.414 4.11408L15 2.52808L19.586 7.11408L18 8.70008Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                {/if}
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <br /><br />
    <center>
      <form id="foodInfoForm" on:submit={uploadFoodItem}>
        {#if foodImage}
          <img
            id="id_Food_Image"
            class="Food_Image w-[20vw] h-[20vw]"
            name="Food_Image"
            src={foodImage}
            alt="food image"
            on:click={() => {
              fileinput.click();
            }}
          />
        {:else}
          <img
            id="id_Food_Image"
            name="Food_Image"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            class="Food_Image w-[20vw] h-[20vw]"
            alt=""
            on:click={() => {
              fileinput.click();
            }}
          />
        {/if}
        <br />
        <input
          style="display:none"
          type="file"
          accept=".jpg, .jpeg, .png"
          required
          on:change={(e) => onFileSelected(e)}
          bind:this={fileinput}
        />

        <input
          type="text"
          placeholder="Enter Food Title..."
          id="foodbox1"
          name="food_title"
          required
          class="text-align-center text-3xl w-[60vw]"
          style="color:white; background-color:#a79c91;border-radius:10px;"
        />

        <br /><input
          type="text"
          placeholder="Enter Food Description..."
          id="foodbox2"
          name="food_description"
          required
          class="text-align-center text-3xl w-[60vw]"
          style="color:white; background-color:#a79c91;border-radius:10px;"
        />
        <br />
        <input
          type="number"
          placeholder="Enter Food Price..."
          id="foodbox3"
          name="food_price"
          required
          step="0.01"
          class="text-align-center text-3xl w-[60vw]"
          style="color:white; background-color:#a79c91;border-radius:10px;"
        />
        <br />
        <select
          id="dropOffLocation"
          name="food_tag"
          placeholder="Select Tag"
          required
          class="text-white text-align-center pb-5 pt-5 w-[60vw]"
          style="background-color:#a79c91;border-radius:10px;"
        >
          <option selected>Select Food Tag</option>
          <option value="1">Featured</option>
          <option value="2">Popular</option>
          <option value="3">Helados</option>
          <option value="4">Fast Food</option>
          <option value="5">Bebidas</option>
          <option value="6">On Delivery</option>
          <option value="7">Done</option>
          <option value="8">Favorites</option>
        </select> <br />

        <button
          class="button-large button button-fill rounded-xl w-[40vw]"
          type="submit"
        >
          UPLOAD FOOD ITEM
        </button>
      </form>
    </center>
  </div>
</Page>

<style>
  #foodbox1::placeholder {
    color: white;
  }
  #foodbox2::placeholder {
    color: white;
  }
  #foodbox3::placeholder {
    color: white;
  }
  .Food_Image {
    display: flex;
    cursor: pointer;
  }
</style>
