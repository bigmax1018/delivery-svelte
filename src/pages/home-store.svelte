<script>
  import { f7, Page } from "framework7-svelte";
  import { onMount } from "svelte";
  import { user } from "../js/user.js";
  import { getDocuments } from "../js/lotteries.js";
  import { APPWRITE_FOOD_COLLECTION_ID,  FOOD_TAG_POPULAR, FOOD_TAG_FAVOURITES,  FOOD_TAG_FEATURED, } from "../js/constants.js";
  import { id } from "framework7/shared/utils.js";
  import ApexCharts from 'apexcharts';
  import "jsvectormap/dist/css/jsvectormap.css";
  import "flatpickr/dist/flatpickr.min.css";
  import Alpine from "alpinejs";
  import persist from "@alpinejs/persist";
  import flatpickr from "flatpickr";
  import chart01 from "../components/chart-01";
  import chart02 from "../components/chart-02";
  import chart03 from "../components/chart-03";
  import chart04 from "../components/chart-04";

  export let f7router;

  let foodItems = [];
  let page = 'ecommerce';
  let loaded = true;
  let darkMode = JSON.parse(localStorage.getItem('darkMode')) || true;
  let stickyMenu = false;
  let sidebarToggle = false;
  let scrollTop = false;

  onMount(async () => {
    foodItems = (await getDocuments(APPWRITE_FOOD_COLLECTION_ID)).documents;
    Alpine.plugin(persist);
    window.Alpine = Alpine;
    Alpine.start();

    flatpickr(".datepicker", {  });
    flatpickr(".form-datepicker", { });

    chart01();
    chart02();
    chart03();
    chart04();
    map01();
  });




$: localStorage.setItem('darkMode', JSON.stringify(darkMode));
</script>

