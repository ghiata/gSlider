// Begins with semicolon in case the previous script doesn't close the last statement
;(function(window, $){

    // Constructor
    var gSlider = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.init();
    };

    gSlider.prototype = {
        defaults: {
            interval: '3000'
        },
        init: function() {
            var that= this;
            var timer;

            this.config = $.extend({}, this.defaults, this.options);

            $('img', this.$elem).each(function() {
                $(this).wrap(
                    '<div class="gSliderItem" ' +
                         'style="background-image: url('+ $(this).attr('src') +');"' +
                    '</div>');
            });

            $('.gSliderItem:first-child', this.$elem).addClass('active');

            this.$elem.hover(function(){
                clearInterval(timer);
            }, function(){
                clearInterval(timer); // prevent multiple timers
                timer= setInterval( function() {
                    var $element= $('.active', that.$elem);
                    var $nextElement= $element.next().length ? $element.next() : $element.prevAll().last();
                    $element.removeClass('active');
                    $nextElement.addClass('active');
                }, that.config.interval);
            }).trigger('mouseout');

            return this;
        }
    };

    gSlider.defaults = gSlider.prototype.defaults;

    // Register as jQuery "plugin"
    $.fn.gSlider = function(options) {
        return this.each(function() {
            // Single instantiation
            if (!$.data(this, "plugin_gSlider")) {
                $.data(this, "plugin_gSlider", new gSlider(this, options));
            }
        });
    };

})(window, jQuery);
