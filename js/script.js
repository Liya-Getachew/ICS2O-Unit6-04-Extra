// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 19 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-Extra/sw.js", {
    scope: "/ICS2O-Unit6-04-Extra/",
  })
}

/**
 * This function checks for eligibility.
 */
window.onload = function () {
  const params = new URLSearchParams(document.location.search)

  // input
  const age = params.get("a")
  console.log(age)

  if (age < 19 || age > 80) {
    document.getElementById("eligibility").innerHTML =
      "Age: " + age + "<br>You are: ELIGIBLE!!!!"
  } else {
    document.getElementById("eligibility").innerHTML =
      "Age: " + age + "<br>You are: NOT eligible."
  }
}
