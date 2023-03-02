/* eslint-disable @typescript-eslint/no-misused-promises */

import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";

declare const self: ServiceWorkerGlobalScope;

setupServiceWorker();

addEventListener("install", async () => await self.skipWaiting());
addEventListener("activate", async () => await self.clients.claim());
