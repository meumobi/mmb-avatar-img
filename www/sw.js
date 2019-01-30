importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/mmbavatarimg.js",
    "revision": "ea05815cdf498566b299009f543bb898"
  },
  {
    "url": "build/mmbavatarimg/8ntdl5jy.js",
    "revision": "0b9bce01bbbb993e5689f4f586c110a9"
  },
  {
    "url": "build/mmbavatarimg/8ntdl5jy.sc.js",
    "revision": "42481f4821fd03207a725512a2b98d16"
  },
  {
    "url": "build/mmbavatarimg/kmun8zgq.js",
    "revision": "aa1e086cae86c01f97ee46eaa4efbca8"
  },
  {
    "url": "build/mmbavatarimg/kmun8zgq.sc.js",
    "revision": "ce09590520b6630ec6141327dadf779b"
  },
  {
    "url": "build/mmbavatarimg/mmbavatarimg.agwklqok.js",
    "revision": "5ff11078e1d3752eb85df80722ef0228"
  },
  {
    "url": "build/mmbavatarimg/mmbavatarimg.l5ow6f0c.js",
    "revision": "d195f7ad099c3cd63cb0c38d9f94bc55"
  },
  {
    "url": "build/mmbavatarimg/mmbavatarimg.registry.json",
    "revision": "af985236f125591388b00c6222cc8146"
  },
  {
    "url": "build/mmbavatarimg/mmbavatarimg.ytmsndbd.js",
    "revision": "f9853ead5ec5b2d25cdf4a0573b39082"
  },
  {
    "url": "index.html",
    "revision": "1e7c279096d1f2642274dcdf541b9f42"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
