
class Pet {
    constructor(name, sound, image) {
      this.name = name;
      this.sound = sound;
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound);
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
  // Global variable to store the chosen pet
  let currentPet = null;
  
  // ________________________________________
  // Function to choose a pet
  // ________________________________________
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet(
        'Dog',
        'Woof! 🐶',
        'https://images.pexels.com/photos/4588431/pexels-photo-4588431.jpeg'
      );
    } else if (type === 'cat') {
      currentPet = new Pet(
        'Cat',
        'Meow! 🐱',
        'https://media.istockphoto.com/id/971002388/photo/black-cat-wearing-heart-glasses-on-pink-background.jpg?s=1024x1024&w=is&k=20&c=DX6u_0d0ipz4uHz5njfCWhNQ1bEGWOMD3H8_GoFBTKo='
      );
    } else if (type === 'cow') {
      currentPet = new Pet(
        'Cow',
        'Moo! 🐮',
        'https://images.pexels.com/photos/31034003/pexels-photo-31034003.jpeg'
      );
    } else if (type === 'sheep') {
      currentPet = new Pet(
        'Sheep',
        'Baa! 🐑',
        'https://images.pexels.com/photos/7067146/pexels-photo-7067146.jpeg'
      );
    }
  
    
      document.getElementById('petImage').src = currentPet.image;
      document.getElementById('game').style.display = 'block';
      updateCounter(0);
      showFunActions(currentPet.name);

  }
  
  // ________________________________________
  // Function to play with the pet
  // _________________________________________
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  // _________________________________________
  // Function to update the counter
  // _________________________________________
  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  // _______________________________________
  // Function + Loop: Fun pet actions
  // _______________________________________
  function showFunActions(petName) {
    let actions = [];
  
    if (petName === 'Dog') {
      actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
    } else if (petName === 'Cat') {
      actions = ['Meow', 'Purr', 'Chase Mouse'];
    } else if (petName === 'Cow') {
      actions = ['Moo', 'Chew Grass', 'Swish Tail'];
    } else if (petName === 'Sheep') {
      actions = ['Baa', 'Jump', 'Graze'];
    }

    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += `✅ ${actions[i]}<br>`;
    }
  }
  