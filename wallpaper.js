let dataMoshPit_play = function(p) {
  let wallpaper 
  // Preload
  p.preload = function() {
    wallpaper = p.loadImage('i/wallpaper_x2500.png'); // Load Background
  }

  // Setup = Run Once
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  }

  // Draw = Run Loop Forever
  p.draw = function() {
    p.clear();

    p.image(wallpaper, 0, 0, p.width, p.height++);

    p.background(255, 255, 255, 0);

    p.fill(0);
    p.textAlign(p.CENTER);
    p.text('Click to create a new sprite', p.width / 2, p.height / 2);
    //draw all the sprites added to the sketch so far
    //the positions will be updated automatically at every cycle
    p.drawSprites();
  }

  // Draw = Run Loop Forever
  p.mousePressed = function() {
    //create a sprite at the mouse position and store it in a temporary variable
    let s = p.createSprite(p.mouseX, p.mouseY, 30, 30);
    //if no image or animation is associated it will be a rectancle of the specified size
    //and a random color

    //now you can use the variable to set properties
    //e.g. a random velocity on the x and y coordinates
    s.velocity.x = p.random(-5, 5);
    s.velocity.y = p.random(-5, 5);
  }  
}

new p5(dataMoshPit_play);