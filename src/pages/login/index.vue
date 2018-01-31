<template>
  <div class="main-bg">
    <div class="container">
      <div class="container_bg login">
        <h1 class="login__title">
          Welcome to Todo app
        </h1>
        <p class="login__title login__title_small">
          Please enter your data and press “start” button
        </p>
        <div class="login__form">
          <form action="">
            <p class="login__inputTitle">
              Your email: 
            </p>
            <input required type="email" placeholder="Please enter your email" class="login__input">
            <p class="login__inputTitle">
              Your password: 
            </p>
            <input required type="password" placeholder="Please enter your password" class="login__input">    
            <div class="invalidData">Invalid input data</div>
            <router-link class="login__btn" to="/dashboard">START</router-link>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld'
}

</script>
<style lang="scss">
@import '../main.scss';
</style>
