/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2022-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */

//--------------------------------------------------------
// Bg-blur and opacity overrides
//--------------------------------------------------------

const elements = document.querySelectorAll(
  '[class*="bg-opaque"], [class*="bg-blur"]'
);
elements.forEach((element) => {
  const descendants = element.querySelectorAll("*");
  descendants.forEach((descendant) => {
      descendant.style.opacity = "100%";
  });
});
