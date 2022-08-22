
function callPlayerNameId(inputId,event){
    const playerText = document.getElementById(inputId).innerText;
    const li = document.createElement('li');
      li.innerText = playerText;
    const olList = document.getElementById('ol-list');
    olList.appendChild(li);
    event.target.setAttribute('disabled','');
   
}


document.getElementById('messi').addEventListener('click',function(event){
    callPlayerNameId('messi-text',event);

})
document.getElementById('neymar').addEventListener('click',function(event){
    callPlayerNameId('neymar-text',event);

})
document.getElementById('mbappe').addEventListener('click',function(event){
    callPlayerNameId('mbappe-text',event);

})
document.getElementById('machado').addEventListener('click',function(event){
    callPlayerNameId('machado-text',event);

})
document.getElementById('ramos').addEventListener('click',function(event){
    callPlayerNameId('ramos-text',event);

})
document.getElementById('sanches').addEventListener('click',function(event){
    callPlayerNameId('sanches-text',event);

})
console.log(count);