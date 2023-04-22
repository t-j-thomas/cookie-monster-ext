browser.runtime.onMessage.addListener((message) => {
  if (message.type === "moveCursor") {
    let window = browser.windows.getCurrent();
    let windowUtils = window.QueryInterface(Ci.nsIInterfaceRequestor)
                            .getInterface(Ci.nsIDOMWindowUtils);
    windowUtils.sendNativeMouseEvent(message.x, message.y, 0, 0, null);
  }
});

let style = document.createElement("style");
style.textContent = `.cookie-consent { cursor: url("http://www.rw-designer.com/icon-image/17129-48x48x32.png"), auto !important; }`;
document.head.appendChild(style);

let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  if (!button.innerText.includes("cookies")) {
    continue;
  }
  button.classList.add("cookie-consent");
}