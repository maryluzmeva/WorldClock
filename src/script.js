function showDate(event) {
    if (event.target.value.length > 0) {
      let currentTime = moment()
        .tz(event.target.value)
        .format("ddd,MMMM D, YYYY HH:mm A");

      alert(`It is ${currentTime} in ${event.target.value}`);
    }
  }

  let timezones = document.querySelector("#timezones");
  timezones.addEventListener("change", showDate);