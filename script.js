let submitName = document.querySelector('#submitName')
let inputName = document.querySelector('#inputName')
let commander = document.querySelector('#commanderImg')
let partnerCommander = document.querySelector('#partnerCommander')
let diceCase = document.querySelector('.diceCase')
let zoom = false
let zoom2 = false
let zoomForPartner = false
let players = []
let life = []
let infect = []
let mark = []
let partner = []
let commanderImgs = []
let playersHtml = ''
let counter = 0


const turnIntoJson = (response) => {
  return response.json()
}
commander.addEventListener('input', () => {
console.log(commander.value)


fetch(`https://api.scryfall.com/cards/autocomplete?q=${commander.value}`)
// .then(response => fetch(`https://api.scryfall.com/cards/${response[1]}`) ) ou alg assim, segue  baile e dps vlta aqui
.then (turnIntoJson)
.then (response => {console.log(response).object})
.then(response => {console.log(response)})
})

//  PODIA SER ASSIM, OU ARRAYS AQUI NO JS COM IMGS TBM

let d6 = [
  //1
  '<img class="d6Sides" id="d61" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOpospKc0gWeH0p6eafK9T3Bq3f1AEGEfnQ&usqp=CAU"></img>',
  //2
  '<img class="d6Sides" id="d62" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QDi72w0BA5jovkEKshRW5DrTSC8bu2LzHw&usqp=CAU"></img>',

  //3
  '<img class="d6Sides" id="d63" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiF0lftcMuksmLf9gDFia6OXFvf3tiLnnzg&usqp=CAU"></img>',
  //4
  '<img class="d6Sides" id="d64" src="https://image.shutterstock.com/image-photo/two-dice-on-black-desk-260nw-506596414.jpg"></img>',
  // 5
  '<img class="d6Sides" id="d65" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsZMrExIh9xGcoHheXJSZ8xMJWyCJFJacwd4lvE7rnZAlO75B-vrdCZmkeet8gfnzV_Y&usqp=CAU"></img>',
  //6
  ' <img class="d6Sides" id="d66" src="https://img.freepik.com/free-icon/six-result-dice_318-9190.jpg?size=338&ext=jpg"></img>'
]

let d20 = [
  //1
  '<img src="https://images1.sw-cdn.net/cdn-cgi/image/quality=85,gravity=auto,format=auto,fit=scale-down,width=1920/product/picture/710x528_22306003_12462648_1518828082_1_0.jpg"></img>'
  //2

  //3

  //4

  //5

  //6

  //7

  //8

  //9

  //10

  //11

  //12

  //13

  //14

  //15

  //16

  //17

  //18

  //19

  //20
]

function rollD6(player) {
  let d6Result = parseInt(Math.random() * 6 + 1)
  console.log(d6Result)

  if (d6Result == 1) {
    diceCase.innerHTML = `${player.id}'s D6: 1`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d6Result == 2) {
    diceCase.innerHTML = `${player.id}'s D6: 2`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d6Result == 3) {
    diceCase.innerHTML = `${player.id}'s D6: 3`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d6Result == 4) {
    diceCase.innerHTML = '4'
    setTimeout(function () {
      diceCase.innerHTML = `${player.id}'s D6: 4`
    }, 5000)
  } else if (d6Result == 5) {
    diceCase.innerHTML = `${player.id}'s D6: 5`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d6Result == 6) {
    diceCase.innerHTML = `${player.id}'s D6: 6`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  }

  // todos os IDs estão iguais a um único valor, NÃO PODE!!!!
}

function rollD20(player) {
  let d20Result = parseInt(Math.random() * 20 + 1)
  console.log(d20Result)
  if (d20Result == 1) {
    diceCase.innerHTML = `${player.id}'s D20: 1`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 2) {
    diceCase.innerHTML = `${player.id}'s D20: 2`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 3) {
    diceCase.innerHTML = `${player.id}'s D20: 3`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 4) {
    diceCase.innerHTML = `${player.id}'s D20: 4`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 5) {
    diceCase.innerHTML = `${player.id}'s D20: 5`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 6) {
    diceCase.innerHTML = `${player.id}'s D20: 6`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 7) {
    diceCase.innerHTML = `${player.id}'s D20: 7`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 8) {
    diceCase.innerHTML = `${player.id}'s D20: 8`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 9) {
    diceCase.innerHTML = `${player.id}'s D20: 9`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 10) {
    diceCase.innerHTML = `${player.id}'s D20: 10`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 11) {
    diceCase.innerHTML = `${player.id}'s D20: 11`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 12) {
    diceCase.innerHTML = `${player.id}'s D20: 12`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 13) {
    diceCase.innerHTML = `${player.id}'s D20: 13`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 14) {
    diceCase.innerHTML = `${player.id}'s D20: 14`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 15) {
    diceCase.innerHTML = `${player.id}'s D20: 15`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 16) {
    diceCase.innerHTML = `${player.id}'s D20: 16`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 17) {
    diceCase.innerHTML = `${player.id}'s D20: 17`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 18) {
    diceCase.innerHTML = `${player.id}'s D20: 18`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 19) {
    diceCase.innerHTML = `${player.id}'s D20: 19`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  } else if (d20Result == 20) {
    diceCase.innerHTML = `${player.id}'s D20: 20`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayed Here'
    }, 5000)
  }
}

const flipCoin = player => {
  let coinResult = parseInt(Math.random() * 2 + 1)
  console.log(coinResult)
  if (coinResult == 1) {
    diceCase.innerHTML = `${player.id}'s Coin: Heads`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayer Here'
    }, 5000)
  } else {
    diceCase.innerHTML = `${player.id}'s Coin: Tails`
    setTimeout(function () {
      diceCase.innerHTML = 'Dice displayer Here'
    }, 5000)
  }
}

