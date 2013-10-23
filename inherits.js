Function.prototype.inherits = function(superClass) {
	function Surrogate() {};

	Surrogate.prototype = superClass.prototype;

	this.prototype = new Surrogate();
}

function MovingObject() {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function () {
	console.log("move function");
}

Ship.prototype.shoot = function () {
	console.log("shoot function");
}

var s = new Ship();
var a = new Asteroid();

s.shoot();
s.move();
a.move();
a.shoot;