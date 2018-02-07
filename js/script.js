//////////////////////////////////////////////////////////////////////////////
///////////////////////////// SCRIPT FOR DEMO ONLY////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip();

	$('.example_datatable').DataTable({
		"bFilter": false,
        "bInfo": false,
	    "bLengthChange": false,
	    "bFilter": true,
	    "bInfo": false,
	    "searching": false
	});

	$('.example_datatable1').DataTable({
		"bFilter": false,
        "bInfo": false,
	    "bLengthChange": false,
	    "bFilter": true,
	    "bInfo": false,
	    // "searching": false,

	    "columnDefs": [ {
		"targets": 0,
		"orderable": false
		} ]
	});

	$('.example_datatable2').DataTable({
		"bFilter": false,
        "bInfo": false,
	    "bLengthChange": false,
	    "bFilter": false,
	    "bInfo": false,
	    "bPaginate": false,
	    "searching": false,
	    "ordering": false
	});

	$('input#file').change(function(){
	    tmpval = $(this).val();
	    if(tmpval == '') {
	    } else {

	        $(this).parents('.file_upload_section').find('button').removeAttr('disabled');

		    var file = $('#file')[0].files[0]
			if (file){
			  $('#selected_file').html('('+file.name+')');
			}

	    }
	});
	// file-upload.html page action
	$('button#proceed_file_upload').click(function() {
		$(this).parents('.file_upload_section').hide().next('.progressbar_wrapper').fadeIn().find('.progress-bar').addClass('animate_bar');
	    
        setTimeout(function() {
           window.location.replace("model-survey.html");
        }, 5600);
        return false;
	});

	$('#trainNewModel, button.decide').click(function() {
		$(this).parents('.model_survey_section').hide().next('.progressbar_wrapper').fadeIn().find('.progress-bar').addClass('animate_bar');
	    
        setTimeout(function() {
           window.location.replace("anomaly-scan-result.html");
        }, 5600);
        return false;
	});
	$('button#view_results').click(function() {
		$(this).parents('.model_survey_section').hide().next('.progressbar_wrapper').fadeIn().find('.progress-bar').addClass('animate_bar');
	    
        setTimeout(function() {
           window.location.replace("results.html");
        }, 5600);
        return false;
	});
	$('.edit_tbl').click(function() {
		$('.edit_tbl').parents('tr').removeClass('show_input').find('.fa').fadeOut('fast');
		$(this).parents('tr').addClass('show_input').find('.fa').fadeIn('fast');
	});
	$('#update_modelManager').click(function () {
		$('.alert-success').fadeIn();
		$('.edit_tbl').parents('tr').removeClass('show_input').find('.fa').fadeOut('fast');
		setTimeout(function() {
           $('.alert-success').fadeOut();
        }, 3000);
		return false;
	});

	// Toggle Select All checkbox. all checkbox will checked
    $('.allcheckboxes1').click(function() {
        $(this).parents('.example_datatable').toggleClass('checkallbox');
        if ($('.example_datatable').hasClass('checkallbox')) {
            $('.cta_action_innerWrapper').find('button#view_results').removeAttr('disabled');
            $('.example_datatable input[type="checkbox"]').prop('checked', true);
        } else {
            $('.example_datatable input[type="checkbox"]').prop('checked', true);
        }
    });


    // If checkbox is uncheck the checkbox (Select all Checkbox) will uncheck.
    $('.checkbox_dynamic input[type="checkbox"]:checked').length == $('.checkbox_dynamic input[type="checkbox"]').length
    $('.checkbox_dynamic input[type="checkbox"]').change(function(){
        if ($('.checkbox_dynamic input[type="checkbox"]:checked').length == $('.checkbox_dynamic input[type="checkbox"]').length) {
           $('#allservices').prop('checked', true);
        } else {
            $('#allservices').prop('checked', false);
        }
    });

    $('.checkbox_dynamic input[type="checkbox"]').change(function(){
        if($(this).is(":checked")) {
            $('.cta_action_innerWrapper').find('button#view_results').removeAttr('disabled');
        } else {
            $('.cta_action_innerWrapper').find('button#view_results').attr('disabled');
        }
    });

	 $(".collapse_all").click(function () {
        var text = $(this).html()
        if (text == '<i class="fa fa-plus"></i> Collapse All') {
            $(this).html('<i class="fa fa-minus"></i> Hide All').parents('.model_survey_section').find('.collapse').addClass('show');

        } else {
            $(this).html('<i class="fa fa-plus"></i> Collapse All').parents('.model_survey_section').find('.collapse').removeClass('show');
        }
    });

});




//////////////////////////////////////////////////////////////////////////////
///////////////////////// CODE THAT WE NEED NOT DEMO /////////////////////////
//////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

	$('.table_connected_header').click(function() {
		if ($(this).parent().hasClass('active-tab')) {
			$(this).next('.table_connected_body').slideUp();
			$(this).parent().removeClass('active-tab');
		} else {
			$('.table_connected_header').not(this).next('.table_connected_body').slideUp('fast');
        	$('.table_connected_header').parent().not(this).removeClass('active-tab');

			$(this).next('.table_connected_body').slideDown();
			$(this).parent().addClass('active-tab');
		}
	});

	// Show in tooltip when the description are long characters
	$('span.ellipsis').each(function(){
	    var $this = $(this);

	    if(this.offsetWidth < this.scrollWidth && !$this.attr('data-original-title')){
	        $this.attr('data-original-title', $this.text());
	    } else {
	    	$this.attr('data-original-title', '');
	    }
	});

	// SIDEBAR IN PROCESS PAGE (HIDE SIDEBAR)
	$('.hide_navigation').click(function() {
		$('body').toggleClass('hide_sidebar_wrapper');
	});

	// STICKY MENU
	var nav = $('.menu_content');
	if (nav.length) {
		var contentNav = nav.offset().top - 62

		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();

			if (scrollTop > contentNav) {
				$('.menu_content').addClass('fixed-nav');
				$('.homepage_arrow').css({
					"padding-top" : "132px"
				});
			} else {
				$('.menu_content').removeClass('fixed-nav');
				$('.homepage_arrow').css({
					"padding-top" : "70px"
				});
			}
		};
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}

	// ANIMATE SCROLL MENU
	$('.menu_content ul a').bind('click', function(e) {
		var target = $(this).attr("data-href");
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top - 124
		}, 600);

		e.preventDefault();
	});
    
});

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop();

	$('.section_landing_page').each(function(i) {
		if ($(this).position().top - 62 <= scrollDistance) {
			$('.menu_content ul a.active').removeClass('active');
			$('.menu_content ul a').eq(i).addClass('active');
		} else {
			$('.menu_content ul a').eq(i).removeClass('active');
		}
	});
}).scroll();
