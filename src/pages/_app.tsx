// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react'
import NextNProgress from 'nextjs-progressbar'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
 
export default function App({ Component, pageProps }: AppProps) {  
  return (
    <>
        <SpeedInsights />
        <Head>
          <link rel="shortcut icon" href="../../static/favicon.ico" type="image/x-icon" />
          <title>Теплиці для вашого саду</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="Ukrainian" />
          <meta name="revisit-after" content="1 day" />
        </Head>
        <NextUIProvider>
            <RootLayout >
                <NextNProgress color="#ffc43a" />
                <Component {...pageProps}/>
            </RootLayout>
        </NextUIProvider>
    </>
  )
}