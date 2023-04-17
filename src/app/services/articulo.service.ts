import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
} from '@angular/fire/firestore';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor(private firestore: Firestore) {}

  async addArticulo(articulo: Articulo): Promise<void> {
    const articuloRef = collection(this.firestore, 'articulos');
    try {
      await addDoc(articuloRef, articulo);
      console.log('Articulo added successfully');
    } catch (error) {
      console.error('Error adding articulo: ', error);
    }
  }

  async getArticulos(): Promise<Articulo[]> {
    const articulosRef = collection(this.firestore, 'articulos');
    const querySnapshot = await getDocs(articulosRef);
    const articulos: Articulo[] = [];
    querySnapshot.forEach((doc) => {
      const articulo = doc.data() as Articulo;
      articulo.id = doc.id;
      articulos.push(articulo);
    });
    return articulos;
  }
}
