<template>
  <div class="page">
    <div class="navbar navbar-style-1 border-bottom">
		<div class="navbar-inner">
			<Link back>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</Link>
			<div class="title">Login Screen</div>
		</div>
	</div>
    <div class="page-content">
      <div class="block">
        <p>Framework7 comes with ready to use Login Screen layout. It could be used inside of page or inside of popup
          (Embedded) or as a standalone overlay:</p>
      </div>
      <div class="list links-list">
        <ul>
          <li>
            <a href="/login-screen-page/">As Separate Page</a>
          </li>
        </ul>
      </div>
      <div class="block">
        <a href="#" class="button button-raised button-large button-fill login-screen-open"
          data-login-screen=".login-screen">As Overlay</a>
      </div>
    </div>
    <div class="login-screen">
      <div class="page login-screen-page">
        <div class="page-content login-screen-content">
          <div class="login-screen-title">Framework7</div>
          <form>
            <div class="list">
              <ul>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Username</div>
                    <div class="item-input-wrap">
                      <input type="text" name="username" id="demo-username-1" placeholder="Your username" />
                      <span class="input-clear-button"></span>
                    </div>
                  </div>
                </li>
                <li class="item-content item-input">
                  <div class="item-inner">
                    <div class="item-title item-label">Password</div>
                    <div class="item-input-wrap">
                      <input type="password" name="password" id="demo-password-1" placeholder="Your password" />
                      <span class="input-clear-button"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="list">
              <ul>
                <li><a href="#" class="list-button" on:click={signIn}>Sign In</a></li>
              </ul>
              <div class="block-footer">Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <script>
  export default (props, { $, $f7 }) => {
    const signIn = () => {
      var username = $('input#demo-username-1').val();
      var password = $('input#demo-password-1').val();
      $f7.dialog.alert('Username: ' + username + '<br />Password: ' + password, function () {
        $f7.loginScreen.close();
      })
    }

    return $render;
  };
</script> -->

<script>
  import { Link } from 'framework7-svelte';
</script>