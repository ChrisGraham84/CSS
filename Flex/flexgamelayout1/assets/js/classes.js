//Classes
class Sprite {
    constructor({ position, velocity, dimensions, color }) {
      this.position = position;
      this.velocity = velocity;
      this.color = color
        this.height = dimensions.height;
        this.width = dimensions.width;
        this.alive = true;
      this.hp = 3;
    }
     
    draw() {
       
       if(this.alive){
        c.beginPath();
        c.rect(this.position.x, this.position.y , this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
       } 
    }
  
    update() {
      if(this.alive){
        this.draw();
  
        this.position.x += this.velocity.x;
         this.position.y += this.velocity.y;
      //   // console.log(this.position);
        
        ///borders
        if (this.position.y < 10) {
          //console.log("top bounds");
          this.position.y = 15;
        } else if (this.position.x < 10) {
          this.position.x = 15;
        } else if (this.position.y + this.height > canvas.height - 10) {
          this.position.y = canvas.height - this.height - 15;
        } else if (this.position.x + this.width > canvas.width - 10) {
          this.position.x = canvas.width - this.width - 15;
        }
      }
      else{
        this.position = {x: -100, y: -100};
      }
      
    }
  }