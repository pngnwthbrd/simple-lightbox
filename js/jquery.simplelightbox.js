/**
 * jQuery simple lightbox
 * https://github.com/pngnwthbrd/simple-lightbox
 * @pngnwthbrd https://pngnwthbrd.com
 */

(function($, window, document) {
    'use strict';
    if (!$) {
        return;
    }
    $.simplelightbox = function(action, content, options) {
        var settings = $.extend({
                speed:                  '421',
                popupPosition:          'center',
            }, options);


        // Settings
        var speed = settings.speed,
            popup_position = settings.popupPosition,

            // Helper
            namespace = 'simplelightbox',

            // HTML
            $wrap   = $('<div class="' + namespace + '-wrap" />'),
            $content = $('<div class="' + namespace + '-content" />'),
            $close  = $('<div class="' + namespace + '-close" />'),
            $box    = $('<div class="' + namespace + '-box" />'),

            // Functions
            initBox = function() {
                switch (popup_position)
                    {
                    case 'center':
                        $box.addClass(namespace + '-pos-center');
                        break;

                    case 'top':
                        $box.addClass(namespace + '-pos-top');
                        break;

                    case 'bottom':
                        $box.addClass(namespace + '-pos-bottom');
                        break;
                    }

                // prepare HTML
                $content.html(content);
                $box.append($content);

                // put together
                $wrap.append($close, $box);
                $('body').append($wrap);
                $wrap.fadeIn(speed);
            },

            closeBox = function() {
                $('.' + namespace + '-wrap').fadeOut(speed, function() {
                    $(this).remove();
                });

            };

        if (action === 'open') {
            initBox();
        }

        if (action === 'close') {
            closeBox();
        }

        $close.bind('click', function() {
            closeBox();
        });

        return this;
    };

}(jQuery, document, window));
