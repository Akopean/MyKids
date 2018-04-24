(function($) {
    $(document).ready(function() {
        "use strict";
        jQuery('.item-slider-navigation-link').click(function() {
            var $target_slider = jQuery('#masonry-slider');
            var step_offsets_arr = $target_slider.width()/100*3;

            var current_offset;
            var $slider_scrollable_wrapper;
            $slider_scrollable_wrapper = $target_slider.closest('.activate-perfect-scrollbar-onlyY');
            current_offset = $slider_scrollable_wrapper.scrollLeft();
            if(jQuery(this).hasClass('masonry-prev')) {
            	current_offset -= step_offsets_arr;
            } else {
            	current_offset += step_offsets_arr;
            }

 			if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(function() {
               $slider_scrollable_wrapper.animate({
                    scrollLeft: (current_offset)
                }, $(this).data('duration'));
            }, 100);

            return false;
        });
	    $(document).on('click', '.show-thumbs', function(event) {
            event.preventDefault();
            $('body').removeClass('content-thumbs-hidden');
            $.fn.original_plugin.set_step_offsets($('.masonry-items'));
        });
       	$(document).on('click', '.show-story', function(event) {
            event.preventDefault();
            $('body').removeClass('content-left-hidden');
            $.fn.original_plugin.set_step_offsets($('.masonry-items'));
        });
        $(document).on('click', '.left-content-hide-icon, .mobile-left-content-hide', function(event) {
            event.preventDefault();
            $('body').addClass('content-left-hidden');
            $.fn.original_plugin.set_step_offsets($('.masonry-items'));
        });
        $(document).on('click', '.left-content-thumbs-hide-icon, .mobile-thumb-hide', function(event) {
            event.preventDefault();
            $('body').addClass('content-thumbs-hidden');
            $.fn.original_plugin.set_step_offsets($('.masonry-items'));
        });
        // Init Perfect-Scrollbar
        $('.activate-perfect-scrollbar').perfectScrollbar();
        $('.activate-perfect-scrollbar-onlyY').perfectScrollbar({
            useBothWheelAxes: true,
            suppressScrollY: true,
            wheelSpeed: 0.5,
        });
        $(document).on('click', '.thumbnail-slider .slide', function(event) {
        	var that = this;
            showPhoto(that);
           	$.fn.original_plugin.set_grid_sizes();
           	$.fn.original_plugin.set_step_offsets($('.masonry-items'));
        });
        function showPhoto(that) {
        	$.fn.facebook_album.showPhoto($(that).data('albumid'),function(data) {
		        $('.masonry-items').empty();
		        data.forEach(function(value, index) {
		        	//console.log(value.images);
		        	var pos = value.images[0].height > value.images[0].width ? 'vertical' : 'horizontal';
		            $(".masonry-items").append('<div class="masonry-item slide" data-position="' + pos + '" data-proportion="' + (value.images[0].height/value.images[0].width).toFixed(4) + '"><div class="item-contents"><div class="item-bg-image" data-image-moon-max-size="' + value.images[6].source + '" data-image-moon-fourth-size="' + value.images[5].source + '" data-image-moon-third-size="' + value.images[4].source + '" data-image-moon-two-third-size="' + value.images[3].source + '" data-image-moon-half-size="' + value.images[2].source + '" data-image-moon-big-size="' + value.images[1].source + '" style="background-size: cover; background-image: url(' + value.images[1].source + ');"></div></div></div>');
	    		});
	    	setTimeout(function() {
            	$.fn.original_plugin.set_grid_sizes();
            	$.fn.original_plugin.set_step_offsets($('.masonry-items'));
            }, 200);
            });
        }
        //init all event function
        $(window).resize(function() {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function() {
                $(this).trigger('resizeEnd');
            }, 800);
        });
        $(window).on('resizeEnd', function() {
            $.fn.original_plugin.set_content_height();
            $.fn.original_plugin.set_grid_sizes();
             this.resizeTO = setTimeout(function() {
                $.fn.original_plugin.set_step_offsets($('.masonry-items'));
            }, 1000);

        });
        $.fn.facebook_album.showAlbum(function(data) {
            data.forEach(function(value, index) {
                $(".thumbnail-slider").append('<div class="slide" data-alt="' + value.name + '" data-albumid = ' + value.id + ' data-title="' + value.name + '"><div class="thumb-contents"><div class="item-photo" style="background-image:url(http://graph.facebook.com/' + value.id + '/picture?type=album);"></div></div></div>');
            });
            showPhoto($('.slide')[0]);
        });
        $(window).on('load', function() {
            if ($('.masonry-items').hasClass('packery-active')) {
                //$('.masonry-items').isotope();//'layout'
            }
            //  $.fn.osetin_general.set_grid_sizes();

            setTimeout(function() {
            	$.fn.original_plugin.set_grid_sizes();
            	$.fn.original_plugin.set_step_offsets($('.masonry-items'));
            }, 500);
        });
        if ($.fn.original_plugin.is_touch_device()) {
            $('body').addClass('is-touch-device');
        }
    });
})(jQuery);
