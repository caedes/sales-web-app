import { rest } from "msw";

import { products } from "../fixtures";
import { defaultApiBaseUrl } from "../salesHttpClient";

const fullUrl = (route) => `http:${defaultApiBaseUrl}${route}`;

export const handlers = [
  rest.get(fullUrl("/products"), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products()));
  }),
];
