const trackerPatterns = [/analytics/i, /track/i, /ads/i];

const scripts = document.querySelectorAll("script");
scripts.forEach((script) => {
  const src = script.src || script.textContent;
  if (trackerPatterns.some((pattern) => pattern.test(src))) {
    console.warn("Potential Tracker Found:", src);
  }
});caches 