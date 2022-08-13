import "./styles.css";

const sec = document.querySelector(".sec");

const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

function paintClock() {
  const currDateDetails = new Date();
  //60 sec -> 360 degrees , hence in currDateDetails.getSec() -> 6*currDateDetails.getSec()
  const secs = currDateDetails.getSeconds() * 6;
  sec.style.transform = `translate(-50%, -100%) rotate(${secs}deg)`;

  //60 mins -> 360 degrees , hence in currDateDetails.getMints() -> 6*currDateDetails.getMints()
  const mins = currDateDetails.getMinutes() * 6;
  min.style.transform = `translate(-50%, -100%) rotate(${mins}deg)`;

  const hours = currDateDetails.getHours() * 30;
  hour.style.transform = `translate(-50%, -100%) rotate(${hours}deg)`;
}

setInterval(paintClock, 1000);
