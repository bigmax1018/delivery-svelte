<script>
  import { Page, Link } from "framework7-svelte";
  //	import { user } from '$js/user';
  import axios from "axios";
  import { v4 as uuidv4 } from "uuid";

const orderUrl = 'http://localhost:5165/order';
let title = 'Fake Order';
let businessLocation = '';
let dropoffLocation = '';
let orderStatus = '';
let foodValue = '';
let ongoingOrder = false;
let orderCancelled = false;
let orderCompleted = false;
let intervalId;

  const createFakeOrder = async () => {
    const fakeOrder = {
      id: uuidv4(), //Generate a GUID for the order
      foodValue: foodValue,
      businessLocation: businessLocation,
      dropoffLocation: dropoffLocation,
    };
    console.log(fakeOrder);

    try {
      const response = await axios.post(`${orderUrl}/`, fakeOrder);

      if (response.status === 200 || response.status === 201) {
        console.log("Order created successfully:", response.data);
      } else {
        console.log("Error creating order:", response.status, response.data);
      }
    } catch (error) {
        console.error('Error creating order:', error);
  }
}

async function getOrderStatus() {
  try {
    const response = await axios.get(`${orderUrl}/orderStatus`);

      if (response.status === 200) {
        orderStatus = response.data;
        console.log("Order status:", response.data);

        if (response.data === "Order Completed") {
          await completeOrder();
        }
      } else {
        console.log(
          "Error getting order status:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error("Error getting order status:", error);
    }
  }

  function startOrderStatusUpdates() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    //Start calling getOrderStatus every 5 seconds
    intervalId = setInterval(getOrderStatus, 5000);
  }

  async function handleOrderStart() {
    await createFakeOrder();
    await startOrderStatusUpdates();
    orderCancelled = false;
  }

async function cancelOrder() {
  try {
    const response = await axios.post(`${orderUrl}/cancelOrder`);
    clearInterval(intervalId);
	orderStatus = null;

      if (response.status === 200) {
        orderCancelled = true;
        console.log("Order cancelled successfully:", response.data);
      } else {
        console.log("Error cancelling order:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  }

async function completeOrder() {
  try {
    const response = await axios.post(`${orderUrl}/completeOrder`);
	clearInterval(intervalId);

      if (response.status === 200) {
        console.log("Order completed successfully:", response.data);
      } else {
        console.log("Error completing order:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error completing order:", error);
    }
  }
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
      <div class="title">{title}</div>
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
          <Link href="/shopping-cart/" class="bg-yellow-300 rounded-3xl px-8"
            >Store Page</Link
          >
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
                      <a href="/item-details/"
                        ><img src="../assets/img/menus/picpops.jpg" alt="" /></a
                      >
                    </div>
                    <div class="item-info">
                      <div class="item-head">
                        <h6 class="item-title">
                          <a href="/item-details/">Sweet Lemon Indonesian Tea</a
                          >
                        </h6>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div id="fakebox" class="pt-8">
      <center>
        <form on:submit|preventDefault={handleOrderStart}>
          <input
            type="text"
            class="p-2 rounded-3xl"
            style="color:white; background-color:gray; padding:8px; border-radius:10px; margin-bottom:20px;"
            name="businessLocation"
            id="businessLocation"
            bind:value={businessLocation}
            placeholder="Enter Business Location..."
            required
          />
          <input
            type="text"
            name="dropoffLocation"
            style="color:white; background-color:gray; padding:8px; border-radius:10px; margin-bottom:20px;"
            id="dropoffLocation"
            bind:value={dropoffLocation}
            placeholder="Enter Dropoff Location..."
            required
          />
          <button
            type="submit"
            class="submit_button mt-8 bg-green-400 w-[50vw] rounded-3xl font-extrabold text-black p-4"
            >Submit</button
          >
        </form>
        <button
          type="button"
          on:click={cancelOrder}
          class="bg-red-600 submit_button mt-8 w-[50vw] rounded-3xl font-extrabold text-black p-4"
          >Cancel Order</button
        >

        {#if orderCancelled}
          <p class="text-red-600">Order Cancelled</p>
        {/if}</center
      >
    </div>

    <div class="w-[80vw] mx-auto pt-12">
      <center>
        <div
          class="flex items-center p-1 sm:p-4 border border-gray-200 rounded dark:border-gray-700"
          style="color:black"
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value="1"
            name="bordered-radio"
            class="w-4 h-4"
          />
          <label
            for="bordered-radio-1"
            class="w-full py-1 sm:py-4 ms-2 text-xs sm:text-sm font-medium text-black truncate"
            >Business #1</label
          >
          <input
            id="bordered-radio-2"
            type="radio"
            value="2"
            name="bordered-radio"
            class="w-4 h-4"
            checked
          />
          <label
            for="bordered-radio-2"
            class="w-full py-1 sm:py-4 ms-2 text-xs sm:text-sm font-medium text-black truncate"
            >Business #2</label
          >
          <input
            id="bordered-radio-3"
            type="radio"
            value="3"
            name="bordered-radio"
            class="w-4 h-4"
          />
          <label
            for="bordered-radio-3"
            class="w-full py-1 sm:py-4 ms-2 text-xs sm:text-sm font-medium text-black truncate"
            >Business #3</label
          >
        </div>

        <br /><br /><input
          class="input-text bg-gray-400 text-white font-extrabold rounded-xl p-4"
          id="foodbox"
          placeholder="Enter Food Name..."
          type="order"
          name="order"
          required
        />

        <select
          id="dropOffLocation"
          name="dropOffLocation"
          placeholder="Dropoff Location"
          required
          class="bg-gray-400 border text-white font-extrabold mt-8 text-lg p-2 rounded-lg"
        >
          <option selected>Choose Your Dropoff Location</option>
          <option value="1">Villa Mella #1</option>
          <option value="2">Villa Mella #2</option>
          <option value="3">Villa Mella #3</option>
          <option value="4">Villa Mella #4</option>
        </select>

        <button
          type="submit"
          class="submit_button mt-8 bg-green-400 w-[50vw] rounded-3xl font-extrabold text-black p-4"
        >
          <button
            type="submit"
            class="submit_button"
            onclick="document.getElementById('box1').style.display='none'; document.getElementById('box2').style.display='block';"
          >
            <img src="../assets/img/order.png" fill="#fff" alt="" />
            <span>Send Order</span>
          </button></button
        ></center
      >
    </div>

    <center
      ><h1
        style="display: {orderStatus ? 'block' : 'none'};"
        id="status"
        class="text-center font-extrabold text-2xl mt-8"
      >
        Order Status: <span class="text-yellow-500 text-3xl">{orderStatus}</span
        >
      </h1>
      <p>Order status: {orderStatus}</p></center
    >
  </div></Page
>

<style>
  #foodbox::placeholder {
    color: white;
  }
  #fakebox::placeholder {
    color: white;
    font-weight: 900;
  }
</style>
