var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var startingpoint = createSprite(20, 180,100,150);
startingpoint.shapeColor='blue';
var endingpoint= createSprite(380,180,100,150);
endingpoint.shapeColor='red';
var wall1 = createSprite(200, 102,400,5);
wall1.shapeColor='brown';
var wall2 = createSprite(200,254 ,400,5);
wall2.shapeColor='brown';
var player = createSprite(36,185,20,20);
player.shapeColor='yellow';
var ball1 = createSprite(112,142,20,20);
ball1.shapeColor='green';

var ball2 = createSprite(142,206,20,20);
ball2.shapeColor='green';

var ball3 = createSprite(213,132,20,20);
ball3.shapeColor='green';

var ball4 = createSprite(280,206,20,20);
ball4.shapeColor='green';

ball1.setVelocity(0, 8);
ball2.setVelocity(0, -8);
ball3.setVelocity(0, 8);
ball4.setVelocity(0, -8);



var lives=0;
function draw() {
background("white");
drawSprites();
createEdgeSprites();
ball1.bounceOff(wall1);
ball1.bounceOff(wall2);
ball2.bounceOff(wall1);
ball2.bounceOff(wall2);
ball3.bounceOff(wall1);
ball3.bounceOff(wall2);
ball4.bounceOff(wall1);
ball4.bounceOff(wall2);
   

 if (keyDown("RIGHT_ARROW")) {
   player.x+=4;
       
   }
 if (keyDown("LEFT_ARROW")) {
     player.x+=-4;
         
     }
  if (player.isTouching(ball1)||player.isTouching(ball2)||player.isTouching(ball3)||player.isTouching(ball4)) {
          lives+=1
           player.x=36;
           player.y=185;
         }
        if (player.isTouching(endingpoint)) {
         textSize(25);
         text("YOU WON THE GAME", 200, 150);
                 
         }
          
 textSize(30);
  text("LIVES "+lives,174,94);
      
                           
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
