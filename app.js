const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const swap_btn = document.getElementById("swap_btn")
const color = document.querySelector(".color")

/**
 * 
 */
function update_doc_color() {
    // get random number between 0 and 3
    const random_num = getRandomNumber();
    console.log(random_num);
    console.log(document.body);

    // Update the document body/main color
    document.body.style.backgroundColor = colors[random_num];
    color.textContent = colors[random_num];

    
    // Update the button

}

swap_btn.addEventListener("click", update_doc_color);

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

