# Simple Lightbox

Is a minimal responsive Lightbox for HTML contents.  
DEMO: [Simplelightbox Demo site](http://simple-lightbox.pngnwthbrd.com)

## Howto

Setting up your HTML

insert inside the head section:
```
<link rel="stylesheet" type="text/css" href="css/simplelightbox.css">
```

insert before the closing body tag:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.simplelightbox.min.js"></script>
```

To show the Lightbox ([optional])
```
$.simplelighbox('open', 'Put your content here!', [options]);
```

Options can be
```
{
    popupPosition:  'center',	// position of the lightbox (center, top, bottom)
    speed:          '421'       // animation speed (fade-in / fade-out)
}
```
