/* tslint:disable */
/* eslint-disable */
import { HisotryId } from '../models/hisotry-id';
import { Ticket } from '../models/ticket';
import { User } from '../models/user';
export interface History {
  id?: HisotryId;
  occuredAt?: string;
  reciever?: User;
  sender?: User;
  ticket?: Ticket;
}
