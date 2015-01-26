'use strict';

// We will load data with JSONP
function loadData(googleSpreadSheetData) {
    var data = parse(googleSpreadSheetData);

    createD3Chart(data);
    // createC3Chart(data);
}

function createD3Chart(data) {
    var x = d3.scale.linear()
        .domain([0, d3.max(data, function(d){ return +d.value; })]) // input data, data space
        .range([0, window.innerWidth - 20]) // output data, space

    d3.select('#chart')
        .selectAll('div')
        .data(data.sort(function(a,b) { return b.value - a.value; } ))
        .enter().append('div')
        .style('width', function(d){ return x(d.value) + 'px'})
        .text(function(d) { return d.name + ' - ' + d.value})
        .attr('class', function(d){ return d.party.toLowerCase() });
}

function createC3Chart(data) {
    var chart = c3.generate({
        bindto: '#c3chart',
        color: {
            pattern: ['#990000', '#CCCCCC']
        },
        legend: {
            position: 'right'
        },
        data: {
            json: data,
            keys: {
                x: 'club',
                value: ['goals', 'matches']
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        }
    });
}

// This script parses the data from the google spreadsheet
// @RF Gist: https://gist.github.com/avector/19d4594a0430205613fb
function parse(response){
    var i,
    row,
    newRow,
    newRows,
    dollarIndex;

    newRows = [];

    if ((response && response.feed) && response.feed.entry) {
        for (i = 0; i < response.feed.entry.length; i++) {
            row = response.feed.entry[i];
            newRow = {};
            var key;
            for (key in row) {
                if (row.hasOwnProperty(key)) {
                    dollarIndex = key.indexOf('$');
                    if (dollarIndex !== -1) {
                        newRow[key.substring(dollarIndex+1)] = row[key].$t;
                    }
                }
            }
            newRows.push(newRow);
        }
    }

    return newRows;
}