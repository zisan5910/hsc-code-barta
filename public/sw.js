
const CACHE_NAME = 'theta-code-v2';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/pages/Index.tsx',
  '/src/components/Header.tsx',
  '/src/components/LanguageToggle.tsx',
  '/src/components/CheatCodeSelector.tsx',
  '/src/components/CodeEditor.tsx',
  '/src/components/Preview.tsx',
  '/src/components/PWAInstallPrompt.tsx',
  '/src/data/cheatCodes.ts',
  '/src/data/htmlCheatCodes.ts',
  '/src/data/cCheatCodes.ts',
  '/src/types/index.ts',
  '/src/hooks/useLocalStorage.ts',
  '/src/hooks/usePWAInstall.ts',
  '/src/lib/utils.ts',
  '/src/index.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Cache addAll failed:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // Network failed, try to return cached version
          return caches.match('/') || new Response('অফলাইন - অ্যাপ লোড করতে পারছে না', {
            status: 404,
            statusText: 'Offline'
          });
        });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
  }
});

// Push notifications support
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'নতুন আপডেট পাওয়া গেছে',
    icon: 'https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png',
    badge: 'https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Theta Code', options)
  );
});
