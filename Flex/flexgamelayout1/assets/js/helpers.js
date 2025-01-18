  
  function rectangularCollision({ rectangle, rectangle2 }) {
    //console.log(rectangle.height)
    return (
      rectangle.position.x + rectangle.width >= rectangle2.position.x &&
      rectangle.position.x <= rectangle2.position.x + rectangle2.width &&
      rectangle.position.y + rectangle.height >= rectangle2.position.y &&
      rectangle.position.y <= rectangle2.position.y + rectangle2.height
    );
  }
  