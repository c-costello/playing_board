//create a grid based on gridsize (based on user input)
function createTable(gridsize) {
    //anchor to html
    var gridEl = document.getElementById('playing-board');

    //create table, table body head and foot
    var tblEl = document.createElement('table');
    var theadEL = document.createElement('thead');
    var tbodyEl = document.createElement('tbody');
    var tfootEl = document.createElement('tfoot');

    //append table to html, and table body head and foot to table
    gridEl.appendChild(tblEL);
    tblEl.appendChild(theadEl);
    tblEl.appendChild(tbodyEl);
    tblEl.appendChild(tfootEl);

    //create table rows and columns, based on gridsize input
    function createRows() {
        // create for loop to make rows
        for (var i = 0; i < gridsize; i++){
            var trEl = document.createElement('tr');
            //append rows to body
            tbodyEl.appendChild(trEl);
            //create a loop to populate rows
            for (var j = 0; j < gridsize; i++){
                var tdEl = document.createElement('td');
                //append cells to rows
                trEl.appendChild(tdEl);
            }
        }
    }
    createRows();

}