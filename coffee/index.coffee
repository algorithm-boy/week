@jabinfo or @jabinfo = {}
@jabinfo.index = class index
	contructor:=>
		@list = $("#content img")
		@list.swipe @switch()
		@list.click @switch()

	switch:(index)->
		console.log "switch"

new @jabinfo.index
