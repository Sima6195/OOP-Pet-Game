class Pet {
    constructor(name, soundText, image, soundURL) {
      this.name = name;
      this.soundText = soundText;
      this.image = image;
      this.sound = new Audio(soundURL); 
      this.playCount = 0;
    }
  
    speak() {
      alert(this.soundText);
      this.sound.currentTime = 0;
      this.sound.play();
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
 
  let currentPet = null;
  
  
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet(
        'Dog',
        'Woof! 🐶',
        'https://images.pexels.com/photos/4588431/pexels-photo-4588431.jpeg',
        'dog-barking-374107.mp3' 
      );
    } else if (type === 'cat') {
      currentPet = new Pet(
        'Cat',
        'Meow! 🐱',
        'https://media.istockphoto.com/id/1314290357/photo/british-shorthair-kitten.jpg?s=2048x2048&w=is&k=20&c=mdCEqdiPk2P9L5rIJo8vgR90q7k8fIUbxGKOR_CJ66c=',
        'sound-effect-cat-meow-279336.mp3' 
      );
    } else if (type === 'chicken') {
        currentPet = new Pet(
          'chicken',
          'cluck! 🐓',
          'https://images.pexels.com/photos/33354059/pexels-photo-33354059.jpeg',
          'chicken-sounds-farm-background-sounds-ambient-sounds-143091.mp3');

    } else if (type === 'cow') {
      currentPet = new Pet(
        'Cow',
        'Moo! 🐮',
        'https://images.pexels.com/photos/31034003/pexels-photo-31034003.jpeg',
        'buffalo-call-379276.mp3' 
      );
    }
      
  
    
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
  
 
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  

  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  

  function showFunActions(petName) {
    let actions = [];
  
    if (petName.toLowerCase() === 'dog') {
      actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
    } else if (petName.toLowerCase() === 'cat') {
      actions = ['Meow', 'Purr', 'Chase Mouse'];
    } else if (petName.toLowerCase() === 'cow') {
      actions = ['Moo', 'Chew Grass', 'Swish Tail'];
    } else if (petName.toLowerCase() === 'chicken') {
      actions = ['cluck', 'Jump', 'Graze'];
    }
    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += `✅ ${actions[i]}<br>`;
    }
  }
  