import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { SkuService } from '../../../services/sku/sku.service'
import { SKU, SkuImagen } from '../../../models/sku.model'
import { ActivatedRoute, Router } from '@angular/router'
import { ModalService } from '../../codice-modal/modal.service'

@Component({
  selector: 'app-sku-lista',
  templateUrl: './sku-lista.component.html',
  styleUrls: ['./sku-lista.component.css']
})
export class SkuListaComponent implements OnInit {
  @Output() estaCargando = new EventEmitter<boolean>()

  @Input()
  public set termino(value: string) {
    // Cuando recibimos el termino disparamos la
    // busqueda
    this._termino = value
    if (value) this.buscar(value)
    else this.cargar()
  }

  private _termino: string = ''

  public get termino(): string {
    return this._termino
  }

  cargando = false
  skus: SKU[] = []

  skuEtiquetas: SKU
  @Output() etiquetasFiltrandose = new EventEmitter<string[]>()
  @Input()
  public set etiquetasParaFiltrarse(value: string[]) {
    // Cada vez que en un componente externo modificamos
    // las etiquetas de filtrado y las recibimos aqui,
    // ejecutamos la acción de filtrado correspondiente
    // Unicamente si los valores son diferentes

    if (value.join('') !== this._etiquetasParaFiltrarse.join('')) {
      this._etiquetasParaFiltrarse = value

      if (value.length > 0) {
        // Solo ejecutamos el filtrado si hay valores.
        // No ejecutamos la busqueda general aqui para
        // no crear confusiones en caso de que se mande
        // un arreglo vacio.

        this.buscarEtiquetas(value)
      }
    }
  }
  private _etiquetasParaFiltrarse: string[] = []
  public get etiquetasParaFiltrarse(): string[] {
    return this._etiquetasParaFiltrarse
  }

  constructor(
    public modalService: ModalService,
    private skuService: SkuService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargar()
  }

  cargar() {
    this.estadoCarga(true)
    this.skuService.leerTodo().subscribe(
      skus => {
        this.skus = skus
        this.estadoCarga(false)
      },
      () => this.estadoCarga(false)
    )
  }

  estadoCarga(estado: boolean) {
    this.estaCargando.emit(estado)
    this.cargando = estado
  }

  private niceUrl(str: string): string {
    return str
      .split(' ')
      .map(x => x.trim())
      .join('_')
  }

  verDetalle(sku: SKU) {
    this.router.navigate(
      ['./detalle', this.niceUrl(sku.nombreCompleto), sku._id],
      { relativeTo: this.activatedRoute.parent }
    )
  }

  gestionarImagenes(sku: SKU) {
    this.router.navigate(
      ['./imagenes', this.niceUrl(sku.nombreCompleto), sku._id],
      { relativeTo: this.activatedRoute.parent }
    )
  }

  modificar(sku: SKU) {
    this.router.navigate(
      ['./modificar', this.niceUrl(sku.nombreCompleto), sku._id],
      { relativeTo: this.activatedRoute.parent }
    )
  }

  buscar(termino: string) {
    this.estadoCarga(true)
    this.skuService.buscarTermino(termino).subscribe(
      skus => {
        this.estadoCarga(false)
        this.skus = skus
      },
      () => this.estadoCarga(false)
    )
  }

  filtrarPorEtiquetas(etiquetas) {
    return () => {
      // Comprobamos que las etiquetas no esten repetidas
      this.etiquetasParaFiltrarse = Array.from(
        new Set(this.etiquetasParaFiltrarse).add(etiquetas)
      )
      // emitimos las etiquetas para que otro componente se
      // encargue de filtrarlos

      this.etiquetasFiltrandose.emit(this.etiquetasParaFiltrarse)
    }
  }

  etiquetasEditar(sku: SKU) {
    this.skuEtiquetas = sku
    this.modalService.open('editarEtiquetas')
  }

  cargandoEtiqueta = false
  etiquetaEliminar(sku: SKU, tag: string) {
    return () => {
      this.cargandoEtiqueta = true
      this.skuService.etiqueta.eliminar(sku._id, tag).subscribe(
        s => {
          sku.etiquetas = sku.etiquetas.filter(x => x !== tag)

          this.cargandoEtiqueta = false
        },
        () => (this.cargandoEtiqueta = false)
      )
    }
  }

  etiquetaGuardar(sku: SKU, input: any) {
    let valor = input.value.trim()
    if (!valor) return

    this.cargandoEtiqueta = true
    this.skuService.etiqueta.agregar(sku._id, valor).subscribe(
      s => {
        // Eliminamos de manera dierecta sobre el objeto
        sku.etiquetas.push(valor)
        input.value = ''
        setTimeout(() => {
          input.focus()
        }, 100)
        this.cargandoEtiqueta = false
      },
      () => (this.cargandoEtiqueta = false)
    )
  }

  buscarEtiquetas(value: string[]) {
    this.estadoCarga(true)
    this.skuService.etiqueta.buscar(value).subscribe(
      skus => {
        this.skus = skus
        this.estadoCarga(false)
      },
      () => this.estadoCarga(false)
    )
  }

  obtenerIconoDeEtiqueta(tag: string): string[] {
    let base = ['fas', 'mr-1']
    let sinFiltrar = base.concat('fa-tag')
    let filtrando = base.concat(...['fa-filter', 'text-warning'])

    return this.etiquetasParaFiltrarse.includes(tag) ? filtrando : sinFiltrar
  }
}
