# jQuery gSlider plugin

A simple, versatile, cross-browser, CSS3, [jQuery](http://jquery.com/) plugin that produces an image slider with precise
dimensions and resizes the contained images by cropping and upscaling, in order to maintain the aspect ratio of pictures.

Use this image slider if you have a strict space requirement (such as a sidebar) and you would like to display multiple
images of different height or width. No more squished, stretched, too small or too big images!

Here is how to use the gSlider:

```html
<head>

    <!-- include the plugin and other resources in your html file -->
    <link rel="stylesheet" href="gSlider.css">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="gSlider.js"></script>

</head>

<body>

    <!-- Include the images displayed in the slider -->
    <div class="gSlider">
        <img src="images/1.jpg" />
        <img src="images/2.jpg" />
        <img src="images/3.jpg" />
        <img src="images/4.jpg" />
        <img src="images/5.jpg" />
    </div>

    <!-- Create the slider out of the included images! -->
    <script>
        $(document).ready(function() {
            $('.gSlider').gSlider();
        });
    </script>

</body>
```

## Features

* Initialization with custom slide interval (default is 5000ms):
```js
$('.gSlider').gSlider({interval: 5000});
```
* Sliding is paused when hovering the slider. This is achieved with javascript, by **clearing the interval** on mouse hover
* Images are centered and cropped. This is achieved with CSS3 by wrapping the img tags with divs that have the
background-image centered and ```background-size: cover;```
* Upscales pictures in case they are to small (see bottom of page)

## TODO

* Custom transition speed (now it is fixed to 2seconds)
* Change options. Right now you cannot modify the slider's speed (interval). To do this, we would have to
    rewrite the "single instantiation" part, read the gSlider object from the element ( with $.data('plugin_gSlider') )
    and create/use a new "update" method that will stop the existing interval and set a new one.
* Add option for sliding direction - this can be done easily by reversing the "lookup" of $nextElement
    with different jQuery selectors
* Use metadata so users don't have to write any js - options should be defined as data-option attributes.
    In js we can $.extend() these in the config object and use them.
* Use different transition effect - directly in the element.style or maybe inject css rule with jquery (with cool hack)


More detailed usage examples can be found in the test folder.