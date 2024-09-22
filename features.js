document.getElementById('show-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('This is My website')
    showsectionId('add-money-form')
});
document.getElementById('show-cash-out-form').addEventListener('click', function(){
       showsectionId('cash-out-form');
})

document.getElementById('show-transtion-history').addEventListener('click', function(){
      showsectionId('Transaction-section')
})