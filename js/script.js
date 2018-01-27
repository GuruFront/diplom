

$(".filtr__item").click(function() {
	$(".filtr__item").removeClass("filtr__item_active");
	$(this).addClass("filtr__item_active");
});


$(".item_all").click(function() {
	$(".task").fadeIn();
});
$(".item_active").click(function() {
	$(".task_done").hide();
	$(".task_active").fadeIn();
});

$(".item_done").click(function() {
	$(".task_active").hide();
	$(".task_done").fadeIn();
});

$(".task .task__status, .task .task__title, .task .task__btn_progress").click(function() {
	if ($(this).parent().hasClass("task_active")) {
		$(this).parent().addClass("task_done");
		$(this).parent().removeClass("task_active");
	} else {
		$(this).parent().removeClass("task_done");
		$(this).parent().addClass("task_active");		
	}
});
$(".task .task__btn_delete").click(function() {
	$(this).parent().remove();
});
