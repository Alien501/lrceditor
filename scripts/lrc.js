const downBtn = document.getElementById('syncbtn-down');
const upBtn = document.getElementById('syncbtn-up');

var current = 0;
var totalLine = 0;

document.getElementById('sync-tab').addEventListener('click', () => {
    current = 0;
    totalLine = document.getElementById('lyrics-holder').value.split('\n').length;
})

downBtn.addEventListener('click', 
() => {
    if(current < totalLine-1){
        var currentElement = document.getElementById('lyricsline-'+current);
        currentElement.classList.remove('active');
        current++;
        currentElement = document.getElementById('lyricsline-'+current);
        currentElement.classList.add('active');
    }
}
);

upBtn.addEventListener('click',
() => {
    if(current > 0){
        var currentElement = document.getElementById('lyricsline-'+current);
        currentElement.classList.remove('active');
        current--;
        currentElement = document.getElementById('lyricsline-'+current);
        currentElement.classList.add('active');
    }
}
)