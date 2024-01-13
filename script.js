console.log("Welcome to Spotify");;
let songIndex=0;
let audioElement=new Audio('Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3');
let masterplay=document.getElementById('materplay');
let myProgressBar=document.getElementById("myProgressBar")

let songs =
[
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    {songName:"Arjan Vailly",filePath:"Arjan-Vailly-X-Panga-(Remix)(PaglaSongs).mp3",coverPath:"https://tse2.mm.bing.net/th?id=OIP.Q43WOi5cNFnInO7maQ7-SQHaHa&pid=Api&P=0&h=180"},
    
]
// audioElement.play();
masterplay.addEventListener('click',()=>
{
if(audioElement.paused||audioElement.currentTime<=0)
{
audioElement.play();
}
});
document.addEventListener('timeupdate',()=>{
console.log('timeupdate');
});
