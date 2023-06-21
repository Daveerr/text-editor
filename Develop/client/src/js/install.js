const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  events.preventDefault();
  // alert for when clicked
  alert("Button Clicked!");
  //butInstall();
  const promptEvent = window.beforeinstallpromptEvent;
  if (promptEvent) {
    promptEvent.prompt();
  } else {
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  event.preventDefault();
  const jate = document.getElementById["jate"].value;

  putDb(jate);
  format.reset();
  fetchList();
});
