/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
            Image:"./images/orange-spotted.jpeg" ,
            Name: "Dot",
            Species: "Sailfin Tang",
            Length: 3,
            Location: "South Pacific",
            Diet: "microalgae",
            
    },
    {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Length: 9,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    },
    {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Length: 12,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    },
    {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Length: 15,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    }, {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Length: 22,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    },
    {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Length: 16,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    },
]

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []
    for (const fish of fishCollection) {
        if (fish % 3 === 0){
            console.log(fish)
        }
    }

    return holyFish
}
export const soldierFish = () => {
    // 3, 6, 9, 12, etc... fish
    const soldiers = []
    for (const fish of fishCollection) {
        if (fish % 5 === 0){
            console.log(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    const nonHoly = []
    for (const fish of fishCollection) {
        if (fish % 3 || 5 !== 0){
            console.log(fish)
        }
    }

    return nonHoly
}
    export const useFish = () => {
        return fishCollection.slice()
    }
    