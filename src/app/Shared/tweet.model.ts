import { User } from "./user.model"


export class Tweet {
  _id: string;
  created_at: Date;
  user: User;
  text: string;
  sentiment: string;

}
