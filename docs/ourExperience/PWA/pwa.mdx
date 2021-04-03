---
id: pwa
title: چگونه PWA بسازیم
author: sina
---

:::info
این بخش برای ساخت PWA در صفحات اساتیک هست.
برای React رو جداگونه مینویسیم.
:::


برای PWA حداقل به سه تا چیز نیاز داریم:

- `manifest.json`
- `serviceWorker.js`
- چند سایز آیکون


## آیکون ها

برای ساخت آیکون ها از لایبرری `pwa-asset-generator` استفاده می کنیم که با آپشن هایی که میگیره همه سایز آیکونی بهمون میده.
[آدرس لایبرری](https://www.npmjs.com/package/pwa-asset-generator)

مثالش اینه:


<div dir="ltr">

```console
npx pwa-asset-generator
```

</div>




که `photo.png` ادرس لوگویی هست که داریم و عکس های ساخته شده توی یه فولدر به اسم `icons` میرن.

عکس ها باید توی فایل `manifest.json` ثبت بشن.



## manifest.json

فایلی هست که اطلاعات کلی اپلیکیشن رو توی خودش نگه میداره. حداقل دیتایی که باید داشته باشیم ایناس:


<div dir="ltr">


```json
{
    "name": "app name",
    "short_name": "app short name",
    "start_url": "/",
    "background_color": "#000",
    "theme_color": "#fff",
    "display": "standalone",
    "icons": [
        {
            "src": "/icons/manifest-icon-192.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "/icons/manifest-icon-512.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ]
}

```

</div>

بقیه دیتایی که میشه توی این فایل باشه توی داکیومنتش هست
لینک داکیومنت هاش:

- [web.dev](https://web.dev/add-manifest/#:~:text=The%20web%20app%20manifest%20is,when%20the%20app%20is%20launched.)
- [mozilia mdn](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)




## service worker

این فایل جاوااسکریپت قراره منطق کش کردن و فچ کردن دیتا رو کنترل کنه. این فایل باید ثبت بشه (یا نصب بشه یا رجیستر بشه). نصبش به این صورت هست که توی یه تگ `<script>` انجام بشه. یا توی فایل جاوااسکریپتی که ایمپورت بشه

<div dir="ltr">


```js


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(reg => {
        console.log("sw registerred")
        console.log(reg)
    }).catch(err => {
        console.log("not registered")
        console.log(err)
    })
}


```


</div>

**نکته:**
فایل `sw.js` باید توی روت پروژه باشه. و هر جایی که باشه اسکوپش میشه از همون فایل. پس بهترین جاش همون روت پروژه فرانت و همون کنار `index.html`.

فایل `sw.js` شامل ایناس:


<div dir="ltr">

```js
const static_assets = [
    "./",
    "./src/style.css",
    "./images/icons/manifest-icon-192.png",
    "./images/icons/manifest-icon-512.png",
    "./images/icons/apple-icon-180.png"
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(static_assets)
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request)
        })
    )
})
```

</div>


که روی ۲ event باید کنترلر بذاریم:

### 1. `install`

توی این بخش نصب کردن سرویس ورکر رو هندل میکنیم و توی این مثال فقط این رو هندل کردیم که دیتایی که از پیش تعیین کردیم (تو یه آرایه به نام `static_asset`) 

### 2. `fetch`

توی این event استراتژی هندل کردن caching رو هندل میکنیم. مثلا اینکه آیا اول از chache استفاده شود یا اول دیتا fetch بشه.
توی این مثالُ اول کش چک شده اگر کش خالی بود فچ میشه در غیر این صورت از کش استفاده میشه.

داکیومنتش:

- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)


## لینک ها

- این کد رو از روی یه آموزش یوتوب نوشتم: [لینکش](https://www.youtube.com/watch?v=WbbAPfDVqfY)
- گوگل هم یه لایبرری درست کرده که خیلی چیزا رو که شاید ادونس هم باشن رو راحت هندل کرده. [لینکش](https://developers.google.com/web/tools/workbox)
- یه سایت دیگه هم هست که خوب گفته بد نیست چکش کنیم [لینکش](https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/)