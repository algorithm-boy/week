(function() {
  var app;

  this.jabinfo || (this.jabinfo = {});

  this.jabinfo.app = app = (function() {

    function app() {
      var _this = this;
      $(document).ready(function() {
        return _this.init();
      });
    }

    app.prototype.init = function() {
      this.page = $("#page");
      this.flip = $("#flip");
      this.bar = $("#sidebar");
      this.one = $("#oneScreen");
      this.two = $("#twoScreen");
      this.nav = $("#nav");
      this.index = 1;
      this.barWidth = 120;
      this.canvasWidth = $("body").width();
      this.canvas(this.canvasWidth);
      this.timer = null;
      return this.events();
    };

    app.prototype.canvas = function(width) {
      this.flip.css("width", width * 2 + this.barWidth);
      this.bar.css("width", this.barWidth);
      this.one.css("width", width);
      return this.two.css("width", width);
    };

    app.prototype.events = function() {
      var _this = this;
      this.flip.swipeLeft(function(e) {
        return _this.swipe("left");
      });
      this.flip.swipeRight(function(e) {
        return _this.swipe("right");
      });
      return this.scroll();
    };

    app.prototype.scroll = function() {
      var param;
      param = {
        bounce: false,
        hScrollbar: false,
        vScrollbar: false,
        fixedScrollbar: false,
        lockDirection: true,
        fadeScrollbar: true,
        hideScrollbar: true
      };
      new iScroll("sidebar", param);
      new iScroll("oneScreen", param);
      return new iScroll("twoScreen", param);
    };

    app.prototype.animate = function(width) {
      return this.flip.css("transform", "translateX(" + width + "px)");
    };

    app.prototype.swipe = function(direct) {
      var move;
      if (direct === "left") {
        if (this.index === 2) {
          return;
        }
        if (this.index === 0) {
          move = -this.barWidth;
          this.nav.css("margin-left", move);
        } else {
          move = -this.barWidth - this.canvasWidth * this.index;
          this.nav.css("margin-left", 0);
        }
        this.index++;
      }
      if (direct === "right") {
        if (this.index === 0) {
          return;
        }
        console.log(this.index);
        if (this.index === 1) {
          move = 0;
        } else {
          move = -this.barWidth - this.canvasWidth * (this.index - 2);
        }
        this.index--;
      }
      return this.flip.css("margin-left", move);
    };

    app.prototype.wait = function(args) {
      args.status = false;
      return clearTimeout(args.timer);
    };

    app.prototype.later = function(fn, intval, context) {
      var args, _cb;
      args = Array.prototype.slice.call(arguments, 2);
      _cb = function() {
        return fn.apply(null, args);
      };
      return this.timer = setTimeout(_cb, intval);
    };

    return app;

  })();

  new this.jabinfo.app;

}).call(this);
