import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ManejoDeMensajesService } from '../utilidades/manejo-de-mensajes.service';
import { Roles } from 'src/app/models/roles.models';
import { _ROLES } from 'src/app/config/roles.const';
import { PreLoaderService } from 'src/app/components/pre-loader/pre-loader.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  // Cuando se recarga la página la tratamos de leer (en el login)
  // y si no la inicializamos (cargando del storage) va a dar error.
  token: string;

  // roles: Roles;

  menu: any[] = [];

  constructor(
    // Para que este funcione hay que hacer un "imports"
    // en service.module.ts
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService,
    public _msjService: ManejoDeMensajesService,
    public _preLoaderService: PreLoaderService
  ) {
    // console.log('Servicio de usuario listo');
    this.cargarStorage();
  }

  renuevaToken() {
    const url = URL_SERVICIOS + `/login/renuevatoken?token=${this.token}`;
    return this.http.get( url ).pipe(
      map( (resp: any) => {
        this.token = resp.token;
        localStorage.setItem('token', this.token);
        // Si lo hace recive true
        // console.log('token renovado. ');
        this._msjService.ok_('Token renovado');
        return true;
      }),
      catchError( err => {
        // swal( 'No se pudo renovar token', 'No fue posible renovar token.', 'error');
        this._msjService.err( err);
        this.router.navigate(['login']);
        return throwError(err);
      })
    );
  }

  logout() {

    
    this.usuario = null;
    this.token = '';
    this.menu = [null];
    localStorage.removeItem('item');
    localStorage.removeItem('usuario');
    localStorage.removeItem('menu');
    this.router.navigate(['/login']);
    
  }

  loginGoogle ( token: string) {
    const url = URL_SERVICIOS + '/login/google';

    // Aqui hay que mandar el token como un objeto por aquello
    // de que el servicio necesita recivir un parametro llamado 'token'
    // En EMC6 no es necesario poner en el objeto {token:token}, lo hace automatico.

    return this.http.post(url, {token}).pipe(
      map((resp: any) => {
       

        this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu);
        // this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu, resp.roles);
        // Retorna la respuesta de true de autenticación correcta para capturarla en
        // el subscribe de login.component.ts y hacer algo bonito.
        return true;
      }));
  }

  estaLoguedo() {
    return (this.token.length > 5);
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      // CARGAMOS EL MENU DESDE EL BACKEND SERVER.
      this.menu = JSON.parse(localStorage.getItem('menu'));
      // this.roles = JSON.parse(localStorage.getItem('roles'));
    } else {
      this.token = '';
      this.usuario = null;
      // Si no hay token destruimos el menu.
      this.menu = [null];
    }
  }

  guardarStorage (id: string, token: string, usuario: Usuario, menu: any) {
  // guardarStorage (id: string, token: string, usuario: Usuario, menu: any, roles: Roles) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    // En el local storage no se pueden grabar objetos.
    // Hay que convertirlos en string.
    localStorage.setItem('usuario', JSON.stringify(usuario));

    localStorage.setItem('menu', JSON.stringify(menu));
    // localStorage.setItem('roles', JSON.stringify(roles));

    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
    // this.roles = roles;
  }



  login (usuario: Usuario, recordar: boolean = false) {
    const a: number = this._preLoaderService.loading('Iniciando secion.');
    
    // Recordamos el email guardandolo en el localStorage. Esto
    // se activa con el input de "Recuerdame" que esta en la
    // pagina del login.
    if ( recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    const url = URL_SERVICIOS + '/login';
    console.log( 'url que se tomo para el login=' + url);
    return this.http.post(url, usuario).pipe(
      // Guardamos la información en el local storage para que quede
      // disponible si el usuario cierra el navegador.
      map( (resp: any) => {
       
        // this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu, resp.roles);
        this.guardarStorage(resp.id, resp.token, resp.usuario, resp.menu);
        this._msjService.ok_(resp,null, a);
        return true;
      }),
      catchError( err => {
        // console.log( err.error);
       this._msjService.err(err);
        return throwError(err);
      })
    );
  }

  crearUsuario (usuario: Usuario) {
    const a: number = this._preLoaderService.loading('Guardando usuario.');
    
    const url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario).pipe(
      // Si todo salio bien mandamos un mensaje.
      map((resp: any) => {
        this._msjService.ok_(resp,null, a);
        return resp.usuario;
      }),
      catchError( err => {
        this._msjService.err( err );
        return throwError(err);
      })
    );
  }

  // Actualiza los datos de un usuario en el local storage
  // y el la BD.
  actualizarUsuario( usuario: Usuario) {
    const a: number = this._preLoaderService.loading('Actualizando datos del usuario.');
    
    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + localStorage.getItem('token');

    return this.http.put( url, usuario).pipe(
      map((resp: any) => {
        // Si estamos modificando un usuario entonces no
        // tiene localStorage, pero si esta logueado
        // hay que modificar el local storage para que pueda
        // seguir logueado y su información, la que se envía
        // al serivdor (En algúna otra parte) este sincronizada con la
        // la de la BD
        if ( usuario._id === this.usuario._id) {
          const usuarioDB: Usuario = resp.usuario;
          // this.guardarStorage(usuarioDB._id, this.token, usuarioDB, this.menu, this.roles);
          this.guardarStorage(usuarioDB._id, this.token, usuarioDB, this.menu);
        }
        this._msjService.ok_(resp,null, a);
        return true;
      }), catchError( err => {
        this._msjService.err( err );
        return throwError(err);
      })

    );

  }

  cambiarImagen( archivo: File, id: string) {
    const a: number = this._preLoaderService.loading('Subiendo imagen para el usuario.');
    
    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id)
    .then((resp: any) =>  {
      this.usuario.img = resp.usuario.img;
      this._msjService.ok_(resp,null, a);
      this.guardarStorage(id, this.token, this.usuario, this.menu);
    }).catch( err => {
      this._msjService.err(err);
      return throwError( err );
    });
  }

  cargarUsuarios ( desde: number = 0) {
    const a: number = this._preLoaderService.loading('Cargando usuarios.');
    
    const url = URL_SERVICIOS + `/usuario?desde=${desde}`;
    return this.http.get(url).pipe( 
      map(resp =>{ 
        this._msjService.ok_(resp,null, a);
        return resp;
      }),
      catchError( err => {
        this._msjService.err(err);
        return throwError(err);
      })
      );
  }

  buscarUsuario ( termino: string ) {
    this._preLoaderService.miniCarga = true;
    const a: number = this._preLoaderService.loading('Buscando usuario: ' + termino);
    
    const url = URL_SERVICIOS + `/busqueda/coleccion/usuarios/${termino}`;
    return this.http.get(url).pipe(
      map((resp: any ) =>  {
        this._msjService.ok_(resp,null, a);
        return resp.usuarios;
      } ),
      catchError( err => {
        this._msjService.err( err );
        return throwError( err );
      })
    );
  }

  borrarUsuario ( id: string ) {
    const url = URL_SERVICIOS + `/usuario/${id}?token=${this.token}`;

    return this.http.delete(url).pipe(
      map( () => {
        swal('¡Eliminado!', 'El usuario a sido eliminado correctamente.', 'success');
        return true;
      }),
      catchError( err => {
        this._msjService.err( err );
        return throwError( err );
      })
    );
  }

  buscarUsuarioPorROLE (role: string , a:number ) {
    
    const url = URL_SERVICIOS + `/busqueda/coleccion/usuariosRole/${role}`;
    
    return this.http.get( url ).pipe(
      map( ( resp: any ) => {
        this._msjService.ok_(resp,null, a);
        
        return resp.usuariosRole;
      }),
      catchError( err => {
        this._msjService.err( err );
        return throwError( err );
      })
    );

    // return this.http.get( url ).pipe(
    //   map( (resp: any) =>  {
    //     return resp.usuariosRole;
    //   })
    // );

  }

  cargarVendedores ( ):Observable<Usuario[]> {
    const a: number = this._preLoaderService.loading('Cargando vendedores.');
    
    return this.buscarUsuarioPorROLE(_ROLES.VENDEDOR_ROLE, a);
  }

  cargarSeleccionadores():Observable<Usuario[]> {
    const a: number = this._preLoaderService.loading('Cargando seleccionadores.');
    
    return this.buscarUsuarioPorROLE( _ROLES.SELECCION_CONTEO_ROLE , a);
  }
  cargarEmpacadores():Observable<Usuario[]> {
    const a: number = this._preLoaderService.loading('Cargando empacadores.');
    return this.buscarUsuarioPorROLE( _ROLES.EMPAQUE_EMPACADOR_ROLE, a );
  }

  cargarMateriales( ):Observable<Usuario[]> {
    const a: number = this._preLoaderService.loading('Cargando empleados de materiales.');
    return this.buscarUsuarioPorROLE(_ROLES.MATERIALES_CARGA_ROLE, a);
  }

  // // Concatena a la url URL_SERVICIOS y el token=?
  // st( url: string ): string {
  //   const u = URL_SERVICIOS + url;
  //   const token = `token=${this.token}`;
  //   return url.includes('?') ? u + `&${token}` : u + `?${token}`;
  // }
}
