import { writable } from "svelte/store";
import { UuidConfig } from "./uuid";

const config = new UuidConfig("v4", 1);

export const configStore = writable(config);
