# dwLightbox

Is a minimal responsive Lightbox for HTML contents.

## Howto

Setting up your HTML

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="jquery.dwLightbox.min.js"></script>
```

To show the Lightbox ([optional])
```
$.dwLightbox('open', 'Put your content here!', [options]);
```

Options can be
```
{
    backgroundColor:        '#ffffff',                  // background color of the content box
    foregroundColor:        '#000000',                  // font color of the content box
    borderColor:            '#c0c0c0',                  // border color of the content box
    overlayColor:           'rgba(190, 0, 0, 0.4)',     // overlay background color
    maxWidth:               '100%',                     // maximal width of the content box
    maxHeight:              '100%',                     // maximal height of the content box
    minWidth:               '50%',                      // minimal width of the content box
    minHeight:              '100px',                    // maximal height of the content box
    width:                  'auto',                     // width of the content box
    height:                 'auto',                     // height of the content box
    overflow:               'auto',                     // css overflow attribute of content box
    speed:                  '421',                      // animation speed (fade-in / fade-out)
    closeButton:            'X'                         // here can be set an image or other chars
}
```
