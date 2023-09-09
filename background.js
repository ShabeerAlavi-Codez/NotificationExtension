chrome.alarms.create({ delayInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'myAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/icon48.png',
      title: 'Reminder',
      message: 'It\'s time to take a break!',
      buttons: [{ title: 'Dismiss' }, { title: 'Snooze' }]
    });
  }
});

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (buttonIndex === 0) {
    chrome.notifications.clear(notificationId);
  } else if (buttonIndex === 1) {
    chrome.alarms.create({ delayInMinutes: 1 });
  }
});


///
// chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
//     if (buttonIndex === 0) {
//       chrome.notifications.clear(notificationId);
//     } else if (buttonIndex === 1) {
//       // Handle snooze for 5 minutes
//       chrome.alarms.create({ delayInMinutes: 5 });
//     } else if (buttonIndex === 2) {
//       // Handle snooze for 15 minutes
//       chrome.alarms.create({ delayInMinutes: 15 });
//     }
//   });