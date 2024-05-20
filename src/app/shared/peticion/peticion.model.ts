export class Peticion {
    private _id: number;
    private _url: string;
    private _estado: string;
    private _resultado: string;
    private _transcripcion: string;
    private _tiempoProceso: bigint;
    private _fecha: string;

    constructor(id: number, url:string, estado: string, resultado: string, transcripcion: string, tiempoProceso: bigint, fecha: string) {
        this._id = id;
        this._url = url;
        this._estado = estado;
        this._resultado = resultado;
        this._transcripcion = transcripcion;
        this._tiempoProceso = tiempoProceso;
        this._fecha = fecha;
    }
    

    get id(): number {
        return this._id;
    }

    get url(): string {
        return this._url;
    }

    get estado(): string {
        return this._estado;
    }

    get resultado(): string {
        return this._resultado;
    }

    get transcripcion(): string {
        return this._transcripcion;
    }

    get tiempoProceso(): bigint {
        return this._tiempoProceso;
    }

    get fecha(): string {
        return this._fecha;
    }

    set id(id: number) {
        this._id = id;
    }

    set url(url: string) {
       this._url = url;
    }

    set estado(estado: string) {
        this._estado = estado;
    }

    set resultado(resultado: string) {
        this._resultado = resultado;
    }

    set transcripcion(transcripcion: string) {
        this._transcripcion = transcripcion;
    }

    set tiempoProceso(tiempoProceso: bigint) {
        this._tiempoProceso = tiempoProceso;
    }

    set fecha(fecha: string) {
        this._fecha = fecha;
    }

}
