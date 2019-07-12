import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Articulo } from "../../../models/almacenDeMateriaPrimaYHerramientas/articulo.modelo"
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms"
import { ValidacionesService } from "../../../services/utilidades/validaciones.service"
import { min } from "rxjs/operators"
import { ArticuloService } from "src/app/services/articulo/articulo.service"
import { AlmacenDescripcion } from "../../../models/almacenDeMateriaPrimaYHerramientas/almacen-descripcion.model"
import { AlmacenDescripcionService } from "../../../services/almacenDeMateriaPrimaYHerramientas/almacen-descripcion.service"

@Component({
  selector: "app-articulo-crear-modificar",
  templateUrl: "./articulo-crear-modificar.component.html",
  styles: []
})
export class ArticuloCrearModificarComponent implements OnInit {
  articulo: Articulo = null
  @Output() guardar = new EventEmitter<null>()

  @Output() esteComponente = new EventEmitter<this>()

  formulario: FormGroup

  almacenes: AlmacenDescripcion[] = []

  constructor(
    public fb: FormBuilder,
    public vs: ValidacionesService,
    public _articuloService: ArticuloService,
    public _almacenDescripcionService: AlmacenDescripcionService
  ) {}

  ngOnInit() {
    this.esteComponente.emit(this)
    this.crearFormulario()

    this._almacenDescripcionService
      .todo()
      .subscribe((todo) => (this.almacenes = todo))
  }

  cargarDatos() {
        this.crearFormulario()
        this.asignarValores(this.articulo)
  }

  asignarValores(ar: Articulo) {
    this.codigoLocalizacion_FB.setValue(ar.codigoLocalizacion)
    this.codigoInterno_FB.setValue(ar.codigoInterno)
    this.codigoProveedor_FB.setValue(ar.codigoProveedor)
    this.almacen_FB.setValue(ar.almacen._id)
    this.nombre_FB.setValue(ar.nombre)
    this.presentacion_FB.setValue(ar.presentacion)
    this.unidad_FB.setValue(ar.unidad)
    this.kgPorUnidad_FB.setValue(ar.kgPorUnidad)
    this.stockMinimo_FB.setValue(ar.stockMinimo)
    this.stockMaximo_FB.setValue(ar.stockMaximo)
    this.descripcion_FB.setValue(ar.descripcion)
    this.observaciones_FB.setValue(ar.observaciones)
  }

  /**
   *Crea un nuevo articulo. 
   *
   * @memberof ArticuloCrearModificarComponent
   */
  crear(){
    this.articulo = null
    this.crearFormulario()
  }

  /**
   *Modifica el articulo que se le pase como parametro. 
   *
   * @param {Articulo} articulo El articulo a modificar 
   * @memberof ArticuloCrearModificarComponent
   */
  modificar( articulo: Articulo ){
    this.articulo = articulo
    this.crearFormulario()
    this.cargarDatos()
  }

  crearFormulario() {
    this.formulario = this.fb.group(
      {
        codigoLocalizacion: ["", []],
        codigoInterno: ["", []],
        codigoProveedor: ["", []],
        almacen: ["", [Validators.required]],
        nombre: ["", [Validators.required]],
        presentacion: ["", [Validators.required]],
        unidad: ["", [Validators.required]],
        kgPorUnidad: ["", [Validators.required, Validators.min(0)]],
        descripcion: [""], 
        observaciones: [""], 
        stockMinimo: [
          "",
          [Validators.required, Validators.max(999999), Validators.min(0)]
        ],
        stockMaximo: [
          "",
          [Validators.required, Validators.max(999999), Validators.min(0)]
        ]
      },
      { validator: this.validarMinMax }
    )
  }

  validarMinMax(group: FormGroup) {
    let min: number = group.get("stockMinimo").value
    let max: number = group.get("stockMaximo").value
    // let minA: AbstractControl = group.get("stockMinimo")
    let maxA: AbstractControl = group.get("stockMaximo")

    let validacion = null
    if (min >= max) {
      maxA.setErrors({ general: { mensaje: "Debe ser mayor que " + min } })

      validacion = {
        general: { mensaje: "El maximo no puede ser igual o menor al minimo." }
      }
    }

    return validacion
  }

  get codigoLocalizacion_FB(): AbstractControl {
    return this.formulario.get("codigoLocalizacion")
  }
  get codigoInterno_FB(): AbstractControl {
    return this.formulario.get("codigoInterno")
  }
  get codigoProveedor_FB(): AbstractControl {
    return this.formulario.get("codigoProveedor")
  }
  get almacen_FB(): AbstractControl {
    return this.formulario.get("almacen")
  }
  get nombre_FB(): AbstractControl {
    return this.formulario.get("nombre")
  }
  get presentacion_FB(): AbstractControl {
    return this.formulario.get("presentacion")
  }
  get unidad_FB(): AbstractControl {
    return this.formulario.get("unidad")
  }
  get kgPorUnidad_FB(): AbstractControl {
    return this.formulario.get("kgPorUnidad")
  }
  get stockMinimo_FB(): AbstractControl {
    return this.formulario.get("stockMinimo")
  }
  get stockMaximo_FB(): AbstractControl {
    return this.formulario.get("stockMaximo")
  }
  get descripcion_FB(): AbstractControl {
    return this.formulario.get("descripcion")
  }
  get observaciones_FB(): AbstractControl {
    return this.formulario.get("observaciones")
  }

  submit(modelo: Articulo, valid: boolean, e) {
    e.preventDefault()
    if (valid) {
      let cb = () => {
        this.guardar.emit()
        this.limpiar()
      }

      if (this.articulo) {
        modelo._id = this.articulo._id
        this._articuloService.modificar(modelo).subscribe(cb)
      } else {
        this._articuloService.guardar(modelo).subscribe(cb)
      }
    }
  }

  limpiar() {
    this.crearFormulario()
    this.articulo = null
  }

  cancelar() {
    this.limpiar()
  }
}
