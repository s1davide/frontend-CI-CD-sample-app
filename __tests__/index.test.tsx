import { getAllByRole, queryByTestId, render } from "@testing-library/react";
import Table from "@/pages/contact";
import axios from "axios";
import { act } from "react-dom/test-utils";
import * as ReactQuery from "@tanstack/react-query";


const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Home", () => {
  const queryClient = new ReactQuery.QueryClient();

  it("Table show fetched contacts", async () => {
    const contacts = [
      { name: "Test Name 1", mail: "testmail1@mail.com", phone: "3216541223" },
      { name: "", mail: "testmail1@mail.com", phone: "3214567854" },
    ];
    jest.spyOn(ReactQuery,"useQuery").mockImplementation(
      jest.fn().mockReturnValue({
        data:[...contacts], isFetching:false 
      })
    )
    const component = await act(async () => {
      return render(
        <ReactQuery.QueryClientProvider client={queryClient}>
          <Table />
        </ReactQuery.QueryClientProvider>
      );
    });
    const { getAllByRole } = component;
    const rows = getAllByRole("row");
    const tbodyRows = rows.filter((row) => row.closest("tbody") !== null);
    expect(tbodyRows.length == contacts.length).toBe(true);
  });
});
