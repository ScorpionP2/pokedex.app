function handleGenerateBg(type){
    switch(type){
        case "Fire":
        return '#FF0000'

        case "Water":
        return '#00CED1'

        case "Grass":
        return '#48D0B0'
        
        case "Eletric":
        return '#FFFF00'

        case "Bug":
        return '#ADFF2F'

        case "Flying":
        return '#B0E0E6'

        case "Normal":
        return '#E0FFFF'

        case "Rock":
        return '#E6E6FA'

        case"Poison":
        return '#D8BFD8'

        default:
        return '#B0E0E6'
        break;
    }
}

export {
    handleGenerateBg
}