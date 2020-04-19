
var toggle_state = false
function ClickMenu() {
    if (toggle_state === false) {
    document.querySelector(".posting_category_dropdown_textalt1").style.paddingLeft = "60pt"
    document.querySelector(".posting_category_dropdown_textalt2").style.paddingLeft = "60pt"
    document.querySelector(".posting_category_dropdown_textalt3").style.paddingLeft = "60pt"
    document.querySelector(".posting_category_dropdown_textalt4").style.paddingLeft = "60pt"
    document.querySelector(".posting_category_dropdown_textalt5").style.paddingLeft = "60pt"
    toggle_state = true
} else {

    document.querySelector(".posting_category_dropdown_textalt1").style.paddingLeft = "26pt"
    document.querySelector(".posting_category_dropdown_textalt2").style.paddingLeft = "26pt"
    document.querySelector(".posting_category_dropdown_textalt3").style.paddingLeft = "26pt"
    document.querySelector(".posting_category_dropdown_textalt4").style.paddingLeft = "26pt"
    document.querySelector(".posting_category_dropdown_textalt5").style.paddingLeft = "26pt"
    toggle_state = false;
}
}
var toggledrop_state = false 
function toggleDrop() {
    if (toggledrop_state === false) { 
document.querySelector(".posting_category_dropdown").style.opacity = "100%";
toggledrop_state = true;
} else {
    document.querySelector(".posting_category_dropdown").style.opacity = "0%"
    toggledrop_state = false;
}
}
