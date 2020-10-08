const tipCollection = [
    {
      Topic: "Water Salinization" ,
      Tip:"Pick up a testing kit to monitor the water's PH and salinity."  ,
    }
]

export const useTips = () => {
    return tipCollection.slice()
}