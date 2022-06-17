// Sketch One
let s = function( p ) { // p could be any variable name
    let x = 100; 
    let y = 100;
    let img; // Declare variable 'img'.
    p.setup = function() {
      canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        x = p.random(-50,50);
        canvas.position(0,0);
        img = p.loadImage('i/video-poster.gif'); // Load the image
        bkg = p.loadImage('i/glitch-web-bkg.png'); // Load Background
        
        // Destroy Sketch after set Time
        setTimeout(function () {
            p.remove();
            p = null;
        }, 5000);
    };
  
    p.draw = function() {
      p.background(0);
      p.fill(255);
      x = p.random(255);
      p.rect(x,y,50,50);
      // Displays the image at its actual size at point (0,0)

        p.image(bkg, 0, 0);
        p.image(img, p.width - img.width / 2, 0);
        // Displays the image at point (0, height/2) at half size
        p.image(img, 0, p.height / 2 + p.random(-10,10), img.width / 2, img.height / 2);
    };
  };
  
  // Sketch Two
  let t = function( p ) { 
    let x = 0; 
    let y = 0; 
    let speed = 8.5;
    p.setup = function() {
      p.createCanvas(600, 60);
    
      // Destroy Sketch after set Time
      setTimeout(function () {
        p.remove();
        p = null;
      }, 5000);
    };
  
    p.draw = function() {

        p.noStroke();

      p.background(0,0,0,0);
      p.fill(0,0,0,0);
      x += speed; 
      if(x > p.width){
        x = 0; 
      }
      p.rect(x,p.random(0,10),2,p.random(0,60));

      p.fill(p.color(194, 213, 0));
      p.rect(x - p.random(-50,100),p.random(0,10),10,p.random(0,60));
    };

    
  };


