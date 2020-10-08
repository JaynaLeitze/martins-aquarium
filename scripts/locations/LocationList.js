import {Locations} from "./Locations.js"

import {useLocations} from "./LocationDataProvider.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".contentContainer__left")

    const locations = useLocations()

    let locationHTMLRepresentations = ""
    for (const travel of locations){
        locationHTMLRepresentations += Locations(travel)
    }

    contentElement.innerHTML += `
    <section class="harvesting__locations>
    <h3>Harvesting Locations</h3>
    <div>
    ${locationHTMLRepresentations}
    </div>
    </section>
    `
}