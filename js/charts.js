Reveal.addEventListener('slidechanged', function( event ) {
  if (event.currentSlide.getAttribute('id') === stats) {

  }
});


AmCharts.makeChart("visually-impaired", {
   type: "serial",
   theme: "dark",
   dataProvider: [{
       "group": 'visually impaired',
       "count": 23.7
   }, {
       "group": 'us population',
       "count": 320.9
   }],
   categoryField: "group",
   startDuration: 1,
   categoryAxis: {
       gridPosition: "start"
   },
   valueAxes: [{
       position: "top",
       title: "Million USD",
       minorGridEnabled: true
   }],
   graphs: [{
       type: "column",
       title: "count",
       valueField: "count",
       fillAlphas:1,
       balloonText: "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>"
   }],
   legend: {
       useGraphSettings: true
   },
   creditsPosition:"top-right"

});
