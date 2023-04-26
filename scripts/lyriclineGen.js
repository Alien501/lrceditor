export {totalLine}


var totalLine;

export function LyricGen() {
    const lyricsText = document.getElementById('lyrics-holder');
    const lyricBox = document.getElementById('lyric-sync');
    var lyricsValue = lyricsText.value.split('\n');
    
    totalLine = lyricsValue.length;
    let id = 'lyricsline-';
    lyricBox.innerHTML = '';
    for(let i = 0; i < totalLine; i++){
        let newLyricLineCont = document.createElement('div');
        newLyricLineCont.id = id + i;
        newLyricLineCont.innerHTML = `<div class="sync-up-down-cont">
        <div id="sync-btn-pls" class="btn">
          <span class="material-symbols-outlined">
            add
          </span>
        </div>
        <div class="sync-time-stam" id="sync-time-stam${i}">
          00:00:00
        </div>
        <div id="sync-btn-min${i}" class="btn">
          <span class="material-symbols-outlined">
            remove
          </span>
        </div>
      </div>
    
      <div class="sync-text-cont" id="sync-text-cont${i}">
        ${lyricsValue[i]}
      </div>
    
      <div id="sync-play-btn-cont${i}" class="btn">
        <span class="material-symbols-outlined" class="btn">
          play_arrow
        </span>
      </div>`;
      newLyricLineCont.className = 'sync-line-cont';
      if(i == 0){
        newLyricLineCont.classList.add('active');
      }
      lyricBox.appendChild(newLyricLineCont);
    }
}

