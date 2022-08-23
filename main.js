let count = 0;
function callPlayerNameId(inputId,event){
    const playerText = document.getElementById(inputId).innerText;
    const li = document.createElement('li');
      li.innerText = playerText;
    const olList = document.getElementById('ol-list');
    olList.appendChild(li);
    event.target.setAttribute('disabled','');
   count += 1;
   
   document.getElementById('calculate-btn').addEventListener('click',function(){
   const perPlayerCost = parseFloat(document.getElementById('player-text').value) ;
   const allPlayerCost = count*perPlayerCost;
      document.getElementById('player-cost').innerText = allPlayerCost;
      document.getElementById('calculate-total-btn').addEventListener('click',function(){
        const managerCost = parseFloat(document.getElementById('manager-text').value);
        const coacheCost = parseFloat(document.getElementById('coach-text').value);
        document.getElementById('total-cost').innerText = allPlayerCost + managerCost + coacheCost;

      })
   })
  
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
