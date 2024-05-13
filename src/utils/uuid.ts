import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import { uuidv7 } from "uuidv7";

export class Uuid {
  static get(config: UuidConfig): string {
    console.log(
      "creating uuid with config: " +
        "Amount: " +
        config.amount +
        ", " +
        "Version: " +
        config.version +
        ", " +
        "Output type: " +
        config.output
    );

    switch (config.version.toLowerCase()) {
      case "v1":
        return this.getV1(config);
      case "v4":
        return this.getV4(config);
      case "v7":
        return this.getV7(config);
    }
    throw "Input error with config: " + config;
  }

  private static getV1(config: UuidConfig): string {
    return this.convertToFormat(
      new Array(config.amount).fill(uuidv1()),
      config
    );
  }

  private static getV4(config: UuidConfig): string {
    return this.convertToFormat(
      new Array(config.amount).fill(uuidv4()),
      config
    );
  }

  private static getV7(config: UuidConfig): string {
    return this.convertToFormat(
      new Array(config.amount).fill(uuidv7()),
      config
    );
  }

  private static convertToFormat(uuids: string[], config: UuidConfig): string {
    switch (config.output) {
      case "plain":
        return uuids.join(",\n");
      case "json":
        return JSON.stringify(uuids);
    }
    let separator = ",\n";
    if (config.output === "json") {
    }
    return uuids.join();
  }
}

export class UuidConfig {
  constructor(version: string, amount: number, output: string) {
    this.version = version;
    this.amount = amount;
    this.output = output;
  }

  version: string;
  amount: number;
  output: string;

  public static supportedVersions = ["v1", "v4", "v7"];
  public static supportedOutputTypes = ["plain", "json"];
}
