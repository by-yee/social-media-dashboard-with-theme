const checkbox = document.querySelector('.toggle');

//Page on load
document.addEventListener("DOMContentLoaded", function() { 
    if(checkbox.checked) {
        removeDarkTheme();
    } else {
        addDarkTheme();
    };
});

//When check box is toggle
checkbox.addEventListener('change', function() {
    if(this.checked) {
        removeDarkTheme();
    } else {
        addDarkTheme();
    }
})

function addDarkTheme() {
    document.documentElement.classList.add('dark-theme');
}
function removeDarkTheme() {
    document.documentElement.classList.remove('dark-theme');
}