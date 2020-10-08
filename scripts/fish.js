export const Fish = (fish) => {
    return `
    <div class="fish">
    <img class="fish__image" href="${fish.image}" alt="">
    <p class="fish__name">Name:${fish.name}</p>
    <p class="fish__species">Species: ${fish.species}</p>
    <p class="fish__length">Size Class: ${fish.length} </p>
    <p class="fish__location">Location: ${fish.location}</p>
    <p class="fish__Diet">Diet: ${fish.diet} </p>
</div>
`
}