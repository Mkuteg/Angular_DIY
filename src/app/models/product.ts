export class Product {
    constructor(
      public id: string = '',
      public name: string = '',
      public description: string = '',
      public price: number = 0,
      public imageUrl: string = '',
      public sellerId: string = ''
    ) {}
  }