submitName.onclick = function registerName() {
  if (!commander.value || !inputName.value) {
    alert('Please, fill both inputs: your name and commander image URL')
    return
  } else {
    players.push(inputName.value)
    life.push(40)
    infect.push(0)
    mark.push(0)
    commanderImgs.push(commander.value)
    if (partnerCommander.value == '') {
      partner.push(
        'https://centralrockgym.com/watertown/wp-content/uploads/sites/19/nopartnernoproblem-logo-yellowbr-1440x960.jpg'
      )
    } else {
      partner.push(partnerCommander.value)
    }

    for (i = counter; i < players.length; i++) {
      playersHtml += `
      <tr>
          <th>Name</th>
          <th>Life</th>
          <th>Infect</th>
          <th>Exp Counter</th>

          <th colspand="3">Ações</th>
      </tr>
      <tr>
        <td id="${inputName.value}">${inputName.value}</td>
        <td  id="${i}_life" ">${life[i]}</td>
        <td  id="${i}_infect">${infect[i]}</td>
        <td  id="${i}_mark">${mark[i]}</td>
      
      
        
      
        
     
        <td><button id="playerActions" onClick="increaseLifePoints(${i})">+</button>Life<button id="playerActions" onClick="decreaseLifePoints(${i})">-</button>
        <button id="playerActions" onClick="increaseInfectPoints(${i})">+</button>Infect<button id="playerActions" onClick="decreaseInfectPoints(${i})">-</button>
        <button id="playerActions" onClick="increaseMarkPoints(${i})">+</button>Exp Counter<button id="playerActions" onClick="decreaseMarkPoints(${i})">-</button></td>
      </tr>
      
      <tr>
        <td> <img class="commanderCase" id="commanderZoom${i}" src="${commanderImgs[i]}" onclick="magnify(${i})"><img class="partnerCase" id="partnerZoom${i}" src="${partner[i]}" onclick="magnifyPartner(${i})"></td>
        
        <td colspan="3">
        P1 Commander's DMG <input class="commanderDmg"></input><input class="commanderDmg"></input></br>P2 Commander's DMG <input class="commanderDmg"></input><input class="commanderDmg"></input></br>P3 Commander's DMG <input class="commanderDmg"></input><input class="commanderDmg"></input></br>P4 Commander's DMG <input class="commanderDmg"></input><input class="commanderDmg"></input></br>P5 Commander's DMG <input class="commanderDmg"></input><input class="commanderDmg"></input>
        <td colspan="3"><button onclick="rollD6(${inputName.value})">Roll D6</button></br><button onclick="rollD20(${inputName.value})">Roll D20</button>
        <button onclick="flipCoin(${inputName.value})">Flip Coin</button>
        </td>
        </td>
      </tr>

      
     `
      counter++
      commander.value = ''
      partnerCommander.value = ''
    }

    // console.log(counter)
    // console.log(i)

    document.querySelector('#playerTable').innerHTML = playersHtml

    inputName.value = ''

    saveData()
  }
}

// saveData tem que ser feito sempre a partir do 0 porque substituir innerHTML = playersHtml substitui todos os valores dnv ao invés de apenas adicionar dados da ultima linha!!

function saveData() {
  for (n = 0; n < players.length; n++) {
    document.getElementById(`${n}_life`).innerHTML = life[n]

    document.getElementById(`${n}_infect`).innerHTML = infect[n]

    document.getElementById(`${n}_mark`).innerHTML = mark[n]
  }
}

function increaseLifePoints(i) {
  life[i] += 1

  document.getElementById(`${i}_life`).innerHTML = life[i]
}

function decreaseLifePoints(i) {
  life[i] -= 1

  document.getElementById(`${i}_life`).innerHTML = life[i]
}

function increaseInfectPoints(i) {
  infect[i] += 1

  document.getElementById(`${i}_infect`).innerHTML = infect[i]
}

function decreaseInfectPoints(i) {
  infect[i] -= 1

  document.getElementById(`${i}_infect`).innerHTML = infect[i]
}

function increaseMarkPoints(i) {
  mark[i] += 1

  document.getElementById(`${i}_mark`).innerHTML = mark[i]
}

function decreaseMarkPoints(i) {
  mark[i] -= 1

  document.getElementById(`${i}_mark`).innerHTML = mark[i]
}

function magnify(commander) {
  let commanderZoom = document.querySelector(`#commanderZoom${commander}`)
  let commanderCase = document.querySelectorAll('.zoom')

  if (commanderCase.length < 1) {
    console.log('1')
    commanderZoom.classList.add('zoom')
  } else {
    console.log('2')
    commanderZoom.classList.remove('zoom')
    commanderCase.forEach(element => {
      element.classList.remove('zoom')
    })
  }
  console.log(commanderCase)
}
/* commanderCase.forEach(element => {
  element.classList.remove('zoom')
}) */

function magnifyPartner(partner) {
  let partnerZoom = document.querySelector(`#partnerZoom${partner}`)
  if (
    partnerZoom.src ==
    'https://centralrockgym.com/watertown/wp-content/uploads/sites/19/nopartnernoproblem-logo-yellowbr-1440x960.jpg'
  ) {
    return
  }

  if (zoomForPartner == false && zoom == true) {
    return
    //sepa deixar "zoomPartner = false / true (pq conflito com zoom = true/false"
  } else if (zoomForPartner == false && zoom == false) {
    zoomForPartner = true
    partnerZoom.classList.add('zoom')
  } else if (zoomForPartner == true) {
    partnerZoom.classList.remove('zoom')
    zoomForPartner = false
  }
}
