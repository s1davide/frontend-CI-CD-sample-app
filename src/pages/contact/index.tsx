"use client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { useFetch } from "@/pages-functions/contact/fetch-contacts";
import {
  header,
  textEditorComponent,
} from "@/pages-functions/contact/table-components";
import { Button } from "primereact/button";
import Link from "next/link";
import { useUpdate } from "@/pages-functions/contact/update-contact";
import { useDelete } from "@/pages-functions/contact/delete-contact";

export default function Home() {
  const { data, refetch, isFetching } = useFetch();
  const { update } = useUpdate(refetch);
  const { deleteItem, handleSelection, selected } = useDelete(refetch);
  return (
    <main suppressHydrationWarning={true} className={`centered-content`}>
      <h1 style={{ marginBottom: "10vh", marginTop: "-120px" }}>
        Basic test application
      </h1>
      <Link href="/contact/create">
        <Button
          label="Add Contact"
          severity="success"
          style={{ marginBottom: "19px" }}
        />
      </Link>
      <Card style={{ width: "90%", maxWidth: "800px" }}>
        <DataTable
          data-testid="contact-component"
          editMode="row"
          loading={isFetching}
          value={data}
          header={header(deleteItem, refetch)}
          onRowEditComplete={update}
          selection={selected}
          onSelectionChange={handleSelection}
        >
          <Column selectionMode="single" headerStyle={{ width: "3rem" }} />
          <Column
            field="name"
            header="Names"
            editor={textEditorComponent}
          ></Column>
          <Column
            field="mail"
            header="Mail"
            editor={textEditorComponent}
          ></Column>
          <Column
            field="phone"
            header="Phone"
            editor={textEditorComponent}
          ></Column>
          <Column
            rowEditor
            header="Action"
            headerStyle={{
              width: "10%",
              minWidth: "8rem",
            }}
          ></Column>
        </DataTable>
      </Card>
    </main>
  );
}
