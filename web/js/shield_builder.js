// ajouter :
//   componné (motif uniquement pour honor)
//   abaissé : sous une autre pièce
//   accosté : à côté d'une autre pièce

// accosté

// TODO :
//   - fill les motif pour + opti

dataAdd = []

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

  div.innerHTML = '<div id="settings-main"><div id="settings-title"><div>' + elem.parentElement.children[0].value +'</div><div class="button">X</div></div><div id="settings-content"></div><div id="settings-footer"><button>Valider</button> <button>Annuler</button></div></div>';

  document.body.appendChild(div);

  document.getElementById("settings-title").children[1].addEventListener("click", close);
  document.getElementById("settings-footer").children[0].addEventListener("click", function() {
    validate(elem.parentElement.parentElement.parentElement);
  });
  document.getElementById("settings-footer").children[1].addEventListener("click", close);

  setRadios(elem.parentElement.parentElement.parentElement);
}

function add(elem) {
  let div = document.createElement("div");
  div.id = "add";

  div.innerHTML = '<div id="add-main"><div id="add-title"><div>ajouter dans ' + elem.parentElement.children[0].value +'</div><div class="button">X</div></div><div id="add-content"></div><div id="add-footer"><button>Valider</button> <button>Annuler</button></div></div>';

  document.body.appendChild(div);

  document.getElementById("add-title").children[1].addEventListener("click", close);
  document.getElementById("add-footer").children[0].addEventListener("click", function() {
    validateAdd(elem.parentElement.parentElement.parentElement);
  });
  document.getElementById("add-footer").children[1].addEventListener("click", close);

  setRadiosAdd(elem.parentElement.parentElement.parentElement);
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

function setRadiosAdd() {
  content = document.getElementById("add-content");
  content.innerHTML = '<form name="select-type">type de pièce<br></form>';
  type = "pièce";

  form = document["select-type"];
  for (k in settingsData[type]) {
    radio = document.createElement("input");
    radio.type = "radio";
    radio.value = k;
    radio.name = "select-type";
    form.append(radio);
    form.append(" " + k);
    form.append(document.createElement("br"));
  }

  if (dataAdd.length == 0) {
    dataAdd.push(["pièce honorable"]);
  }
  form["select-type"].value = dataAdd[0];

  form["select-type"].forEach(elem => {
    elem.addEventListener("change", function() {
      setRadiosAdd();
    })
  });

  data = settingsData[type][form["select-type"].value];
  setRadiosRecursiveAdd(data, 1);
}

function setRadiosRecursiveAdd(data, depth) {
  content = document.getElementById("add-content");

  let firstTime = false;
  if (dataAdd.length == depth) {
    firstTime = true;
    dataAdd.push([]);
  }

  let i = 0;

  for (let k in data) {
    let form = document.createElement("form");
    form.name = "select-" + k
    for (j = 0; j < depth; j++) {
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
      if (firstTime) {
        dataAdd[depth].push(first);
      }
      form["select-" + k].value = dataAdd[depth][i];
      if (form["select-" + k].value == "") {
        form["select-" + k].value = first;
      }
      content.append(form);
      form["select-" + k].forEach(elem => {
        elem.addEventListener("change", function() {
          dataAdd[depth][i] = elem.value;
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
      if (firstTime) {
        dataAdd[depth].push(first);
      }
      // if (piece.attributes[k] == undefined) {
      //   piece.setAttribute(k, first);
      // }
      // selected = piece.attributes[k].value;
      form["select-" + k].value = selected;

      if (form["select-" + k].value == "") {
        form["select-" + k].value = first;
        selected = first;
      }
      content.append(form);
      setRadiosRecursiveAdd(data[k][selected], depth+1);
      form["select-" + k].forEach(elem => {
        elem.addEventListener("change", function() {
          // piece.attributes[elem.name.replace("select-", "")].value = elem.value;
          setRadiosAdd();
        })
      });
    }
    i++;
  }
}

function close() {
  if (document.getElementById("settings") != null) {
    document.getElementById("settings").remove();
  }
  else {
    document.getElementById("add").remove();
  }
}

function validate(elem) {
  if (elem.attributes.type.value == "partition") {
    let n = 2;
    let depth	= elem.attributes.depth.value;
    let content = elem.children[3];
    let name = elem.children[0].children[1].children[0].value;
    if (elem.attributes.partition.value.includes("écartelé")) {
      n = 4;
    }
    let offset = content.children.length;
    n -= offset;
    for (let i = 0; i < n; i++) {
      let part = document.createElement("div");
      part.className = "piece";
      part.setAttribute("type", "émail");
      part.setAttribute("émail", i+1+offset);
      part.setAttribute("depth", parseInt(depth)+1);
      let div = document.createElement("div");
      let prefix = document.createElement("prefix");
      prefix.className = "prefix";
      prefix.innerHTML = "&nbsp&nbsp"
      for (let j = 0; j < depth; j++) {
        prefix.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
      }
      prefix.innerHTML += '└─ ';
      div.append(prefix);
      div.innerHTML += '<div class="part"><input type="text" value="' + name + " - " + (i+1+offset) + '"><div class="button">⚙️</div><div class="button">+</div></div>';
      part.append(div);
      part.innerHTML += '<div class="honor"></div><div class="meuble"></div><div class="children"></div>'

      content.append(part);
      part.children[0].children[1].children[1].addEventListener("click", function() {
        settings(part.children[0].children[1].children[1]);
      });
    }
    n *= -1;
    for (let i = 0; i < n; i++) {
      content.children[content.children.length-1].remove();
    }
  }
  close();
  draw();
}

function validateAdd(elem) {
  
}

function draw() {
  ctx = document.getElementById("canvas").getContext('2d');

  const path = new Path2D();
  path.moveTo(0, 0);
  path.lineTo(500, 0);
  path.lineTo(500, 400);
  path.bezierCurveTo(500, 550, 500, 550, 250, 800);
  path.bezierCurveTo(0, 550, 0, 550, 0, 400);
  path.lineTo(0, 0);
  ctx.stroke(path);

  // ctx.save();
  drawRecursive(document.getElementById("base"), [path], [0, 0, 500, 800])
}






















function waitingKeypress() {
  return new Promise((resolve) => {
    document.addEventListener('keydown', onKeyHandler);
    function onKeyHandler(e) {
      if (e.keyCode === 13) {
        document.removeEventListener('keydown', onKeyHandler);
        resolve();
      }
    }
  });
}

function drawRecursive(elem, paths, zone) {
  let ctx = document.getElementById("canvas").getContext('2d');
  // ctx.fillStyle = "#ffffff"
  // ctx.fillRect(0, 0, 500, 800);
  
  // console.log(elem);
  // console.log(paths);
  // console.log(zone);
  
  paths.forEach((path, i) => {
    // ctx.strokeStyle = colors[i].color;
    // ctx.stroke(path);
    ctx.clip(path);
  });
  
  // await waitingKeypress();
  // console.log("==================");

  if (elem.attributes.type.value == "émail") {
    let colorId = elem.attributes["émail"].value;
    if (colors[colorId].type != "fourrure") {
      ctx.fillStyle = colors[colorId].color;
      ctx.fillRect(0, 0, 500, 800);
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
      for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
        for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
          ctx.fillStyle = colors[shape[j%shape.length][i%shape[0].length]].color;
          ctx.fillRect(i, j, 1, 1);
        }
      }
    }
  }

  if (elem.attributes.type.value == "motif") {
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
            for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
              offset = parseInt(pal*zone[2]/n + zone[0]);
              ctx.fillRect(i + offset, j, 1, 1);
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
          for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
            for (let j = 0; j < zone[3]/n; j++) {
              offset = parseInt(pal*zone[3]/n + zone[1]);
              ctx.fillRect(i, j + offset, 1, 1);
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
        for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
          for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
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
        for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
          for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
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
        break;
      case "chevronné":
        if (elem.attributes.forme.value == "de quatre pièces") {
          n = 4;
        }
        if (elem.attributes.forme.value == "de huit pièces") {
          n = 8;
        }
        ctx.fillStyle = colors[elem.attributes["émail-1"].value].color;
        ctx.fillRect(0, 0, 500, 800);
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
        for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
          for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
            emaux.forEach(element => {
              if (ctx.isPointInPath(element, i, j)) {
                ctx.fillRect(i, j, 1, 1);
                // break
              }
            });
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
        ctx.fillRect(0, 0, 500, 800);
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
        for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
          for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
            emaux.forEach(element => {
              if (ctx.isPointInPath(element, i, j)) {
                ctx.fillRect(i, j, 1, 1);
                // break
              }
            });
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
        
        for (let i = zone[0]; i < zone[0]+zone[2]; i++) {
          if (i%Math.round((zone[2]-zone[0])/n) == zone[0]%Math.round((zone[2]-zone[0])/n)  && i < zone[2] - (zone[2]-zone[0])/(2*n)) {
            if (color) {
              ctx.fillStyle = color2;
            }
            else {
              ctx.fillStyle = color1;
            }
            color = !color;
          }
          for (let j = zone[1]; j < zone[1]+zone[3]; j++) {
            if (j%Math.round((zone[3]-zone[1])/n) == zone[1]%Math.round((zone[3]-zone[1])/n) && j < zone[3] - (zone[3]-zone[1])/(2*n)) {
              if (color) {
                ctx.fillStyle = color2;
              }
              else {
                ctx.fillStyle = color1;
              }
              color = !color;
            }
            ctx.fillRect(i, j, 1, 1);
          }
        }
        break;
    }
  }

  if (elem.attributes.type.value == "partition") {
    let n = elem.children[3].children.length;
    let part = new Path2D();

    switch (elem.attributes.partition.value) {
      case "parti":
        for (let i = 0; i < n; i++) {
          part = new Path2D();
          part.moveTo(zone[0]+i*zone[2]/n, zone[1]);
          part.lineTo(zone[0]+(i+1)*zone[2]/n, zone[1]);
          part.lineTo(zone[0]+(i+1)*zone[2]/n, zone[1]+zone[3]);
          part.lineTo(zone[0]+i*zone[2]/n, zone[1]+zone[3]);
          part.closePath();
          paths.push(part);
          ctx.save();
          drawRecursive(elem.children[3].children[i], paths, [zone[0]+i*zone[2]/n, zone[1], zone[2]/n, zone[3]]);
          ctx.restore();
          paths.pop();
        }
        break;
      case "coupé":
        for (let i = 0; i < n; i++) {
          part = new Path2D();
          part.moveTo(zone[0], zone[1]+i*zone[3]/n);
          part.lineTo(zone[0], zone[1]+(i+1)*zone[3]/n);
          part.lineTo(zone[0]+zone[2], zone[1]+(i+1)*zone[3]/n);
          part.lineTo(zone[0]+zone[2], zone[1]+i*zone[3]/n);
          part.closePath();
          paths.push(part);
          ctx.save();
          drawRecursive(elem.children[3].children[i], paths, [zone[0], zone[1]+i*zone[3]/n, zone[2], zone[3]/n]);
          ctx.restore();
          paths.pop();
        }
        break;
      case "taillé":
        part = new Path2D();
        part.moveTo(zone[0], zone[1]);
        part.lineTo(zone[0], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2], zone[1]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[0], paths, zone);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2], zone[1]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[1], paths, zone);
        ctx.restore();
        paths.pop();
        break;
      case "tranché":
        part = new Path2D();
        part.moveTo(zone[0]+zone[2], zone[1]);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[0], paths, zone);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[1], paths, zone);
        ctx.restore();
        paths.pop();
        break;
      case "écartelé":
        part = new Path2D();
        part.moveTo(zone[0], zone[1]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.lineTo(zone[0], zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[0], paths, [zone[0], zone[1], zone[2]/2, zone[3]/2]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0]+zone[2]/2, zone[1]);
        part.lineTo(zone[0]+zone[2], zone[1]);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]/2);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[1], paths, [zone[0]+zone[2]/2, zone[1], zone[2]/2, zone[3]/2]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0], zone[1]+zone[3]/2);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]+zone[3]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[2], paths, [zone[0], zone[1]+zone[3]/2, zone[2]/2, zone[3]/2]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]/2);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[3], paths, [zone[0]+zone[2]/2, zone[1]+zone[3]/2, zone[2]/2, zone[3]/2]);
        ctx.restore();
        paths.pop();
        break;
      case "écartelé en sautoir":
        part = new Path2D();
        part.moveTo(zone[0], zone[1]);
        part.lineTo(zone[0]+zone[2], zone[1]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[0], paths, [zone[0], zone[1], zone[2], zone[3]/2]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0], zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[1], paths, [zone[0], zone[1], zone[2]/2, zone[3]]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0]+zone[2], zone[1]);
        part.lineTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[2], paths, [zone[0]+zone[2]/2, zone[1], zone[2]/2, zone[3]]);
        ctx.restore();
        paths.pop();
        part = new Path2D();
        part.moveTo(zone[0]+zone[2], zone[1]+zone[3]);
        part.lineTo(zone[0], zone[1]+zone[3]);
        part.lineTo(zone[0]+zone[2]/2, zone[1]+zone[3]/2);
        part.closePath();
        paths.push(part);
        ctx.save();
        drawRecursive(elem.children[3].children[3], paths, [zone[0], zone[1]+zone[3]/2, zone[2], zone[3]/2]);
        ctx.restore();
        paths.pop();
        break;
    }
  }
}

draw();

// console.log("loaded");