<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-bg"></div>
      <div class="navbar-inner sliding">
        <div class="left">
          <Link back>
            <i class="icon icon-back"></i>
            <span class="if-not-md">Back</span>
          </Link>
        </div>
        <div class="title">Detail Page ${$f7route.params.id}</div>
      </div>
    </div>
    <div class="page-content">
      <div class="block block-strong">
        <p><b>Detail Page ${$f7route.params.id}</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue turpis et risus fringilla
          condimentum. Aliquam vestibulum est tempor, sagittis massa nec, dictum massa. Phasellus non viverra dui, eget
          aliquam sem. Donec eleifend dolor id arcu ultrices, vel ultrices dolor fringilla. Phasellus feugiat
          consectetur
          libero, eget luctus felis rhoncus at. Duis scelerisque ligula sit amet purus congue pulvinar. Proin a risus id
          nibh fermentum auctor. Vestibulum at sem a risus mollis iaculis. In vestibulum malesuada arcu id consectetur.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Link } from 'framework7-svelte';
</script>