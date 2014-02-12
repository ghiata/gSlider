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

More detailed usage examples can be found in the test folder.