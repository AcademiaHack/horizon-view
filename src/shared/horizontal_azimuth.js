export const HorizontalAzimuth = (date, city, type) => {
    console.log(date)
        //Declaracion de variables
    let my_state = {};
    let my_answer = {}; //Objeto de respuesta
    const SunCalc = require('suncalc');
    // Decidir entre el alba y el ocaso
    if (type === "sunrise") {
        my_answer.kind = "sunrise"
        my_state = SunCalc.getTimes(date, city.latitude, city.longitude).sunrise
    } else if (type === "sunset") {
        my_answer.kind = "sunset"
        my_state = SunCalc.getTimes(date, city.latitude, city.longitude).sunset
    } else {
        return "Opcion no disponible"
    }
    //Establecer la hora con buen formato
    console.log(my_state)
    let minutes = my_state.getMinutes();
    let hours = my_state.getHours();
    if (hours > 12) {
        hours = hours - 12
        my_answer.hour = hours + ":" + minutes + "pm";
    } else {
        my_answer.hour = hours + ":" + minutes + "am";
    }

    //Establecer los grados Azimuth
    let my_state_pos = SunCalc.getPosition(my_state, city.latitude, city.longitude)
    let azimuth_radians = my_state_pos.azimuth
    let azimuth_grades = azimuth_radians * 180 / Math.PI
        /*if (azimuth_grades < 0) {
            //azimuth_grades = 360 + azimuth_grades; //Actualizar si los grados son negativos
            azimuth_grades = 180 + azimuth_grades; //PROBAR CON LA API
        } else {
            azimuth_grades =
        }*/
    azimuth_grades = 180 + azimuth_grades; //PROBAR CON LA API variando fechas y ciudades
    my_answer.grades = parseInt(azimuth_grades);
    if (type === "sunset") {
        my_answer.horizontal_position = parseInt(70.721 * (0.707 + Math.sin((90 - azimuth_grades) * Math.PI / 180)))
    } else {
        my_answer.horizontal_position = parseInt(70.721 * (0.707 - Math.sin((90 - azimuth_grades) * Math.PI / 180)))
    }

    return my_answer
}