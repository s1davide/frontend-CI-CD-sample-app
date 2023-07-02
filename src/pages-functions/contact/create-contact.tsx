import { API_ROUTES, SERVER_ROUTE } from "@/services/apiRoutes";
import { NotificationContext } from "@/services/notificationProvider";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataType } from "./module-metadata";

export const useCreate = () => {
  const router = useRouter();
  const toast = useContext(NotificationContext);
  const createRequest = async (data: DataType) => {
    return (await axios.post<DataType[]>(`${SERVER_ROUTE}${API_ROUTES.contacts}`, data))
      .data;
  };
  const mutation = useMutation({
    mutationFn: createRequest,
    onSuccess: () => {
      router.push("/contact");
      toast?.current?.show({
        severity: "success",
        summary: "Contact Created",
        detail: "Contact created sucessfully",
      });
    },
    onError: (error: AxiosError<ErrorNestJsPrisma>) => {
      if (error.code === "ERR_NETWORK") {
        toast?.current?.show({
          severity: "error",
          summary: "Connection error",
          detail: "Error in server connecion"
        });
      } else {
        toast?.current?.show({
          severity: "error",
          summary: "Error creating contact",
          detail: error.response?.data.message,
        });
      }
    },
  });
  const create = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as DataType;
    mutation.mutate(data);
  };
  return { create };
};
