const coctel = require("../images/coctel.jpg");
const harry = require("../images/mago.jpg");
const number = require("../images/guessnumber.jpg");
const awesome = require("../images/card.PNG");
const juego = require("../images/juego.jpg");
const simon = require("../images/simon.png")



function getSrc(nameImage) {
  switch (nameImage) {
    case "coctel": {
      return coctel;
    }
    case "harry":
      return harry;

    case "number":
      return number;

    case "awesome":
      return awesome;

    case "juego":
      return juego;  

    case "simon":
      return simon; 

    
    default:
      break;
  }
}
export default getSrc;