export const TypesColors = (type: string) => {
  switch (type) {
    case "normal":
      return {
        main: "#A8A77A",
        bright: "#D3CC93"
      }
    case "fire":
      return {
        main: "#EE8130",
        bright: "#FF9C38"
      }
    case "water":
      return {
        main: "#6390F0",
        bright: "#7AA8FF"
      }
    case "grass":
      return {
        main: "#7AC74C",
        bright: "#94E460"
      }
    case "ice":
      return {
        main: "#96D9D6",
        bright: "#B6F3F1"
      }
    case "electric":
      return {
        main: "#F7D02C",
        bright: "#FFEB38"
      }
    case "flying":
      return {
        main: "#A98FF3",
        bright: "#C3A8FF"
      }
    case "fighting":
      return {
        main: "#C22E28",
        bright: "#E43A32"
      }
    case "psychic":
      return {
        main: "#F95587",
        bright: "#FF6A9F"
      }
    case "poison":
      return {
        main: "#A33EA1",
        bright: "#C351C4"
      }
    case "ground":
      return {
        main: "#E2BF65",
        bright: "#FFE07A"
      }
    case "bug":
      return {
        main: "#A6B91A",
        bright: "#C1D624"
      }
    case "rock":
      return {
        main: "#B6A136",
        bright: "#E3C042"
      }
    case "ghost":
      return {
        main: "#735797",
        bright: "#8C6DB3"
      }
    case "dragon":
      return {
        main: "#6F35FC",
        bright: "#8F43FF"
      }
    case "dark":
      return {
        main: "#705746",
        bright: "#8C6B56"
      }
    case "steel":
      return {
        main: "#B7B7CE",
        bright: "#D4D4F1"
      }
    case "fairy":
      return {
        main: "#D685AD",
        bright: "#FFA0C5"
      }
  }
}