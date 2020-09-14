var albumart = 'https://img.discogs.com/zEmmfkf6p_-9FWnn0hcC5M8aYYE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14436325-1574503760-5328.jpeg.jpg'
var Song_title = 'Aurora - SEED';
var Song_Artist = 'Aurora';
var draw = SVG().addTo('body').size(500, 100)
var group = draw.group();
var text = draw.text(function(add) {
    add.tspan(Song_title).newLine().font({
        family:   'Roboto'
      , size:     30
      , anchor:   'left'
      , weight: 'bold'
      });
    add.tspan(Song_Artist).fill('#212121').newLine().font({
        family:   'Roboto'
      , size:     20
      , anchor:   'left'

      });
  })
  //.animate(200, 1000, 'now').dmove(115,0);
var max_prog_bar = Song_title.length*15;
var percentage = (100/100)*max_prog_bar;
var progbar = draw.rect(max_prog_bar,5,0,0).move(0,80).radius(2).fill('#AAAAAA');
var fill = draw.rect(percentage,5,0,0).move(0,80).radius(2).fill('#212121');

group.add(text);
group.add(progbar);
group.add(fill);
group.animate(200, 100, 'now').dmove(115,0);
var image = draw.image(albumart).size(100,100);