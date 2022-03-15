const loggdReducer = (state = false, atcion) => {
    switch (atcion.type) {
        case "ADD":
            return !state;
            case "DEL":
                return !state;
        default:
            return state;
    }
}
export default loggdReducer;