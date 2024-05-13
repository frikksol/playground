import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import { uuidv7 } from "uuidv7";

export class Uuid {
  static get(config: UuidConfig): string[] {
    console.log(
      "creating uuid with config: " + config.amount + "  " + config.version
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

  private static getV1(config: UuidConfig): string[] {
    return new Array(config.amount).fill(uuidv1());
  }

  private static getV4(config: UuidConfig): string[] {
    return new Array(config.amount).fill(uuidv4());
  }

  private static getV7(config: UuidConfig): string[] {
    return new Array(config.amount).fill(uuidv7());
  }
}

export class UuidConfig {
  constructor(version: string, amount: number) {
    this.version = version;
    this.amount = amount;
  }

  version: string;
  amount: number;

  public static supportedVersions = ["v1", "v4", "v7"];
}
