function showDate(event) {
    if (event.target.value.length > 0) {
        if (event.target.value === "paris") {
          let parisTime = moment()
            .tz("Europe/Paris")
            .format("[It is] dddd, MMMM D, H:mm A [in Europe/Paris]");
          alert(`${parisTime}`);
        }
        if (event.target.value === "tokyo") {
          let tokyoTime = moment()
            .tz("Asia/Tokyo")
            .format("[It is] dddd, MMMM D, H:mm A [in Asia/Tokyo]");
          alert(`${tokyoTime}`);
        }
        if (event.target.value === "sydney") {
          let sydneyTime = moment()
            .tz("Australia/Sydney")
            .format("[It is] dddd, MMMM D, H:mm A [in Australia/Sydney]");
          alert(`${sydneyTime}`);
        }
      }
    }
    let timezoneElement = document.querySelector("#timezone");
    timezoneElement.addEventListener("change", showTimezone);