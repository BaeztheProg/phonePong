window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    let ph = document.getElementById("placeholder").innerHTML
    ph = "Z axis " + alpha + "\nY axis "+ beta + "\nX axis" + gamma
      }