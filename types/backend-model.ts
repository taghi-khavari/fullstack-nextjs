import { IMessage, IPerson } from "./model";

export interface IDB {
  peoples: IPerson[];
  messages: IMessage[];
}