<div class="page page-home">
  <!-- Page Content -->
  <div class="page-content content-area pt-40 pb-0">
    <!-- Search backdrop -->
    <div class="searchbar-backdrop"></div>
    <div class="container">
      <div class="top-bar">
        <a href="/shopping-cart/" class="notification-bar">
          <div class="info">
            <span class="text">Good Morning</span>
            {#if $user && $user.name}
              <h2 class="title">{$user.name}</h2>
            {:else if $user && $user.email}
              <h2 class="title">{$user.email}</h2>
            {/if}
          </div>
          <div class="media">
            <a href="#" class="link panel-open pt-8" data-panel="left">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="surface1">
                  <path
                    fill="#5F5F5F"
                    d="M 5.671875 11.363281 C 6.324219 11.363281 6.964844 11.253906 7.574219 11.035156 C 7.773438 10.964844 7.875 10.746094 7.804688 10.546875 C 7.734375 10.347656 7.515625 10.246094 7.316406 10.316406 C 6.789062 10.503906 6.238281 10.597656 5.671875 10.597656 C 2.96875 10.597656 0.765625 8.394531 0.765625 5.6875 C 0.765625 2.980469 2.96875 0.78125 5.671875 0.78125 C 8.378906 0.78125 10.582031 2.980469 10.582031 5.6875 C 10.582031 6.238281 10.492188 6.777344 10.316406 7.289062 C 10.246094 7.492188 10.351562 7.707031 10.550781 7.777344 C 10.75 7.84375 10.96875 7.738281 11.039062 7.539062 C 11.242188 6.945312 11.347656 6.324219 11.347656 5.6875 C 11.347656 2.5625 8.800781 0.015625 5.671875 0.015625 C 2.546875 0.015625 0 2.5625 0 5.6875 C 0 8.816406 2.546875 11.363281 5.671875 11.363281 Z M 5.671875 11.363281 "
                  />
                  <path
                    fill="#5F5F5F"
                    d="M 10.574219 16.199219 C 10.375 16.269531 10.269531 16.488281 10.339844 16.6875 C 10.519531 17.210938 10.613281 17.753906 10.613281 18.3125 C 10.613281 21.019531 8.410156 23.21875 5.703125 23.21875 C 2.996094 23.21875 0.796875 21.019531 0.796875 18.3125 C 0.796875 15.605469 2.996094 13.402344 5.703125 13.402344 C 6.261719 13.402344 6.804688 13.496094 7.328125 13.675781 C 7.527344 13.746094 7.746094 13.640625 7.816406 13.441406 C 7.882812 13.242188 7.78125 13.023438 7.578125 12.957031 C 6.976562 12.746094 6.347656 12.636719 5.703125 12.636719 C 2.574219 12.636719 0.03125 15.183594 0.03125 18.3125 C 0.03125 21.4375 2.574219 23.984375 5.703125 23.984375 C 8.832031 23.984375 11.378906 21.4375 11.378906 18.3125 C 11.378906 17.667969 11.269531 17.039062 11.058594 16.433594 C 10.992188 16.234375 10.773438 16.132812 10.574219 16.199219 Z M 10.574219 16.199219 "
                  />
                  <path
                    fill="#5F5F5F"
                    d="M 18.328125 12.636719 C 17.683594 12.636719 17.054688 12.746094 16.449219 12.957031 C 16.25 13.023438 16.144531 13.242188 16.214844 13.441406 C 16.285156 13.640625 16.503906 13.746094 16.703125 13.675781 C 17.222656 13.496094 17.769531 13.402344 18.328125 13.402344 C 21.03125 13.402344 23.234375 15.605469 23.234375 18.3125 C 23.234375 21.019531 21.03125 23.21875 18.328125 23.21875 C 15.621094 23.21875 13.417969 21.019531 13.417969 18.3125 C 13.417969 17.753906 13.511719 17.210938 13.691406 16.6875 C 13.761719 16.488281 13.65625 16.269531 13.457031 16.199219 C 13.257812 16.132812 13.039062 16.234375 12.972656 16.433594 C 12.761719 17.039062 12.652344 17.667969 12.652344 18.3125 C 12.652344 21.4375 15.199219 23.984375 18.328125 23.984375 C 21.453125 23.984375 24 21.4375 24 18.3125 C 24 15.183594 21.453125 12.636719 18.328125 12.636719 Z M 18.328125 12.636719 "
                  />
                  <path
                    fill="#5F5F5F"
                    d="M 13.457031 7.800781 C 13.65625 7.730469 13.761719 7.511719 13.691406 7.3125 C 13.511719 6.789062 13.417969 6.246094 13.417969 5.6875 C 13.417969 2.980469 15.621094 0.78125 18.328125 0.78125 C 21.03125 0.78125 23.234375 2.980469 23.234375 5.6875 C 23.234375 8.394531 21.03125 10.597656 18.328125 10.597656 C 17.769531 10.597656 17.222656 10.503906 16.703125 10.324219 C 16.503906 10.253906 16.285156 10.359375 16.214844 10.558594 C 16.148438 10.757812 16.25 10.976562 16.449219 11.042969 C 17.054688 11.253906 17.683594 11.363281 18.328125 11.363281 C 21.453125 11.363281 24 8.816406 24 5.6875 C 24 2.5625 21.453125 0.015625 18.328125 0.015625 C 15.199219 0.015625 12.652344 2.5625 12.652344 5.6875 C 12.652344 6.332031 12.761719 6.960938 12.972656 7.566406 C 13.039062 7.765625 13.257812 7.867188 13.457031 7.800781 Z M 13.457031 7.800781 "
                  />
                  <path
                    fill="#5F5F5F"
                    d="M 16.945312 18.550781 C 16.972656 18.710938 17.027344 18.859375 17.101562 18.996094 L 15.398438 20.699219 C 15.25 20.847656 15.25 21.089844 15.398438 21.238281 C 15.472656 21.3125 15.570312 21.351562 15.667969 21.351562 C 15.765625 21.351562 15.863281 21.316406 15.9375 21.238281 L 17.644531 19.535156 C 17.84375 19.648438 18.078125 19.714844 18.328125 19.714844 C 19.101562 19.714844 19.730469 19.085938 19.730469 18.3125 C 19.730469 18.0625 19.664062 17.832031 19.550781 17.628906 L 21.253906 15.921875 C 21.40625 15.773438 21.40625 15.53125 21.253906 15.382812 C 21.105469 15.234375 20.863281 15.234375 20.714844 15.382812 L 19.007812 17.085938 C 18.875 17.011719 18.726562 16.957031 18.566406 16.929688 L 14.382812 12.742188 C 14.453125 12.507812 14.496094 12.257812 14.496094 12 C 14.496094 11.742188 14.453125 11.492188 14.382812 11.257812 L 18.566406 7.070312 C 18.726562 7.042969 18.875 6.988281 19.007812 6.914062 L 20.714844 8.617188 C 20.789062 8.691406 20.886719 8.730469 20.984375 8.730469 C 21.082031 8.730469 21.179688 8.691406 21.253906 8.617188 C 21.40625 8.46875 21.40625 8.226562 21.253906 8.078125 L 19.550781 6.371094 C 19.664062 6.167969 19.730469 5.9375 19.730469 5.6875 C 19.730469 4.914062 19.101562 4.285156 18.328125 4.285156 C 18.078125 4.285156 17.84375 4.351562 17.644531 4.464844 L 15.9375 2.761719 C 15.789062 2.609375 15.546875 2.609375 15.398438 2.761719 C 15.25 2.910156 15.25 3.152344 15.398438 3.300781 L 17.101562 5.003906 C 17.027344 5.140625 16.972656 5.289062 16.945312 5.449219 L 12.757812 9.632812 C 12.523438 9.558594 12.273438 9.519531 12.015625 9.519531 C 11.757812 9.519531 11.507812 9.5625 11.273438 9.632812 L 7.085938 5.449219 C 7.058594 5.289062 7.003906 5.140625 6.929688 5.003906 L 8.632812 3.300781 C 8.78125 3.152344 8.78125 2.910156 8.632812 2.761719 C 8.484375 2.609375 8.242188 2.609375 8.09375 2.761719 L 6.386719 4.464844 C 6.183594 4.351562 5.953125 4.285156 5.703125 4.285156 C 4.929688 4.285156 4.300781 4.914062 4.300781 5.6875 C 4.300781 5.9375 4.367188 6.167969 4.480469 6.371094 L 2.777344 8.078125 C 2.625 8.226562 2.625 8.46875 2.777344 8.617188 C 2.851562 8.691406 2.949219 8.730469 3.046875 8.730469 C 3.144531 8.730469 3.242188 8.691406 3.316406 8.617188 L 5.019531 6.914062 C 5.15625 6.988281 5.304688 7.042969 5.464844 7.070312 L 9.648438 11.257812 C 9.574219 11.492188 9.535156 11.742188 9.535156 12 C 9.535156 12.257812 9.574219 12.507812 9.648438 12.742188 L 5.464844 16.929688 C 5.304688 16.957031 5.15625 17.011719 5.019531 17.085938 L 3.316406 15.382812 C 3.167969 15.234375 2.925781 15.234375 2.777344 15.382812 C 2.625 15.53125 2.625 15.773438 2.777344 15.921875 L 4.480469 17.628906 C 4.367188 17.832031 4.300781 18.0625 4.300781 18.3125 C 4.300781 19.085938 4.929688 19.714844 5.703125 19.714844 C 5.953125 19.714844 6.183594 19.648438 6.386719 19.535156 L 8.09375 21.238281 C 8.167969 21.316406 8.265625 21.351562 8.363281 21.351562 C 8.460938 21.351562 8.558594 21.316406 8.632812 21.238281 C 8.78125 21.089844 8.78125 20.847656 8.632812 20.699219 L 6.929688 18.996094 C 7.003906 18.859375 7.058594 18.710938 7.085938 18.550781 L 11.273438 14.367188 C 11.507812 14.4375 11.757812 14.480469 12.015625 14.480469 C 12.273438 14.480469 12.523438 14.4375 12.757812 14.367188 Z M 18.328125 17.671875 C 18.5 17.671875 18.660156 17.746094 18.777344 17.859375 C 18.894531 17.976562 18.964844 18.136719 18.964844 18.3125 C 18.964844 18.664062 18.679688 18.949219 18.328125 18.949219 C 18.152344 18.949219 17.992188 18.878906 17.878906 18.761719 C 17.761719 18.644531 17.6875 18.484375 17.6875 18.3125 C 17.6875 17.960938 17.976562 17.671875 18.328125 17.671875 Z M 17.875 5.238281 C 17.992188 5.121094 18.152344 5.050781 18.328125 5.050781 C 18.679688 5.050781 18.964844 5.335938 18.964844 5.6875 C 18.964844 5.863281 18.894531 6.023438 18.777344 6.136719 C 18.660156 6.253906 18.5 6.328125 18.328125 6.328125 C 17.976562 6.328125 17.6875 6.039062 17.6875 5.6875 C 17.6875 5.515625 17.761719 5.355469 17.875 5.238281 Z M 17.644531 17.085938 C 17.417969 17.214844 17.230469 17.402344 17.101562 17.628906 L 13.476562 14 C 13.683594 13.851562 13.867188 13.667969 14.015625 13.460938 Z M 17.101562 6.371094 C 17.230469 6.597656 17.417969 6.785156 17.644531 6.914062 L 14.015625 10.539062 C 13.867188 10.332031 13.683594 10.148438 13.476562 10 Z M 5.703125 6.328125 C 5.527344 6.328125 5.371094 6.253906 5.253906 6.140625 C 5.136719 6.023438 5.066406 5.863281 5.066406 5.6875 C 5.066406 5.335938 5.351562 5.050781 5.703125 5.050781 C 5.878906 5.050781 6.039062 5.121094 6.152344 5.238281 C 6.269531 5.355469 6.34375 5.515625 6.34375 5.6875 C 6.34375 6.039062 6.054688 6.328125 5.703125 6.328125 Z M 6.386719 6.914062 C 6.613281 6.785156 6.800781 6.597656 6.929688 6.371094 L 10.554688 10 C 10.347656 10.148438 10.164062 10.332031 10.015625 10.539062 Z M 6.15625 18.761719 C 6.039062 18.878906 5.878906 18.949219 5.703125 18.949219 C 5.351562 18.949219 5.066406 18.664062 5.066406 18.3125 C 5.066406 18.136719 5.136719 17.976562 5.253906 17.863281 C 5.371094 17.746094 5.53125 17.671875 5.703125 17.671875 C 6.054688 17.671875 6.34375 17.960938 6.34375 18.3125 C 6.34375 18.484375 6.269531 18.644531 6.15625 18.761719 Z M 6.929688 17.628906 C 6.800781 17.402344 6.613281 17.214844 6.386719 17.085938 L 10.015625 13.460938 C 10.164062 13.667969 10.347656 13.851562 10.554688 14 Z M 12.015625 13.714844 C 11.070312 13.714844 10.300781 12.945312 10.300781 12 C 10.300781 11.054688 11.070312 10.285156 12.015625 10.285156 C 12.960938 10.285156 13.730469 11.054688 13.730469 12 C 13.730469 12.945312 12.960938 13.714844 12.015625 13.714844 Z M 12.015625 13.714844 "
                  />
                </g>
              </svg>
              <i class="fa fa-circle active pt-8"></i></a
            >
          </div>
        </a>
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
              fill="#0F0F0F"
            />
          </svg>
        </a>
      </div>


      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div
            class="grid ">
            
            <!-- Card Item Start -->
            <div
              class="rounded-sm px-7.5 dark:bg-boxdark" style="display: flex; justify-content: center; flex-direction: column; align-items: center;"
            >
              <div
                class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
              >
                <svg
                  class="fill-primary dark:fill-white"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
                    fill=""
                  />
                  <path
                    d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
                    fill=""
                  />
                  <path
                    d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
                    fill=""
                  />
                </svg>
              </div>

              <div class="mb-4 flex items-end justify-center">
                <div>
                  <h4 class="text-title-md font-bold mb-4 text-4xl text-black dark:text-white">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$23,418
                  </h4>
                  <span class="text-sm font-medium">Pesos Sold</span>
                </div>

                <span
                  class="flex items-center gap-1 text-sm font-medium text-meta-5" style="color:#49be25;"
                >
                  0.95%
                  <svg
                    class="fill-meta-5"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                      fill=""
                    />
                  </svg>
                </span>
              </div>
            </div>
            <!-- Card Item End -->
          </div>

          <div
            class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"
          >
            <!-- ====== Chart One Start -->
            <div
  class="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8"
>
  <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
    <div class="flex w-full flex-wrap gap-3 sm:gap-5">
      <div class="flex min-w-47.5">
        <div class="w-full">
          <p class="font-semibold text-primary">Total Revenue</p>
          <p class="text-sm font-medium">12.04.2022 - 12.05.2022</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div id="chartOne" class=""></div>
  </div>
</div>

            <!-- ====== Chart One End -->

            <div
            class="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"
          >
          <p class="font-semibold text-primary ml-2">Customer Chat</p>

            <div class="px-4 ">
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-03.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium text-black dark:text-white">
                      Devid Heilo
                    </h5>
                    <p>
                      <span
                        class="text-sm font-medium text-black dark:text-white"
                        >Hello, how are you?</span
                      >
                      <span class="text-xs"> . 12 min</span>
                    </p>
                  </div>
                  <div
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                  >
                    <span class="text-sm font-medium text-white">3</span>
                  </div>
                </div>
              </a>
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-04.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium">Henry Fisher</h5>
                    <p>
                      <span class="text-sm font-medium"
                        >I am waiting for you</span
                      >
                      <span class="text-xs"> . 5:54 PM</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-05.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium">Wilium Smith</h5>
                    <p>
                      <span class="text-sm font-medium"
                        >Where are you now?</span
                      >
                      <span class="text-xs"> . 10:12 PM</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-01.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium text-black dark:text-white">
                      Henry Deco
                    </h5>
                    <p>
                      <span
                        class="text-sm font-medium text-black dark:text-white"
                        >Thank you so much!</span
                      >
                      <span class="text-xs"> . Sun</span>
                    </p>
                  </div>
                  <div
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-primary"
                  >
                    <span class="text-sm font-medium text-white">2</span>
                  </div>
                </div>
              </a>
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-02.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium">Jubin Jack</h5>
                    <p>
                      <span class="text-sm font-medium"
                        >I really love that!</span
                      >
                      <span class="text-xs"> . Oct 23</span>
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="messages.html"
                class="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
              >
                <div class="relative h-14 w-14 rounded-full">
                  <img src="../assets/img/user/user-05.png" alt="User" />
                  <span
                    class="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"
                  ></span>
                </div>

                <div class="flex flex-1 items-center justify-between">
                  <div>
                    <h5 class="font-medium">Wilium Smith</h5>
                    <p>
                      <span class="text-sm font-medium"
                        >Where are you now?</span
                      >
                      <span class="text-xs"> . Sep 20</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- ====== Chat Card End -->

            <!-- ====== Chart Three Start -->
            <div
  class="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5"
>
  <div class="mb-3 justify-between gap-4 sm:flex">
    <div>
      <p class="font-semibold text-primary ml-2">Visitor Analysis</p>
    </div>
    <div>
      <div class="relative z-20 inline-block">
        <select
          name=""
          id=""
          class="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
        >
          <option value="">Monthly</option>
          <option value="">Yearly</option>
        </select>
        <span class="absolute right-3 top-1/2 z-10 -translate-y-1/2">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
              fill="#637381"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
              fill="#637381"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
  <div class="mb-2">
    <div id="chartThree" class="mx-auto flex justify-center"></div>
  </div>
  <div class="-mx-8 flex flex-wrap items-center justify-center p-4 gap-y-3">
    <div class="w-full px-8 sm:w-1/2">
      <div class="flex w-full items-center">
        <span
          class="mr-2 block h-3 max-w-3 rounded-full bg-primary"
        ></span>
        <p
          class="flex w-full justify-between text-sm font-medium text-black dark:text-white"
        >
          <span> Desktop </span>
          <span> 65% </span>
        </p>
      </div>
    </div>
    <div class="w-full px-8 sm:w-1/2">
      <div class="flex w-full items-center">
        <span
          class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"
        ></span>
        <p
          class="flex w-full justify-between text-sm font-medium text-black dark:text-white"
        >
          <span> Tablet </span>
          <span> 34% </span>
        </p>
      </div>
    </div>
    <div class="w-full px-8 sm:w-1/2">
      <div class="flex w-full items-center">
        <span
          class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"
        ></span>
        <p
          class="flex w-full justify-between text-sm font-medium text-black dark:text-white"
        >
          <span> Mobile </span>
          <span> 45% </span>
        </p>
      </div>
    </div>
    <div class="w-full px-8 sm:w-1/2">
      <div class="flex w-full items-center">
        <span
          class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"
        ></span>
        <p
          class="flex w-full justify-between text-sm font-medium text-black dark:text-white"
        >
          <span> Unknown </span>
          <span> 12% </span>
        </p>
      </div>
    </div>
  </div>
</div>

            <!-- ====== Chart Three End -->

            <!-- ====== Map One Start -->
            <div class="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
              
            <p class="font-semibold text-primary ml-2">Most Ordered Items</p>
            
              <div class="flex flex-col">
                <div
                  class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5"
                >
                  <div class="p-2.5 xl:p-5">
                    <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
                  </div>
                  <div class="p-2.5 text-center xl:p-5">
                    <h5 class="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
                  </div>
                  <div class="p-2.5 text-center xl:p-5">
                    <h5 class="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
                  </div>
                </div>
            
                <div
                  class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
                >
                  <div class="flex items-center gap-3 p-2.5 xl:p-5">
                    <div class="flex-shrink-0">
                      <img src="../assets/img/products/featured/pic1.png" class="" style="width:48px; height:48px;" alt="Brand" />
                    </div>
                    <p class="hidden font-medium text-black dark:text-white sm:block">
                      Pizza XL Queso
                    </p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-black dark:text-white">3.5K</p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-meta-3">$5,768</p>
                  </div>
                </div>
            
                <div
                  class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
                >
                  <div class="flex items-center gap-3 p-2.5 xl:p-5">
                    <div class="flex-shrink-0">
                      <img src="../assets/img/products/featured/pic2.png" class="" style="width:48px; height:48px;" alt="Brand" />
                    </div>
                    <p class="hidden font-medium text-black dark:text-white sm:block">
                      Ice Tea
                    </p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-black dark:text-white">2.2K</p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-meta-3">$4,635</p>
                  </div>
                </div>
            
                <div
                  class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
                >
                  <div class="flex items-center gap-3 p-2.5 xl:p-5">
                    <div class="flex-shrink-0">
                      <img src="../assets/img/products/product1a.jpg" class="" style="width:48px; height:48px; border-radius:100%" alt="Brand" />
                    </div>
                    <p class="hidden font-medium text-black dark:text-white sm:block">
                      Hamburguesa Bacon
                    </p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-black dark:text-white">2.1K</p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-meta-3">$4,290</p>
                  </div>
                </div>
            
                <div
                  class="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
                >
                  <div class="flex items-center gap-3 p-2.5 xl:p-5">
                    <div class="flex-shrink-0">
                      <img src="../assets/img/products/featured/pic3.png" class="" style="width:48px; height:48px; border-radius:100%" alt="Brand" />
                    </div>
                    <p class="hidden font-medium text-black dark:text-white sm:block">
                      Pollo Nuggets
                    </p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-black dark:text-white">1.5K</p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-meta-3">$3,580</p>
                  </div>
                </div>
            
                <div class="grid grid-cols-3 sm:grid-cols-5">
                  <div class="flex items-center gap-3 p-2.5 xl:p-5">
                    <div class="flex-shrink-0">
                      <img src="../assets/img/products/featured/pic5.png" class="" style="width:48px; height:48px; border-radius:100%" alt="Brand" />
                    </div>
                    <p class="hidden font-medium text-black dark:text-white sm:block">
                      Helados BON
                    </p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-black dark:text-white">1.2K</p>
                  </div>
            
                  <div class="flex items-center justify-center p-2.5 xl:p-5">
                    <p class="font-medium text-meta-3">$2,740</p>
                  </div>
                </div>
              </div>
            </div>
</div>

            <!-- ====== Map One End -->

            <!-- ====== Table One Start -->
            <div class="col-span-12 xl:col-span-8">
             

            </div>
            <!-- ====== Table One End -->

            <!-- ====== Chat Card Start -->
            
          </div>
        </div>



      
      
    </div>
  </div>
