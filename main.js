let plantArray = [];
let selectedType = "";

// define a constructor to create note objects
let NoteObject = function (pData, pPlant, pType) {
    this.data = pData;
    this.plant = pPlant;
    this.type = pType;
}



document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        plantArray.push(new NoteObject(document.getElementById("note").value, document.getElementById("plant").value, selectedType));
        console.log(plantArray);
        document.getElementById("note").value = "";
        document.getElementById("plant").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });


    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function (event) {
        createList();
    });
});



function createList() {

    // clear prior data

    var myul = document.getElementById("myList");
    myul.innerHTML = '';

    // movieArray.forEach(function (element,) {   // use handy array forEach method
    //     var li = document.createElement('li');
    //     li.innerHTML = element.data + " - " + element.plant + ". Genre: "+ element.type;
    //     myul.appendChild(li);
    // });

    plantArray.forEach(function(element, i) {
        var myLi = document.createElement("li");
        myLi.classList.add('onePlant');
        myLi.innerHTML = plantArray[i].ID + ": " + element.data + " " + element.type + " counter: " + i;

        myLi.setAttribute("data-parm", element.ID);

        myul.appendChild(myLi);
    });

    var liList = document.getElementsByClassName("onePlant");
    let newPlantArray = Array.from(liList);
    newPlantArray.forEach(function (element, i) {
        element.addEventListener('click', function() {
            var parm = this.getAttribute("data-parm");
            localStorage.setItem('parm', parm);
            document.location.href = "index.html#details";
        })
    })







};
