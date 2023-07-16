// ajouter :
//   componné (motif uniquement pour honor)
//   abaissé : sous une autre pièce
//   accosté : à côté d'une autre pièce

// accosté

// TODO :
//   - fill les motif pour + opti

document.body.addEventListener("keydown", function(event) {
  switch(event.key) {
    case 'Escape':
      close();
      break;
    // case 'Enter':
    //   validate();
    //   break;
  }
  // console.log(event)
});

function settings(elem) {
  let div = document.createElement("div");
  div.id = "settings";

  div.innerHTML = '<div id="settings-main"><div id="settings-title"><div>' + elem.parentElement.children[0].innerHTML +'</div><div class="button">X</div></div><div id="settings-content"></div><div id="settings-footer"><button>Valider</button> <button>Annuler</button></div></div>';

  document.body.appendChild(div);

  document.getElementById("settings-title").children[1].addEventListener("click", close);
  document.getElementById("settings-footer").children[0].addEventListener("click", function() {
    validate(elem.parentElement.parentElement.parentElement);
  });
  document.getElementById("settings-footer").children[1].addEventListener("click", close);

  setRadios(elem.parentElement.parentElement.parentElement);
}


function setRadios(piece) {
  content = document.getElementById("settings-content");
  content.innerHTML = '<form name="select-type">type<br></form>';
  type = piece.children[0].children[1].className

  form = document["select-type"];
  first = true
  for (k in settingsData[type]) {
    if (first == true) {
      first = k;
    }
    radio = document.createElement("input");
    radio.type = "radio";
    radio.value = k;
    radio.name = "select-type";
    form.append(radio);
    form.append(" " + k);
    form.append(document.createElement("br"));
  }

  selected = piece.attributes.type.value;
  // console.log(selected);
  form["select-type"].value = selected;

  if (form["select-type"].value == "") {
    form["select-type"].value = first;
  }

  // console.log(form["select-type"]);

  form["select-type"].forEach(elem => {
    elem.addEventListener("change", function() {
      piece.attributes[elem.name.replace("select-", "")].value = elem.value;
      setRadios(piece);
    })
  });

  data = settingsData[type][form["select-type"].value];
  setRadiosRecursive(data, 1, piece);
}

function setRadiosRecursive(data, depth, piece) {
  content = document.getElementById("settings-content");

  for (let k in data) {
    let form = document.createElement("form");
    form.name = "select-" + k
    for (i = 0; i < depth; i++) {
      form.append(document.createElement("br"));
    }
    form.append(k);
    form.append(document.createElement("br"));
    if (Object.prototype.toString.call(data[k]) == "[object Array]") {
      first = true;
      data[k].forEach(element => {
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "select-" + k
        radio.value = element;
        form.append(radio);
        if (k.includes("émail")) {
          form.append(" " + colors[element].name);
        }
        else {
          form.append(" " + element);
        }
        form.append(document.createElement("br"));
        if (first == true) {
          first = element;
        }
      });
      if (piece.attributes[k.replace(" ", "-")] == undefined) {
        piece.setAttribute(k.replace(" ", "-"), first);
      }
      selected = piece.attributes[k.replace(" ", "-")].value;
      form["select-" + k].value = selected;
      if (form["select-" + k].value == "") {
        form["select-" + k].value = first;
      }
      content.append(form);
      form["select-" + k].forEach(elem => {
        elem.addEventListener("change", function() {
          piece.attributes[elem.name.replace("select-", "").replace(" ", "-")].value = elem.value;
        })
      });
    }
    else {
      first = true;
      for (l in data[k]) {
        radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "select-" + k
        radio.value = l;
        form.append(radio);
        form.append(" " + l);
        form.append(document.createElement("br"));
        if (first == true) {
          first = l;
        }
      }
      if (piece.attributes[k] == undefined) {
        piece.setAttribute(k, first);
      }
      selected = piece.attributes[k].value;
      form["select-" + k].value = selected;

      if (form["select-" + k].value == "") {
        form["select-" + k].value = first;
        selected = first;
      }
      content.append(form);
      setRadiosRecursive(data[k][selected], depth+1, piece);
      form["select-" + k].forEach(elem => {
        elem.addEventListener("change", function() {
          piece.attributes[elem.name.replace("select-", "")].value = elem.value;
          setRadios(piece);
        })
      });
    }
  }
}

