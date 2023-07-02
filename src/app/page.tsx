"use client"

import { Button } from "primereact/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`centered-content`}>
      <h1 style={{ marginBottom: "10vh", marginTop: "-120px" }}>Basic test application</h1>      
        <Link href="/contact">
          <Button label="Crud Contacts Module" style={{ marginBottom: "19px" }} />
        </Link>
    </main>
  )
}
