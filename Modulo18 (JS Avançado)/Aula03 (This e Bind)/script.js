function speakGeneric() {
    console.log(this.sound)
}

let dog = {
    sound: "AU AU",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

/* dog.speak();
cat.speak(); */

let bindedFuntion = speakGeneric.bind(dog);

bindedFuntion()