// image variables
var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var startPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");

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

function loadImages() {
    var imageList = [
      {varName: carPic, theFile: "car1.png"},
      {varName: roadPic, theFile: "track_road.png"},
      {varName: wallPic, theFile: "track_wall.png"},
      {varName: startPic, theFile: "track_start.png"},
      {varName: goalPic, theFile: "track_goal.png"},
      {varName: treePic, theFile: "track_tree.png"}
    ];

    picsToLoad = imageList.length;

  for(var i=0; i<imageList.length; i++)
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
}
