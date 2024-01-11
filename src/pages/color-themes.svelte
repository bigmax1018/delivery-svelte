
<script context="module">
  let globalTheme = 'light';
  let globalThemeColor = document.documentElement.style
    .getPropertyValue('--f7-color-primary')
    .trim();
</script>

<script>
  import {
    f7,
    Navbar,
    Page,
    BlockTitle,
    Button,
    Block,
    List,
    ListInput,
    Checkbox,
    Link,
    Toolbar,
  } from 'framework7-svelte';

  let theme = globalTheme;
  let themeColor = globalThemeColor;

  const colors = Object.keys(f7.colors);

  function setScheme(newTheme) {
    console.log(newTheme);
    f7.setDarkMode(newTheme === 'dark');
    globalTheme = newTheme;
    theme = newTheme;
  }

  function setColorTheme(newColor) {
    themeColor = f7.colors[newColor];
    globalThemeColor = themeColor;
    f7.setColorTheme(themeColor);
  }

  function setCustomColor(newColor) {
    themeColor = newColor;
    globalThemeColor = newColor;
    f7.setColorTheme(newColor);
  }
</script>

<Page>
  <div class="navbar navbar-style-1 border-bottom">
		<div class="navbar-inner">
			<a href="#" class="link back">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
				</svg>
			</a>
			<div class="title">Color Themes</div>
			<div class="title-large">
				<div class="title-large-text">Color Themes</div>
			</div>
		</div>
	</div>
  <BlockTitle medium>Layout Themes</BlockTitle>
  <Block strong>
    <p>Framework7 comes with 2 main layout themes: Light (default) and Dark:</p>
    <div class="grid grid-cols-2 grid-gap">
      <div class="bg-color-white demo-theme-picker" on:click={() => setScheme('light')}>
        {#if theme === 'light'}
          <Checkbox checked disabled />
        {/if}
      </div>
      <div class="bg-color-black demo-theme-picker" on:click={() => setScheme('dark')}>
        {#if theme === 'dark'}
          <Checkbox checked disabled />
        {/if}
      </div>
    </div>
  </Block>

  <BlockTitle medium>Default Color Themes</BlockTitle>
  <Block strong>
    <p>Framework7 comes with {colors.length} color themes set.</p>
    <div class="grid grid-cols-3 medium-grid-cols-4 large-grid-cols-5 grid-gap">
      {#each colors as color, index}
        <div key={index}>
          <Button
            fill
            round
            small
            class="demo-color-picker-button"
            {color}
            onClick={() => setColorTheme(color)}
          >
            {color}
          </Button>
        </div>
      {/each}
    </div>
  </Block>
  <BlockTitle medium>Custom Color Theme</BlockTitle>
  <List strongIos outlineIos>
    <ListInput
      type="colorpicker"
      label="HEX Color"
      placeholder="e.g. #ff0000"
      readonly
      value={{ hex: themeColor }}
      onColorPickerChange={(value) => setCustomColor(value.hex)}
      colorPickerParams={{ targetEl: '#color-theme-picker-color' }}
    >
      <div
        slot="media"
        id="color-theme-picker-color"
        style="width: 28px; height: 28px; borderRadius: 4px; background: var(--f7-theme-color)"
      />
    </ListInput>
  </List>
</Page>

<style>
  .demo-theme-picker {
    padding: 30px;
    border-radius: 10px;
  }
</style>