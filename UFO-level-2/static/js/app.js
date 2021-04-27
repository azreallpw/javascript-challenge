var ufoData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form");


button.on("click", runEvent);
form.on("submit", runEvent);

function createTable(filteredData){
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    tbody.html("");

    
    filteredData.forEach(function(dataObject){
        trow = tbody.append("tr");
        trow.append("td").text(dataObject.datetime);
        trow.append("td").text(dataObject.city);
        trow.append("td").text(dataObject.state);
        trow.append("td").text(dataObject.country);
        trow.append("td").text(dataObject.shape);
        trow.append("td").text(dataObject.durationMinutes);
        trow.append("td").text(dataObject.comments);

    });

};

div class="dropdown"
    button onclick="runEvent()" class="dropbtn"
    div id="ufoDrop" class="dropdown-content"
        href="#"
        href="#"
        href="#"

function runEvent(){

    var inputEle = d3.select("#datetime");
    var inputData = inputEle.property("value");

        if (inputData == "") {inputData = ufoData[0].datetime;}

    var timeData = ufoData.filter(sighting => sighting.datetime === inputData);

    createTable(timeData);
};
runEvent();

function runEvent(){

    var inputEle = d3.select("#city");
    var inputData = inputEle.property("value");

        if (inputData == "") {inputData = ufoData[0].city;}

    var cityData = ufoData.filter(sighting => sighting.city === inputData);

    createTable(cityData);
};
runEvent();
// if (inputData == "") {inputData = ufoData[1].city;}
// if (inputData == "") {inputData = ufoData[2].state;}
// if (inputData == "") {inputData = ufoData[3].country;}
// if (inputData == "") {inputData = ufoData[4].shape;}

// var cityData = ufoData.filter(sighting => sighting.city === inputData);
// var stateData = ufoData.filter(sighting => sighting.state === inputData);
// var countryData = ufoData.filter(sighting => sighting.country === inputData);
// var shapeData = ufoData.filter(sighting => sighting.shape === inputData);

// createTable(cityData);
// createTable(stateData);
// createTable(countryData);
// createTable(shapeData);