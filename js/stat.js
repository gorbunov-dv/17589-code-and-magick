'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidht = 150;
  var step = histogramWidht / (max - 0);

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);

  ctx.fillRect(120, 80, times[0] * step, 20);
  ctx.fillRect(120, 110, times[1] * step, 20);
  ctx.fillRect(120, 140, times[2] * step, 20);
};
