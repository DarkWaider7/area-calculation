"use strict";
//Triangle---
const aSideTriangle = document.querySelector(".a-triangle");
const bSideTriangle = document.querySelector(".b-triangle");
const cSideTriangle = document.querySelector(".c-triangle");
//
const triangle = document.querySelector(".triangle");
const triangleActive = document.querySelector(".triangle-active");
const triangleValue = document.querySelector(".triangle-value");
//---
//Rectangle---
const rectangle = document.querySelector(".rectangle");
const rectangleActive = document.querySelector(".rectangle-active");
const rectangleValue = document.querySelector(".rectangle-value");
const aSideRectangle = document.querySelector(".a-rectangle");
const bSideRectangle = document.querySelector(".b-rectangle");
//
////Rhombus---
const rhombus = document.querySelector(".rhombus");
const rhombusActive = document.querySelector(".rhombus-active");
const rhombusValue = document.querySelector(".rhombus-value");
const aSideRhombus = document.querySelector(".a-rhombus");
const bSideRhombus = document.querySelector(".b-rhombus");

const search = document.querySelector(".search");
const active = {
  triangle: false,
  rectangle: false,
  rhombus: false,
};

triangleActive.onclick = () => {
  active.triangle = true;
  if (active.triangle) {
    console.log("work triangle");
    triangle.style.display = "block";
    rectangle.style.display = "none";
    rhombus.style.display = "none";
    search.style.display = "block";
    active.triangle = false;
  }
};

rectangleActive.onclick = () => {
  active.rectangle = true;
  if (active.rectangle) {
    console.log("work rectangle");
    rectangle.style.display = "block";
    triangle.style.display = "none";
    rhombus.style.display = "none";
    search.style.display = "block";
    active.rectangle = false;
  }
};

rhombusActive.onclick = () => {
  active.rhombus = true;
  if (active.rhombus) {
    console.log("work rhombus");
    rhombus.style.display = "block";
    triangle.style.display = "none";
    rectangle.style.display = "none";
    search.style.display = "block";
    active.rhombus = false;
  }
};

const sidesTriangle = {
  a: 0,
  b: 0,
  c: 0,
};

const sidesRectangle = {
  a: 0,
  b: 0,
};

const sidesRombus = {
  a: 0,
  b: 0,
};

aSideTriangle.oninput = function () {
  sidesTriangle.a = Number(aSideTriangle.value);
  console.log(sidesTriangle, "---sidesTriangle");
};
bSideTriangle.oninput = function () {
  sidesTriangle.b = Number(bSideTriangle.value);
  console.log(sidesTriangle, "---sidesTriangle");
};
cSideTriangle.oninput = function () {
  sidesTriangle.c = Number(cSideTriangle.value);
  console.log(sidesTriangle, "---sidesTriangle");
};
//---

aSideRectangle.oninput = function () {
  sidesRectangle.a = Number(aSideRectangle.value);
  console.log(sidesRectangle, "---sidesRectagle");
};
bSideRectangle.oninput = function () {
  sidesRectangle.b = Number(bSideRectangle.value);
  console.log(sidesRectangle, "---sidesRectagle");
};

aSideRhombus.oninput = function () {
  sidesRombus.a = Number(aSideRhombus.value);
  console.log(sidesRombus, "---sidesRectagle");
};
bSideRhombus.oninput = function () {
  sidesRombus.b = Number(bSideRhombus.value);
  console.log(sidesRombus, "---sidesRectagle");
};

//---
search.onclick = () => {
  if (getComputedStyle(triangle).getPropertyValue("display") === "block") {
    setTimeout(() => {
      let p = (sidesTriangle.a + sidesTriangle.b + sidesTriangle.c) / 2;
      console.log(p, "work");
      const root =
        p *
        (p - sidesTriangle.a) *
        (p - sidesTriangle.b) *
        (p - sidesTriangle.c);
      triangleValue.innerHTML = Math.sqrt(root);
    });
  }

  if (getComputedStyle(rectangle).getPropertyValue("display") === "block") {
    setTimeout(() => {
      let p = sidesRectangle.a * sidesRectangle.b;

      console.log(p, "work");

      rectangleValue.innerHTML = p;
    });
  }

  if (getComputedStyle(rhombus).getPropertyValue("display") === "block") {
    setTimeout(() => {
      let p = (sidesRombus.a * sidesRombus.b) / 2;

      console.log(p, "work- rhombus");

      rhombusValue.innerHTML = p;
    });
  }
};
