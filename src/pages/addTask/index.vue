<template>
    <div class="main-bg">
        <div class="container">
            <div class="container_bg">
                <h1 class="login__title">
          Add task
        </h1>
                <div class="row">
                    <div class="col-md-3 offset-md-1">
                        <nav class="nav">
                            <img class="nav__photo" src="../../assets/img/photo.jpg" alt="Photo not found">
                            <p class="nav__name">
                                Name
                            </p>
                            <a href="#" class="nav__btn nav__btn_add">SETTINGS</a>
                            <router-link to="/dashboard" class="nav__btn nav__btn_edit">DASHBOARD</router-link>

                            <router-link to="/" class="nav__btn nav__btn_exit">EXIT</router-link>
                        </nav>
                    </div>
                    <div class=" col-md-8 col-lg-6">
                        <div class="addTask">
                            <div class="addTask__form">
                                <form action="">
                                    <div class="row addTask__form-row_margin">
                                        <label for="addTask__input-taskTitle" class="col-md-4 addTask__inputTitle">
                                            Task title
                                        </label>
                                        <div class="col-md-8">
                                            <input class="profile__title-input addTask__input" id="addTask__input-taskTitle" type="text">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="addTask__textaerea-taskDescription" class="col-md-4 addTask__inputTitle">
                                            Task description
                                        </label>
                                        <div class="col-md-8">
                                            <textarea class="col-md-8 profile__title-input addTask__textaerea" id="addTask__textaerea-taskDescription" cols="30" rows="10"></textarea>
                                            <div class="invalidData">Invalid input data</div>
                                            <a href="dashboard.html" class="login__btn login__btn_add">ADD</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddTask'
}
</script>

<style lang="scss">
@import '../main.scss';
</style>
