//querySelectorAll() selects all css tags
var navMenuAnchorTag = document.querySelectorAll('.list a');

for (var i = 0; i< navMenuAnchorTag.length; i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim();
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function(){
            var targetSectionCoordinate = targetSection.getBoundingClientRect();
            if(targetSectionCoordinate.top <= 0){
                clearInterval(interval);
                return;
            }
            // in 30ms, it will be going down 50px
            window.scrollBy(0,50);
        }, 30);
    })
}




//skill section animation
var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
console.log('progressBar is: ',progressBar);
console.log('skillsContainer is: ',skillsContainer)
var animationDone = false;

function initializeBars(){
    for(let bar of progressBar){
        bar.style.width = 0 + "%";
    }
}

initializeBars();

function fillBars(){
    for(let bar of progressBar){
        let targetWidth = bar.getAttribute('data-bar-width');
        console.log(targetWidth);
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5)
    }
}


function checkScroll(){
        var coordinate = skillsContainer.getBoundingClientRect();
        if(!animationDone && coordinate.top <= window.innerHeight){
            animationDone = true;
            console.log("skill- section visible");
            fillBars();
        }
        else if(coordinate.top > window.innerHeight){
            animationDone = false;
            initializeBars();
        }
}


