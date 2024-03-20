
const jsonData = '[{"name":"Pokeball","Description":"description","thumbnailPath":"content/Pokeball/PokeBall_HD.png","imagePath":"image"},{"name":"Pokeball","Description":"description","thumbnailPath":"content/Pokeball/PokeBall_HD.png","imagePath":"image"},{"name":"Pokeball","Description":"description","thumbnailPath":"content/Pokeball/PokeBall_HD.png","imagePath":"image"},{"name":"Pokeball","Description":"description","thumbnailPath":"content/Pokeball/PokeBall_HD.png","imagePath":"image"}]'
const content = JSON.parse(jsonData);

//Get Modal
const modalLabel = document.getElementById('modalLabel');

//Get Grid
const columA = document.getElementById('gallery-col-1');
const columB = document.getElementById('gallery-col-2');

//Add Images
let first = true;

const keys = new Array(content.length);
const indexes = new Array(content.length);

for (let i = 0; i < content.length; i++) {

    var name = content[i].name;
    var desc = content[i].Description;
    var thumb = content[i].thumbnailPath;
    var desc = content[i].Description;
    var id = 'imageID-' + (i+1);

    keys[i] = id;
    indexes[i] = i;

    //Add To Gallery
    var code = '<div class="mx-auto" style="width: 100%; position: relative;">\
    <a type="button" data-bs-toggle="modal" data-bs-target="#imageModal" id="'+id+'">\
        <img src="' + thumb + '" id="imageresource" alt="' + desc + '" class="gallery-img">\
        <div class="gallery-trans">\
            <div class="gallery-image-overlay"></div>\
            <div class="gallery-caption-block">\
                <p class="gallery-caption prevent-select">' + desc + '</p>\
            </div>\
        </div>\
    </a>\
    </div>'

    if(first){
        columA.innerHTML += code;
        first = false;
    }
    else{
        columB.innerHTML += code;
        first = true;
    }
}

// Set Events
for (let i = 0; i < content.length; i++) {

    document.getElementById(keys[i]).addEventListener('click', function(e){
        modalLabel.innerText = content[indexes[i]].name;
    });
}