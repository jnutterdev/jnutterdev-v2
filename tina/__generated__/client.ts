import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd470cf720b9398069f484c4795939d3b28c19072', queries,  });
export default client;
  