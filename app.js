console.log('This is random facts website');

//Creating an array with facts 
const facts = [
    'Mars is home to the tallest mountain in our solar system.',
    'Only 18 out of 40 missions to Mars have been successful.',
    'Pieces of Mars have fallen to Earth.',
    'One year on Mars is 687 Earth days.',
    'The temperature on Mars ranges from -153 to 20 °C.',
    'One year on Mercury is about 88 Earth days.',
    'The surface temperature of Mercury ranges from -173 to 427°C.',
    'Mercury was first discovered in 14th century by Assyrian astronomers.',
    'Your weight on Mercury would be 38% of your weight on Earth.',
    'A day on the surface of Mercury lasts 176 Earth days.',
    'The surface temperature of Venus is about 462 °C.',
    'It takes Venus 225 days to orbit the sun.',
    'Venus was first discovered by 17th century Babylonian astronomers.',
    'Venus is nearly as big as the Earth with a diameter of 12,104 km.',
    "The Earth's rotation is gradually slowing.",
    'There is only one natural satellite of the planet Earth, the moon.',
    'Earth is the only planet in our solar system not named after a god.',
    'The Earth is the densest planet in the solar system.',
    'A year on Jupiter lasts around 4333 earth days.',
    'The surface temperature of Jupiter is around -108°C.',
    'Jupiter was first discovered by 7th or 8th century Babylonian astronomers.',
    'Jupiter has 4 rings.',
    'A day on Jupiter lasts 9 hours and 55 minutes.',
    'Saturn was first discovered by 8th century Assyrians.',
    'Saturn takes 10756 days to orbit the Sun.',
    'Saturn can be seen with the naked eye.',
    'Saturn is the flattest planet.',
    'Saturn is made mostly of hydrogen.',
    'Four spacecraft have visited Saturn.',
    'Uranus was discovered by William Herschel in 1781.',
    'A year on Uranus takes 30687 earth days.',
    'Uranus turns on its axis once every 17 hours, 14 minutes.',
    'With minimum atmospheric temperature of -224°C Uranus is nearly coldest planet in the solar system.',
    'Only one spacecraft has flown by Uranus, the Voyager 2.',
    'Neptune was discovered in 1846 by Urbain Le Verrier and Johann Galle.',
    'Neptune has 14 moons.',
    'The average temperatue of Neptune is about -201 °C.',
    'There is a 1:20 million scale model of the solar system in Sweden.',
    'The gap between the Earth and our moon is bigger than the diameters of all the planets combined.',
    "The first accurate calculation of the speed of light was using Jupiter's moons",
    "Jupiter's magnetic field is believed to be a result of rapidly spinning metallic hydrogen at the core, and is ~10x stronger than the Earth's.",
    'Venus spins backwards.',
    'Uranus spins sideways, relative to the ecliptic plane of the solar system.',
    'It is easier to reach Pluto or escape the solar system from Earth than being able to <i>land</i> on the Sun.'
];
let showFacts = document.getElementById('showFacts');

if (showFacts.innerHTML!=null){
    showFacts.innerHTML = facts[Math.round(0+43*Math.random())];
 }
// Creating a random math object which ranges from 0-43
setInterval(showingFacts,5000)
function showingFacts(){
    showFacts.innerHTML = facts[Math.round(0+43*Math.random())];
}
 
