
function missile() {
  this.velocity = -5;
  this.missileArr = [];
  this.posX;
  this.posY;

  this.spawnMissile = function() {
    this.missile = document.createElement('div');
    this.missile.className = "missile";
    document.getElementById("background").appendChild(this.missile);
    this.missileArr.push(this.missile);
  }

  this.position = function(x) {
    // for (var i = 0; i < this.missileArr.length; i++) {
      this.missile.style.top = this.posY -20+ 'px' ;
      this.missile.style.left = this.posX + 20+ 'px';
  };
  this.fire = function() {
    // for (var i = 0; i < this.missileArr.length; i++) {
      this.posY += this.velocity;
      if(this.posY <= 0) {
            // this.missileArr.splice(i, 1);
            $('.missile').remove();
            // console.log(this.missileArr);
    };
  };
};
