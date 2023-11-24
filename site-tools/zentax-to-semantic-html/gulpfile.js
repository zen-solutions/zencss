/*
  * zenCSS Beta v2.0.0 (https://zencss.com/)
  * Copyright 2023-2023 Shaun Mackey
  * Licensed under MIT (https://github.com/shaunmackey/zencss/blob/main/LICENSE)
  */
 
const gulp = require('gulp');
const dom  = require('gulp-dom');

function convertZentax() {
  return gulp.src('convert-zentax/**/*.html')
    .pipe(dom(function(){
      // this function will be called for each file in the stream
      const document = this;

      ['z-container', 'z-row', 'z-col'].forEach(tagName => {
        const elements = Array.from(document.querySelectorAll(tagName));
        elements.forEach(element => {
          let newElement;
          switch(tagName) {
            case 'z-container':
              newElement = document.createElement('section');
              newElement.className = 'z-container';
              break;
            case 'z-row':
              newElement = document.createElement('div');
              newElement.className = 'z-row';
              break;
            case 'z-col':
              newElement = document.createElement('div');
              newElement.className = 'z-col';
              break;
          }
          // Preserve existing classes
          if(element.className) {
            newElement.className += ' ' + element.className;
          }
          // Copy all attributes
          for(let i = 0; i < element.attributes.length; i++) {
            const attr = element.attributes[i];
            if(attr.name !== 'class') {
              newElement.setAttribute(attr.name, attr.value);
            }
          }
          // Copy content
          newElement.innerHTML = element.innerHTML;
          // Replace old element with new element
          element.parentNode.replaceChild(newElement, element);
        });
      });

      return document;
    }))
    .pipe(gulp.dest('output'));
}

function watchFiles() {
  gulp.watch('convert-zentax/**/*.html', convertZentax);
}

gulp.task('default', gulp.series(convertZentax, watchFiles));
