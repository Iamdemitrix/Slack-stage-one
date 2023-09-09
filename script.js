function updateData() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();
  
    document.getElementById("current-day").textContent = currentDayOfWeek;
    document.getElementById("current_utc_time").textContent = currentUTCTime;
  }
  
  updateData();
  
  setInterval(updateData, 1000);
  
  document.getElementById("slack-name").textContent = "Demitrix";
  document.getElementById("My-track").textContent = "Frontend";