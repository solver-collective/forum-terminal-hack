const timeOut = 20000,
      terminalBody = document.querySelector('.terminal-dialog');




// Sketch - Wallpaper Background
let dataMoshPit_bkg = function( p ) { // p could be any variable name
  let x = 100; 
  let y = 100;

  let bkg; // Declare variable 'img'
  //let alphaState = 0;

  // Preload
  p.preload = function() {
    bkg = p.loadImage('i/wallpaper_x2500.png'); // Load Background
  }
  

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      x = p.random(-50,50);
      canvas.position(0,0);
      
      // Destroy Sketch after set Time
      setTimeout(function () {
          p.remove();
          p = null;
      }, timeOut);
  };

  p.draw = function() {
    /*
    alphaState += 85;
    if (alphaState > 255) {
      alphaState = 255;
    }
    p.tint(255, 255); // Apply transparency without changing color
    */
    

    //console.log(alphaState);
    // Displays the image at its actual size at point (0,0)
    p.image(bkg, 0, 0, p.width, p.height+= 1);
    //p.image(bkg, 0, 0, p.width, p.height);
      

  };
};

// Sketch - Melt the Terminal Frame
let dataMoshPit_1 = function(p) {
  let x = 0; 
  let y = 0; 
  let leap = 8;
  let alpha = 7;
  

  //console.log(terminalBody);
  p.setup = function() {
    p.createCanvas(terminalBody.offsetWidth, terminalBody.offsetHeight);
  
    // Destroy Sketch after set Time
    setTimeout(function () {
      p.remove();
      p = null;
    }, timeOut);
  };

  p.draw = function() {
    
    p.noStroke();
    
    x += leap; 
    if(x > p.width){
      x = 0; 
    }
    if (p.frameCount > 20) {

      p.rect(x,p.random(0,10),2,p.random(0,terminalBody.offsetHeight));
      alpha++;
      if(alpha > 9){
        alpha = 7; 
      }
      //alphaColor = alpha / 10;
      //console.log(alpha);
      
      p.fill(p.color('rgb(194, 213, 0)'));
      p.rect(x - p.random(-50,100),p.random(0,10),10,p.random(0,terminalBody.offsetHeight));
    }
  };
}


  
// Sketch - Mosh Pit 2 (Glitch Overlays)
let dataMoshPit_2 = function(p) { 
  
  let glicth; // Declare variable 'img'

  p.frameRate(30);

  // Preload
  p.preload = function() {
    glicth = p.loadImage('i/video-poster.gif'); // Load the image
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    //p.frameRate(4);
    
    // Destroy Sketch after set Time
    setTimeout(function () {
      p.remove();
      p = null;
    }, 10000);
  }

  // Draw = Run Loop Forever
  p.draw = function() {

    // Add some Flickering
    if (p.frameCount > 30) {
      p.image(glicth, p.width - glicth.width / 2, 0);
    }
    if (p.frameCount > 60) {
      // Displays the image at point (0, height/2) at half size
      p.image(glicth, 0, p.height / 2 + p.random(-10,10), glicth.width / 2, glicth.height / 2);
    }

    //console.log(p.frameCount);
  }
};

// Sketch - Mosh Pit 3 (Floating Windows)
let dataMoshPit_3 = function(p) {

  let bug1; // Declare objects
  let bug2;

  p.frameRate(3);

  // Preload
  p.preload = function() {
    img = p.loadImage('i/floating-window_1.png'); // Load the image
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);

    // Create Bug objects
    bug1 = new FloatingWindow(this, 100);
    bug2 = new FloatingWindow(this, 20);

    // Destroy Sketch after set Time
    setTimeout(function () {
      p.remove();
      p = null;
    }, timeOut);
  }

  // Draw = Run Loop Forever
  p.draw = function() {

    // Animation: Bug
    if (p.frameCount > 2) {
      bug1.move(p);
      bug1.display(p);
    }
    if (p.frameCount > 4) {
      bug2.move(p);
      bug2.display(p);
    }
  }
}

