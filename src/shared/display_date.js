export const DisplayDate = (date) => {
        let myYear = date[0] + date[1] + date[2] + date[3]
        let myMonth = parseInt(date[5] + date[6])
        let myDay = parseInt(date[8] + date[9])

        switch (myMonth) {
            case 1:
                myMonth = "enero";
                break;
            case 2:
                myMonth = "febrero";
                break;
            case 3:
                myMonth = "marzo";
                break;
            case 4:
                myMonth = "abril";
                break;
            case 5:
                myMonth = "mayo";
                break;
            case 6:
                myMonth = "junio";
                break;
            case 7:
                myMonth = "julio";
                break;
            case 8:
                myMonth = "agosto";
                break;
            case 9:
                myMonth = "septiembre";
                break;
            case 10:
                myMonth = "octurbe";
                break;
            case 11:
                myMonth = "noviembre";
                break;
            case 12:
                myMonth = "diciembre";
                break;
        }

        return myDay + " " + myMonth + " " + myYear

    }
    //Coloca en buen formato para mostrar la fecha