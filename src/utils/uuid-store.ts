import { writable } from "svelte/store";
import { UuidConfig } from "./uuid";

const config = new UuidConfig("v4", 5, "plain");

export const configStore = writable(config);
