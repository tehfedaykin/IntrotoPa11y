Reveal.addEventListener('slidechanged', function( event ) {
  console.log(event.currentSlide.getAttribute('id'));
  if (event.currentSlide.getAttribute('id') === 'visually-impaired') {
    console.log('MAKE MY CHARTS');
    AmCharts.makeChart("visually-impaired-chart", {
       type: "serial",
       theme: "dark",
       dataProvider: [
         {
             "group": 'whole population',
             "count": 320.9
         },
         {
             "group": 'visually impaired',
             "count": 23.7
         }
      ],
       categoryField: "group",
       startDuration: 1,
       categoryAxis: {
           gridPosition: "start"
       },
       valueAxes: [{
           position: "top",
           title: "Million Americans",
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
       creditsPosition:"bottom-right"
    });
  }
  if (event.currentSlide.getAttribute('id') === 'hearing-impaired') {
    AmCharts.makeChart("hearing-impaired-chart", {
       type: "serial",
       theme: "dark",
       dataProvider: [
         {
             "group": 'whole population',
             "count": 320.9
         },
         {
             "group": 'hearing impaired',
             "count": 22.9
         }
      ],
       categoryField: "group",
       startDuration: 1,
       categoryAxis: {
           gridPosition: "start"
       },
       valueAxes: [{
           position: "top",
           title: "Million Americans",
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
       creditsPosition:"bottom-right"
    });
  }
  if (event.currentSlide.getAttribute('id') === 'physically-impaired') {
    AmCharts.makeChart("physically-impaired-chart", {
       type: "serial",
       theme: "dark",
       dataProvider: [
         {
             "group": 'whole population',
             "count": 320.9
         },
         {
             "group": 'physically impaired',
             "count": 39.6
         }
       ],
       categoryField: "group",
       startDuration: 1,
       categoryAxis: {
           gridPosition: "start"
       },
       valueAxes: [{
           position: "top",
           title: "Million Americans",
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
       creditsPosition:"bottom-right"
    });
  }
  if (event.currentSlide.getAttribute('id') === 'compare-disabilities') {
    AmCharts.makeChart("compare-disabilities-chart", {
      "type": "serial",
    	"theme": "dark",
        "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
    		"useGraphSettings": true,
    		"markerSize": 10
        },
        "dataProvider": [
          {
              "count": "Americans",
              "general population": 320.9
          },
          {
            "count": "Americans",
            "physical": 39.6,
            "vision": 23.7,
            "hearing": 22.9
          }
        ],
        "valueAxes": [{
            "stackType": "regular",
            "axisAlpha": 0.3,
            "gridAlpha": 0
        }],
        "graphs": [{
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Hearing Impaired",
            "type": "column",
    		    "color": "#000000",
            "valueField": "hearing"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Visually Impaired",
            "type": "column",
    		    "color": "#000000",
            "valueField": "vision"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Physically Impaired",
            "type": "column",
    		    "color": "#000000",
            "valueField": "physical"
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Whole Population",
            "type": "column",
    		    "color": "#000000",
            "valueField": "general population"
        }],
        "categoryField": "count",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        },
        "startDuration": 1,
        "export": {
        	"enabled": true
         }

    });
  }
});
