// array of images that will sub website images

let replacementImages = [
    "https://hips.hearstapps.com/hmg-prod/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=1.00xw:0.401xh;0,0.282xh&resize=1200:*",
    "https://i.pinimg.com/474x/a8/a6/2d/a8a62d6834e300ac1c2d22cfddbc1884.jpg",
    "https://pbs.twimg.com/media/DkFASWZWsAAD6Na.jpg",
    "https://i.pinimg.com/564x/00/14/f0/0014f0380d573bb968de4c60949f2768.jpg",
    "https://i.insider.com/5c79aa5ceb3ce83818367f13?width=1200&format=jpeg&auto=webp",
    "https://i.insider.com/5c799a1beb3ce861ad6ebec5?width=1200&format=jpeg&auto=webp",
    "https://i.insider.com/5c79936beb3ce833524fbe82?width=1200&format=jpeg&auto=webp",
    "https://hips.hearstapps.com/hmg-prod/images/hamilton-animals-to-follow-on-instagram-1568303880.jpg?crop=0.997xw:0.841xh;0.00173xw,0.0102xh&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/waffles-animals-to-follow-on-instagram-1568321640.jpg?crop=0.993xw:0.993xh;0.00865xw,0.00173xh&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/loulou-animals-to-follow-on-instagram-1568305608.jpg?crop=0.995xw:0.995xh;0.00340xw,0.00340xh&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/melvin-bunny-animals-to-follow-on-instagram-1568306021.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/prissy-pop-pigs-animals-to-follow-on-instagram-1568305460.jpg?crop=0.991xw:0.991xh;0.00340xw,0.00510xh&resize=980:*"
];

// for loop to replace src on website with random img from array

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {

// variable to get random index from img array
// Math.floor to round value to an integer

    const randomImg = Math.floor(Math.random() * replacementImages.length);
    imgs[i].src = replacementImages[randomImg];
}
