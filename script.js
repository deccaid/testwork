let popup = document.querySelector('.popup')
let popup2 = document.querySelector('.popup2')
let popupSave = document.querySelector('.popup__create')
let popupEdit = document.querySelector('.popup__edit')
document.querySelector(".location__create").addEventListener('click', function() {
    event.preventDefault()
    popup.style.display = "flex";
    popupSave.style.display = "block";
})
document.querySelector(".list__edit").addEventListener('click', function() {
    event.preventDefault()
    popup2.style.display = "flex";
    popupEdit.style.display = "block";
})
document.querySelector(".popup__button-cancel").addEventListener('click', function() {
    event.preventDefault()
    popup.style.display = "none";
    popupSave.style.display = "none";
})
document.querySelector(".popup__button-cancel2").addEventListener('click', function() {
    event.preventDefault()
    popup2.style.display = "none";
    popupEdit.style.display = "none";
})