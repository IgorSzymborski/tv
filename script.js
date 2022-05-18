const tv = {
  currentProgram: {
    name: "TVP1",
    channelNo: 1
  },
  programsList: [{
      name: "TVP1",
      channelNo: 1
    },
    {
      name: "TVP2",
      channelNo: 2
    },
    {
      name: "Polsat",
      channelNo: 3
    },
    {
      name: "TV 4",
      channelNo: 4
    },
    {
      name: "TVN",
      channelNo: 5
    },
    {
      name: "TVN Trubo",
      channelNo: 6
    },
    {
      name: "HBO",
      channelNo: 7
    },
    {
      name: "Canal plus",
      channelNo: 8
    }
  ],
  volume: 5
};

const channelInput = document.querySelector("#channelInput");
const channelButton = document.querySelector("#channelButton");
const volumeUpButton = document.querySelector("#volumeUp");
const volumeDownButton = document.querySelector("#volumeDown");

const displayOnTv = () => {
  const program = tv.currentProgram
  const tvEl = document.querySelector('#tv')

  const volumeContainerEl = document.createElement('div')
  volumeContainerEl.setAttribute('id', 'volume')

  const channelNoEl = document.createElement('div')
  channelNoEl.classList.add('channelNo')
  channelNoEl.append(program.channelNo)

  const nameEl = document.createElement('div')
  nameEl.classList.add('name')
  nameEl.append(program.name)

  for (let i = 0; i < tv.volume && i <= 20; i++) {
    const volumeBrick = document.createElement('span')
    volumeBrick.classList.add('volumeBrick')
    volumeContainerEl.append(volumeBrick)
  }

  if (tv.volume === 0) {
    volumeContainerEl.append('MUTED')
  }

  tvEl.innerHTML = ''
  tvEl.append(channelNoEl)
  tvEl.append(nameEl)
  tvEl.append(volumeContainerEl)

}

displayOnTv();

// changeProgram function
// receives one argument - channel number
// find program in program list
// - use channel number to search
// check out parseInt function
// if there is no program to be found don't change program
// override tv currentProgram with the new one
// display on tv
const changeProgram = (channelNo) => {
  const int = parseInt(channelNo)
  const foundProgram = tv.programsList.find(program => {
    return int === program.channelNo
  })
  if (foundProgram === undefined) {
    return
  }

  tv.currentProgram = foundProgram
  displayOnTv()

  console.log(int);
}

// changeVolume function
// receives one argument
// override tv volume with the new one
const changeVolume = (volume) => {
  tv.volume = volume
  displayOnTv()
}

// use changeVolume function
// receives no arguments
// max volume 20
const volumeUp = () => {
  const newV = tv.volume + 1
  if (tv.volume <= 20) {
    changeVolume(newV)
  }
}

// use changeVolume function
// receives no arguments
// min volume 0
const volumeDown = () => {
  const newV = tv.volume - 1
  if (tv.volume <= 0) {
    return
  } else {
    changeVolume(newV)
  }
}

channelButton.addEventListener('click', function () {
  changeProgram(channelInput.value)
})

volumeUpButton.addEventListener('click', function () {
  volumeUp()
})

volumeDownButton.addEventListener('click', function () {
  volumeDown()
})

const arrayName = [{
    name: "Adrian",
  },
  {
    name: "Igor"
  },
]

const objectName = {
  name: "Iga",
  age: 18,
  hair: 'blonde'
  // name: "Jadwiga",
}

const a = arrayName.forEach(
  (person) => person.name
)

const b = Object.values(objectName)

const c = b.forEach(
  (person) => person
)

console.log(c)
console.log(b)


console.log(objectName);