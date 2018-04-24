(function($) {
    "use strict";
    //init plugin
    $.fn.original_plugin = function(options) {
        var opts = $.extend({}, $.fn.original_plugin.defaults, options);
    };
    $.fn.original_plugin.defaults = {
        responsive_size_mobile: 600,
        background: "yellow"
    };
    $.fn.original_plugin.is_touch_device = function() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    };

    $.fn.original_plugin.set_grid_sizes = function() {
        var $items = $('.masonry-items');
        var grid_items_margin = 0;
        var viewport_width = $.fn.original_plugin.viewport_width() - grid_items_margin;
        var viewport_height = viewport_height - grid_items_margin;
        var item_width = false;
        var item_height = $('.masonry-items').height();
        var items_per_step;
        var img_proportion = 1;
        var css_size_classes_to_remove = ' ';
        $items.find('.masonry-item').each(function() {
            if ($(this).data('proportion')) img_proportion = $(this).data('proportion');
            var $image_elements = $(this).find('.item-bg-image');
            var final_item_width = 0;
             if(img_proportion >= 1.01 && $(this).data('position') === 'vertical'){
                 final_item_width = item_height / img_proportion;
            } else if(img_proportion >= 1.01 && $(this).data('position') === 'horizontal') {
                final_item_width = item_height * img_proportion;
            } else {
                final_item_width = item_height / img_proportion;
            }
            var final_item_height = item_height;

            if ($image_elements.length) {
                $image_elements.each(function() {
                    if ($(this).data('gallery-proportion') > 0)
                        img_proportion = $(this).data('gallery-proportion');
                    var image_name = $.fn.original_plugin.get_image_name_for_title(final_item_width, final_item_height, img_proportion);
                    $(this).css('background-image', 'url(' + $(this).data('image-' + image_name) + ')');
                    $(this).addClass(image_name);
                    //console.log($.fn.original_plugin.viewport_width());
                    if($.fn.original_plugin.viewport_width() < 1024){
                        final_item_width = $.fn.original_plugin.viewport_width();
                    }
                });
            item_width += final_item_width;
            }
            $(this).animate({
                width:final_item_width,
                height:final_item_height
            },200);
        });
        $('.masonry-items').width(Math.ceil(item_width));
    };
    $.fn.original_plugin.viewport_width = function() {
        var viewport_width = $('.all-content').width();
        return viewport_width;
    };
    $.fn.original_plugin.viewport_height = function() {
        var viewport_height = $('.all-content').height();
        return viewport_height;
    };
    $.fn.original_plugin.set_step_offsets = function($slider) {
        var sizes_arr = [];
        var last_step_offset;
        $slider.find('.slide').each(function() {
            sizes_arr.push(Math.ceil($(this).position().left));
        });
        last_step_offset = $slider.width() - ($.fn.original_plugin.viewport_width() + $slider.find('.slide:last-child').position().left);
        if (last_step_offset > 0) {
            last_step_offset = $slider.width() - $.fn.original_plugin.viewport_width();
            sizes_arr.push(last_step_offset);
        }
        sizes_arr = _.uniq(sizes_arr).sort(function(a, b) {
            return a - b;
        });
        if($slider.find('.slide').length < sizes_arr.length){
            sizes_arr.pop();
        }
        $slider.data('step-offsets', sizes_arr.join('|'));

    };
    $.fn.original_plugin.set_content_height = function() {
        $('.content-middle, .left-content').height($.fn.original_plugin.viewport_height());
    };
    $.fn.original_plugin.get_image_name_for_title = function(final_item_width, final_item_height, img_proportion) {
        var image_name = 'moon-max-size';
        var max_dimension = Math.max(final_item_width, final_item_height);
        var tile_proportion = Math.round((final_item_width / final_item_height) * 10000) / 10000;
        if (((tile_proportion - img_proportion) < 0.02) && (tile_proportion - img_proportion) > -0.02) {
            image_name = $.fn.original_plugin.get_image_name_by_size(max_dimension);
        } else if (img_proportion > tile_proportion) {
            if (img_proportion >= 1) {
                image_name = $.fn.original_plugin.get_image_name_by_size(final_item_height * img_proportion);
            } else {
                image_name = $.fn.original_plugin.get_image_name_by_size(final_item_height);
            }
        } else {
            if (img_proportion >= 1) {
                image_name = $.fn.original_plugin.get_image_name_by_size(max_dimension);
            } else {
                image_name = $.fn.original_plugin.get_image_name_by_size(final_item_width / img_proportion);
            }
        }

        return image_name;
    }
    $.fn.original_plugin.get_image_name_by_size = function(size) {
        var data_name = 'moon-max-size';
        if ((size > 0) && (size <= 300)) {
            data_name = 'moon-fourth-size';
        } else if ((size > 300) && (size <= 600)) {
            data_name = 'moon-third-size';
        } else if ((size > 600) && (size <= 900)) {
            data_name = 'moon-half-size';
        } else if ((size > 900) && (size <= 1200)) {
            data_name = 'moon-two-third-size';
        } else if ((size > 1200) && (size <= 1600)) {
            data_name = 'moon-big-size';
        }
        return data_name;
    };
    $.fn.original_plugin.closest_number_index_in_array = function(number, array) {
        var current = array[0];
        var closest_index = 0;
        var diff = Math.abs(number - current);
        for (var index = 0; index < array.length; index++) {
            var newdiff = Math.abs(number - array[index]);
            if (newdiff < diff) {
                diff = newdiff;
                current = array[index];
                closest_index = index;
            }
        }
        return closest_index;
    };

}(jQuery));
