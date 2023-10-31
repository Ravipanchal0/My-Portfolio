var home = document.getElementsByClassName("homecontainer");
var url = 0;
function bgChange() {
  let bgs = ["../../static/img/bg2.jpg", "../../static/img/bg1.jpg"];
  home[0].style.background = `url(${bgs[url]}) no-repeat center center/cover`;
  url >= bgs.length - 1 ? (url = 0) : url++;
}
setInterval(bgChange, 5000);

let sendBtn = document.getElementById("sendMSG");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
