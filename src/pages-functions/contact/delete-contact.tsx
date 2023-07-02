import { API_ROUTES, SERVER_ROUTE } from "@/services/apiRoutes";
import { NotificationContext } from "@/services/notificationProvider";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  DataTableSelectionChangeEvent,
} from "primereact/datatable";
import { useContext, useState } from "react";
import { DataType } from "./module-metadata";

export const useDelete = (refresh:()=>Promise<void>) => {
  const [selected,setSelectected]=useState<DataType>()
  const toast = useContext(NotificationContext);
  const handleSelection=(event:DataTableSelectionChangeEvent<DataType[]>)=>{
    const value = event.value as DataType;
    setSelectected( value);
  }
  const deleteRequest = async (data: string) => {
    return (
      await axios.delete(
        `${SERVER_ROUTE}${API_ROUTES.contacts}/${data}`
      )
    ).data;
  };
  const mutation = useMutation({
    mutationFn: deleteRequest,
    onSuccess: () => {
      toast?.current?.show({
        severity: "success",
        summary: "Contact Deleted",
        detail: "Contact deleted sucessfully",
      });
      refresh();
    },
    onError: (error: AxiosError<ErrorNestJsPrisma>) => {
      if (error.code === "ERR_NETWORK") {
        toast?.current?.show({
          severity: "error",
          summary: "Connection error",
          detail: "Error in server connecion",
        });
      } else {
        toast?.current?.show({
          severity: "error",
          summary: "Error updating contact",
          detail: error.response?.data.message,
        });
      }
    },
  });
  const deleteItem = () => {    
    mutation.mutate(selected?.mail as string);
  };
  return { deleteItem,selected,handleSelection };
};
