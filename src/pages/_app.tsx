import MainLayout from "@/layouts/MainLayout"
import QueryClientProviderComponent from "@/services/reactQueryProvider"
import { AppProps } from "next/app"
import { useRef } from 'react';
import { Toast } from "primereact/toast"
import { NotificationContext } from "@/services/notificationProvider";

export default function App({ Component, pageProps }: AppProps) {
  const toastRef = useRef<Toast>(null)
  return <MainLayout >
    <QueryClientProviderComponent>
      <Toast ref={toastRef}/>
      <NotificationContext.Provider value={toastRef}>
        <Component {...pageProps} />
      </NotificationContext.Provider>
    </QueryClientProviderComponent>
  </MainLayout>

}