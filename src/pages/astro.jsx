import React, {useState, useEffect} from 'react'
import '../assets/styles/astro.scss'
import { HorizontalAzimuth } from '../shared/horizontal_azimuth';
import { DisplayDate } from '../shared/display_date';
//import M from "materialize-css"

export const Astro = () =>{
  //Se inicializa la variable fecha, y el objeto que pedire con los azimuth
  const [myData, setMyData] = useState(HorizontalAzimuth(new Date(), {latitude: 10.48801, longitude: -66.87919}, "sunset"))
  const [myDate, setMyDate] = useState("2019-09-03")
  //const ProcesoID
  
//Estado inicial del sol
  useEffect(() => {
    document.getElementById("sunHour").checked=true
    document.getElementById("sunAzimuth").checked=true
    document.getElementsByClassName('my_sun')[0].style.transform = `translateX(${myData.horizontal_position*10}%)`
  })
  //CAmbia al dia anterior y traslada al sol a su nuevo grado, actualiza el objeto
  const PreviousDay = () => {
    document.getElementById("myDate").stepDown(1)
    setMyDate(document.getElementById("myDate").value)
    setMyData(HorizontalAzimuth(new Date(myDate), {latitude: 10.48801, longitude: -66.87919}, "sunset"))
    document.getElementsByClassName('my_sun')[0].style.transform = `translateX(${myData.horizontal_position*10}%)`
  }
  //Cambia al siguiente dia y traslada al sol a su nuevo grado, actualiza el objeto
  const NextDay = () => {
    document.getElementById("myDate").stepUp(1)
    setMyDate(document.getElementById("myDate").value)
    setMyData(HorizontalAzimuth(new Date(myDate), {latitude: 10.48801, longitude: -66.87919}, "sunset"))
    document.getElementsByClassName('my_sun')[0].style.transform = `translateX(${myData.horizontal_position*10}%)`
  }
  // Logica para aparecer y desaparecer la hora en la parte superior del sol
  const SunHour = () => {
    if(document.getElementById("sunHour").checked === true) {
      document.getElementById("mysunHour").style.display="block"
    } else{
     document.getElementById("mysunHour").style.display="none"
  }}
  // Logica para aparecer y desaparecer los grados azimuth en la superior del sol
  const SunAzimuth = () => {
    if(document.getElementById("sunAzimuth").checked === true) {
      document.getElementById("mysunAzimuth").style.display="block"
    } else{
      document.getElementById("mysunAzimuth").style.display="none"
  }}
  const DispMoon = () => {
    console.log('prueba')
  }
  const DispSun = () => {
    console.log('prueba')
  }
  const ChangeOfDay = () => {
    setInterval(NextDay,200)
    console.log("hola")
  }
  const StopChangeOfDay = () => {
    //setInterval(NextDay,100)
  }
 
  return(
    <div className="myContainer">
        <h1>ASTROHORIZONTAL D:</h1>
        <div className= "headers_box">
          <div className="date_wrapper">
          <div className="date_wrapper_title">Horizonte:</div>
          </div>
          <div className="date_wrapper">
            <div className="date_wrapper_title">Introduzca el dia</div>
            <div className="date_wrapper_selector">
              <button onClick={PreviousDay}>Anterior</button>
              <input className= "my_date" type="date" id="myDate" value={myDate} />
              <button onClick={NextDay}>Siguiente</button>
              <button onClick={ChangeOfDay}>Play</button>
              <button onClick={StopChangeOfDay}>Pausa</button>
              <button onClick={ChangeOfDay}>Retroceso</button>
            </div>
          </div>
          <div className="check_box_wrapper">
            <p className="check_box_wrapper_width">
              <label className="checkbox_letter">
                <input type="checkbox" onClick={DispMoon} id="dispMoon" disabled="disabled"/>
                <span >Luna</span>
              </label>
            </p>
            <p className="check_box_wrapper_width">
              <label className="checkbox_letter">
                <input type="checkbox" onClick={SunHour} id="sunHour"/>
                <span>Hora</span>
              </label>
            </p>
            <p className="check_box_wrapper_width">
              <label className="checkbox_letter">
                <input type="checkbox" onClick={DispSun} id="dispSun" disabled="disabled"/>
                <span >Sol</span>
              </label>
            </p>
            <p className="check_box_wrapper_width">
              <label className="checkbox_letter">
                <input type="checkbox" onClick={SunAzimuth} id="sunAzimuth"/>
                <span >Azimuth</span>
              </label>
            </p>
          </div>
        </div>
        <div className="sun_info">
          <div>Caracas</div>
          <div>{DisplayDate(myDate)}</div>
        </div>
        <div className="sun-container">
          <div className="my_sun">
            <div className="sun_info">
              <div id="mysunHour">{myData.hour}</div>
              <div id="mysunAzimuth">{myData.grades}</div>
            </div>
            <div className="the_sun"></div>
          </div>
        </div>

        

    </div>
  )
}



//IDEAS QUE NO SIRVIERON< PERO POR SI ACASO
/*
        <input type="text" class="datepicker"
         value={myDate} onChange={
            (event) => {
            setMyDate(event.target.value);
            }
        }></input>
        */

/*


        <label htmlFor="position" className="formLetters">Mi posicion</label>
        <input id="position" type="text" className="validate fillCamp" 
        value={myPosition} onChange={Move}>
        </input>
        <label htmlFor="myDay" className="formLetters">Mi dia</label>
        <input id="myDay" type="text" className="validate fillCamp" 
        value={myDay} onChange={
            (event) => {
            setMyDay(event.target.value);
            }
        }>
        </input>
        <label htmlFor="myMonth" className="formLetters">Mi mes</label>
        <input id="myMonth" type="text" className="validate fillCamp" 
        value={myMonth} onChange={
            (event) => {
            setMyMonth(event.target.value);
            }
        }>
        </input>
        <label htmlFor="myYear" className="formLetters">Mi año</label>
        <input id="myYear" type="text" className="validate fillCamp" 
        value={myYear} onChange={
            (event) => {
            setMyYear(event.target.value);
            }
        }>
        </input>
        */
/*
  useEffect(() => {
    var elems = document.querySelectorAll('.datepicker')
    M.Datepicker.init(elems, {onSelected:setMyDate()})
  })
*/



 /* const Move = (event) => {
      
      //let my_container = document.getElementsByClassName('sun-container')[0]
      //let mySun = document.getElementsByClassName('my_sun')[0]
      //console.log(my_container.style.width)
      //console.log(mySun.style.width)
      //mySun.style.background = "blue"

      //let myDate = new Date(`${myYear}`,`${myMonth}`,`${myDay}`)
      //setMyPosition(HorizontalAzimuth(myDate, {latitude: 10.48801, longitude: -66.87919}, "sunrise").horizontal_position)
     // mySun.style.transform = `translateX(${myPosition*10}%)`

  }*/