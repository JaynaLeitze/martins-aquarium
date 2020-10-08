/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
            Name: "Dot",
            Species: "Sailfin Tang",
            Size: "Up to 15 inches",
            Location: "South Pacific",
            Diet: "microalgae",
            Image: "https://i.redd.it/stdlqgg3b6811.jpg",
    },
    {
        Name: "Fabio",
        Species: "Orange Spotted Filefish",
        Size: 9,
        Location: "Great Barrier Reef",
        Diet: "Carnivore",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXX7Wa1YHylF9Vl5PjyUTRzD0jkm-NqlOZeg&usqp=CAU",
    },
]
    export const useFish = () => {
        return fishCollection.slice()
    }
    