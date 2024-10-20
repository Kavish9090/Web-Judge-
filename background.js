const trackerDomains = [
  "google-analytics.com",
  "doubleclick.net",
  "facebook.com",
  "ads.twitter.com",
  "track.adform.net"
];

// Listener to block trackers
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(`Blocked: ${details.url}`);
    return { cancel: true };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);