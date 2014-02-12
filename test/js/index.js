$(document).ready(function() {
    // TODO: move slider initialization directly in the plugin

    $('.sidebar-left .gSlider').gSlider();

    $('.sidebar-right .gSlider').gSlider({interval: 2000});

    $('.sidebar-huge-bottom .gSlider').gSlider({interval: 6000});

    // this is a "stress" test to see if the slider breaks on reinitialization
    $('.gSlider').gSlider();
});