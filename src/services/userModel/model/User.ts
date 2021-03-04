export default class User {
  private _id: string;
  private _name: string;
  private _vorname: string;
  private _strasse: string;
  private _plz: string;
  private _ort: string;

  constructor(
    id: string,
    name: string,
    vorname: string,
    strasse: string,
    plz: string,
    ort: string
  ) {
    this._id = id;
    this._name = name;
    this._vorname = vorname;
    this._strasse = strasse;
    this._plz = plz;
    this._ort = ort;
  }

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter vorname
   * @return {string}
   */
  public get vorname(): string {
    return this._vorname;
  }

  /**
   * Getter strasse
   * @return {string}
   */
  public get strasse(): string {
    return this._strasse;
  }

  /**
   * Getter plz
   * @return {string}
   */
  public get plz(): string {
    return this._plz;
  }

  /**
   * Getter ort
   * @return {string}
   */
  public get ort(): string {
    return this._ort;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter vorname
   * @param {string} value
   */
  public set vorname(value: string) {
    this._vorname = value;
  }

  /**
   * Setter strasse
   * @param {string} value
   */
  public set strasse(value: string) {
    this._strasse = value;
  }

  /**
   * Setter plz
   * @param {string} value
   */
  public set plz(value: string) {
    this._plz = value;
  }

  /**
   * Setter ort
   * @param {string} value
   */
  public set ort(value: string) {
    this._ort = value;
  }
}
