import { randomNumber } from "./utils.js";
import { OPERATIONS, INTERVAL, MAX_SECOND, MIN_SECOND, MAX_COUNT } from "./constants.js";
// DOM VARIABLES
const gameZone = document.querySelector(".game-zone");
const resultZone = document.querySelector(".result-zone");
const orderNumberElm = document.querySelector(".order");
const timer = document.querySelector(".timer");
const number1Elm = document.getElementById("number_1");
const number2Elm = document.getElementById("number_2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".quiz_answers");
const pointsContent = document.querySelector(".points");
const showAnswersBtn = document.querySelector(".show-answers-btn");
const gmg_utsh = document.querySelector(".gmg_utsh");
