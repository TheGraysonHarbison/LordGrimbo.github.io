

//Dictionary
//["Title", "pathToImage", "label", "hasBehance", "behanceLink"]
var dict = {
    pancakeFactory: {title : "Pancake Factory", imgPath : "content\\Pancake\\PancakeHD.gif", imgLabel : "A Gif showing Factory That Makes Pancakes.", hasBehance : true, behanceLink : "https://www.behance.net/gallery/193822483/Pancake-Factory"},
    pokeball: {title : "Ancient Pokeball", imgPath : "content\\Pokeball\\PokeBall_HD.png", imgLabel : "An image of an Ancient Pokeball.", hasBehance : true, behanceLink : "https://www.behance.net/gallery/193821073/Ancient-Pokeball"},
    snowmen: {title : "Claymation Snowman", imgPath : "content\\Snowman\\SnowmanHD.gif", imgLabel : "A Gif showing two clay snowmen.", hasBehance : true, behanceLink : "https://www.behance.net/gallery/192274157/Snowy-Night"},
};


//Update Modal Function
function updateModal(key){
    //Check For Spelling
    if (!key in dict || dict[key] == undefined)
    {
        console.log(key + " Does Not Exist.");
        return;
    }
    // Variables
    let modalTitle = document.getElementById("imageModalLabel");
    let modalContent = document.getElementById("imageModalContent");;
    let modalBehanceButton = document.getElementById("modalBhBtn");;

    //Set Title
    modalTitle.innerText = dict[key]['title'];

    //Set Content
    modalContent.src = dict[key]['imgPath'];
    modalContent.alt = dict[key]['imgLabel'];

    //Set Button
    if(dict[key]['hasBehance'] == true){
        modalBehanceButton.classList = ["plain-btn bhModalBtn"];
        modalBehanceButton.href = dict[key]['behanceLink'];
        modalBehanceButton.target = "_blank";
        modalBehanceButton.tabIndex = 0;
        modalBehanceButton.ariaDisabled = false;
        modalBehanceButton.title = "Go To Behance Page.";
        modalBehanceButton.style = "pointer-events:auto";
        modalBehanceButton.innerHTML = '<i class="bi bi-behance"></i> See On Behance';
    }
    else{
        modalBehanceButton.classList = ["plain-btn bhModalBtn-disabled"];
        modalBehanceButton.tabIndex = -1;
        modalBehanceButton.href="#";
        modalBehanceButton.ariaDisabled = true;
        modalBehanceButton.title = "";
        modalBehanceButton.style = "pointer-events:none";
        modalBehanceButton.textContent = "Disabled"
    }
}