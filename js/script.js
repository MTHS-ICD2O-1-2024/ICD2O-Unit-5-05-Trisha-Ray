// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html
'use strict'

function calculate() {
  // input
  const movieRating = document.getElementById("movieforage").value

  // process
  if (movieRating >= 17) {
    // output
    document.getElementById("results").innerHTML =
      "You can see R rated movies."
  }

  else if (movieRating >= 13) {
    document.getElementById("results").innerHTML =
      "You can see PG-13 rated movies."
  }

  else if (movieRating >= 5) {
    document.getElementById("results").innerHTML =
      "You can see G and PG rated movies."
  }

  else {
    document.getElementById("results").innerHTML =
      "Uhh, you are to young to see most things."
  }
}