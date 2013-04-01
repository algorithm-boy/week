(function() {
  var index,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.jabinfo || (this.jabinfo = {});

  this.jabinfo.index = index = (function() {

    function index() {
      this.contructor = __bind(this.contructor, this);
    }

    index.prototype.contructor = function() {
      this.list = $("#content img");
      this.list.swipe(this["switch"]());
      return this.list.click(this["switch"]());
    };

    index.prototype["switch"] = function(index) {
      return console.log("switch");
    };

    return index;

  })();

  new this.jabinfo.index;

}).call(this);
