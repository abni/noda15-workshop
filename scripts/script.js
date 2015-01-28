'use strict';

// We will load data through JSONP and this callback function
function loadData(googleSpreadSheetData) {
    var data = parse(googleSpreadSheetData);
}

// This function parses data from a google spreadsheet
// @RF Gist: https://gist.github.com/avector/19d4594a0430205613fb
function parse(response) {
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