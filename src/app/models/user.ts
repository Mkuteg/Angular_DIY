import { Product } from './product';

export class User {
  constructor(
    public id: string = '',
    public username: string = '',
    public avatarUrl: string = '',
    public bio: string = '',
    public joinedAt: Date = new Date(),
    public products: Product[] = [],
    public followers: User[] = [],
    public following: User[] = []
  ) {}
}