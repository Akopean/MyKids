!function(e){e(document).ready(function(){"use strict";function i(i){e.fn.facebook_album.showPhoto(e(i).data("albumid"),function(i){e(".masonry-items").empty(),i.forEach(function(i,t){var s=i.images[0].height>i.images[0].width?"vertical":"horizontal";e(".masonry-items").append('<div class="masonry-item slide" data-position="'+s+'" data-proportion="'+(i.images[0].height/i.images[0].width).toFixed(4)+'"><div class="item-contents"><div class="item-bg-image" data-image-moon-max-size="'+i.images[6].source+'" data-image-moon-fourth-size="'+i.images[5].source+'" data-image-moon-third-size="'+i.images[4].source+'" data-image-moon-two-third-size="'+i.images[3].source+'" data-image-moon-half-size="'+i.images[2].source+'" data-image-moon-big-size="'+i.images[1].source+'" style="background-size: cover; background-image: url('+i.images[1].source+');"></div></div></div>')}),setTimeout(function(){e.fn.original_plugin.set_grid_sizes(),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))},200)})}jQuery(".item-slider-navigation-link").click(function(){var i,t,s=jQuery("#masonry-slider"),n=s.width()/100*3;return t=s.closest(".activate-perfect-scrollbar-onlyY"),i=t.scrollLeft(),jQuery(this).hasClass("masonry-prev")?i-=n:i+=n,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.animate({scrollLeft:i},e(this).data("duration"))},100),!1}),e(document).on("click",".show-thumbs",function(i){i.preventDefault(),e("body").removeClass("content-thumbs-hidden"),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))}),e(document).on("click",".show-story",function(i){i.preventDefault(),e("body").removeClass("content-left-hidden"),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))}),e(document).on("click",".left-content-hide-icon, .mobile-left-content-hide",function(i){i.preventDefault(),e("body").addClass("content-left-hidden"),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))}),e(document).on("click",".left-content-thumbs-hide-icon, .mobile-thumb-hide",function(i){i.preventDefault(),e("body").addClass("content-thumbs-hidden"),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))}),e(".activate-perfect-scrollbar").perfectScrollbar(),e(".activate-perfect-scrollbar-onlyY").perfectScrollbar({useBothWheelAxes:!0,suppressScrollY:!0,wheelSpeed:.5}),e(document).on("click",".thumbnail-slider .slide",function(t){var s=this;i(s),e.fn.original_plugin.set_grid_sizes(),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))}),e(window).resize(function(){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout(function(){e(this).trigger("resizeEnd")},800)}),e(window).on("resizeEnd",function(){e.fn.original_plugin.set_content_height(),e.fn.original_plugin.set_grid_sizes(),this.resizeTO=setTimeout(function(){e.fn.original_plugin.set_step_offsets(e(".masonry-items"))},1e3)}),e.fn.facebook_album.showAlbum(function(t){t.forEach(function(i,t){e(".thumbnail-slider").append('<div class="slide" data-alt="'+i.name+'" data-albumid = '+i.id+' data-title="'+i.name+'"><div class="thumb-contents"><div class="item-photo" style="background-image:url(http://graph.facebook.com/'+i.id+'/picture?type=album);"></div></div></div>')}),i(e(".slide")[0])}),e(window).on("load",function(){e(".masonry-items").hasClass("packery-active"),setTimeout(function(){e.fn.original_plugin.set_grid_sizes(),e.fn.original_plugin.set_step_offsets(e(".masonry-items"))},500)}),e.fn.original_plugin.is_touch_device()&&e("body").addClass("is-touch-device")})}(jQuery);