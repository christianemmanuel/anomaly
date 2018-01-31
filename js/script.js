//////////////////////////////////////////////////////////////////////////////
///////////////////////////// SCRIPT FOR DEMO ONLY////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(function() {
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
/////////////////////////////// //////////// //////////////////////////////
//////////////////////////////////////////////////////////////////////////////
$(function() {
	// Show in tooltip when the description are long characters
	$('span.ellipsis').each(function(){
	    var $this = $(this);

	    if(this.offsetWidth < this.scrollWidth && !$this.attr('data-original-title')){
	        $this.attr('data-original-title', $this.text());
	    } else {
	    	$this.attr('data-original-title', '');
	    }
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

	// ANIMATE SCROLL
	$(function() {
		$('.menu_content ul a, .homepage_arrow a').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'data-href') ).offset().top - 124
		    }, 700);
		    return false;
		});
	});

	$('.hide_navigation').click(function() {
		$('body').toggleClass('hide_sidebar_wrapper');
	});
});
