(function($) {
    "use strict";
    //init plugin
    $.fn.facebook_album = function(options) {
        $.fn.facebook_album.defaults = $.extend({}, $.fn.facebook_album.defaults, options);
    };
    $.fn.facebook_album.defaults = {
        url: 'https://graph.facebook.com/',
        facebook_id: 'MyKidPhotostudio',
        id: 997646686934809,
        api_version: 'v2.4',
        limit: 30,
        access_token: '833367813443301|nDhKBT0o6K7a7j_5LMfc3QSbRNs',
        fields: 'fields=images,name,link'
    };
    $.fn.facebook_album.data = {};
    //https://graph.facebook.com/{{facebook_id}}/albums?access_token={{your_token}}
    $.fn.facebook_album.showAlbum = function(callback) {

            var adress = $.fn.facebook_album.defaults.url + $.fn.facebook_album.defaults.api_version + '/' + $.fn.facebook_album.defaults.facebook_id + '/albums';
            var params = {
                params: {
                    access_token: $.fn.facebook_album.defaults.access_token
                }
            };
            axios.get(adress, params).then(function(response) {
                if (response.data.length <= 0) {
                    Promise.reject(response.error);
                }
                callback(response.data.data);
            }).catch(function(error) {
                // console.log(error);
            });
        },
        //https://graph.facebook.com/v2.4/{{album_id}}/photos?limit=30&access_token={{your_token}}&fields={images,name,link ...}
        $.fn.facebook_album.showPhoto = function(album_id, callback) {
            var adress = $.fn.facebook_album.defaults.url + $.fn.facebook_album.defaults.api_version + '/' + album_id + '/photos';
            var params = {
                params: {
                    access_token: $.fn.facebook_album.defaults.access_token,
                    limit: $.fn.facebook_album.defaults.limit,
                    fields: 'images,name,link'
                }
            };
            axios.get(adress, params).then(function(response) {
                if (response.data.length <= 0) {
                    Promise.reject(response.error);
                }
                callback(response.data.data);
                //  console.log(response.data)
            }).catch(function(error) {
                // console.log(error);
            });
        }
}(jQuery));
/*
FacebookAlbum.showAlbum(function(data) {
    data.forEach(function(value, index) {
        $(".image-panel__list").append('<li><img class="albums" data-albumid = ' + value.id + ' title="' + value.name + '" alt="' + value.name + '" src="http://graph.facebook.com/' + value.id + '/picture?type=album" /></li>');
    });
});

$(document).on('click', 'img.albums', function(event) {
    event.preventDefault();
    FacebookAlbum.showPhoto($(this).data('albumid'), function(data) {
        console.log(data);
        $('.image-panel__list').empty();
        data.forEach(function(value, index) {
            $(".image-panel__list").append('<li><img class="photo" data-photo = ' + value.images[0].source + ' title="' + value.name + '" alt="' + value.name + '" src="http://graph.facebook.com/' + value.id + '/picture?type=album" /></li>');
        });
    });
});
$(document).on('click', 'img.photo', function(event) {
    $('.general-image img').attr({
        src: $(this).data('photo')
    });
});
*/
