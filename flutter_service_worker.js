'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "07f89318c6b0301bc945ce5349a262ce",
".git/config": "6d7503149af8ed2b5ed3104b8a750d31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e2c2b79b4d674e18eeec24c6c88f258d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6af60823a44cd56ac32ca5909fb60094",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8a34a7d4128e03c823c01933802019c",
".git/logs/refs/heads/main": "9a76deeca9f7b61a1cdf54ca75deda78",
".git/logs/refs/remotes/origin/main": "47f6d76943b0bc3671f2d21cc5564203",
".git/objects/00/6049ba3f1dee4ab81530d6dee090a8545c895e": "c923242520fec826750db58b4d2c42d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/c3d0e3eeeb30009f71bf752a07c06bb38958aa": "51fe64fed867ecc34e45ef3c9c1e817a",
".git/objects/0c/37782293573188deee2667ef5245a74abc1da0": "2873e6b6744812b190f09cd4c0e881a6",
".git/objects/0c/db0b99440da4541e37d3b8e0ffd6064446fd50": "d682bee3f04465201dd71df446f2a10d",
".git/objects/0e/774853e274ee89cfe69dea20a627a9c58fd332": "d357ebf91e091f5d885920553ffbec44",
".git/objects/11/d97000b86ef32594c3989195d161bb3d7021fa": "b2a74dcf19b313fc51d28f65cb69ff20",
".git/objects/18/3245c3286966308e8ddb34cbb1bed0e4215937": "d38800d51ba7f1a4a4d548ae3c258214",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9df901f4dab88bd98fcbceaeefb9f575c1b270": "13a6c102356e4f5278810ca773d1994a",
".git/objects/22/55f8438ba59d6347ef6b3182751dbad6b348f2": "9b3100bcd12eeb4a8f779cd76fa68762",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/cd2c310d5d0b665591613eb5f4c2303a4cab18": "2ec4241e5d07056d886a8ae6517a7617",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/506378620b8439d5942aed1a2a9972965fab53": "ed967c35e846f7ad98e1de620474ec5c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e647bbdf565d731c75e83da83d746eb388e5b3": "808348b8f4bbbb663f96a5b2c9bd4fd4",
".git/objects/4a/be573522b638022c9f1dc01253ef4470cd5387": "357c6a505a16f7e50e80c3af2b2f3500",
".git/objects/54/50d0de7cd01247af9f35563b754b51cca07039": "140a74209ec0f4523d6f8d0e5d760727",
".git/objects/57/4de0254845cd6d2aa6387e1c4919e6a8b9262a": "40c6a99bded1d1b385f5a91ddab9de20",
".git/objects/63/8a316a20205f37e9ff9ffbe1dcfd945b173fe5": "a2f71609b2aae0348fb88b5526d53491",
".git/objects/6b/a40b42d828bd1cd24b233efe6f0e96e2f1c9ed": "3fda9db3be074ad4fee4687a66658015",
".git/objects/6b/dd2dbd7ea979032ae1b2a40125a39eb9fe4c75": "b30d8e3dec04ca6d68e140b1d5725717",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/6f/404741974644d5f661d11641e5384ec2b4ee97": "ae4195ddedaefd02fcfc4d56d9cfb31f",
".git/objects/78/77b9f45a94d85b44bfda6187a5a2e17a93e665": "516cb82cade69cd0290b915ea08e39b5",
".git/objects/79/15085f32423424f5bbb910e175e08bd5b9c7b4": "f0c0188c316487333cd3dc8cc817921f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/dc91338b1442eb243e5f091956b047e2ee5083": "1f25ff98130a234ec9c6cfeb9005f928",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/2fa4f61d0db91eb554bf5db1f143497cf08eee": "d345b98f6f59b2963104963a4917e106",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/1d5b9a22dfc6fcf1b7e8949d21e2dac995fcf6": "ee2d8ac6085196c3753919a5fa522c55",
".git/objects/a1/1db7dbc1cffb98c38d2a4a0096ecb823bb73bd": "467e36c9df1466109969acf66f7a3579",
".git/objects/a6/a58373c6224430bc488071c540465ef3e94cd2": "313cb1b22cf93367f66eedbd32192778",
".git/objects/ae/7050859e190d3d6d20bbeae72a0adbb4c0e0f3": "022dd2ac56b2fd9fb3cd5f81647de780",
".git/objects/b0/0f7dce5a76c4c10e760448ae4a0d7b802df980": "453cc10892cbab561ed1254043fa69fa",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/84cb130fdbe9ee426fe354640540d2d28f75b5": "6f6d15c2a692a65694f2b8228760183e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7f32fd136813a7a4d598c6e23b4868b06bdf9c": "082a264e99e46fde2fd19240576eea93",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/6beae806eec7ae151b7624f0a067303f8f698d": "1135347ed2c6bb4e359748ccb341e99c",
".git/objects/be/1152acf7e5bc087de14773191320ae864ab4ac": "f15dd517ec54723424f1b1b2ad4f38c0",
".git/objects/c6/ccb6605ce5985e1d28e886be09bb14d5f36189": "6b0576c69fada0fb1b557002c9d1202c",
".git/objects/c7/333da7860b77d0f73cd9a2458d3e7c3c6e8cb7": "f8c66236b9ed04c498a296ee74b2e771",
".git/objects/ca/78739813da6e0df6b3e17f949379b41526f650": "729e6690e0efbbbcc31e4f543b312bfa",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/688a21b89028097b7347b9aabc546702ecde9b": "cf770dcea55e103b28bcc9b2cc3af9b8",
".git/objects/cb/853b8e1d553494db9f3437cb7550293a2b9221": "625cd09b5557d7571e759bfc3a43f881",
".git/objects/cd/a1d83eb9168a7ac075ea0ed6d9f28e269cae80": "0eadefc4b137ab4c626a465f1668267c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/7c3e30b8df6d848367d951d03ca133c6b4e1c2": "25e4e5e254c6d11e0cf4e623c766f628",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/62c09965da30452276f2d060f5697cca0bbd55": "982c636e2c106d5a00648eaaafadc65c",
".git/objects/d9/7247b2b65b88defd27ef0bfb039f165e6369df": "f204601bd23b0bd7b44548f2ede16c5c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5ef5cf2f27d05b3509454f07e0d80149445840": "5d147782eb58a02aec6719265866630a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/208ccab4c32cb973ae6aa75da2b896dbce69d0": "2d221a688d231ed6f930e925b6c9bf76",
".git/objects/f4/8d2d29a3f6a8006885b7d4bc2a4afe69d82467": "b79518b3618f758e2d18bdb23d7518b6",
".git/objects/f5/91c04e033590c45407f9e39dd6acd34b89b25d": "7ea1fd6721db15d6ef8fdf35c70ec29b",
".git/ORIG_HEAD": "36dd5685152018a54159c9f73bc077de",
".git/refs/heads/main": "76802068460ff32e3020a9a63bf20ffb",
".git/refs/remotes/origin/main": "76802068460ff32e3020a9a63bf20ffb",
"assets/AssetManifest.bin": "08d9651925153e130e7aa212b3dce18f",
"assets/AssetManifest.bin.json": "9044ac84cec4bd3bbf6f91d5948123a0",
"assets/AssetManifest.json": "dd100daf81fc6eeb34e8484ce4054c24",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/chat_background.jpg": "6706800b5b79745aa9591b0fadde19c0",
"assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/NOTICES": "f7c591d6d2f8271b5f4c96520c80c462",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7770b13ccc4c268586cca5722a073f83",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a15f9c6acfbdb3a86121fb5bd1aac00d",
"/": "a15f9c6acfbdb3a86121fb5bd1aac00d",
"main.dart.js": "9556368c43c793364ee511cb9629ee8d",
"manifest.json": "5ffded85640b1c768106e64f9b6d5ec6",
"README.md": "d4e2bac5ff02b0552c4409960b6f57fe",
"version.json": "3be553fa6d30b3ae8269819f3545b2ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
