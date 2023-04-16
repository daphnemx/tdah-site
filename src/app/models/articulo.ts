export interface Articulo {
  autor: string;
  id: string;
  contenido: string;
  descripcion: string;
  documentos: Documentos[];
  fechaCreacion: Date;
  imagenes: Imagenes[];
  tags: string[];
  titulo: string;
}

export interface Documentos {
  fileName: string;
  urlDoc: string;
  fileType: string;
}

export interface Imagenes {
  alt: string;
  imgUrl: string;
  nombreImg: string;
  portada: boolean;
}
