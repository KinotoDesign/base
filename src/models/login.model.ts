export class LoginModel {
  constructor() {}
  getViewModel(): LoginViewModel {
    return new LoginViewModel("ログイン画面");
  }
}

export class LoginViewModel {
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  constructor(title?: string) {
    this._title = title ? title : "";
  }
}
