$(function() {
    $(document).on("click",function (e) {
      console.log(e.target.id);
       if (e.target.id=="sign-in") {
         $("#sign-in-form").show();
       } else if (e.target.id=="sign-up") {
         $("#sign-in-form").hide();
         $("#sign-up-form").show();
       } else if (e.target.id=="sign-up-button") {
         $("#sign-in-form").hide();
         $("#sign-up-form").show();
       }
       else if (e.target.id=="forgot-password") {
         $("#sign-in-form").hide();
         $("#forgot-password-form").show();
       }
       else if ($("#sign-in-form").is(":visible") && $("#sign-in-form").has(e.target).length === 0 ||
                $("#sign-up-form").is(":visible") && $("#sign-up-form").has(e.target).length === 0 ||
                $("#forgot-password-form").is(":visible") && $("#forgot-password-form").has(e.target).length === 0) {
         $("#sign-in-form").hide();
         $("#sign-up-form").hide();
         $("#forgot-password-form").hide();

       } else if (e.target.id =="sign-in-button") {
         $("#sign-in-form").hide();
       } else if (e.target.id =="create-account-button") {
         $("#sign-up-form").hide();
       } else if (e.target.id =="recover-password-button") {
         $("#forgot-password-form").hide();
       }
    });
  });