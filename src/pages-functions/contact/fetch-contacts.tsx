
import { API_ROUTES, SERVER_ROUTE } from "@/services/apiRoutes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { DataType, nameModule } from "./module-metadata";


export const useFetch = () => {
    const queryClient = useQueryClient();
    const fetch = async () => {
        return ((await axios.get<DataType[]>(`${SERVER_ROUTE}${API_ROUTES.contacts}`)).data)
    };
    const { data, isFetching } = useQuery([nameModule], fetch)
    
    const refetch = () => queryClient.invalidateQueries({ queryKey: [nameModule] });
    return {  data, isFetching: isFetching, refetch: refetch }
}