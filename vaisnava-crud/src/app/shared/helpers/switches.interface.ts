export class Loading {
  private _status: boolean = false;
  public on() { this._status = true };
  public off() { this._status = false };

  get status (): boolean {
    return this._status;
  };
}

export class Toggle {
  private _status: boolean = false;
  public show() { this._status = true };
  public hide() { this._status = false };

  get status(): boolean {
    return this._status;
  };
}