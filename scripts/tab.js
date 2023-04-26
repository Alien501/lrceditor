import {LyricGen} from '/scripts/lyriclineGen.js'; 

const lyricsTab = document.getElementById('lyrics-tab');
const syncTab = document.getElementById('sync-tab');
const playBtnBtm = document.getElementById('bottom-play');

lyricsTab.onclick = () => {
    if(!lyricsTab.classList.contains('active')){
        lyricsTab.classList.toggle('active');
        syncTab.classList.remove('active');
    }
    bottm();
}

syncTab.onclick = () => {
    if(!syncTab.classList.contains('active')){
        syncTab.classList.toggle('active');
        lyricsTab.classList.remove('active');
        LyricGen();
    }
    bottm();
}

function bottm(){
    if(lyricsTab.classList.contains('active')){
        document.getElementById('btm-btn-cont').style="visibility: hidden";
    }else{
        document.getElementById('btm-btn-cont').style="visibility: visible";
    }
}

// Player controls
playBtnBtm.addEventListener('click',
() => {
    if(playBtnBtm.innerText == 'play_arrow'){
        playBtnBtm.innerText = 'pause'
    }else{
        playBtnBtm.innerText = 'play_arrow';
    }
}
)