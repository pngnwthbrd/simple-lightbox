(function($, window, document) {
    'use strict';
    if (!$) {
        return;
    }
    $.dwLightbox = function(action, content, options) {
        var settings = $.extend({
                backgroundColor:        '#ffffff',
                foregroundColor:        '#000000',
                borderColor:            '#c0c0c0',
                overlayColor:           'rgba(190, 0, 0, 0.4)',
                maxWidth:               '100%',
                maxHeight:              '100%',
                minWidth:               '50%',
                minHeight:              '100px',
                width:                  'auto',
                height:                 'auto',
                overflow:               'auto',
                speed:                  '421',
                closeButton:            'X'
            }, options);
            
            
        // Settings
        var bgColor = settings.backgroundColor,
            fgColor = settings.foregroundColor,
            rColor  = settings.borderColor,
            ovColor = settings.overlayColor,
            maxHeight = settings.maxHeight,
            maxWidth  = settings.maxWidth,
            minWidth = settings.minWidth,
            minHeight = settings.minHeight,
            height  = settings.height,
            width   = settings.width,
            overflow = settings.overflow,
            speed = settings.speed,
            close = settings.closeButton,
            
            // Helper
            namespace = 'dwlightbox',
        
            // HTML
            $wrap   = $('<div class="' + namespace + '-wrap" />'),
            $content = $('<div class="' + namespace + '-content" />'),
            $close  = $('<div class="' + namespace + '-close" />'),
            $box    = $('<div class="' + namespace + '-box" />'),
            
            // Functions
            initBox = function() {
                $wrap.css({
                    'background':       ovColor,
                    'position':         'fixed',
                    'z-index':          '99999196',
                    'left':             '0',
                    'top':              '0',
                    'text-align':       'center',
                    'height':           '100%',
                    'width':            '100%',
                    'display':          'none'
                });
                
                $box.css({
                    'background':       bgColor,
                    'position':         'relative',
                    'z-index':          '99999197',
                    'display':          'inline-block',
                    'color':            fgColor,
                    'margin':           '0 auto',
                    'text-align':       'center',
                    'min-width':        minWidth,
                    'min-height':       minHeight,
                    'max-height':       maxHeight,
                    'max-width':        maxWidth,
                    'width':            width,
                    'height':           height,
                    'overflow':         overflow,
                    'top':              '50%',
                    'transform':        'translateY(-50%)',
                    'border':           '1px solid ' + rColor
                });
                
                $content.css({
                    'padding':          '25px'
                });
                
                $close.css({
                    'position':         'absolute',
                    'top':              '0',
                    'right':            '0',
                    'cursor':           'pointer',
                    'text-align':       'right',
                    'font-size':        '2em',
                    'font-weight':      'bold',
                    'color':            '#9c0700',
                    'padding':          '15px',
                    'display':          'block',
                    'z-index':          '99999199',
                    'background':       bgColor
                });
                
                // prepare HTML
                $content.html(content);
                $close.html(close);
                $box.append($close, $content);
                
                // put together
                $wrap.append($box);
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