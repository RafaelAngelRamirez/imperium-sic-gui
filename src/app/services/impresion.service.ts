import { Injectable } from '@angular/core'
import { ReporteFaltantesProductoTerminado } from '../models/reportes/productoTerminado/reporte.faltantes.productoTerminado'
import { ReporteFaltantesAlmacenProduccion } from '../models/reportes/almacenProduccion/reporte.faltantes.almacenProduccion'

@Injectable({
  providedIn: 'root'
})
export class ImpresionService {
  reportesProductoTerminadoFaltante: ReporteFaltantesProductoTerminado[] = null
  reportesAlmacenProduccionFaltante: ReporteFaltantesAlmacenProduccion[] = null
  reportesAlmacenPrdouccionPersonalizado: any [] = null

  titulo = 'Reporte sin titulo'
  fecha = new Date()
  private operacionDeLimpieza: Function = null
  constructor() {}

  productoTerminadoFaltantes(
    reportes: ReporteFaltantesProductoTerminado[]
  ): this {
    this.titulo = 'Reporte de faltantes. Producto terminado'
    this.reportesProductoTerminadoFaltante = reportes

    return this
  }

  private limpiar() {
    this.reportesProductoTerminadoFaltante = null
    this.reportesAlmacenProduccionFaltante = null
    this.reportesAlmacenPrdouccionPersonalizado = null
  }

  almacenProduccionFaltantes(
    reportes: ReporteFaltantesAlmacenProduccion[]
  ): this {
    this.titulo = 'Reporte de faltantes. Almacen de produccion'
    this.reportesAlmacenProduccionFaltante = reportes
    this.operacionDeLimpieza
    return this
  }
 
  almacenProduccionPersonalizado(
    reportes: any[], nombreReporte:string
  ): this {
    this.titulo = nombreReporte + ' Almacen de produccion'
    this.reportesAlmacenPrdouccionPersonalizado = reportes
    this.operacionDeLimpieza
    return this
  }

  imprimir() {
    this.fecha = new Date()
    setTimeout(() => {
      window.print()
      this.limpiar()
    }, 300)
  }
}