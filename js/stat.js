// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;              // px;
  var step = histogramHeight / (max - 0); // px;

  //ctx.fillText('Худшее время: ' + Math.round(max) + 'мс у игрока ' + names[maxIndex], 120, 80);

  var barWidth = 40; // px;
  var indent = 90;    // px;
  var initialX = 140; // px;
  var initialY = 250;  // px;
  var lineWidth = 15;// px;
  var lineShift =  10;

  var setColor = function(item) {
    if ((names[item]) == 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(2, 14, 134, ' + Math.random() + ')';
    }
  }

  for(var j = 0; j < times.length; j++) {
    ctx.fillStyle = setColor(j);
    ctx.fillRect(initialX + indent * j, initialY, barWidth, -(times[j] * step));
    ctx.fillStyle = 'rgba(0,0,0, .8)';
    ctx.fillText(Math.round(times[j]), initialX + indent * j, initialY - (times[j] * step + lineShift));
    ctx.fillText(names[j], initialX + indent * j, initialY + lineWidth);
  }
};
