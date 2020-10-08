export const Fish = (fish) => {
    return `
    <div class="fish">
    <img class="fish__image" src="${fish.Image}" alt="">
    <p class="fish__name">Name:${fish.Name}</p>
    <p class="fish__species">Species: ${fish.Species}</p>
    <p class="fish__length">Size Class: ${fish.Length} </p>
    <p class="fish__location">Location: ${fish.Location}</p>
    <p class="fish__Diet">Diet: ${fish.Diet} </p>
</div>
`
}
