export class BookResponseModel {

  private _id: string;
  private _name: string;
  private _author: string;
  private _price: number;
  private _isCollapsed: boolean;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get isCollapsed(): boolean {

    if (this._isCollapsed === undefined)
      this._isCollapsed = true;

    return this._isCollapsed;

  }

  set isCollapsed(value: boolean) {
    this._isCollapsed = value;
  }

}
