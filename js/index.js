let hamberger = document.getElementById("click");
let cross = document.getElementById("click1")
let menulist = document.querySelector("aside");
hamberger.addEventListener("click", function () {
    menulist.classList.add("active");
})
cross.addEventListener("click", function () {
    menulist.classList.remove("active");
})
music = new Audio("/audio/1.mp3");
//  music.play();

const songs = [
    {
        id: "1",
        songName: `<h5 class="title">Butter</h5>
        <p class="subtitle">(BTS)</p>
        </h5>`,
        poster: "/img/1.jpg"

    },
    {
        id: "2",
        songName: `<h5 class="title">Bol Do Na Jara</h5>
        <p class="subtitle">Armaan Malik</p>
        </h5>`,
        poster: "/img/2.jpg"
    },
    {
        id: "3",
        songName: `<h5 class="title">Dil Me Ho Tum</h5>
        <p class="subtitle">Armaan Malik</p>
        </h5>`,
        poster: "/img/3.jpg"
    },
    {
        id: "4",
        songName: `<h5 class="title">Dekh Lena</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/4.jpg"
    },
    {
        id: "5",
        songName: `<h5 class="title">Spring Day</h5>
        <p class="subtitle">(BTS)</p>
        </h5>`,
        poster: "/img/5.jpg"
    },
    {
        id: "6",
        songName: `<h5 class="title">Main Rahoon ya na rahoon</h5>
        <p class="subtitle"></p>
        </h5>`,
        poster: "/img/6.jpg"
    },
    {
        id: "7",
        songName: `<h5 class="title">Kun Faya Kun</h5>
        <p class="subtitle">A R Rehman</p>
        </h5>`,
        poster: "/img/7.jpg"
    },
    {
        id: "8",
        songName: `<h5 class="title">Hamari Adhuri Kahani</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/8.jpg"
    },
    {
        id: "9",
        songName: `<h5 class="title">Phir Kabhi</h5>
        <p class="subtitle">Aijit Singh</p>
        </h5>`,
        poster: "/img/9.jpg"
    },
    {
        id: "10",
        songName: `<h5 class="title">Fire</h5>
        <p class="subtitle">(BTS)</p>
        </h5>`,
        poster: "/img/10.jpg"
    },
    {
        id: "11",
        songName: `<h5 class="title">Enna Sona</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/11.jpg"
    },
    {
        id: "12",
        songName: `<h5 class="title">Jay Ho</h5>
        <p class="subtitle">A R Rehman</p>
        </h5>`,
        poster: "/img/12.jpg"
    },
    {
        id: "13",
        songName: `<h5 class="title">Ae DilHai Muskil</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/13.jpg"
    },
    {
        id: "14",
        songName: `<h5 class="title">Dynamite</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/14.jpg"
    },
    {
        id: "15",
        songName: `<h5 class="title">Boy With Love</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/15.jpg"
    },

    {
        id: "16",
        songName: `<h5 class="title">Not Today</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/16.jpg"
    },
    {
        id: "17",
        songName: `<h5 class="title">Fake Love</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/17.jpg"
    },
    {
        id: "18",
        songName: `<h5 class="title">On</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/18.jpg"
    },
    {
        id: "19",
        songName: `<h5 class="title">Idol</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/19.jpg"
    },
    {
        id: "20",
        songName: `<h5 class="title">Blood Sweat Tears</h5>
<p class="subtitle">(BTS)</p>
</h5>`,
        poster: "/img/20.jpg"
    },
    {
        id: "21",
        songName: `<h5 class="title">Agar Tum Sath Ho</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster:"/img/21.jpg"

    },
    {
        id: "22",
        songName: `<h5 class="title">Hawayein</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/22.jpg"
    },
     {
        id: "23",
        songName: `<h5 class="title">Tera yaar hoon main</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/23.jpg"
    },
    {
        id: "24",
        songName: `<h5 class="title">Soch na sake</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/24.jpg"
    },
    {
        id: "25",
        songName: `<h5 class="title">Samjhawan</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/25.jpg"
    },
     {
        id: "26",
        songName: `<h5 class="title">Raabta</h5>
        <p class="subtitle">Aijit Singh</p>
        </h5>`,
        poster: "/img/26.jpg"
    },
    {
        id: "27",
        songName: `<h5 class="title">Teri meri kahani</h5>
        <p class="subtitle">Arijit Singh</p>
        </h5>`,
        poster: "/img/27.jpg"
    },
    {
        id: "28",
        songName: `<h5 class="title">Magic Show</h5>
    <p class="subtitle">(BTS)</p>
    </h5>`,
        poster: "/img/28.jpg"
    },
    {
        id: "29",
        songName: `<h5 class="title">Mic Drop</h5>
    <p class="subtitle">(BTS)</p>
    </h5>`,
        poster: "/img/29.jpg"
    },

]
Array.from(document.getElementsByClassName("songitem")).forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].poster;
    Element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
})

let play = document.getElementById("play");
let wave = document.getElementsByClassName("wave");

play.addEventListener("click", function () {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        document.querySelector(".wave").style.opacity = "1";
    }
    else {
        music.pause();
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
        document.querySelector(".wave").style.opacity = "0";
    }
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("play-now")).forEach((element) => {
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}
// const makeAllBackgrounds = () => {
//     Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
//         element.style.background = "rgba(105, 1005, 170,.1)";
//     })
// }
let index = 0;
let masterPoster = document.getElementById("masterposter");
let masterTitle = document.getElementById("title");
Array.from(document.getElementsByClassName("play-now")).forEach((element) => {
    element.addEventListener("click", (e) => {
        index = e.target.id;
        if (music.paused || music.currentTime <= 0) {
            makeAllPlay();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            music.src = `/audio/${index}.mp3`;
            masterPoster.src = `/img/${index}.jpg`;
            music.play();
            let song_title = songs.filter((ele) => {
                return ele.id == index;
            })
            song_title.forEach(ele => {
                let { songName } = ele;
                masterTitle.innerHTML = songName;
            })
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            document.querySelector(".wave").style.opacity = "1";
        }
        else {
            makeAllPlay();
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            music.src = `/audio/${index}.mp3`;
            masterPoster.src = `/img/${index}.jpg`;
            music.pause();
            let song_title = songs.filter((ele) => {
                return ele.id == index;
            })
            song_title.forEach(ele => {
                let { songName } = ele;
                masterTitle.innerHTML = songName;
            })
            play.classList.add("fa-play");
            play.classList.remove("fa-pause");
            document.querySelector(".wave").style.opacity = "0";
        }
        
        music.addEventListener("ended", () => {
            play.classList.add("fa-play");
            play.classList.remove("fa-pause");
            e.target.classList.add("fa-circle-play");
            e.target.classList.remove("fa-circle-pause");
            document.querySelector(".wave").style.opacity = "0";
        })
        // makeAllBackgrounds();
        // Array.from(document.getElementsByClassName("songitem"))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
    })
})

let currentStart = document.getElementById("currentstart");
let currentEnd = document.getElementById("currentend");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);

    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerHTML = `${min}:${sec}`;
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerHTML = `${min1}:${sec1}`;

    let progressBar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener("change", () => {
    music.currentTime = seek.value * music.duration / 100;
})
music.addEventListener("ended", () => {
    play.classList.add("fa-play");
    play.classList.remove("fa-pause");
    document.querySelector(".wave").style.opacity = "0";
})

let back = document.getElementById("back");
let next = document.getElementById("next");
let play_now = document.getElementsByClassName("play-now");
back.addEventListener("click", () => {
    index -= 1;
    if (index < 1 ) {
        index = Array.from(document.getElementsByClassName("songitem")).length;

    }
    music.src = `/audio/${index}.mp3`;
    masterPoster.src = `/img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songName } = ele;
        masterTitle.innerHTML = songName;
    })

    makeAllPlay();
    document.getElementById(`${index}`).classList.remove("fa-circle-play");
    document.getElementById(`${index}`).classList.add("fa-circle-fa-pause");
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    document.querySelector(".wave").style.opacity = "1";

    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songitem"))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
})
next.addEventListener("click", () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName("songitem")).length) {
        index = 1;
    }
    music.src = `/audio/${index}.mp3`;
    masterPoster.src = `/img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })
    song_title.forEach(ele => {
        let { songName } = ele;
        masterTitle.innerHTML = songName;
    })
    makeAllPlay();
    document.getElementById(`${index}`).classList.remove("fa-circle-play");
    document.getElementById(`${index}`).classList.add("fa-circle-fa-pause");
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    document.querySelector(".wave").style.opacity = "1";
    // makeAllBackgrounds();
    // Array.from(document.getElementsByClassName("songitem"))[`${index - 1}`].style.background = "rgba(105,105,170,.1)";
})