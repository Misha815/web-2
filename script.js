
document.addEventListener("DOMContentLoaded",function(){

var container = document.querySelector('.popup-container');
var popupButtons = document.querySelectorAll('.open-popup');
for (let index = 0; index < popupButtons.length; index++) 
{
    popupButtons[index].addEventListener('click',function(){
        container.style.display = 'flex';
    });
    
}
container.addEventListener('click',function(event){
    if (event.target == container) {
        container.style.display = 'none';
        
    }
})
});