function close() {
  document.getElementById("settings").remove();
}

function validate(elem) {
  if (elem.attributes.type.value == "partition") {
    let n = 2;
    let depth	= elem.attributes.depth.value;
    let content = elem.children[1];
    let name = elem.children[0].children[1].children[0].value;
    if (elem.attributes.partition.value.includes("écartelé")) {
      n = 4;
    }
    for (let i = 0; i < n; i++) {
      let part = document.createElement("div");
      part.className = "piece";
      part.setAttribute("type", "émail");
      part.setAttribute("émail", i+1);
      part.setAttribute("depth", depth+1);
      part.innerHTML = '<div><div class="prefix"> ';
      for (let j = 0; j < depth; j++) {
        part.innerHTML += "  ";
      }
      part.innerHTML += '└─</div><div class="part"><input type="text" value="' + name + " - " + (i+1) + '"><div class="button">⚙️</div><div class="button">+</div></div></div><div class="children"></div>'
      
      content.append(part);
    }
  }
  close();
  draw();
}

function draw() {
  ctx = document.getElementById("canvas").getContext('2d');

  // ctx.strokeRect(0, 0, 450, 450);
  // ctx.strokeStyle();
  // ctx.strokeRect(0.5, 0.5, 499.5, 499.5);
  // ctx.beginPath();
  const path = new Path2D();
  path.moveTo(0, 0);
  path.lineTo(500, 0);
  path.lineTo(500, 400);
  path.bezierCurveTo(500, 550, 500, 550, 250, 800);
  path.bezierCurveTo(0, 550, 0, 550, 0, 400);
  path.lineTo(0, 0);
  ctx.stroke(path);

  drawRecursive(document.getElementById("base"), path, [0, 0, 500, 800])
}

