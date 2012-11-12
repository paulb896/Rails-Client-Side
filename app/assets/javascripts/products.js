

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
  
  
  function carou_init(obj){
  			try{
  				
  				$('.carousel_list > li').css('left', (($('.carousel_list').width() / 2) -  ($('.carousel_list > li:first-child').width() / 2) ) + 'px');
  				obj.parent().find('li.active').attr('class', '');
  				obj.attr('class', 'active');
  				obj.parent().find('li').removeClass('next prev next_next prev_prev');
  				
  				obj.next().attr('class', 'next');
  				obj.prev().attr('class', 'prev');
  				obj.next().next().attr('class', 'next_next');
  				obj.prev().prev().attr('class', 'prev_prev');
  					
  			}catch(e){
  			
  			}
  }

  carou_init($('.carousel_list  > li:nth-child(4)'));
  $('.carousel_list > li').click(function(){
			carou_init($(this));
  });
  
});

$(document).ready(function(){

		});
