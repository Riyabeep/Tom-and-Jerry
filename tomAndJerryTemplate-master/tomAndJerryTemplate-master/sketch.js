var HotPotato
var KittyKat
var TinieetinyMouse
function preload() {
    //load the images here
HotPotato=loadImage ("images/garden.png")
Kittycatimage = loadAnimation ("images/cat2.png", "images/cat3.png")
CattyKitimage = loadAnimation ("images/cat1.png")
TinyTeenMouseimage = loadAnimation ("images/mouse1.png")
MouseTeasingImage = loadAnimation ("images/mouse2.png", "images/mouse3.png")
CatLastimage = loadAnimation ("images/cat4.png")
Tinylastimage = loadAnimation ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    KittyKat= createSprite (800,700,10,10)
KittyKat.addAnimation ("Cat",CattyKitimage)
KittyKat.scale= 0.3 

TinieetinyMouse= createSprite (200,700,10,10)
TinieetinyMouse.addAnimation ("Mouse", TinyTeenMouseimage)
TinieetinyMouse.scale=0.1
}

function draw() {

    background(HotPotato);
  if(KittyKat.x-TinieetinyMouse.x<KittyKat.width/2-TinieetinyMouse.width/2) {
KittyKat.velocityX= 0
KittyKat.addAnimation ("Catlastimage",CatLastimage)
KittyKat.changeAnimation ("Catlastimage")
TinieetinyMouse.addAnimation ("Mousy", Tinylastimage)
TinieetinyMouse.changeAnimation ("Mousy")
  }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
  KittyKat.velocityX=-3
  KittyKat.addAnimation ("CatMoving",Kittycatimage)
KittyKat.changeAnimation ("CatMoving")

TinieetinyMouse.addAnimation ("MouseTeasing", MouseTeasingImage)
TinieetinyMouse.frameDelay = 25;

TinieetinyMouse.changeAnimation ("MouseTeasing")
}

}
