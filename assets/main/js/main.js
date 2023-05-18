let options = {
  startAngle: -1.55,
  size: 250,
  value: 0.75,
  fill: { gradient: ['#00E5E5', '#72A5F2', '#E961FF'] },
  thickness: '10px', 
  lineCap: 'round',
};

$(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue) {

  var roundedValue = Math.round(stepValue * 100); // Round the stepValue to the nearest whole number
  var formattedValue = roundedValue + "%";
  $(this).parent().find("span").text(formattedValue);
});






