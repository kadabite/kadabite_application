if (!self.define) {
  let e,
    a = {}
  const i = (i, s) => (
    (i = new URL(i + '.js', s).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = i), (e.onload = a), document.head.appendChild(e)
        } else (e = i), importScripts(i), a()
      }).then(() => {
        let e = a[i]
        if (!e) throw new Error(`Module ${i} didn’t register its module`)
        return e
      })
  )
  self.define = (s, c) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (a[t]) return
    let n = {}
    const r = (e) => i(e, t),
      o = { module: { uri: t }, exports: n, require: r }
    a[t] = Promise.all(s.map((e) => o[e] || r(e))).then((e) => (c(...e), n))
  }
}
define(['./workbox-e9849328'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'f176c218a513e2e6f550baba10dcbdee',
        },
        {
          url: '/_next/static/1fejXRE-BpyF9Hy1t5o5C/_buildManifest.js',
          revision: '997cf0ca27f0ecdc7c2954019e85b5ee',
        },
        {
          url: '/_next/static/1fejXRE-BpyF9Hy1t5o5C/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/115-db0a4b72bf30c013.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/12d543dd-5178f4fad20ab5a1.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/23a0b913-025890f06ad70d00.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/263-eaddb406c34f4e14.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/291-9e2bea6271d12b00.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/319-d850306f56e3b9c3.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/332-abd8a6956a63e174.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/499-2723568364b4ce42.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/623-27f3f0f283b43edf.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/643-644d26ef50006b72.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/732-ad449ba3b0c47edd.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/753-56dc73a89c88ec53.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/813-d163dfade290f116.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/86-800028f3ed05b8c1.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/860-12bc19cb0acb8214.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/89-cbdc10d04cdbf4b8.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/915-400cd5c43442bf43.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/928-0e21a04ed6521f27.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/982-d5dc4f23c2d4d8d8.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/(landing-routes)/(home)/about-us/page-f9da0de2c498c127.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/(landing-routes)/(home)/page-4a764719dd500a42.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/(landing-routes)/faqs/page-eefd6442fdbcc5d5.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/(landing-routes)/layout-e5e40b05fcfcc308.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-bebb885cb086b9e3.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-42121a84e9d4267b.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/api/get-token/route-ba81722ba640e846.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/dashboard/(auth-routes)/layout-8a8553c3e9dc6fb5.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/dashboard/(auth-routes)/login/page-3e040a4870d3d891.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/dashboard/(auth-routes)/register/page-ebd180dcc448efab.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/dashboard/(main)/layout-763a108ac82533f7.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/dashboard/(main)/page-0481653b465e1e39.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/app/layout-6ed5b9aa045c59dc.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/framework-5379953f7f5079bf.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/main-a36f6d291093cea8.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/main-app-b6e6c9af03899849.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/pages/_app-ac4d7079b47ea5af.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/pages/_error-b3e09977a73e0ef8.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-e8650be7141ce59f.js',
          revision: '1fejXRE-BpyF9Hy1t5o5C',
        },
        {
          url: '/_next/static/css/b0ae05d0ac5a94cc.css',
          revision: 'b0ae05d0ac5a94cc',
        },
        {
          url: '/_next/static/css/df8cf5fb977b8894.css',
          revision: 'df8cf5fb977b8894',
        },
        {
          url: '/_next/static/css/ee776fd27a3b1e92.css',
          revision: 'ee776fd27a3b1e92',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/home/HNG Boilerplate-Logo.png',
          revision: '400925beb2bfff08dbe6e3fc2795d0f7',
        },
        {
          url: '/icons/icon_192x192.png',
          revision: 'c29d6541021122a333e211b5f94cf100',
        },
        {
          url: '/icons/icon_512x512.png',
          revision: 'b2e7083fa119ca429c5beceaf529129f',
        },
        {
          url: '/images/HNG Boilerplate-Logo.png',
          revision: '400925beb2bfff08dbe6e3fc2795d0f7',
        },
        {
          url: '/images/Star1.svg',
          revision: 'b6b359f1cda9e5c7baece2c962afadee',
        },
        {
          url: '/images/WaitList/BACKGROUND.svg',
          revision: 'a5fcb50aa810eea398f6f381b53a7e61',
        },
        {
          url: '/images/WaitList/Vector.svg',
          revision: 'da960d22947a9c1a5812683e91587bf2',
        },
        {
          url: '/images/WaitList/activity 2.svg',
          revision: '7d8e2a90ce97188e6216d0bdf00be12e',
        },
        {
          url: '/images/WaitList/circle 1.svg',
          revision: '32047e879d41ca241f7f04014b2c5b7a',
        },
        {
          url: '/images/WaitList/database.jpg',
          revision: '9432fe16ecead3b0f258f132afd7c21e',
        },
        {
          url: '/images/WaitList/database.png',
          revision: '00dd364de7995b790e74010404a94520',
        },
        {
          url: '/images/WaitList/database.svg',
          revision: '8001abc235db47cad210f3b6395ec0e7',
        },
        {
          url: '/images/WaitList/dollar.svg',
          revision: '4b5796c5075d9078ba6cde661d5d587a',
        },
        {
          url: '/images/WaitList/emailManagement.jpg',
          revision: '4252bfd18d919b080622377363c4c25e',
        },
        {
          url: '/images/WaitList/icon.svg',
          revision: '0db5b1643b99a06b7a7e4a6a14a454e4',
        },
        {
          url: '/images/WaitList/lock.svg',
          revision: '1d6a577e0874e30747fe419e0b01d355',
        },
        {
          url: '/images/WaitList/message.svg',
          revision: '0db5b1643b99a06b7a7e4a6a14a454e4',
        },
        {
          url: '/images/WaitList/payment.jpg',
          revision: 'f7188e17e33481f88b8bced4e30e42b4',
        },
        {
          url: '/images/WaitList/payment.png',
          revision: 'f5815bd6f7798189a1dfd2acbc8097db',
        },
        {
          url: '/images/WaitList/phone.jpg',
          revision: '503c58477d83679407524753e88fed6b',
        },
        {
          url: '/images/WaitList/phone.png',
          revision: '84539a15de2e5e3ff5971dd35081445a',
        },
        {
          url: '/images/WaitList/pie-chart2.svg',
          revision: '73c2ef07121abc0cf4a86557b2cbca5b',
        },
        {
          url: '/images/WaitList/safety.jpg',
          revision: '562675cee2fec747185caa253ccf4439',
        },
        {
          url: '/images/WaitList/safety.png',
          revision: '807ea4ed8616022a559e520a5ddb7153',
        },
        {
          url: '/images/WaitList/success.svg',
          revision: 'af68119a46c67faa3a629d140182ea6b',
        },
        {
          url: '/images/about-us/aboutus1.svg',
          revision: 'a62df1010142f55e4b6627ffa7677752',
        },
        {
          url: '/images/about-us/background.svg',
          revision: '7cee0e3a3a28e480b6e957931d82eb63',
        },
        {
          url: '/images/about-us/ellipse.svg',
          revision: '062d53ff17e12113925e7262176251b6',
        },
        {
          url: '/images/about-us/our-mission.svg',
          revision: '77fc2e0c3fb356c9cc90a86326cc3866',
        },
        {
          url: '/images/about-us/our-vision.svg',
          revision: 'a5ec1b8deaf0e3a3ac216cbcfd5cbb6a',
        },
        {
          url: '/images/about-us/team1.svg',
          revision: 'bfffa560932dba9ece4e771fdffe580a',
        },
        {
          url: '/images/about-us/team2.svg',
          revision: '1ee8120627edcf213419d378e2df1d3e',
        },
        {
          url: '/images/about-us/team3.svg',
          revision: '9570d40a0066d032b44aa1c493b2c1f1',
        },
        {
          url: '/images/about-us/team4.svg',
          revision: 'db10eb9faaf51acec6d1dc181ed222d3',
        },
        {
          url: '/images/bell-icon.jpg',
          revision: '2d9f7ba886686f3857ebc1a2b5bdaf81',
        },
        {
          url: '/images/blogPage/blogCard1.png',
          revision: '6139629fa436775a4b23eda4ffc477f0',
        },
        {
          url: '/images/blogPage/blogCard2.png',
          revision: '2dfcffcfdd468fda2fa6866df8554559',
        },
        {
          url: '/images/blogPage/blogCard3.png',
          revision: '3c7551fb22c91a61b0d6f1390eb953a3',
        },
        {
          url: '/images/blogPage/blogCard4.png',
          revision: '77875d19344cd2130292bcb79da16a8a',
        },
        {
          url: '/images/blogPage/blogCard5.png',
          revision: '25006612cf78f0eb2d935e109a6b5318',
        },
        {
          url: '/images/blogPage/blogCard6.png',
          revision: '8b9008b9f22d8e1c95aebeba08cd75ef',
        },
        {
          url: '/images/blogPage/blogHero.png',
          revision: '27e60e8b6e83c5932a902eb1fe531968',
        },
        {
          url: '/images/blogPage/blogHero.svg',
          revision: 'dca398acc09146b42ae3d416d74a7842',
        },
        {
          url: '/images/blogPage/blogHero1.png',
          revision: '3106a6bf0e017769c8565438caaf218a',
        },
        {
          url: '/images/blogPage/utils/index.ts',
          revision: '2a8cf09c3c401d8233f5e7a1c1733b27',
        },
        {
          url: '/images/blogcommentsection/image 10.png',
          revision: 'd36ec65118d14f2fdcb67ad91d64ddb3',
        },
        {
          url: '/images/blogcommentsection/person.svg',
          revision: '25cc315cdeac25d0144fa6e6d408750c',
        },
        {
          url: '/images/cancel.svg',
          revision: 'e328aed04c8caacb2927fae8eacc0c51',
        },
        {
          url: '/images/career/noJob.svg',
          revision: '55acbfdd150f2b46691e15e608c0bf75',
        },
        {
          url: '/images/checkmark.svg',
          revision: 'd6cddc00e80b663b46d34cfc05559258',
        },
        {
          url: '/images/emailConfirmation.png',
          revision: 'aec889dd5b8b446c928b4baee43afc51',
        },
        {
          url: '/images/facebook.svg',
          revision: '5fc20ae94e26a7572c2bd12497f92889',
        },
        {
          url: '/images/flags/en.svg',
          revision: '1b2a75f70babae347406f0185efd5286',
        },
        {
          url: '/images/flags/es.svg',
          revision: 'f602dd101ea3739791530e131b9e4132',
        },
        {
          url: '/images/flags/fr.svg',
          revision: '3b1aebcd73341496366eeea36cd1c5e6',
        },
        {
          url: '/images/google.png',
          revision: '95ca1f8d1e23e4bfae2000bae15985d3',
        },
        {
          url: '/images/google.svg',
          revision: 'd6ee57e112e74d9dc2a4c80fa0bfef51',
        },
        {
          url: '/images/hero-image.svg',
          revision: '645978e4661495696450df043b27ba87',
        },
        {
          url: '/images/hero-image2.svg',
          revision: '4141dd5261eebd114ad5b5c7b7ec529a',
        },
        {
          url: '/images/hero-image3.svg',
          revision: 'e79789b7d558c0b305a7c93c1ee34cf5',
        },
        {
          url: '/images/hero-image4.svg',
          revision: '12b4e8598c09c405ebbec316b7b248b3',
        },
        {
          url: '/images/hero-image5.svg',
          revision: '331d6f2f3789360993b8022a8db61779',
        },
        {
          url: '/images/hero-image6.svg',
          revision: '6385bcba20db483014d7772c25c95f10',
        },
        {
          url: '/images/hero-line.svg',
          revision: '880b7b891efe57502ce47877d93dbb80',
        },
        {
          url: '/images/icon.png',
          revision: '8f2a3ca73e90aedbeed97604f63f6583',
        },
        {
          url: '/images/integration/atlassian.svg',
          revision: '42364ed0ca9bea22e2a629074a90c8c3',
        },
        {
          url: '/images/integration/dropbox.svg',
          revision: 'ecbbe51775835f9ea14f499f300ff665',
        },
        {
          url: '/images/integration/gdrive.svg',
          revision: 'ad1368017300120c52df7048323fb05a',
        },
        {
          url: '/images/integration/jira.svg',
          revision: 'ce4be76cf3afae4d471f79bfb3b908ec',
        },
        {
          url: '/images/integration/ms-office-teams.svg',
          revision: '149fb3c38a5b6adb0410d240b6b44eff',
        },
        {
          url: '/images/integration/ms-office.svg',
          revision: 'a22dac20e6d269f08a4d85f16b92f736',
        },
        {
          url: '/images/integration/notion.svg',
          revision: '09c4f5004462277098e9f31fb05ed7e6',
        },
        {
          url: '/images/integration/onedrive.svg',
          revision: 'a22dac20e6d269f08a4d85f16b92f736',
        },
        {
          url: '/images/integration/slack.svg',
          revision: '6d2eff88e56b301ab1c493e1e856a56f',
        },
        {
          url: '/images/integration/trello.svg',
          revision: '71b26df78f402488910691eb937f4d6d',
        },
        {
          url: '/images/latest-articles/avatar.png',
          revision: '73d5abfad30b5d1b7ed022236d24149d',
        },
        {
          url: '/images/latest-articles/dot-icon-gray.svg',
          revision: 'fbfca13c91681540dbd8bccaa24ee548',
        },
        {
          url: '/images/latest-articles/dot-icon-white.svg',
          revision: 'af9f927b69a6535e2439fc37ca6e1537',
        },
        {
          url: '/images/latest-articles/post-1.png',
          revision: 'afb16f88dff2a54957c2ee893bba4587',
        },
        {
          url: '/images/latest-articles/post-2.png',
          revision: '7da55f64c509bf467d7a4face36909c1',
        },
        {
          url: '/images/latest-articles/post-3.png',
          revision: '43d9b26ecd823efafbe6f46925de9da7',
        },
        {
          url: '/images/latest-articles/post-4.png',
          revision: '122cb43c812c0fac71f540c413bef1ed',
        },
        {
          url: '/images/latest-articles/post-5.png',
          revision: 'e23ff8278f7ccec59b0ca2a1dd085e85',
        },
        {
          url: '/images/latestArticles/Climate.png',
          revision: '7d48da4920d5f991b7aa801377b0c4a0',
        },
        {
          url: '/images/latestArticles/ClimateDextop.png',
          revision: '7da55f64c509bf467d7a4face36909c1',
        },
        {
          url: '/images/latestArticles/Future Picture.png',
          revision: '4c15153cda54f02ddeb3b0768d750e87',
        },
        {
          url: '/images/latestArticles/FutureDextop.png',
          revision: 'e23ff8278f7ccec59b0ca2a1dd085e85',
        },
        {
          url: '/images/latestArticles/Mental.png',
          revision: '0e444b5eba526443899ca4d1a25e0010',
        },
        {
          url: '/images/latestArticles/MentalDextop.png',
          revision: '122cb43c812c0fac71f540c413bef1ed',
        },
        {
          url: '/images/latestArticles/Networking.png',
          revision: 'be145b5b9e4454178a80b9d191b55324',
        },
        {
          url: '/images/latestArticles/NetworkingDextop.png',
          revision: 'afb16f88dff2a54957c2ee893bba4587',
        },
        {
          url: '/images/latestArticles/Nora dextop.png',
          revision: '73d5abfad30b5d1b7ed022236d24149d',
        },
        {
          url: '/images/latestArticles/Nora mobile.png',
          revision: 'c1a246a6b3228c1a194c80ff6abdf9bc',
        },
        {
          url: '/images/latestArticles/Recipe.png',
          revision: '8006ca3a386129cf69c896b19b7fe6f2',
        },
        {
          url: '/images/latestArticles/RecipeDextop.png',
          revision: '43d9b26ecd823efafbe6f46925de9da7',
        },
        {
          url: '/images/latestArticles/Styling.png',
          revision: 'be145b5b9e4454178a80b9d191b55324',
        },
        {
          url: '/images/latestArticles/StylingDextop.png',
          revision: 'afb16f88dff2a54957c2ee893bba4587',
        },
        {
          url: '/images/logo(large).svg',
          revision: 'c39002d0ef071c72f90af82a95ab3f3c',
        },
        {
          url: '/images/logo(small).svg',
          revision: '2c2789b93745e7628580de27664957ed',
        },
        {
          url: '/images/logo-text.png',
          revision: '59dd7217a95b7ee73f8c33814848d0ff',
        },
        {
          url: '/images/newletter-email-template/Newsletter-Banner.svg',
          revision: '7283e8e6da5d65611e56b8e8d8be1dc1',
        },
        {
          url: '/images/newletter-email-template/Newsletter-Discount.svg',
          revision: 'be30d1b3aff55b84281f31d716efd5df',
        },
        {
          url: '/images/newletter-email-template/Newsletter-Star.svg',
          revision: '5952af4cb0e1df691909b08e67981cf3',
        },
        {
          url: '/images/pfp.jpg',
          revision: '47792d8e22fb9ac0d29a43708b8ab4d0',
        },
        {
          url: '/images/productdetails/default-image.jpg',
          revision: '5afff255e690d6e5b8d9b732ec6a6409',
        },
        {
          url: '/images/productdetails/product_image.jpg',
          revision: '83665088b5687b02c612f8cc63abc51f',
        },
        {
          url: '/images/productdetails/test-image.jpg',
          revision: 'f898a46479659cfa8f3d8cd6a1613623',
        },
        {
          url: '/images/productimage.png',
          revision: 'eed42b3e8af9ca3b6eaf3a44fe28a426',
        },
        {
          url: '/images/role-success-checkmark.png',
          revision: '17d06dfb11e634e14bf2d1b0ea2bb700',
        },
        {
          url: '/images/shield.svg',
          revision: '02b2bc38618f293186711577cffb6e40',
        },
        {
          url: '/images/squeeze.png',
          revision: '0f88b9762e00ff070b0f1818f6440beb',
        },
        {
          url: '/images/subscription-disabled/Payment.png',
          revision: 'd6353dbf24cf33594d743330a39ae4fb',
        },
        {
          url: '/images/subscription-disabled/payment.jpg',
          revision: '0ecbfcb13cf759ddd5015e0cf29faedb',
        },
        {
          url: '/images/subscription-payment-error.svg',
          revision: 'a49feb855855ec638cf8769b6b0320e3',
        },
        {
          url: '/images/testimonial-image1.svg',
          revision: '488c6306306a6269b8c3f2835393d2c0',
        },
        {
          url: '/images/testimonial-image2.svg',
          revision: 'd310132f8be3e96f3047da9ac306d3e2',
        },
        {
          url: '/images/testimonial-image3.svg',
          revision: '78672d68482df4a37f07ba811c75760f',
        },
        {
          url: '/images/tiktok.svg',
          revision: '2dcafb706e36dd2f1d253eadbcfed12e',
        },
        {
          url: '/images/user.png',
          revision: 'd76e4722b3f30431a896586e5af2de97',
        },
        {
          url: '/images/welcome-email-no-image/boilerplate-logo.png',
          revision: '5056cc49364707606da7f618d5c7c017',
        },
        {
          url: '/images/welcome-email-no-image/instagram-icon.png',
          revision: '0173fdcb25e7201c4bec8122207a4655',
        },
        {
          url: '/images/welcome-email-no-image/linkedin-icon.png',
          revision: '0d547b1e5231e530fcecc6bd7c33a67d',
        },
        {
          url: '/images/welcome-email-no-image/reddit-icon.png',
          revision: '52843afe75f8d1cca8de97d5ed3c1709',
        },
        {
          url: '/images/welcome-email-no-image/star-icon.png',
          revision: 'e6d2c18008fb796b4d9b00ca9bd66d76',
        },
        {
          url: '/images/welcome-email-no-image/tiktok-icon.png',
          revision: '1bc1621677484300b7f9960519d3d121',
        },
        {
          url: '/images/welcome-email-no-image/twitter-icon.png',
          revision: '487c1c073127feb35c707b3b77980aac',
        },
        {
          url: '/images/welcome-email-with-image/email-welcome.png',
          revision: 'aaec64f12ac7df2bad193a2f80582c6e',
        },
        {
          url: '/images/welcome-email-with-image/star.png',
          revision: 'd729275ccf741df94c68d02072506c15',
        },
        { url: '/manifest.json', revision: '3ddae0b8fc0bccde4920bdff81c40353' },
        {
          url: '/pwa_manifest/kadabite_bx1.png',
          revision: '9aa539d2547383b764952bb4b8985ea9',
        },
        {
          url: '/pwa_manifest/kadabite_bx3.png',
          revision: '086169efe3bd88cce34f4da2e4ba256c',
        },
        {
          url: '/pwa_manifest/kadabite_x1.png',
          revision: '5cbbcfa5103603a4d7579c8eea7906b3',
        },
        {
          url: '/pwa_manifest/kadabite_x3.png',
          revision: '599fcf1d77a0daff40ca62b2b481edb4',
        },
        {
          url: '/screenshots/screenshot_desktop.png',
          revision: '6351506056ebb66dd99dc2a05ff7fcb5',
        },
        {
          url: '/screenshots/screenshot_desktop_1.png',
          revision: '9dae4aae765d45119a358b98f0d74127',
        },
        {
          url: '/screenshots/screenshot_mobile.png',
          revision: '56d6929b0b0ae62099ea3044e87b93bd',
        },
        {
          url: '/screenshots/screenshot_mobile_1.png',
          revision: '09c31c2e45d0c6a61f8fc2824a5b9fee',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: s,
            }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const a = e.pathname
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    )
})
