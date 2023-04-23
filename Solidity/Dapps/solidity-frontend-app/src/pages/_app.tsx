import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/locale/zh_CN'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={zh_CN}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}
