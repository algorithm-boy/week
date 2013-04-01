@jabinfo || @jabinfo = {}
@jabinfo.app = class app
  constructor:->
    $(document).ready =>
      @init()
    
  init:()->
    @page = $("#page")
    @flip = $("#flip")
    @bar = $("#sidebar")
    @one = $("#oneScreen")
    @two = $("#twoScreen")
    @nav = $("#nav")
    @index = 1
    @barWidth = 120
    @canvasWidth = $("body").width()
    @canvas @canvasWidth
    @timer = null
    @events()
    # @carousel()
    
  canvas: (width)->
    @flip.css "width", width * 2 + @barWidth
    @bar.css "width", @barWidth
    @one.css "width", width
    @two.css "width", width

  events: ->
    @flip.swipeLeft (e)=>
      @swipe "left"
    @flip.swipeRight (e)=>
      @swipe "right"
    @scroll()

  scroll: ->
    param = {bounce: false,hScrollbar: false,vScrollbar: false,fixedScrollbar: false,lockDirection: true,fadeScrollbar: true,hideScrollbar: true}
    new iScroll "sidebar", param
    new iScroll "oneScreen", param
    new iScroll "twoScreen", param

  animate: (width)->
    @flip.css "transform", "translateX(" + width + "px)"

  swipe:(direct)->
    if direct == "left"
      return if @index == 2
      if @index  == 0
        move = -@barWidth
        @nav.css "margin-left", move
      else
        move = -@barWidth - @canvasWidth * @index
        @nav.css  "margin-left", 0
      @index++
    
    if direct == "right"
      return if @index == 0
      console.log @index
      if @index == 1
        move = 0
      else
        move =  -@barWidth - @canvasWidth * (@index - 2)
      @index--
    @flip.css "margin-left", move

  wait: (args)->
    args.status = false
    clearTimeout args.timer

  later: (fn, intval, context)->
    args = Array.prototype.slice.call arguments, 2
    _cb = ->
      fn.apply null, args
    @timer = setTimeout _cb, intval

new @jabinfo.app