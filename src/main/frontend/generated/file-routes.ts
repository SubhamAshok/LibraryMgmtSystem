import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/library/@index.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", false, Page0),
    createRoute("library", false, [
        createRoute("", false, Page1)
    ])
];
export default routes;
