<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: calc(100vw / 320 * 10);

  --grey: #777;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  margin: 1rem 2rem;
  h1 {
    margin-bottom: 1.2rem;
    text-align: center;
  }
  section {
    width: 100%;
  }
}
</style>
