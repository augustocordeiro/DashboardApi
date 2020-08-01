export interface Serie {
    nome: string;
    dados: Dado[];
    cor:string;
}

export interface Dado{
    valor: number;
    categoria: string;
}
