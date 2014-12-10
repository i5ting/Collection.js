/*
 * mccccc
 * https://github.com/sang/mccccc
 *
 * Copyright (c) 2014 alfred sang
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.mccccc = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.mccccc = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mccccc.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.mccccc.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].mccccc = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
