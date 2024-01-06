const body = document.querySelector("body")
const mainContainer = createAndAppend("div","class","mainContainer",body)
const container1 = createAndAppend("div","class","container1",mainContainer)
const container2 = createAndAppend("div","class","container2",mainContainer)
const img = createAndAppend("img","src","https://freesvg.org/img/top-down-bike-racing-monsterbraingames.png",mainContainer)
img.setAttribute("class","bikeImg")
// ----container1

const video = createAndAppend("video","src","https://media.istockphoto.com/id/472414271/video/rolling-street.mp4?s=mp4-640x640-is&k=20&c=3MNJlLytI5Ac-8qivr4vO2ySOQ3x7gslKH5ieMhZwzA=",container1)
video.setAttribute("loop","")
video.setAttribute("autoplay","")


// ----container2

const handelContainer = createAndAppend("div","class","handel",container2);
const controler = createAndAppend("div","class","controler",container2)

// handel

const btnContainerOfHandel = createAndAppend("div","class","buttonConteinerHandel",handelContainer)
const btnLeft = createAndAppend("button","class","left",btnContainerOfHandel)
const btnRight = createAndAppend("button","class","right",btnContainerOfHandel)


// controller
const btnContainerOfController = createAndAppend("div","class","buttonContainerController",controler)
const btnBreak = createAndAppend("button","class","break",btnContainerOfController)
const btnAccelerator = createAndAppend("button","class","accelerator",btnContainerOfController)

function createAndAppend(tag, attType, attName, parent, event) {
    const element = document.createElement(tag);
  if (!!(attType && attName)) {
    element.setAttribute(attType,attName)
  }
  if (!!parent) {
   parent.append(element)  
}
  if (!!event) {
   
  }
  return element
}
