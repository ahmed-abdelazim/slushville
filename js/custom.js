$(".mobile-menu-open").click(function(event) {
  if(!$(".mobile-menu-open").hasClass("open")){
      $("#mySidenav ul").css("height","140px");
      $(".mobile-menu-open").addClass("open");
  }
  else{
      $("#mySidenav ul").css("height","0");
      $(".mobile-menu-open").removeClass("open");
  }
});
$(document).click(function(event) {
  if (!$(event.target).closest(".sidenav,.mobile-menu-open").length) {
    $(".mobile-menu-open").removeClass("open");
      $("#mySidenav ul").css("height","0");
  }
});
$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
   };

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
        console.log(data);
      if (data.success) {
             $("#responsemsg").html(
              '<div class="alert alert-success text-success w-100 px-2 py-1 mx-0 text-center border-0">' + data.message + "</div>"
            );
        // 	setTimeout(function () {
        //         $('#waitlistModal').modal('hide');
        //     }, 3000);
          }
    });

    event.preventDefault();
  });
});