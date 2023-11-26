document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const songTitle = document.getElementById('songTitle');
    const lyricsDisplay = document.getElementById('lyrics');

    const songs = {
        bones: {
            title: 'Ebal - DLP',
            path: 'Songs/ebal.mp3',
            lyrics: [
                { time: 0, lyric: 'Whoa, oh, oh' },
                { time: 15, lyric: 'Whoa, oh, oh' },
                { time: 21, lyric: 'Whoa, oh, oh' },
                // ... și așa mai departe
            ]
        },
        Demons: {
            title: 'Nuj de cn e - Many Men',
            path: 'Songs/manymen.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        },
        Wanna: {
            title: 'Ciocolata - TzAnCa',
            path: 'Songs/cico.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        },
        Creep: {
            title: 'Big Poppa - Doamne ajuta',
            path: 'Songs/bigpopa.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        },
        Believer: {
            title: 'Cocks - Alo delta force',
            path: 'Songs/bazabaza.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        },
        Radioactive: {
            title: 'La tn si la bani - Marinica Biju',
            path: 'Songs/latnsilabani.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        },
        Waydown: {
            title: 'Svantz - Daca n-ai svant',
            path: 'Songs/dacanam.mp3',
            lyrics: [
                { time: 0, lyric: 'Lyric 1' },
                { time: 10, lyric: 'Lyric 2' },
                // ... și așa mai departe
            ]
        }
    };

    let currentSongIndex = 0;

    function playSong(songIndex) {
        const selectedSongKey = Object.keys(songs)[songIndex];
        const selectedSong = songs[selectedSongKey];

        if (selectedSong) {
            const objectURL = selectedSong.path;
            audioPlayer.src = objectURL;
            audioPlayer.load();
            audioPlayer.play();
            songTitle.textContent = selectedSong.title;
            displayLyrics(selectedSong.lyrics);
        }
    }

    function displayLyrics(lyricsArray) {
        lyricsDisplay.innerHTML = '';

        lyricsArray.forEach((line) => {
            const lyricElement = document.createElement('div');
            lyricElement.textContent = line.lyric;
            lyricsDisplay.appendChild(lyricElement);
        });

        audioPlayer.addEventListener('timeupdate', function () {
            const currentTime = audioPlayer.currentTime;

            lyricsArray.forEach((line, index) => {
                const lyricTime = line.time;
                const lyricElement = lyricsDisplay.children[index];

                if (currentTime >= lyricTime && currentTime < lyricTime + 5) {
                    lyricElement.classList.add('highlight');
                } else {
                    lyricElement.classList.remove('highlight');
                }
            });
        });
    }

    audioPlayer.addEventListener('ended', function () {
        currentSongIndex++;
        if (currentSongIndex >= Object.keys(songs).length) {
            currentSongIndex = 0;
        }

        playSong(currentSongIndex);
    });

    const playlistButtons = document.querySelectorAll('.playlist button');

    for (let i = 0; i < playlistButtons.length; i++) {
        playlistButtons[i].addEventListener('click', function () {
            currentSongIndex = i;
            playSong(currentSongIndex);
        });
    }

    playSong(currentSongIndex);
});
