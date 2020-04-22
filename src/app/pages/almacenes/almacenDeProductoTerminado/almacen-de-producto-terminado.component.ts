import { Component, OnInit } from '@angular/core'
import { ModeloCompleto } from '../../../models/modeloCompleto.modelo'
import { AlmacenProductoTerminadoService } from '../../../services/almacenDeProductoTerminado/almacen-producto-terminado.service'
import { PaginadorService } from '../../../components/paginador/paginador.service'
import { FiltrosModelosCompletos } from '../../../services/utilidades/filtrosParaConsultas/FiltrosModelosCompletos'
import { ModeloCompletoService } from '../../../services/modelo/modelo-completo.service'
import { Lotes } from '../../../models/almacenProductoTerminado/lotes.model'
import { ManejoDeMensajesService } from '../../../services/utilidades/manejo-de-mensajes.service'
import { Paginacion } from '../../../utils/paginacion.util'
import { iPaginadorData } from 'src/app/shared/paginador/paginador.component'

@Component({
  selector: 'app-almacen-de-producto-terminado',
  templateUrl: './almacen-de-producto-terminado.component.html',
  styles: []
})
export class AlmacenDeProductoTerminadoComponent implements OnInit {
  /**
   *El modeloCompleto al que se le va a agregar una entrada o salida.
   *
   * @type {ModeloCompleto}
   * @memberof AlmacenDeProductoTerminadoComponent
   */
  modeloCompletoES: ModeloCompleto = null
  /**
   *Define si es entrada o salida lo que se le va agregar al modelo completo
   *
   * @type {boolean}
   * @memberof AlmacenDeProductoTerminadoComponent
   */
  esEntrada: boolean = null
  detalleLote: Lotes
  termino: string = ''
  paginacion: Paginacion = new Paginacion(10, 0, 1, 'nombreCompleto')
  cargando = {}
  totalDeElementos = 0

  keys = Object.keys

  constructor(
    public almacenProdTerSer: AlmacenProductoTerminadoService,
    public modComService: ModeloCompletoService,
    public _msjService: ManejoDeMensajesService
  ) {}

  ngOnInit() {
    this.cargarModelos()
  }

  modelosCompletos: ModeloCompleto[] = []
  modeloCompletoDetalle: ModeloCompleto = null

  cargarModelos() {
    this.cargando['cargando'] = 'Cargando la lista sku'
    this.almacenProdTerSer.findAll(this.paginacion).subscribe(
      mod => {
        this.modelosCompletos = mod
        delete this.cargando['cargando']
      },
      () => delete this.cargando['cargando']
    )
  }

  cbObservable = termino => {
    this.termino = termino
    this.cargando['termino'] = `Buscando sku que coincidan con '${termino}'`
    return this.almacenProdTerSer.findByTerm(termino, this.paginacion)
  }

  resultadoDeBusqueda(datos) {
    delete this.cargando['termino']
    this.modelosCompletos = datos
    this.totalDeElementos = this.almacenProdTerSer.total
  }

  cancelado() {
    this.termino = ''
    this.cargarModelos()
  }
  error() {
    this.termino = ''
    this.cargarModelos
  }

  actualizarConsulta(data: iPaginadorData = null) {
    this.cargando['actualizarConsulta'] = 'Actualizando datos de consulta'
    this.paginacion = data ? data.paginacion : this.paginacion

    const cb = modelos => {
      this.modelosCompletos = modelos
      delete this.cargando['actualizarConsulta']
    }
    const cancelado = () => delete this.cargando['actualizarConsulta']

    if (this.termino) {
      this.modComService
        .findByTerm(this.termino, this.paginacion)
        .subscribe(cb, cancelado)
    } else {
      this.modComService.findAll(data.paginacion).subscribe(cb, cancelado)
    }
  }

  /**
   *Comprueba las existencias y devuelve el valor que corresponda.
   *
   * `-1` => La existencia esta debajo del minimo.
   * ` 0` => No hay existencia.
   * ` 1` => La existencia supera el maximo.
   * ` 2` => Todo esta dentro de l parametros.
   *
   *
   * @returns {(-1 | 0 | 1 | 2)} El valor segun la evaluacion.
   * @memberof AlmacenDeProductoTerminadoComponent
   */
  comprobarExistencias(mc: ModeloCompleto) {
    let valor: number = 2

    if (mc.existencia > mc.stockMaximo) valor = 1
    if (mc.existencia < mc.stockMinimo) valor = -1
    if (mc.existencia == 0) valor = 0

    return valor
  }

  modeloAConsolidar: ModeloCompleto = null

  consolidarLotes() {
    this.almacenProdTerSer
      .consolidar(this.modeloAConsolidar._id)
      .subscribe(modeloCompleto => {
        this.modeloAConsolidar = null
        if (this.termino) {
          this.cbObserbable(this.termino).subscribe(modelos => {
            this.modelosCompletos = modelos
            this.modelosCompletos.map(x => (x._servicio = this.modComService))
          })
        } else {
          this.cargarModelos()
        }
      })
  }
}
