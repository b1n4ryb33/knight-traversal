/**
 * Global CSS imports
 */
import "./reset.css";
import "./main.css";

/**
 * Font Awesome
 */
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { knight } from "./knight-component/knight";

let knighty = knight();
// knighty.printBoard();

// console.log(knighty.calculateNextMoves([3,3]));
// console.log(knighty.calculateNextMoves([1,1]));

let moves = knighty.move([0,0], [7,7]);

console.dir(moves);