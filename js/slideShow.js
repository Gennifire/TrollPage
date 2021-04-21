
/* slide show 1*/
var slideIndex = 1; //sets first picture
showDivs(slideIndex); //calls function to set first image

function plusDivs(n) { //on button click call fuction
  showDivs(slideIndex += n); //adds or subtracts to slide index
}

function showDivs(n) { 
  var i;
  var slide = document.getElementsByClassName("slideImg");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  //sets all elements with class name to display none
  }
  slide[slideIndex-1].style.display = "block";  //sets element to display block
}

/*  slide show 2: auto slides */

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}




/*  generated image table */

function GenerateTable() {
        //Build an array containing of trolls.
		// .push adds on or more elements then returns the new length
        var trollRNd = new Array();
        trollRNd.push(["", "Source", "Photo"]);
        trollRNd.push([1, "War Hammer", "../../images/Trolls/bifnBarn.jpg"]);
        trollRNd.push([2, "Troll Doll", "../../images/Trolls/plantTroll.jpg"]);
        trollRNd.push([3, "DOTA", "../../images/Trolls/dotaTroll.jpg"]);
        trollRNd.push([4, "Rainbow Troll", "../../images/Trolls/stoneTroll.jpg"]);
 
        //Creates a Table element
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns using number of data items in array
        var columnCount = trollRNd[0].length;
 
        //Add the header row - matches the number of columns
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = trollRNd[0][i];
            row.appendChild(headerCell); //append adds new header cell if needed
        }
 
        //Add the data rows: one added for each item in array.
        for (var i = 1; i < trollRNd.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                if (j < 2) {
                    cell.innerHTML = trollRNd[i][j];
                } else {
                    var img = document.createElement("IMG");
                    img.src = trollRNd[i][j];
                    cell.appendChild(img); 
                }
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }