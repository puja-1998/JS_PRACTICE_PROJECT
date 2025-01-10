let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampmele = document.querySelector("#ampm");


function digitalClock(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = "AM";

    m = checkTime(m);
    s = checkTime(s);

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampmele.innerText = ampm;

    setTimeout(() => {
        digitalClock();
      }, 1000);
}
digitalClock();

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  //style for heading
  // Select the text container
  const textElement = document.getElementById('text');
    
  // Split the text into individual characters
  const text = textElement.textContent;
  textElement.innerHTML = ''; // Clear the text
  
  // Loop through each letter and wrap it in a span with a random color
  text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      
      // Apply a color to each letter (e.g., rainbow colors or random colors)
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
      span.style.color = colors[index % colors.length]; // Cycle through colors

      // Append the span to the container
      textElement.appendChild(span);
  });