var tabs = document.getElementById('tabs');
tabs.childNodes.forEach(function(el,i){
	el.addEventListener('click', function(){
       // console.log(el.dataset.id)
        DisplayCurrentPanel(el.dataset.id);
		//document.getElementsByClassName('current')[0].classList.remove("current");
		//this.childNodes[1].classList.add("current");
	});
});

function DisplayCurrentPanel(panelID){
    var panels = document.getElementsByClassName('portfolioContainer');
    //console.log(panels)
    for(let p of panels){
        p.classList.remove("current")
    }
   var target = document.getElementById(panelID);
   target.classList.add("current");
}