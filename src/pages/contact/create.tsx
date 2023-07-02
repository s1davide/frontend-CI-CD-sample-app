import Link from "next/link";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { CustomInput } from "@/pages-functions/contact/form-components";
import { useCreate } from "@/pages-functions/contact/create-contact";

export default function ListData() {
    const {create}= useCreate()
    return <main className={`centered-content`}style={{marginBottom:"10vh", marginTop:"-120px"}}>     
            <Link href="/contact">
                <Button
                    label="Go Back"
                    style={{ marginTop: "15vh", marginBottom: "19px" }}
                    severity="secondary"
                />
            </Link>
            <Card title="Create Contact" style={{ width: "90%", maxWidth: "600px" }}>
                <form onSubmit={(e)=>{e.preventDefault(); create(e)}}>
                    {CustomInput("name","Name")}
                    {CustomInput("mail","Mail")}
                    {CustomInput("phone","Phone","number")}
                    <Button label="Create Contact"  type="submit"/>
                </form>
            </Card>
    </main>
}