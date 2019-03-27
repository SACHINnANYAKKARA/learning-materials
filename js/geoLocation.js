(function () {

 'use strict';
 
  function onPositionReceived(position){
     
    console.log(position);

  }
  
  function onPositionFailed(positionError){
      console.log(positionError);
  }

  function onPositionChanged(position){
       console.log(position.coords.latitude+''+position.coords.longtiude);
  }

  console.log("geolocation");
  

}());