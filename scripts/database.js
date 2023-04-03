const database = {
    fish: [
        {
            species: "funny lookin fish",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            location: "Atlantic ocean"
        }
        ,{
            species: "arcus piscis",
            name: "Rainbow Fella",
            food: "the souls of your enemies" ,
            size: 3,
            location: "exclusively in water fountains"
        }
        ,{
            species: "pinguis piscis",
            name: "Fat Bobby",
            food: "cheetos" ,
            size: 3,
            location: "The darkest depths of the ocean"
        }
        ,{
            species: "nix alba piscis",
            name: "Whitey",
            food: "pinguis piscis" ,
            size: 3,
            location: "the artic ocean"
        }

    ]
}

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

