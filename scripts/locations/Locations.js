export const Locations = (location) => {
    return `
    <div class="location__item">
    <img class="reef_photo"
        src="${location.Image}">
    <p>Location:${location.Location}<br>
        Country: ${location.Country}</p>
        </div>
    `
}