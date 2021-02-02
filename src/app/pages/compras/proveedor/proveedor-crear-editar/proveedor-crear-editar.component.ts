import { Component, OnInit } from '@angular/core'
import { ProveedorService } from '../../../../services/proveedor.service'
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { ValidacionesService } from '../../../../services/utilidades/validaciones.service'
import {
  Proveedor,
  ProveedorDomicilio,
  ProveedorContacto,
  ProveedorCuenta
} from '../../../../models/proveedor.model'

@Component({
  selector: 'app-proveedor-crear-editar',
  templateUrl: './proveedor-crear-editar.component.html',
  styleUrls: ['./proveedor-crear-editar.component.css']
})
export class ProveedorCrearEditarComponent implements OnInit {
  private _cargando = false
  public get cargando() {
    return this._cargando
  }
  public set cargando(value) {
    this._cargando = value
    if (value) this.formulario.disable()
    else this.formulario.enable()
  }
  formulario: FormGroup
  id: string
  constructor(
    public vs: ValidacionesService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private proveedorService: ProveedorService
  ) {}

  ngOnInit(): void {
    this.obtenerId()
  }

  obtenerId() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')

      if (!this.id) this.crearFormulario({})
      else this.obtenerProveedor(this.id)
    })
  }

  obtenerProveedor(id: string) {
    this.cargando = true
    this.proveedorService.buscarId(id).subscribe(
      proveedor => {
        this.crearFormulario(proveedor)
        this.cargando = false
      },
      () => (this.cargando = false)
    )
  }

  crearFormulario(proveedor: Partial<Proveedor>) {
    this.formulario = new FormGroup({
      _id: new FormControl(proveedor._id, []),
      nombre: new FormControl(proveedor.nombre, [
        Validators.required,
        Validators.minLength(4)
      ]),
      razonSocial: new FormControl(proveedor.razonSocial, []),
      domicilios: new FormArray(
        proveedor.domicilios?.map(x => this.creFormDomicilio(x)) ?? [
          this.creFormDomicilio({})
        ]
      ),
      contactos: new FormArray(
        proveedor.contactos?.map(x => this.creFormContacto(x)) ?? [
          this.creFormContacto({})
        ]
      ),
      rfc: new FormControl(proveedor.rfc, []),
      cuentas: new FormArray(
        proveedor.cuentas?.map(x => this.creFormCuentas(x)) ?? [
          this.creFormCuentas({})
        ]
      )
    })
  }

  creFormDomicilio(domicilios: Partial<ProveedorDomicilio>): FormGroup {
    return new FormGroup({
      _id: new FormControl(domicilios._id),
      calle: new FormControl(domicilios.calle),
      numeroInterior: new FormControl(domicilios.numeroInterior),
      numeroExterior: new FormControl(domicilios.numeroExterior),
      colonia: new FormControl(domicilios.colonia),
      codigoPostal: new FormControl(domicilios.codigoPostal),
      estado: new FormControl(domicilios.estado),
      pais: new FormControl(domicilios.pais),
      ciudad: new FormControl(domicilios.ciudad),
      urlMaps: new FormControl(domicilios.urlMaps)
    })
  }

  creFormContacto(contactos: Partial<ProveedorContacto>): FormGroup {
    return new FormGroup({
      _id: new FormControl(contactos._id),
      nombre: new FormControl(contactos.nombre),
      telefono: new FormArray(
        contactos.telefono?.map(x => new FormControl(x)) ?? [new FormControl()]
      ),
      correo: new FormArray(
        contactos.correo?.map(x => new FormControl(x)) ?? [new FormControl()]
      ),
      puesto: new FormArray(
        contactos.puesto?.map(x => new FormControl(x)) ?? [new FormControl()]
      )
    })
  }

  creFormCuentas(cuentas: Partial<ProveedorCuenta> = {}): FormGroup {
    return new FormGroup({
      _id: new FormControl(cuentas._id),
      clabe: new FormControl(cuentas.clabe),
      cuenta: new FormControl(cuentas.cuenta),
      banco: new FormControl(cuentas.banco)
    })
  }

  submit(modelo: Proveedor, invalid: boolean) {
    this.formulario.markAllAsTouched()
    this.formulario.updateValueAndValidity()

    if (this.formulario.invalid) return

    if (modelo._id) this.modificar(modelo)
    else this.guardar(modelo)
  }

  modificar(modelo: Proveedor) {
    this.cargando = true
    this.proveedorService.modificar(modelo).subscribe(
      modelo => this.location.back(),
      () => (this.cargando = false)
    )
  }

  guardar(modelo: Proveedor) {
    this.cargando = true
    this.proveedorService.crear(modelo).subscribe(
      pro => {
        this.location.back()
      },
      () => (this.cargando = false)
    )
  }

  eliminar(i: number, arreglo: FormArray) {
    arreglo.removeAt(i)
  }

  f(campo: string) {
    return this.formulario.get(campo)
  }

  fa(campoArreglo: string | AbstractControl) {
    return (typeof campoArreglo === 'string'
      ? this.f(campoArreglo)
      : campoArreglo) as FormArray
  }

  dfa(dummy: AbstractControl, campo: string): FormArray {
    return dummy.get(campo) as FormArray
  }

  addCampoSimple(campo: AbstractControl) {
    this.fa(campo).push(new FormControl())
  }
}