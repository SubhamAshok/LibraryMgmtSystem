import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import type BookDTO_1 from "./com/abclibrary/library_mgmt_sys/dto/BookDTO.js";
import client_1 from "./connect-client.default.js";
async function getAllBooks_1(init?: EndpointRequestInit_1): Promise<Array<BookDTO_1>> { return client_1.call("BooksEndpoint", "getAllBooks", {}, init); }
export { getAllBooks_1 as getAllBooks };
