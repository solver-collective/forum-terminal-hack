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

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

// Sketch - Melt the Terminal Frame
let dataMoshPit_1 = function(p) {
  let x = 0; 
  let y = 0; 
  let leap = 8;
  
  p.setup = function() {
    p.frameRate(10);

    p.createCanvas(terminalBody.offsetWidth, terminalBody.offsetHeight);
    // Destroy Sketch after set Time
    setTimeout(function () {
      p.remove();
      p = null;
    }, timeOut);
  };

  p.draw = function() {
    
    //console.log(p.frameCount);
    p.noStroke();
    
    x += leap; 
    if(x > p.width){
      x = 0; 
    }
    if (p.frameCount > 20) {

      p.rect(x,terminalBody.getBoundingClientRect().top, 2, p.random(0,terminalBody.offsetHeight));
      
      p.fill(p.color('rgb(194, 213, 0)'));
      p.rect(x - p.random(-50,100), terminalBody.getBoundingClientRect().top, 10, p.random(0,terminalBody.offsetHeight));
    }
  };

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

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


    if (p.frameCount > 60) {
      // Displays the image at point (0, height/2) at half size
      p.image(glicth, 2 - (glicth.width / 2), p.height / 2 + p.random(-10,10), glicth.width / 2, glicth.height / 2);
    }

    //console.log(p.frameCount);
  }

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

// Sketch - Mosh Pit 3 (Floating Windows)
let dataMoshPit_3 = function(p) {

  let bug1; // Declare objects
  let bug2;

  // Preload
  p.preload = function() {
    img = p.loadImage('i/floating-window_1.png'); // Load the image
  }

  // Setup = Run Once
  p.setup = function() {

    p.frameRate(3);

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

    p.frameRate(p.random(1,6));

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

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
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

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
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

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
}

// Sketch - Static Wallpaper Images
let dataMoshPit_static = function(p) {
  let doom, bestbuy, statueMosh, runners, easyInstall, messwith, moshy, b2tf, faceColorized, y = -2;
  // Preload
  p.preload = function() {
    doom = p.loadImage('i/3588775-middle-trans.png'); // Load the image
    bestbuy = p.loadImage('i/bestbuy-logo.png');
    statueMosh = p.loadImage('i/statue-mosh.gif');
    runners = p.loadImage('i/retro-synthwave_GIF-00-2.gif');
    easyInstall = p.loadImage('i/EZG5G.gif');
    messwith = p.loadImage('i/0_59qwHO8-itP2tlra.gif');
    moshy = p.loadImage('i/tumblr_ndf25gbavp1qf3orno1_500.gif');
    b2tf = p.loadImage('i/6IjF.gif');
    faceColorized = p.loadImage('i/face-colorized.jpg');
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  }

  // Draw = Run Loop Forever
  p.draw = function() {
    // Data Mosh
    //console.log(p.width);
    if (p.frameCount > 3) {
      p.image(moshy, p.width > 700 ? p.width -  moshy.width / 2 : p.width - 10, 0, moshy.width / 2, moshy.height * 10);
    }

    // Best Buy
    if (p.frameCount > 8) {
      p.image(bestbuy, terminalBody.offsetWidth, 50, bestbuy.width / 2, bestbuy.height / 2);
    }

    // Face Colorized

    if (p.frameCount > 12) {
      p.image(faceColorized, p.width > 700 ? -2 : -50, p.frameCount % 10 == 0 ? y++ : y, p.width > 700 ? faceColorized.width * 0.75 : faceColorized.width * 0.5, p.width > 700 ? faceColorized.height * 0.75 : faceColorized.height * 0.5);
    }

    // Statue Mosh
    if (p.frameCount > 15) {
      p.image(statueMosh, p.width - p.width , p.height / 2 + p.height / 8, statueMosh.width / 4, statueMosh.height / 4);
    }

    // Runners
    if (p.frameCount > 10) {
      p.image(runners, runners.width * 0.5 + 40, p.height - runners.height * 0.6, runners.width * 0.5, runners.height * 0.5);
    }

    // easyInstall
    if (p.frameCount > 10) {
      p.image(easyInstall, p.width > 700 ? terminalBody.offsetWidth : easyInstall.width / 2, easyInstall.height * 0.4, p.width > 700 ? easyInstall.width : easyInstall.width / 2, p.width > 700 ? easyInstall.height : easyInstall.height / 2);
    }

    // Mess With The Best
    if (p.frameCount > 10) {
      p.image(messwith, p.width - p.width / 2 + 85, p.height - messwith.height * 0.65, messwith.width * 0.75, messwith.height * 0.75);
    }
        
    // Back To the Future
    if (p.frameCount > 8) {
      p.image(b2tf, 900, -20, b2tf.width / 2, b2tf.height / 2);
    }

    // Doom Character
    if (p.frameCount > 3) {
      p.image(doom, p.width > 700 ? p.width - p.width / 2 : 100, p.height / 2 - 50, doom.width / 3, doom.height / 3);
    }
  }

  // Resizer
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.touchStarted = function () {
    window.location.href = "./system-terminal.html";
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
    this.x = p.random(p.width / 2);
    this.y = p.random(p.height / 2);
    this.sizeLength = p.width > 700 ? p.random(80, 220) : p.random(40, 150);
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
