console.log("TABS START");
async function main() {
  console.log("TABS ADD LISTENER");
  browser.tabs.onUpdated.addListener(async () => {
    console.log("TABS UPDATED");
  });
  console.log("TABS ADDED LISTENER");

  const first = document.getElementById("first");
  const second = document.getElementById("second");

  first.addEventListener("click", async () => {
    const tabs = await browser.tabs.query({ currentWindow: true });
    browser.tabs.update(tabs[0].id, { active: true });
  });

  second.addEventListener("click", async () => {
    const tabs = await browser.tabs.query({ currentWindow: true });
    browser.tabs.update(tabs[1].id, { active: true });
  });
}

main().catch((err) => console.error(err));
console.log("TABS STARTED");
