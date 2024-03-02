var arr =[
    {songName:"MovingCastle | Joe Hisashi |",url: "./songs/movingCastle.mp3",img:"./images/mc.webp",len:"3:56"},
    {songName:"In Your Eyes | Weekend |",url: "./songs/The Weeknd - In Your Eyes (Official Audio).mp3",img:"./images/Afterhours.jpg",len:"3:56"},
    // {songName:"Edmame | bbno$ |",url: "./songs/edmame.mp3",img:"./images/Edmame.jpg",len:"2:21"},
    {songName:"Logic-Beggin Remix | Logic |",url: "./songs/beggin.mp3",img:"./images/Logic.jpg",len:"3:19"},
    {songName:"Your Name OST | Sparkle |",url: "./songs/sparkle.mp3",img:"./images/yourname.jpg",len:"3:19"},
    {songName:"The Lamp is Low | Aurarian Dance |",url: "./songs/lampislow.mp3",img:"./images/Auraian.jpeg",len:"3:19"},
    

]
var audio = new Audio()
var cover = document.getElementById("left")
var play = document.querySelector("#play")
var backward = document.querySelector("#back")
var forward = document.querySelector("#forward")
var flag = 0
var currentS = -1
var photoID = 0
var progressBar = document.getElementById("progressBar")
//showsongs

function showSongs(){
    var clutter = ""
    arr.forEach(function(elem,idx){
        clutter +=
     `<div class="songCard" id="${idx}">
        <div id="part1">
            <img src="${elem.img}" alt="">
            <h2>${elem.songName}</h2>
        </div>
        <h6>${elem.len}</h6>
      </div>`;
       
    })

    document.getElementById("allSongs").innerHTML = clutter;
    
    if(currentS != -1){
        audio.src = arr[currentS].url;
        audio.play()
        
    }
    cover.style.backgroundImage = `url(${arr[photoID].img})`
}
showSongs()
function Audioplayer(){
    
    document.getElementById("allSongs").addEventListener("click",function(dets){
        currentS = dets.target.id
        photoID = dets.target.id
        showSongs();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1
        
     })
}

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (currentS < arr.length - 1) {
        currentS++
        photoID = currentS
        showSongs()
        
    }else{
        forward.style.opacity = 0.4
    }
    backward.style.opacity = ''
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
})
backward.addEventListener("click", function () {
    if (currentS > 0) {
        currentS--
        photoID = currentS
        showSongs()
        
    }else{
        backward.style.opacity = 0.4
    }
    forward.style.opacity = ''
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
})

Audioplayer()

function playtimer(){
    var progress = (audio.currentTime/audio.duration)*100
    progressBar.style.width = progress+"%";
}
audio.addEventListener("timeupdate",playtimer);



// function cursorEffect(){
// var cursor = document.querySelector("#cursor")
// var p1content = document.querySelector("body")

// p1content.addEventListener("mousemove",function(dets){
//     gsap.to("#cursor",{
//         ease: "power1.out",
//         duration: .75,
//         x: dets.x -70,
//         y: dets.y -70
//     })
// })

// p1content.addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         scale:1,
//         opacity:1
//     })

// })

// p1content.addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         scale:0,
//         opacity:0
//     })
// })

// }

// cursorEffect()