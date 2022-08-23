let count,cont = 0;
function callPlayerNameId(inputId,event){
    cont++;
    if(cont>5){
        alert('sorry! You can not add more five');
    }
    else{
        count = cont;
    const playerText = document.getElementById(inputId).innerText;
    const li = document.createElement('li');
      li.innerText = playerText;
    const olList = document.getElementById('ol-list');
    olList.appendChild(li);
    event.target.setAttribute('disabled','');
    }
   document.getElementById('calculate-btn').addEventListener('click',function(){
   const perPlayerCost = (document.getElementById('player-text').value) ;
   const perPlayerCostt = parseFloat(perPlayerCost);
   const allPlayerCost = count*perPlayerCostt;
    if(isNaN(perPlayerCost)){
        alert("Enter a number value");
    }
    else{
      document.getElementById('player-cost').innerText = allPlayerCost;
    }
      document.getElementById('calculate-total-btn').addEventListener('click',function(){
        const managerCostString = document.getElementById('manager-text').value;
        const managerCost = parseFloat(managerCostString);
        const coacheCostString = document.getElementById('coach-text').value;
        const coacheCost = parseFloat(coacheCostString);
        if(isNaN(managerCostString) || isNaN(coacheCostString)){
            alert("Ener a number");
        }
        else{
        document.getElementById('total-cost').innerText = allPlayerCost + managerCost + coacheCost;
        }

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