// Sketch - Circles of Gray
let dataMoshPit_4 = function(p) {

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);

    
  }

  // Draw = Run Loop Forever
  p.draw = function() {
    setTimeout(function () {
      drawTarget(p, p.width * 0.25, p.height * 0.4, 200, 4);
    }, 5000);

    setTimeout(function () {
      drawTarget(p, p.width * 0.5, p.height * 0.5, 300, 10);
    }, 10000);
    
    setTimeout(function () {
      drawTarget(p, p.width * 0.75, p.height * 0.3, 120, 6);
    }, 15000);
  }
}

/* 
  Template
  */

// Sketch - Mosh Pit 3 (Bugs)
let dataMoshPit_xx = function(p) {
  // Preload
  p.preload = function() {
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);

    // Destroy Sketch after set Time
    setTimeout(function () {
      p.remove();
      p = null;
    }, timeOut);
  }

  // Draw = Run Loop Forever
  p.draw = function() {}
}

// Sketch - Static Wallpaper Images
let dataMoshPit_static = function(p) {
  let doom, bestbuy, luigi, runners, hammer, messwith, moshy, b2tf;
  // Preload
  p.preload = function() {
    doom = p.loadImage('i/3588775-middle-trans.png'); // Load the image
    bestbuy = p.loadImage('i/bestbuy-logo.png');
    luigi = p.loadImage('i/super-mario-64-luigi-technology-fictional-character.png');
    runners = p.loadImage('i/retro-synthwave_GIF-00-2.gif');
    hammer = p.loadImage('i/hammer-trasp.gif');
    messwith = p.loadImage('i/0_59qwHO8-itP2tlra.gif');
    moshy = p.loadImage('i/tumblr_ndf25gbavp1qf3orno1_500.gif');
    b2tf = p.loadImage('i/6IjF.gif');
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  }

  // Draw = Run Loop Forever
  p.draw = function() {
    // Doom Character
    if (p.frameCount > 3) {
      p.image(doom, p.width - p.width / 3, p.height / 2 - 50, doom.width / 3, doom.height / 3);
    }

    // Best Buy
    if (p.frameCount > 8) {
      p.image(bestbuy, terminalBody.offsetWidth, 50, bestbuy.width / 2, bestbuy.height / 2);
    }

    // Luigi
    if (p.frameCount > 15) {
      p.image(luigi, p.width - p.width , p.height / 2 + p.height / 8, luigi.width / 4, luigi.height / 4);
    }

    // Runners
    if (p.frameCount > 10) {
      p.image(runners, runners.width * 0.5 + 40, p.height - runners.height * 0.6, runners.width * 0.5, runners.height * 0.5);
    }

    // Hammer
    if (p.frameCount > 10) {
      p.image(hammer, terminalBody.offsetWidth, hammer.height * 0.4, hammer.width, hammer.height);
    }

    // Mess With The Best
    if (p.frameCount > 10) {
      p.image(messwith, p.width - p.width / 2 + 85, p.height - messwith.height * 0.65, messwith.width * 0.75, messwith.height * 0.75);
    }

    // Data Mosh

    console.log(p.width);
    if (p.frameCount > 3) {
      let rightPos = p.width - 10;
      if (p.width > 700) {
        rightPos = moshy.width / 2
      }
      p.image(moshy, rightPos, 0, moshy.width / 2, moshy.height * 10);
    }
        
    // Back To the Future
    if (p.frameCount > 8) {
      p.image(b2tf, 900, -20, b2tf.width / 2, b2tf.height / 2);
    }
  }
}

/* 
  Functions for Artwork
  */


function drawTarget(p, xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      p.fill(i * grayvalues);
      p.ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
}

// FloatingWindow class
class FloatingWindow {
  constructor(p, speed) {
    this.x = p.random(p.width);
    this.y = p.random(p.height);
    this.sizeLength = p.random(10, 80);
    this.speed = speed;
  }

  move(p) {
    this.x += p.random(-this.speed, this.speed);
    this.y += p.random(-this.speed, this.speed);
  }

  display(p) {
    p.fill(p.color('rgb(194, 213, 0)'));
    //p.rect(this.x, this.y, this.sizeLength * 2.5, this.sizeLength);
    p.image(img, this.x, this.y, this.sizeLength * 2.5, this.sizeLength);
  }
}
