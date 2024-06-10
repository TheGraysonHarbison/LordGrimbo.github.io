

//Dictionary
//["Title", "content", "externalType", "externalLink"]
var dict = {
    pancakeFactory: {
            title : "Pancake Factory", 
            content : [
                {path : "content\\Pancake\\PancakeHD.gif", label : "A Gif showing Factory That Makes Pancakes."}, 
            ], 
            externalType : "Behance", 
            externalLink : "https://www.behance.net/gallery/193822483/Pancake-Factory"
        },
    pokeball: {
            title : "Ancient Pokeball",
            content : [
                {path : "content\\Pokeball\\PokeBall_HD.png", label : "An image of an Ancient Pokeball."}, 
            ], 
            externalType : "Behance", 
            externalLink : "https://www.behance.net/gallery/193821073/Ancient-Pokeball"
        },
    snowmen: {
            title : "Claymation Snowman", 
            content : [
                {path : "content\\Snowman\\SnowmanHD.gif", label : "A Gif showing two clay snowmen."},
            ],
            externalType : "Behance", 
            externalLink : "https://www.behance.net/gallery/192274157/Snowy-Night"
        },
    voxelGame: {
            title : "Voxel Game Demo", 
            content : [
                {path : "content\\VoxelGame\\Banner.jpeg", label : "The Thumbnail For The Demo."},
                {path : "content\\VoxelGame\\Screenshot (1).png", label : "Demo Screenshot A."},
                {path : "content\\VoxelGame\\Screenshot (3).png", label : "Demo Screenshot B."},
                {path : "content\\VoxelGame\\Screenshot (4).png", label : "Demo Screenshot C."},
            ],
            externalType : "Itch", 
            externalLink : "https://graysonharbison.itch.io/voxel-demo"
        },
    pickle: {
            title : "Pickle Jesus", 
            content : [
                {path : "content\\PickleJesus\\PickleJesus-HD.png", label : "An Image of Jesus Christ, But as a Pickle."},
                {path : "content\\PickleJesus\\PickleJesus_Non-Render-HD.png", label : "Behind the Scenes of Pickle Jesus."},
                {path : "content\\PickleJesus\\PickleJesus-Photoshoot-HD.png", label : "Pickle Jesus Photoshoot Still."},
            ],
            externalType : "Behance", 
            externalLink : "https://www.behance.net/gallery/200678283/Pickle-Jesus"
        },
};


//Update Modal Function
function updateModal(key){
    //Check For Key
    if (!key in dict || dict[key] == undefined)
    {
        console.log(key + " Does Not Exist.");
        return;
    }

    // Get Modal Components
    let modalTitle = document.getElementById("imageModalLabel");
    //let modalContent = document.getElementById("imageModalContent");
    let modalBehanceButton = document.getElementById("modalBhBtn");

    let modalCarousel = document.getElementById("carouselIndicators");
    let modalCarouselIndecators = document.getElementById("carouselTabs");
    let modalCarouselContent = document.getElementById("carouselContent");
    let modalCarouselButtons = document.getElementById("carouselButtons");

    //Set Title
    modalTitle.innerText = dict[key]['title'];

    //Set Content
    var contentArray = dict[key]['content'];

    //Single Image
    if (contentArray.length == 1)
    {
        //Setup
        modalCarouselIndecators.innerHTML = "";
        modalCarouselIndecators.style.display = "none";

        modalCarouselContent.innerHTML = "";

        modalCarouselButtons.style.display = "none";

        // Create And Fill Container
        var imageContainer = document.createElement("div");
        imageContainer.classList = ['carousel-item active'];
        
        var image = document.createElement("img");
        image.src = contentArray[0]["path"];
        image.classList = ['modal-img prevent-select'];
        image.role = "img";
        image.alt = contentArray[0]["label"];
        image.id = "carouselImage-1";

        imageContainer.appendChild(image);

        //Add To Carousel
        modalCarouselContent.appendChild(imageContainer);

        //Event
    }
    else //Full Carousel
    {
        //Setup
        modalCarouselIndecators.innerHTML = "";
        modalCarouselIndecators.style.display = "";

        modalCarouselContent.innerHTML = "";

        modalCarouselButtons.style.display = "";

        //Loop And Add Elements
        var heightTarget = 0;

        for (let i = 0; i < contentArray.length; i++) {
            
            //Add Indecator
            var inButton = document.createElement("button");
            inButton.type = "button";
            inButton.dataset.bsTarget = "#carouselIndicators";
            inButton.dataset.bsSlideTo = i;
            inButton.label = "Slide " + (i + 1);

            if (i == 0){
                inButton.classList = ['active carousel-tab'];
                inButton.ariaCurrent = true;
            }
            else{
                inButton.classList = ['carousel-tab'];
            }


            modalCarouselIndecators.append(inButton);

            // Create And Fill Container
            var imageContainer = document.createElement("div");
            imageContainer.id = "carouselContainer-" + i;

            if(i==0)
                { imageContainer.classList = ['carousel-item active']; }
            else
                { imageContainer.classList = ['carousel-item']; }
            
            var image = document.createElement("img");
            image.src = contentArray[i]["path"];
            image.role = "img";
            image.classList = ['modal-img prevent-select'];
            image.alt = contentArray[i]["label"];
            image.id = "carouselImage-" + i;

            imageContainer.appendChild(image);

            //Add To Carousel
            modalCarouselContent.appendChild(imageContainer);
        }
    }
    

    //Set External Button Type
    if(dict[key]['externalType'] == "Behance") // Behance
    {
        //Style
        modalBehanceButton.classList = ["plain-btn bhModalBtn"];
        modalBehanceButton.title = "Go To Behance Page.";
        modalBehanceButton.innerHTML = '<i class="bi bi-behance"></i> See On <strong>Behance</strong>';

        //Logic
        modalBehanceButton.href = dict[key]['externalLink'];
        modalBehanceButton.target = "_blank";
        modalBehanceButton.tabIndex = 0;
        modalBehanceButton.ariaDisabled = false;
        modalBehanceButton.style = "pointer-events:auto";
    }
    else if(dict[key]['externalType'] == "Itch") // Itch
    {
        //Style
        modalBehanceButton.classList = ["plain-btn itchModalBtn"];
        modalBehanceButton.title = "Go To Itch Download Page.";
        modalBehanceButton.innerHTML = 'See On <strong>Itch</strong>';

        //Logic
        modalBehanceButton.href = dict[key]['externalLink'];
        modalBehanceButton.target = "_blank";
        modalBehanceButton.tabIndex = 0;
        modalBehanceButton.ariaDisabled = false;
        modalBehanceButton.style = "pointer-events:auto";
    }
    else //None
    {
        //Style
        modalBehanceButton.classList = ["plain-btn bhModalBtn-disabled"];
        modalBehanceButton.title = "";
        modalBehanceButton.innerHTML = "<strong>Disabled</strong>"

        //Logic
        modalBehanceButton.href="#";
        modalBehanceButton.tabIndex = -1;
        modalBehanceButton.ariaDisabled = true;
        modalBehanceButton.style = "pointer-events:none";
    }
}