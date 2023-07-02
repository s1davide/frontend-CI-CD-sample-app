import '@/app/globals.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <div className={inter.className}>{children}
    </div>
}