function drawRecursive(elem, path, zone) {
  ctx = document.getElementById("canvas").getContext('2d');

  // ctx.stroke(path);
  // console.log(elem);
  // console.log(elem.attributes.type.value);

  if (elem.attributes.type.value == "émail") {
    let colorId = elem.attributes["émail"].value;
    if (colors[colorId].type != "fourrure") {
      ctx.fillStyle = colors[colorId].color;
      ctx.fill(path);
    }
    else {
      let shape = [];
      if (colors[colorId].name.includes("hermine")) {
        if (zone[2] > 30 && zone[3] > 30) {
          shape = grande_hermine;
        }
        else {
          shape = petite_hermine;
        }
      }
      else {
        if (zone[2] > 30 && zone[3] > 30) {
          shape = grand_vair;
        }
        else {
          shape = petit_vair;
        }
      }
      // console.log(shape);
      for (let i = zone[0]; i < zone[2]; i++) {
        for (let j = zone[1]; j < zone[3]; j++) {
          if (ctx.isPointInPath(path, i, j)) {
            ctx.fillStyle = colors[shape[j%shape.length][i%shape[0].length]].color;
            // console.log(ctx.fillStyle);  
            ctx.fillRect(i, j, 1, 1)
          }
        }
      }
    }
  }

  if (elem.attributes.type.value == "motif") {
    // ctx.fillStyle = "rgba(255, 255, 255, 1";
    // ctx.fill(path);
    let n = 6;
    switch (elem.attributes.motif.value) {
      case "palé":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        for (let pal = 0; pal < n; pal++) {
          ctx.fillStyle = colors[elem.attributes["émail-" + (pal%2+1)].value].color;
          for (let i = 0; i < zone[2]/n; i++) {
            for (let j = zone[1]; j < zone[3]; j++) {
              offset = parseInt(pal*zone[2]/n + zone[0]);
              if (ctx.isPointInPath(path, i + offset, j)) {
                ctx.fillRect(i + offset, j, 1, 1);
              }
            }
          }
        }
        break;
      case "fascé":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        for (let pal = 0; pal < n; pal++) {
          ctx.fillStyle = colors[elem.attributes["émail-" + (pal%2+1)].value].color;
          for (let i = zone[0]; i < zone[2]; i++) {
            for (let j = 0; j < zone[3]/n; j++) {
              offset = parseInt(pal*zone[3]/n + zone[1]);
              if (ctx.isPointInPath(path, i, j + offset)) {
                ctx.fillRect(i, j + offset, 1, 1);
              }
            }
          }
        }
        break;
      case "bandé":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        emaux1 = [];
        emaux2 = [];
        for (let i = 0; i < n/2; i++){
          let email1 = new Path2D();
          email1.moveTo(zone[0]+(1-i*4/n)*(zone[2]), zone[1]);
          email1.lineTo(zone[0]+(1-(4*i+2)/n)*(zone[2]), zone[1]);
          email1.lineTo(zone[0]+(2-(4*i+2)/n)*(zone[2]), zone[1]+zone[3]);
          email1.lineTo(zone[0]+(2-i*4/n)*(zone[2]), zone[1]+zone[3]);
          email1.closePath();
          emaux1.push(email1);
          let email2 = new Path2D();
          email2.moveTo(zone[0]+(1-(i*4+2)/n)*(zone[2]), zone[1]);
          email2.lineTo(zone[0]+(1-(4*i+4)/n)*(zone[2]), zone[1]);
          email2.lineTo(zone[0]+(2-(4*i+4)/n)*(zone[2]), zone[1]+zone[3]);
          email2.lineTo(zone[0]+(2-(i*4+2)/n)*(zone[2]), zone[1]+zone[3]);
          email2.closePath();
          emaux2.push(email2);
        }
        for (let i = zone[0]; i < zone[2]; i++) {
          for (let j = zone[1]; j < zone[3]; j++) {
            if (ctx.isPointInPath(path, i, j)) {
              emaux1.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillStyle = colors[elem.attributes["émail-1"].value].color;
                  ctx.fillRect(i, j, 1, 1);
                }
              });
              emaux2.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillStyle = colors[elem.attributes["émail-2"].value].color;
                  ctx.fillRect(i, j, 1, 1);
                }
              });
            }
          }
        }
        break;
      case "barré":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        emaux1 = [];
        emaux2 = [];
        for (let i = 0; i < n/2; i++){
          let email1 = new Path2D();
          email1.moveTo(zone[0]+(i*4/n)*(zone[2]), zone[1]); // 0/8 4/8 8/8 12/8 - 0/6 4/6 8/6
          email1.lineTo(zone[0]+((4*i+2)/n)*(zone[2]), zone[1]); // 2/8 6/8 10/8 14/8 - 2/6 6/6 10/6
          email1.lineTo(zone[0]+((4*i+2)/n - 1)*(zone[2]), zone[1]+zone[3]); // -6/8 -2/8 2/8 6/8 - -4/6 0/6 4/6 
          email1.lineTo(zone[0]+(i*4/n - 1)*(zone[2]), zone[1]+zone[3]); // -8/8 -4/8 0/8 4/8 - -6/6 -2/6 2/6 
          email1.closePath();
          emaux1.push(email1);
          let email2 = new Path2D();
          email2.moveTo(zone[0]+((i*4+2)/n)*(zone[2]), zone[1]);
          email2.lineTo(zone[0]+((4*i+4)/n)*(zone[2]), zone[1]);
          email2.lineTo(zone[0]+((4*i+4)/n-1)*(zone[2]), zone[1]+zone[3]);
          email2.lineTo(zone[0]+((i*4+2)/n-1)*(zone[2]), zone[1]+zone[3]);
          email2.closePath();
          emaux2.push(email2);
        }
        for (let i = zone[0]; i < zone[2]; i++) {
          for (let j = zone[1]; j < zone[3]; j++) {
            if (ctx.isPointInPath(path, i, j)) {
              emaux1.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillStyle = colors[elem.attributes["émail-1"].value].color;
                  ctx.fillRect(i, j, 1, 1);
                }
              });
              emaux2.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillStyle = colors[elem.attributes["émail-2"].value].color;
                  ctx.fillRect(i, j, 1, 1);
                }
              });
            }
          }
        }
        break;
      case "chevronné":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        ctx.fillStyle = colors[elem.attributes["émail-1"].value].color;
        ctx.fill(path);
        emaux = [];
        for (let i = 0; i < n/2; i++){
          let email = new Path2D();
          email.moveTo(zone[0], zone[1]+(2*i/(n-1)+1/4)*zone[3]);
          email.lineTo(zone[0]+zone[2]/2, zone[1]+2*i/(n-1)*zone[3]);
          email.lineTo(zone[0]+zone[2], zone[1]+(2*i/(n-1)+1/4)*zone[3]);
          email.lineTo(zone[0]+zone[2], zone[1]+((2*i+1)/(n-1)+1/4)*zone[3]);
          email.lineTo(zone[0]+zone[2]/2, zone[1]+(2*i+1)/(n-1)*zone[3]);
          email.lineTo(zone[0], zone[1]+((2*i+1)/(n-1)+1/4)*zone[3]);
          email.closePath();
          emaux.push(email);
        }
        ctx.fillStyle = colors[elem.attributes["émail-2"].value].color;
        for (let i = zone[0]; i < zone[2]; i++) {
          for (let j = zone[1]; j < zone[3]; j++) {
            if (ctx.isPointInPath(path, i, j)) {
              emaux.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillRect(i, j, 1, 1);
                  // break
                }
              });
            }
          }
        }
        break;
      case "gironné":
        n = 8;
        way = 0;
        if (elem.attributes.forme.value.includes("six")) {
          n = 6;
        }
        if (elem.attributes.forme.value.includes("dix")) {
          n = 10;
        }
        if (elem.attributes.forme.value.includes("douze")) {
          n = 12;
        }
        if (elem.attributes.forme.value.includes("mal gironné")) {
          way = 0.5;
        }
        ctx.fillStyle = colors[elem.attributes["émail-2"].value].color;
        ctx.fill(path);
        let r = (zone[2]+zone[3])/2;
        let x = zone[0]+zone[2]/2;
        let y = zone[1]+zone[3]/2;
        let a = 2*Math.PI/n;
        emaux = [];
        for (let i = 0; i < n/2; i++){
          let email = new Path2D();
          email.moveTo(r*Math.cos((2*i+1+way)*a) + x, r*Math.sin((2*i+1+way)*a) + y);
          email.lineTo(r*Math.cos((2*i+2+way)*a) + x, r*Math.sin((2*i+2+way)*a) + y);
          email.lineTo(x, y);
          email.closePath();
          emaux.push(email);
        }
        ctx.fillStyle = colors[elem.attributes["émail-1"].value].color;
        for (let i = zone[0]; i < zone[2]; i++) {
          for (let j = zone[1]; j < zone[3]; j++) {
            if (ctx.isPointInPath(path, i, j)) {
              emaux.forEach(element => {
                if (ctx.isPointInPath(element, i, j)) {
                  ctx.fillRect(i, j, 1, 1);
                  // break
                }
              });
            }
          }
        }
        break;
      case "échiqueté":
        if (elem.attributes.forme.value == "autre") {
          n = 10;
        }
        let color1 = colors[elem.attributes["émail-1"].value].color;
        let color2 = colors[elem.attributes["émail-2"].value].color;
        ctx.fillStyle = color1;
        // console.log(color1);
        // console.log(color2);
        // console.log(ctx.fillStyle);
        let color = true;
        
        for (let i = zone[0]; i < zone[2]; i++) {
          if (i%Math.round((zone[2]-zone[0])/n) == zone[0]%Math.round((zone[2]-zone[0])/n)  && i < zone[2] - (zone[2]-zone[0])/(2*n)) {
            if (color) {
              ctx.fillStyle = color2;
            }
            else {
              ctx.fillStyle = color1;
            }
            color = !color;
          }
          for (let j = zone[1]; j < zone[3]; j++) {
            if (j%Math.round((zone[3]-zone[1])/n) == zone[1]%Math.round((zone[3]-zone[1])/n) && j < zone[3] - (zone[3]-zone[1])/(2*n)) {
              if (color) {
                ctx.fillStyle = color2;
              }
              else {
                ctx.fillStyle = color1;
              }
              color = !color;
            }
            if (ctx.isPointInPath(path, i, j)) {
              ctx.fillRect(i, j, 1, 1);
            }
          }
        }
        break;
    }
  }
}

draw();

// console.log("loaded");