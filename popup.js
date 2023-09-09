
//"offline_enabled" : true,
// "permissions": ["alarms", "notifications","storage"], 

// "background": {
//     "service_worker": "background.js",
//     "scripts":["background.js"],
//     "persistent" :true
    
//   },

document.addEventListener("DOMContentLoaded", function () {
    const alarmTimeInput = document.getElementById("alarmTime");
    const setAlarmButton = document.getElementById("setAlarm");
  
    setAlarmButton.addEventListener("click", function () {
      const alarmTime = alarmTimeInput.value;
      if (alarmTime) {
        chrome.alarms.create({ when: Date.now() + getTimeInSeconds(alarmTime) });
        chrome.notifications.create({
          type: "basic",
          iconUrl: "images/icon48.png",
          title: "Pocket Alarm",
          message: "Your alarm is set!",
        });
      }
    });
  
    function getTimeInSeconds(timeString) {
      const [hours, minutes] = timeString.split(":");
      const now = new Date();
      const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      return (alarmTime - now) / 1000;
    }
  });
  
