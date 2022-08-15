const alilerList = [
  { adi: "ali1" },
  { adi: "ali2" },
  { adi: "ali3" },
  { adi: "ali4" },
  { adi: "ali5" },
  { adi: "ali6" },
  { adi: "ali7" },
  { adi: "ali8" },
  { adi: "ali9" },
];

  for (i = alilerList.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = alilerList[i]
    alilerList[i] = alilerList[j]
    alilerList[j] = k
  }
const aliler = document.getElementById("aliyaz");

alilerList.forEach((kisi) => {
  aliler.innerHTML += `<div id="parentId" class="aliler">
    <img id="${kisi.adi}" class="alilerFoto" src="img/${kisi.adi}.jpg" alt="">
    </div>`; 
});


const isimler = document.getElementsByClassName("alilerFoto");
const aliWin = document.getElementById("aliWin");

for (let j = 0; j < isimler.length; j++) {
  isimler[j].addEventListener("click", tikla);
}

function tikla(event) {

  const getClickedId = event.target.id;
  if (getClickedId == "ali1") {
    document.getElementById("ali1").src = "img/aliwin.jpg"; 
    win()
  } else {
    lose()

  }
}


function win() {
  fruits.push("Kiwi"); 
};



function lose() {

  location.reload();

}

