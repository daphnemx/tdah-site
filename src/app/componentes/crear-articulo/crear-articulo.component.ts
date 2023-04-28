import { Component, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo, Documentos, Imagenes } from '../../models/articulo';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { firstValueFrom } from 'rxjs';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class CrearArticuloComponent {
  autor = '';
  titulo = '';
  contenido = '';
  descripcion = '';
  tags = '';
  documentos = [];
  imagenes = [];
  documentosSeleccionados = [];
  fileExtensionError = '';
  imageTypeError = '';
  storageDocs = getStorage();
  fileUploadingProgress = 0;
  uploadingFileRunning = false;
  uploadingImageRunning = false;

  constructor(
    private articuloService: ArticuloService,
    private storage: AngularFireStorage,
    private sanitizer: DomSanitizer
  ) {}

  onSubmit(): void {
    if (
      !this.autor ||
      !this.titulo ||
      !this.contenido ||
      !this.descripcion ||
      !this.tags
    ) {
      console.log('All fields are required');
      return;
    }

    const articulo: Articulo = {
      autor: this.autor,
      titulo: this.titulo,
      contenido: this.sanitizeContenido(this.contenido),
      descripcion: this.descripcion,
      tags: this.tags.split(','),
      fechaCreacion: new Date(),
      documentos: this.documentosSeleccionados,
      imagenes: this.imagenes,
      id: '',
    };

    this.articuloService
      .addArticulo(articulo)
      .then(() => {
        //console.log('Articulo added successfully');
        // reset form fields
        this.autor = '';
        this.titulo = '';
        this.contenido = '';
        this.descripcion = '';
        this.tags = '';
        this.documentos = [];
        this.documentosSeleccionados = [];
        this.imagenes = [];
      })
      .catch((error) => {
        console.error('Error adding articulo: ', error);
      });
  }

  sanitizeContenido(contenido: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, contenido);
  }

  onFileSelected(event: any): void {
    const allowedTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel.sheet.macroEnabled.12',
    ];
    const file: File = event.target.files[0];
    const fileName = file.name;
    const filePath = `articulosDocs/${fileName}`;
    const storageRef = ref(this.storageDocs, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Check if file type is pdf or doc
    if (!allowedTypes.includes(file.type)) {
      this.fileExtensionError =
        'Sólo se permiten archivos con las extensiones: .doc, .docx, .pdf, .xlsx, .xlsm';
      return;
    }

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.fileUploadingProgress = progress;
        console.log('Upload is ' + progress + '% done');
        console.log('State ' + snapshot.state);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            this.uploadingFileRunning = true;
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log('Error uploading file: ', error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.uploadingFileRunning = false;

          const fileType = file.type;
          const documentos: Documentos = {
            fileName: fileName,
            urlDoc: downloadURL,
            fileType: fileType,
          };
          this.documentosSeleccionados.push(documentos);
        });
      }
    );
  }

  onBorrarDoc(index: number): void {
    console.log('onBorrarDoc called with index:', index);

    const documento = this.documentosSeleccionados[index];
    const fileRef = this.storage.ref(`articulosDocs/${documento.fileName}`);
    firstValueFrom(fileRef.delete()).then(() => {
      console.log('File deleted successfully:', documento.fileName);
      this.documentosSeleccionados.splice(index, 1);

      console.log(
        'Document removed from the list:',
        this.documentosSeleccionados
      );
    });
  }

  onImageSelected(event: any): void {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const file: File = event.target.files[0];
    const fileName = file.name;
    const filePath = `articulosImagenes/${fileName}`;
    const storageRef = ref(this.storageDocs, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Check if file type is jpg or png
    if (!allowedTypes.includes(file.type)) {
      this.imageTypeError = 'Solo se permiten .jpg y .png';
      return;
    }

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.fileUploadingProgress = progress;
        console.log('Upload is ' + progress + '% done');
        console.log('State ' + snapshot.state);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            this.uploadingImageRunning = true;
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log('Error uploading file: ', error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('Image available at', downloadURL);
          this.uploadingImageRunning = false;

          const imageUrl = downloadURL;
          const image: Imagenes = {
            imgUrl: downloadURL,
            nombreImg: fileName,
            imgPortada:true,
          };
          this.imagenes.push(image);
          console.log(this.imagenes);
        });
      }
    );
  }

  onBorrarImg(index: number): void {
    console.log('onBorrarDoc called with index:', index);
    const imagen = this.imagenes[index];
    const fileRef = this.storage.ref(`articulosImagenes/${imagen.nombreImg}`);
    firstValueFrom(fileRef.delete()).then(() => {
      console.log('File deleted successfully:', imagen.nombreImg);
      this.imagenes.splice(index, 1);

      console.log('Document removed from the list:', this.imagenes);
    });
  }
}
