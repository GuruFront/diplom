<template>
    <div class="main-bg">
      <div class="container">
        <div class="container_bg">
          <h1 class="login__title">
          Dashboard
        </h1>
          <div class="row">
            <div class="col-md-3 offset-md-1">
              <nav class="nav">
                <img class="nav__photo" src="../../assets/img/photo.jpg" alt="Photo not found">
                <p class="nav__name">
                  Name
                </p>
                <router-link to="/add_task" class="nav__btn nav__btn_add">ADD TASK</router-link>
                <router-link to="/profile" class="nav__btn nav__btn_edit">EDIT PROFILE</router-link>
                <router-link to="/" class="nav__btn nav__btn_exit">EXIT</router-link>
              </nav>
            </div>
            <div class="col-md-7">
              <div class="filtr">
                <span class="filtr__item item_all filtr__item_active">
                All tasks
              </span>
                <span class="filtr__item item_active">
                Active
              </span>
                <span class="filtr__item item_done">
                Done
              </span>
              </div>
              <div class="tasksContainer">
                <p class="noTask">No tasks</p>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_active clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
                </div>
                <div class="task task_done clearfix">
                  <div class="task__status"></div>
                  <p class="task__title">
                    Title of the task
                  </p>
                  <div class="task__btn task__btn_progress"></div>
                  <router-link to="/edit_task" class="task__btn task__btn_edit"></router-link>
                  <div class="task__btn task__btn_delete"></div>
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
  name: 'Dashboard'
}

</script>

<style lang="scss">
  @import '../main.scss';
</style>


<script type="text/javascript">

import $ from 'jquery';

$("body").on( "click", ".filtr__item", function() {
  $(".filtr__item").removeClass("filtr__item_active");
  $(this).addClass("filtr__item_active");
});

$("body").on( "click", ".item_all", function() {
  $(".task").fadeIn();
});

$("body").on( "click", ".item_active", function() {
  $(".task_done").hide();
  $(".task_active").fadeIn();
});

$("body").on( "click", ".item_done", function() {
  $(".task_active").hide();
  $(".task_done").fadeIn();
});

$("body").on( "click", ".task .task__btn_progress, .task .task__status, .task .task__title", function() {
  if ($(this).parent().hasClass("task_active")) {
    $(this).parent().addClass("task_done");
    $(this).parent().removeClass("task_active");
  } else {
    $(this).parent().removeClass("task_done");
    $(this).parent().addClass("task_active");
  }
});

$("body").on( "click", ".task .task__btn_delete", function() {
  $(this).parent().remove();
});

</script>
