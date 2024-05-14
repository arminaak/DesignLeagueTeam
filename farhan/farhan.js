const container = document.querySelector('.content');
const coinSfx = new Sfx('farhan/GameAssets/Sounds/Mario Coin.wav');
const pipeSfx = new Sfx('farhan/GameAssets/Sounds/Mario Pipe.wav');
const powerUpSfx = new Sfx('farhan/GameAssets/Sounds/Mario Powerup.wav');
let ninja;

function Sfx(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  };
}

function Ninjas(name, age, height, color) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.color = color;

  this.coin = () => {
    // audio
    coinSfx.play();

    const button = document.querySelector('#btnCoin');

    button.style.setProperty('background-color', 'green');
    button.style.setProperty('border-color', 'black');
    button.style.setProperty('color', 'white');

    // coin effect
    const coinImg = document.createElement('img');
    coinImg.setAttribute('src', 'farhan/GameAssets/Images/coin.png');
    coinImg.setAttribute('id', 'coin-img');
    coinImg.style.transform = 'translate(-50%, calc(-100% - ' + ninja.height + 'px)';
    container.appendChild(coinImg);

    $('#coin-img').animate({ top: '60%', opacity: 1 }, 250);
    $('#coin-img').animate({ top: '70%', opacity: 0 }, 250, () => {
      $('#coin-img').remove();
      button.style.setProperty('background-color', 'blue');
      button.style.setProperty('border-color', 'var(--accent-color)');
      button.style.setProperty('color', 'var(--accent-color)');
    });
  };

  this.pipe = () => {
    piperSfx.play();
  };

  this.powerUp = () => {
    powerUpSfx.play();
  };
}

const promptUser = () => {
  let name = prompt('What is your name?') || 'Ninja';
  let age;
  let height;
  let color;

  this.getAge = () => {
    age = prompt('Pick an age:') || '18';
    age = parseInt(age);
    if (isNaN(age)) {
      this.getAge();
    } else {
      return;
    }
  };

  this.getHeight = () => {
    height = prompt('Pick height: 1, 2, 3, 4') || 4;
    height = parseInt(height);
    if (height === 1 || height === 2 || height === 3 || height === 4) {
      height = height * 64;
      return;
    } else {
      this.getHeight();
    }
  };

  this.getColor = () => {
    color = prompt('Pick a color: red, blue, green') || 'red';
    color = color.toLowerCase();
    if (color === 'red' || color === 'blue' || color === 'green') {
      return;
    } else {
      this.getColor();
    }
  };

  this.appendImg = () => {
    img = document.createElement('img');
    let size = 'width:' + height + 'px;height:' + height + 'px;';
    if (color === 'blue') {
      img.setAtrribute('src', 'farhan/GameAssets/img/NinjaSprite/ninja1.png');
      img.setAtrribute('style', size);
      container.appendChild(img);
    } else if (color === 'green') {
      img.setAtrribute('src', 'farhan/GameAssets/img/NinjaSprite/ninja2.png');
      img.setAtrribute('style', size);
      container.appendChild(img);
    } else if (color === 'red') {
      img.setAtrribute('src', 'farhan/GameAssets/img/NinjaSprite/ninja3.png');
      img.setAtrribute('style', size);
      container.appendChild(img);
    }
  };


  this.changeBtns = () => {
    const btn = document.querySelector('button');
    const btnContainer = document.querySelector('.btns-container');
    btnContainer.removeChild(btn);
    btnContainer.innerHTML =
      "<button onclick='ninja.coin()' id='btnCoin'>Coin</button> \n <button onclick='ninja.pipe()' id='btnPipe'>Pipe</button> \n <button onclick='ninja.powerUp()' id='btnPowerUp'>Power Up</button>"; 
    const newBtns=document.querySelectorAll('button');
    for (let i = 0; i < newBtns.length; i++) {
      newBtns[i].style.setProperty('margin-left', '1.5ren');
    }
    // Add floor

    const floor = document.createElement('div');
    floor.setAttribute('class', 'floor');
    container.appendChild(floor);
    floor.innerHTML =
      'Name: ' +
      ninja.name +
      '\xa0\xa0\xa0Age: ' +
      ninja.age +
      '\xa0\xa0\xa0Height: ' +
      ninja.height +
      'px' +
      '\xa0\xa0\xa0Color: ' +
      ninja.color;
  };

  this.getAge();
  this.getHeight();
  this.getColor();

  ninja = new Ninjas(name, age, height, color);

  this.appendImg();
  this.channgeBtns();
};