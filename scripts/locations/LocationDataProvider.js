
const locationCollection = [
    {
        Image:"https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg",
        Location:"Great Barrier Reef",
        Country: "Austrailia",
    },
    {
        Image:"./images/apo_reef.jpg",
        Location:"Apo Reef",
        Country:"Phillipines",
    }

]

export const useLocations = () => {
    return locationCollection.slice()
}

