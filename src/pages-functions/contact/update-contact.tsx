import { API_ROUTES, SERVER_ROUTE } from "@/services/apiRoutes";
import { NotificationContext } from "@/services/notificationProvider";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import {
  DataTableRowEditCompleteEvent
} from "primereact/datatable";
import { useContext } from "react";
import { DataType } from "./module-metadata";

export const useUpdate = (refresh:()=>Promise<void>) => {
  const toast = useContext(NotificationContext);
  const updateRequest = async (data: { id: string; newData: any }) => {
    return (
      await axios.patch<DataType>(
        `${SERVER_ROUTE}${API_ROUTES.contacts}/${data.id}`,
        data.newData
      )
    ).data;
  };
  const mutation = useMutation({
    mutationFn: updateRequest,
    onSuccess: () => {
      toast?.current?.show({
        severity: "success",
        summary: "Contact Updated",
        detail: "Contact updated sucessfully",
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
  const update = (dataProps: DataTableRowEditCompleteEvent) => {
    const id = dataProps.data.mail;
    const newData = dataProps.newData;
    mutation.mutate({ id, newData });
  };
  return { update };
};
