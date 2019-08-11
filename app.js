let rover = {
  direction: "N",
  x: 0,
  y: 0,
  path: [{x:1,y:1}] 
};


function turnLeft(rover){
  console.log('turnLeft was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'W'; break
    case 'W': rover.direction = 'S'; break
    case 'S': rover.direction = 'E'; break
    case 'E': rover.direction = 'N'; break
    default: break
  }
  console.log(`Rover Direction: ${rover.direction}`)
}


function turnRight(rover){
    console.log('turnRight was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'E'; break
    case 'W': rover.direction = 'N'; break
    case 'S': rover.direction = 'W'; break
    case 'E': rover.direction = 'S'; break
    default: break
  }
  console.log(`Your Direction: ${rover.direction}`)
}


function moveForward (rover) {
  console.log('moveForward was called')
  switch (rover.direction) {
    case "N": rover.y = rover.y+1; break;
    case "W": rover.x = rover.x-1; break;
    case "S": rover.y = rover.y-1; break;
    case "E": rover.x = rover.x+1; break;
    default: break;
  }
  console.log(`You are now located at position: x=${rover.x}, y=${rover.y}`);
}

function moveBackward (rover) {
  console.log('moveBackward was called')
  switch (rover.direction) {
    case "N": rover.y = rover.y-1; break;
    case "W": rover.x = rover.x+1; break;
    case "S": rover.y = rover.y+1; break;
    case "E": rover.x = rover.x-1; break;
    default: break;
  }
  console.log(`You are now located at position: x=${rover.x}, y=${rover.y}`);
}

function placeHorizontal(theRover, command){
  if(theRover.x >= 0 && theRover.x < 10){
    if(command === "l"){
    theRover.x--;
    }
    else{
    theRover.x++;
    }
  
  console.log(`The rover has position: x=${theRover.x}, y=${theRover.y}`);
  let newPosition = {x: theRover.x, y: theRover.y};
      theRover.path.push(newPosition);
  }
  else{  
  console.log("You can't place the rover outside of the board!");
}
}

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  path: [{x:1,y:1}] 
};


function turnLeft(rover){
  console.log('turnLeft was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'W'; break
    case 'W': rover.direction = 'S'; break
    case 'S': rover.direction = 'E'; break
    case 'E': rover.direction = 'N'; break
    default: break
  }
  console.log(`Rover Direction: ${rover.direction}`)
}


function turnRight(rover){
    console.log('turnRight was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'E'; break
    case 'W': rover.direction = 'N'; break
    case 'S': rover.direction = 'W'; break
    case 'E': rover.direction = 'S'; break
    default: break
  }
  console.log(`Your Direction: ${rover.direction}`)
}


function moveForward (rover) {
  console.log('moveForward was called')
  switch (rover.direction) {
    case "N": rover.y = rover.y+1; break;
    case "W": rover.x = rover.x-1; break;
    case "S": rover.y = rover.y-1; break;
    case "E": rover.x = rover.x+1; break;
    default: break;
  }
  console.log(`You are now located at position: x=${rover.x}, y=${rover.y}`);
}

function moveBackward (rover) {
  console.log('moveBackward was called')
  switch (rover.direction) {
    case "N": rover.y = rover.y-1; break;
    case "W": rover.x = rover.x+1; break;
    case "S": rover.y = rover.y+1; break;
    case "E": rover.x = rover.x-1; break;
    default: break;
  }
  console.log(`You are now located at position: x=${rover.x}, y=${rover.y}`);
}

function placeHorizontal(theRover, command){
  if(theRover.x >= 0 && theRover.x < 10){
    if(command === "l"){
    theRover.x--;
    }
    else{
    theRover.x++;
    }
  
  console.log(`The rover has position: x=${theRover.x}, y=${theRover.y}`);
  let newPosition = {x: theRover.x, y: theRover.y};
      theRover.path.push(newPosition);
  }
  else{  
  console.log("You can't place the rover outside of the board!");
}
}

function placeVertical(theRover, command){ 
  if(theRover.y >= 0 && theRover.y < 10 ){
    if(command === "u"){
      theRover.y++;
    } else {
      theRover.y--;
    }

    console.log(`Rover has position: x=${theRover.x}, y=${theRover.y}`);

    let newPosition = {x: theRover.x, y: theRover.y};

    theRover.path.push(newPosition); 
  } else {
    console.log("Youuuuu can't place player outside of the board!");
  }
} 

function command(theRover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l": // left
        placeHorizontal(theRover, order);
        break;
      case "r": // right
        placeHorizontal(theRover, order);
        break;  
      case "u": // up
        placeVertical(theRover, order);
        break; 
      case "d": // down
        placeVertical(theRover, order);
        break;
    }
  }
  console.log(theRover.path);
}

command(rover, "lurrd");



for(let i=0; i< rover.path.length; i++){
  console.log(`Path ${i} ==> x=${rover.path[i].x}, y=${rover.path[i].y}`)
}

