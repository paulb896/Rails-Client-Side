

$(document).ready(function() {
    /**
     * Highlight all invalid text field in a form.
     * 
     * @return bool True if all fields in form are valid, false otherwise.
     */
    function isFormValid(form) {
      var is_form_valid = true;
      $(form).find(":text").each(function() {
      if ($(this).attr('value').length < 1) {
        $(this).addClass("product_error", {duration:2500});
        is_form_valid = false;
      } else {
        $(this).removeClass("product_error", {duration:2500});
      }
    });

    // Show form validation message if any field is invalid.
    if (!is_form_valid) {
       $("#product_messages").removeClass("product_message_hide", {duration:500});

       // Add listener to verify text boxes have been entered properly.
       $(".new_product :text").change(function() {
         isFormValid($(".new_product"));
       });
    } else {
       $("#product_messages").addClass("product_message_hide", {duration:500});
    }

    return is_form_valid;
  }

  $(".new_product").submit(function() {
    if (isFormValid(this)) {
      $.post($(this).attr("action"), $(this).serialize(), null, "script");
      return true;
    }

    return false
  });
});
