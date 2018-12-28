// image variables
var heroPic = document.createElement("img");
var worldPics = [];

var picsToLoad = 0; //set automatacally based on imageList

function countLoadedImagesAndLaunchIfReady() { //calls this only when the image loads
    picsToLoad--;
    //console.log(picsToLoad);
    if(picsToLoad == 0)
      imageLoadDoneSoStartGame();
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = "img/"+fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
  worldPics[worldCode] = document.createElement("img");
  beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
    var imageList = [
      // hero images
      {varName: heroPic, theFile: "hero1.png"},

      // world images
      {worldType: WORLD_GROUND, theFile: "world_ground.png"},
      {worldType: WORLD_WALL, theFile: "world_wall.png"},
      {worldType: WORLD_DOOR, theFile: "world_door.png"},
      {worldType: WORLD_GOAL, theFile: "world_goal.png"},
      {worldType: WORLD_KEY, theFile: "world_key.png"}
    ];

    picsToLoad = imageList.length;

  for(var i=0; i<imageList.length; i++) {
    if(imageList[i].varName != undefined) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForWorldCode( imageList[i].worldType, imageList[i].theFile)
    }

  }


}
