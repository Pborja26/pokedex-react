export function UsePokeTypeColor(type: string) {
    const colors = {
        normal: {
            main: " #A8A77A",
            bright: " #C9C89B"
        },
        fire: {
            main: " #EE8130",
            bright: " #FF9E5A"
        },
        water: {
            main: " #6390F0",
            bright: " #8AB1FF"
        },
        electric: {
            main: " #F7D02C",
            bright: " #FFE256"
        },
        grass: {
            main: " #7AC74C",
            bright: " #9FDD6F"
        },
        ice: {
            main: " #96D9D6",
            bright: " #BBF0ED"
        },
        fighting: {
            main: " #C22E28",
            bright: " #E3504C"
        },
        poison: {
            main: " #A33EA1",
            bright: " #C162C0"
        },
        ground: {
            main: " #E2BF65",
            bright: " #F3D890"
        },
        flying: {
            main: " #A98FF3",
            bright: " #C6ADFF"
        },
        psychic: {
            main: " #F95587",
            bright: " #FF79A7"
        },
        bug: {
            main: " #A6B91A",
            bright: " #C7DC3C"
        },
        rock: {
            main: " #B6A136",
            bright: " #D6C359"
        },
        ghost: {
            main: " #735797",
            bright: " #9274B5"
        },
        dragon: {
            main: " #6F35FC",
            bright: " #9163FF"
        },
        dark: {
            main: " #705746",
            bright: " #8F6D58"
        },
        steel: {
            main: " #B7B7CE",
            bright: " #D5D5EB"
        },
        fairy: {
            main: " #D685AD",
            bright: " #F2A6CC"
        },
    } as const;
    
    return colors[type.toLowerCase() as keyof typeof colors] ?? {
        main: "#777",
        bright: "#999"
    };
}
