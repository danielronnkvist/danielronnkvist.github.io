var Offset = {}

Offset.distance = 0.25;

Offset.initialize = function(element1) {
  this.element = element1;
  var _this = this;
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function () {
      _this.tilt([event.beta, event.gamma]);
    }, true);
  } else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function () {
      _this.tilt([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
  } else {
    window.addEventListener("MozOrientation", function () {
      _this.tilt([orientation.x * 50, orientation.y * 50]);
    }, true);
  }
};

Offset.tilt = function(motion) {
  if(!this.originMotion) {
    this.originMotion = motion;
  }

  var x = this.distance * (this.originMotion - motion[0]);
  var y = this.distance * (this.originMotion - motion[1]);
  this.element.style.transform = "translate("+x+"px,"+y+"px)";
}

var element = document.querySelector(".page-content");
Offset.initialize(element);
