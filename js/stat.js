// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000'; // black;
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 150;              // px;
  var step = histogramWidth / (max - 0); // px;

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);

  var barHeigth = 20; // px;
  var indent = 40;    // px;
  var initialX = 120; // px;
  var initialY = 80;  // px;
  var lineHeight = 15;// px;

  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeigth);
    ctx.fillText(names[i], initialX + histogramWidth, initialY + lineHeight + indent * i);
  }
};
