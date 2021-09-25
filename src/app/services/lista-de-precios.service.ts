import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  IDBOpciones,
  IDBOpcionesObjectStore,
  IndexedDBService
} from '@codice-progressio/indexed-db'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { URL_BASE } from '../config/config'
import { ListaDePrecios } from '../models/listaDePrecios.model'
import { Offline, OfflineBasico, OfflineService } from './offline.service'

@Injectable({
  providedIn: 'root'
})
export class ListaDePreciosService {
  base = URL_BASE('lista-de-precios')
  offline: ListaDePreciosOfflineService<ListaDePrecios>
  constructor(public http: HttpClient, public offlineService: OfflineService) {
    this.offline = new ListaDePreciosOfflineService(this, this.base)
  }

  buscar() {
    return this.http.get(this.base).pipe(
      map((res: any) => {
        return res.listaDePrecios
      })
    )
  }

  crear(modelo: ListaDePrecios) {
    return this.http.post(this.base, modelo)
  }

  modificar(modelo: ListaDePrecios, noCargarSkus = false) {
    return this.http.put(
      this.base.concat(`?noCargarSkus=${noCargarSkus}`),
      modelo
    )
  }

  buscarPorId(id: string, noCargarSkus = false) {
    let url = this.base
      .concat('/id/')
      .concat(id)
      .concat('?noCargarSkus=' + noCargarSkus)

    return this.http.get(url).pipe(
      map((res: any) => {
        return res.listaDePrecios
      })
    )
  }

  eliminar(id: string) {
    let url = this.base.concat('/' + id)
    return this.http.delete(url)
  }

  tamanoDeLista(id: string) {
    let url = this.base.concat(`/id/${id}/tamano-de-lista`)
    return this.http.get(url)
  }

  todoLigero() {
    let url = this.base.concat('/todo-ligero')
    return this.http.get<ListaDePrecios[]>(url).pipe(
      map((res: any) => {
        return res.listaDePrecios
      })
    )
  }
}

class ListaDePreciosOfflineService<T>
  extends OfflineBasico<T>
  implements Offline<T>
{
  constructor(private root: ListaDePreciosService, base: string) {
    super(
      root.offlineService,
      root.http,
      base,
      root.offlineService.tablas.listasDePrecios,
      'listasDePrecios'
    )
  }
}
