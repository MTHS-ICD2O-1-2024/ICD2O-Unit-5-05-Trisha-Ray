// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: May 2025
// This file contains the JS functions for index.html
"use strict"

function calculate() {

  const lengthA = parseFloat(document.getElementById("sideA").value);
  const lengthB = parseFloat(document.getElementById("sideB").value);
  const lengthC = parseFloat(document.getElementById("sideC").value);

  // using the cosine law
  const angleA =
    Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI);
  const angleB =
    Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI);
  const angleC =
    Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI);

  const sumOfAngles =
    Number(angleA.toFixed(2)) + Number(angleB.toFixed(2)) + Number(angleC.toFixed(2));

  console.log(angleA);
  console.log(angleB);
  console.log(angleC);
  console.log(sumOfAngles);

  // process
  if (sumOfAngles === 180) {
    if ((lengthA === lengthB) && (lengthB === lengthC)) {
      // output
      document.getElementById("results").innerHTML =
        "<p>This is an equilateral triangle.</p>";
    }
    // process
    else if ((lengthA === lengthB )|| (lengthB === lengthC) || (lengthA === lengthC)) {
      // output
      document.getElementById("results").innerHTML =
        "<p>This is an isoceles triangle</p>";
    }
    // process
    else if ((lengthA != lengthB) && (lengthB != lengthC) && (lengthA != lengthC)) {
      // output
      document.getElementById("results").innerHTML =
        "<p>This is an scalene triangle</p>";
    }
  }
  // output
  else {
    document.getElementById("results").innerHTML =
      "<p>This is not a triangle</p>";
  }
}
