import React, {useState, useEffect} from 'react'
import '../assets/styles/astro.scss'
import { HorizontalAzimuth } from '../shared/horizontal_azimuth';
//import M from "materialize-css"

export const Astro = () =>{
  const [myPosition, setMyPosition] = useState(0)
  const [myDate, setMyDate] = useState("2014-05-05")

 /* useEffect(() => {
    document.getElementById("myDate").value = "2014-05-05"

  })*/
  
  const PreviousDay = () => {
    document.getElementById("myDate").stepDown(1)
    setMyDate(document.getElementById("myDate").value)
    setMyPosition(HorizontalAzimuth(new Date(myDate), {latitude: 10.48801, longitude: -66.87919}, "sunset").horizontal_position)
    document.getElementsByClassName('my_sun')[0].style.transform = `translateX(${myPosition*10}%)`
  }
  const NextDay = () => {
    document.getElementById("myDate").stepUp(1)
    setMyDate(document.getElementById("myDate").value)
    setMyPosition(HorizontalAzimuth(new Date(myDate), {latitude: 10.48801, longitude: -66.87919}, "sunset").horizontal_position)
    document.getElementsByClassName('my_sun')[0].style.transform = `translateX(${myPosition*10}%)`
  }

 
  return(
    <div className="myContainer">
        <h1>ASTROHORIZONTAL D:</h1>
        <div className="date_wrapper">
          <div className="date_wrapper_title">Introduzca el dia</div>
          <div className="date_wrapper_selector">
            <button onClick={PreviousDay}>Anterior</button>
            <input className= "my_date" type="date" id="myDate" value={myDate} />
            <button onClick={NextDay}>Siguiente</button>
          </div>
        </div>
        <div className="sun_info">
          <div>Caracas</div>
          <div>{myDate}</div>
        </div>
        <div className="sun-container">
            <div className="my_sun"></div>
        </div>
        

    </div>
  )
}

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