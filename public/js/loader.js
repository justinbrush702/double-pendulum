let window_width = window.innerWidth, window_height = window.innerHeight;

var two = new Two({
  fullscreen: false,
  autostart: true,
  width : window_width * .5,
  height : window_width * .5
}).appendTo(document.getElementById('loader-mount'));

var block_size = (two.width / 2);
var initSpot = two.makeRectangle( two.width/2, two.height/2, (block_size), block_size);


// Gets called every "tick"
two.bind('update', function() {
  initSpot.rotation += .001;
});
