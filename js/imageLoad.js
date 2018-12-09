// image variables
var carPic = document.createElement("img");
var trackPics = [];

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

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
    var imageList = [
      {varName: carPic, theFile: "car1.png"},
      {trackType: TRACK_ROAD, theFile: "track_road.png"},
      {trackType: TRACK_WALL, theFile: "track_wall.png"},
      {trackType: TRACK_START, theFile: "track_start.png"},
      {trackType: TRACK_GOAL, theFile: "track_goal.png"},
      {trackType: TRACK_TREE, theFile: "track_tree.png"}
    ];

    picsToLoad = imageList.length;

  for(var i=0; i<imageList.length; i++) {
    if(imageList[i].varName != undefined) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode( imageList[i].trackType, imageList[i].theFile)
    }

  }


}
