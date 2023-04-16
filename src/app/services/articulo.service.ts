import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
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
}
