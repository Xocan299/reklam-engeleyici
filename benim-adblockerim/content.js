// Reklamların yaygın olarak kullandığı class ve id isimleri
const adSelectors = [
  '.ad-banner',
  '.ad-unit',
  '.adsbygoogle',
  '[id^="div-gpt-ad"]',
  'iframe[src*="doubleclick.net"]',
  'iframe[src*="googleads"]',
  '.header-ad',
  '.sidebar-ad',
  '.popup-ad'
];

function hideAds() {
  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => {
      ad.style.display = 'none'; // Reklamı gizle
    });
  });
}

// Sayfa yüklendiğinde reklamları gizle
hideAds();

// Sayfada dinamik yüklenen reklamlar için sürekli kontrol et
const observer = new MutationObserver(hideAds);
observer.observe(document.body, { childList: true, subtree: true });