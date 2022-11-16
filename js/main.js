$( document ).ready(function() {

	/* FAQ */
	$('.question_wrapper .question').click(function() {
		$(this).parent().toggleClass('active');
	});
	$(".question").click(function(){
	  $(this).next().slideToggle();
	});

	/* Features */
	$('.tab1_title, .tab1_content').addClass('active');
	$('.tab_title').click(function() {
		$('.tab_title, .tab_content').removeClass('active');
	})
	$('.tab1_title').click(function() {
		$('.tab1_content, .tab1_title').addClass('active');
	});
	$('.tab2_title').click(function() {
		$('.tab2_content, .tab2_title').addClass('active');
	});
	$('.tab3_title').click(function() {
		$('.tab3_content, .tab3_title').addClass('active');
	});

	/* Mobile Menu */
	$('.mobile_menu').click(function() {
		$(this).toggleClass('change');
		$('.header ul').slideToggle();
	});

	/* header Menu */
	$('.header ul li a').click(function(e) {
		e.preventDefault()
		$('.header ul li a').removeClass('active');
		$(this).addClass('active');
	});

	/* Hash linking smooth scroll start */
  $(".ban_btn").on('click', function(event) {
  	$(this).addClass('active');
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
  /* Hash linking smooth scroll end */

  /* Select Plan */
  $('.plan_but').click(function(e) {
  	e.preventDefault();
  	if(!$('.plan_wrap').hasClass('step2')) {
  		$('.plan_but').removeClass('active');
			$(this).addClass('active');
			$('.sub_title, .plan_wrap').addClass('step2');
  	}
	});
	/* Select Plan Progressbar */
  $('.blue_circle').click(function(e) {
  	$('.sub_title, .plan_wrap').removeClass('step2');
  	$('.plan_but').removeClass('active');
  });

});
