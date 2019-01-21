import { Mode } from "./mode.enum";
import { Configuration } from "log4js";
import { get } from "config";

export function getMode(): Mode {
  switch (process.env.NODE_ENV) {
    case "development":
      return Mode.Development;
    case "staging":
      return Mode.Staging;
    case "production":
      return Mode.Production;
    default:
      return Mode.Development;
  }
}

export function getPort(): number {
  return get<number>("port");
}

export function getLog4js(): Configuration {
  return get<Configuration>("log4js");
}
