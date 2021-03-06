// randol color
const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const letrasTeclado = "abcçdefghijlmnoprstuvxzw";

let tecladoVirtual = document.getElementById("tecladoVirtual");

[...letrasTeclado].map((letra) => {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", letra);
  newDiv.innerText += letra;
  newDiv.style.margin = "10px";
  newDiv.style.fontSize = "22px";
  newDiv.style.color = "#fff";
  newDiv.style.backgroundColor = getRandomColor();
  newDiv.style.width = "40px";
  newDiv.style.height = "40px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.cursor = "pointer";
  newDiv.style.alignItems = "center";

  // animation
  document.styleSheets[0].insertRule(
    "\
          @keyframes anim {\
              from { transform: rotateZ(0deg);   }\
              to   { transform: rotateZ(360deg); }\
          }"
  );
  newDiv.style.animation = "anim 2s linear forwards";

  // pega a letra através do click
  newDiv.onclick = () => {
    if (isLetter(letra)) {
      letrasInformadas.push(letra.toUpperCase());
      let spanLetrasInformadas = document.getElementById("letrasInformadas");
      spanLetrasInformadas.innerHTML = letrasInformadas.join();
      verificarLetra(letra);
      document.getElementById("letra").value = letra;
      document.getElementById("resposta").value += letra;
    }

    let reactionDiv = document.createElement("div");
    reactionDiv.setAttribute("id", letra + "-animation");
    reactionDiv.style.backgroundColor = getRandomColor();
    reactionDiv.innerHTML = letra;
    reactionDiv.style.margin = "10px";
    reactionDiv.style.fontSize = "22px";
    reactionDiv.style.color = "#fff";
    reactionDiv.style.width = "60px";
    reactionDiv.style.height = "60px";
    reactionDiv.style.position = "absolute";
    reactionDiv.style.display = "flex";
    reactionDiv.style.justifyContent = "center";
    reactionDiv.style.alignItems = "center";

    reaction.appendChild(reactionDiv);
    document.styleSheets[0].insertRule(
      "\
      @keyframes anim2 {\
        from { transform: translateY(100); opacity: 1  }\
        to   { transform: translateY(-1400px); opacity: 0; }\
       }"
    );
    reactionDiv.style.animation = "anim2 4s linear forwards";
  };

  tecladoVirtual.appendChild(newDiv);
  return newDiv;
});

console.log();
