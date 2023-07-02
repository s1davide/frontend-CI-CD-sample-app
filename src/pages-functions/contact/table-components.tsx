import { Button } from "primereact/button";
import { ColumnEditorOptions } from "primereact/column";
import { InputText } from 'primereact/inputtext';
export const header = (deleteContact:()=>void,setFetchingContacts: () => Promise<void>) => (
  <div className="flex flex-wrap align-items-center justify-content-between gap-2">
    <span className="text-xl text-900 font-bold">Contacts</span>
    <div>
      <Button
        onClick={() => deleteContact()}
        icon="pi pi-trash"
        severity="danger"
        className="mr-1"
        rounded
        raised
      />
      <Button
        onClick={() => setFetchingContacts()}
        icon="pi pi-refresh"
        severity="secondary"
        rounded
        raised
      />
    </div>
  </div>
);

export const textEditorComponent = (columnOptions: ColumnEditorOptions) => {
  return (
    <InputText
      type="text"
      value={columnOptions.value}
      onChange={(e) => columnOptions.editorCallback!(e.target.value)}
    />
  );
};

export const actionsColumn = (
  editAction: (id: string) => {},
  deleteAction: (id: string) => {},
  id: string
) => {
  return (
    <div style={{ display: "flex" }} className="centered-item">
      <Button
        onClick={() => editAction(id)}
        icon="pi pi-file-edit"
        rounded
        raised
      />
      <Button
        onClick={() => deleteAction(id)}
        icon="pi pi-file-edit"
        rounded
        raised
      />
    </div>
  );
};
