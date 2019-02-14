import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Orden } from '../../../models/orden.models';
import { ModeloCompleto } from '../../../models/modeloCompleto.modelo';
import { FolioLinea } from '../../../models/folioLinea.models';
import { QrScannerService } from '../../../components/qrScanner/qr-scanner.service';
import { ListaDeOrdenesService } from '../../../components/lista-de-ordenes/lista-de-ordenes.service';
import { FolioService, ValidacionesService, DepartamentoService } from '../../../services/service.index';
import { Pulido } from '../../../models/pulido.models';
import { DEPARTAMENTOS } from '../../../config/departamentos';
import { GeneralesComponents } from '../../utilidadesPages/generalesComponents';
import { Materiales } from 'src/app/models/materiales.models';
import { DefaultsService } from 'src/app/services/configDefualts/defaults.service';
import { DepartamentosConfig } from 'src/app/config/departamentosConfig';

@Component({
  selector: 'app-pulido',
  templateUrl: './pulido.component.html',
  styles: []
})
export class PulidoComponent  extends GeneralesComponents< Pulido > implements OnInit {



  constructor(
    public _qrScannerService: QrScannerService<Materiales>,
    public _listaDeOrdenesService: ListaDeOrdenesService,
    public formBuilder: FormBuilder,
    public _folioService: FolioService,
    public _defaultService: DefaultsService,
    public _departamentoService: DepartamentoService,
    public _validacionesService: ValidacionesService,
    // Propios del departamento.

  ) { 
    
   super(
      _qrScannerService,
      _listaDeOrdenesService,
      formBuilder,
      _folioService,
      _defaultService,
      _departamentoService
    );

    this.tareasDeConfiguracion( new DepartamentosConfig().PULIDO )


  }
  ngOnInit() {
    // Iniciamos el formulario.
    this.formulario = this.formBuilder.group({
      peso10Botones: ['', 
      [
        Validators.required,
        Validators.min(0.01),
        Validators.max(500),
        this._validacionesService.numberValidator,
      ]
    ],
    pesoTotalBoton: ['', [
      Validators.required,
      Validators.min(0.1),
      Validators.max(99.99),
      this._validacionesService.numberValidator,
    ]],
    });
    
    
  }

  public get peso10(): AbstractControl {
     return this.formulario.get('peso10Botones');
  }
  
  public get pesoTotal(): AbstractControl {
    return this.formulario.get('pesoTotalBoton');
  }
  
  // public get cant(): AbstractControl {
  //   return this.pulidoForm.get('cantidad');
  // }
    
  public calcularCantidad( ): number {
    const peso: number = +this.peso10.value;
    const pesoTotal: number = +this.pesoTotal.value;

    return (pesoTotal * 1000) / (peso / 10);
    

  }

}
