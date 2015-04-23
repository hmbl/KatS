var hammertime = new Hammer(myElement, myOptions);
hammertime.on('pan', function(ev) {
    console.log(ev);
});


hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
Hammer(c).on("tap", function(event){ alert("Hello!"); });`


