<template>
  <div class="main-bg">
    <div class="container">
      <div class="container_bg">
        <h1 class="login__title">
          Profile
        </h1>

        <div class="row">
          <div class="col-md-3 offset-md-1">
            <nav class="nav">
              <img class="nav__photo" src="../../assets/img/photo.jpg" alt="Photo not found">
              <p class="nav__name">
                NAME
              </p>
              <router-link to="/add_task" class="nav__btn nav__btn_add">ADD TASK</router-link>
              <router-link to="/dashboard" class="nav__btn nav__btn_edit">DASHBOARD</router-link>
              <router-link to="/" class="nav__btn nav__btn_exit">EXIT</router-link>
            </nav>
          </div>
          <div class="col-md-6 col-lg-5 offset-md-1">
            <div class="profile clearfix">
              <form action="">
                <p class="profile__title">
                  Your name
                  <input class="profile__title-input" type="text">
                </p>
                <p class="profile__title">
                  Your email
                  <input class="profile__title-input" type="email">
                </p>
                <p class="profile__title">
                  Password
                  <input class="profile__title-input" type="password">
                </p>
                <div class="profile__btn nav__btn_exit">Save</div>            
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss">
@import '../main.scss';
</style>
