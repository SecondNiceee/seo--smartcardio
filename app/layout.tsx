import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { StructuredData } from '@/components/structured-data'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smartcardio.ru'

const yandexMetrikaScript = `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
    ym(91617395, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#ffffff',
}

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Купить кардиограф Smartcardio | Беспроводной ЭКГ прибор для дома',
        template: '%s | Smartcardio - Беспроводной кардиограф',
    },
    description:
        'Купить беспроводной кардиограф Smartcardio с доставкой по России. ЭКГ и измерение сатурации без геля и проводов. Результат сразу в телефоне. Российское производство. Гарантия качества.',
    keywords: [
        // Основные целевые запросы
        'кардиограф',
        'портативный кардиограф',
        'прибор для ЭКГ',
        'купить кардиограф',
        // Вариации основных запросов
        'беспроводной кардиограф',
        'кардиограф для дома',
        'домашний кардиограф',
        'переносной кардиограф',
        'компактный кардиограф',
        'мини кардиограф',
        'карманный кардиограф',
        // ЭКГ запросы
        'снять ЭКГ',
        'ЭКГ дома',
        'сделать ЭКГ',
        'ЭКГ онлайн',
        'ЭКГ прибор',
        'ЭКГ аппарат',
        'прибор для снятия ЭКГ',
        'аппарат для ЭКГ дома',
        'электрокардиограф',
        'электрокардиограмма',
        'измерение ЭКГ дома',
        'домашний ЭКГ аппарат',
        'персональный ЭКГ монитор',
        'расшифровка ЭКГ',
        'ЭКГ 6 отведений',
        'дистанционная ЭКГ',
        // Функциональные запросы
        'сатурация',
        'пульсоксиметр',
        'пульсоксиметрия',
        'мониторинг сердца',
        'кардиомонитор',
        'кардиология',
        'диагностика сердца',
        'аритмия',
        'измерить пульс',
        'проверить сердце дома',
        // Брендовые запросы
        'СмартКардио',
        'СмартКардио®',
        'Смарткардио',
        'SmartCardio',
        // Коммерческие запросы
        'кардиограф цена',
        'кардиограф купить недорого',
        'кардиограф стоимость',
        'кардиограф заказать',
        'кардиограф с доставкой',
        'купить кардиограф для дома',
        'купить портативный кардиограф',
        'купить беспроводной кардиограф',
        'купить кардиограф онлайн',
        'купить ЭКГ прибор',
        'купить прибор для ЭКГ дома',
        'купить кардиограф в Москве',
        'купить кардиограф с доставкой по России',
        'где купить кардиограф',
        'купить домашний кардиограф',
        'купить кардиограф СмартКардио',
        // Технические запросы
        'кардиограф российского производства',
        'беспроводной ЭКГ',
        'ЭКГ без проводов',
        'ЭКГ без геля',
        'мобильный кардиограф',
        'кардиограф с приложением',
        'кардиограф bluetooth',
        // Медицинские запросы
        'медицинский прибор для сердца',
        'прибор для измерения сердцебиения',
        'аппарат для контроля сердца',
        'домашняя диагностика сердца',
    ],
    authors: [{ name: 'СмартКардио®', url: siteUrl }],
    creator: 'СмартКардио®',
    publisher: 'СмартКардио®',
    applicationName: 'СмартКардио®',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    category: 'Медицинское оборудование',
    classification: 'Медицинские приборы, Кардиография, ЭКГ',
    alternates: {
        canonical: '/',
        languages: {
            'ru-RU': siteUrl,
        },
    },
    formatDetection: {
        telephone: true,
        email: false,
        address: false,
    },
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        countryName: 'Россия',
        url: siteUrl,
        siteName: 'СмартКардио® — Беспроводной кардиограф',
        title: 'Купить беспроводной кардиограф СмартКардио® | ЭКГ для дома',
        description:
            'Беспроводной кардиограф СмартКардио® — ЭКГ и сатурация без геля и проводов. Результат сразу в телефоне. Российское производство с доставкой по всей России.',
        images: [
            {
                url: '/images/for-users.png',
                width: 1200,
                height: 630,
                alt: 'Портативный кардиограф СмартКардио® для измерения ЭКГ дома',
                type: 'image/png',
            },
            {
                url: '/images/phones.png',
                width: 800,
                height: 600,
                alt: 'Приложение СмартКардио® — расшифровка ЭКГ на смартфоне',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'СмартКардио® — портативный кардиограф для ЭКГ дома',
        description:
            'Снимите ЭКГ за 20 секунд без гелей и проводов. Запись 6 отведений и мгновенная расшифровка на основе ИИ.',
        images: ['/images/for-users.png'],
        creator: '@smartcardio',
        site: '@smartcardio',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    other: {
        'geo.region': 'RU',
        'geo.placename': 'Россия',
        'og:price:amount': '15600',
        'og:price:currency': 'RUB',
        'product:price:amount': '15600',
        'product:price:currency': 'RUB',
        'product:availability': 'in stock',
        'product:condition': 'new',
        'product:brand': 'СмартКардио®',
        'msapplication-TileColor': '#ffffff',
    },
    icons: {
        icon: [
            { url: "favicon.ico" },
        ],
        apple: [
            { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/manifest.json",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru" className="bg-background overflow-x-hidden">
        <head>
            {/* Preload video poster to avoid duplicate fetch on hydration */}
            <link rel="preload" as="image" href="/images/smartcardioStart.webp" />

            {/* Дополнительные SEO мета-теги */}
            <meta httpEquiv="Content-Language" content="ru" />
            <meta name="geo.region" content="RU" />
            <meta name="geo.placename" content="Россия" />
            <meta name="language" content="Russian" />
            <meta name="audience" content="all" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="7 days" />
            <meta name="coverage" content="Worldwide" />
            <meta name="target" content="all" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="MobileOptimized" content="320" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="СмартКардио®" />

            {/* Оптимизация загрузки Яндекс.Метрики */}
            <link rel="preconnect" href="https://mc.yandex.ru" />
            <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        </head>
        <body className="font-sans antialiased overflow-x-hidden max-w-full">
        <StructuredData />
        {children}
        <CookieBanner />

        <script dangerouslySetInnerHTML={{__html : `
        function getUserId() {
        let sc_UserId = localStorage.getItem('sc_UserId');
        if (!sc_UserId) {
          sc_UserId = crypto.randomUUID();
          localStorage.setItem('sc_UserId', sc_UserId);
            }
            return sc_UserId;
          }
          let data = {
            sc_UserId: getUserId()
          };
          fetch("/uid/" + getUserId(), {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => {
            console.log("Resp:", res);
          });
          `}} />

        <script dangerouslySetInnerHTML={{__html : `
          const fpPromise = import('https://openfpcdn.io/fingerprintjs/v4')
    .then(FingerprintJS => FingerprintJS.load())

  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      console.log(visitorId)
      fetch("/uid/" + getUserId() + "/fp/" + visitorId, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    })
    .catch(error => console.error(error))
          `}} />


        <script
            dangerouslySetInnerHTML={{
                __html: yandexMetrikaScript
            }}
        />
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/91617395"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
        </noscript>

        </body>
        </html>
    )
}
