import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AccountsSettingsComponent } from './accounts-settings/accounts-settings.component'
import { ProfileComponent } from './profile/profile.component'
import { UsuariosComponent } from './usuarios/usuarios.component'
import { BusquedaComponent } from './busqueda/busqueda.component'
import { SeguimientoDeFoliosComponent } from './seguimiento-de-folios/seguimiento-de-folios.component'
import { MaterialesComponent } from './departamentos/materiales/materiales.component'
import { TransformacionComponent } from './departamentos/transformacion/transformacion.component'
import { PulidoComponent } from './departamentos/pulido/pulido.component'
import { SeleccionComponent } from './departamentos/seleccion/seleccion.component'
import { PastillaComponent } from './departamentos/pastilla/pastilla.component'
import { EmpaqueComponent } from './departamentos/empaque/empaque.component'
import { IndicadorDeChecadasComponent } from './reportes/indicador-de-checadas/indicador-de-checadas.component'
import { _ROLES as ROLES } from '../config/roles.const'
import { ClientesComponent } from './clientes/clientes.component'
import { ControlDeProduccionComponent } from './departamentos/control-de-produccion/control-de-produccion.component'
import { ProductoTerminadoComponent } from './departamentos/producto-terminado/producto-terminado.component'
import { MetalizadoComponent } from './departamentos/metalizado/metalizado.component'
import { BarnizadoComponent } from './departamentos/barnizado/barnizado.component'
import { BuratoComponent } from './departamentos/burato/burato.component'
import { LaserComponent } from './departamentos/laser/laser.component'
import { AlmacenDeBotonComponent } from './departamentos/almacen-de-boton/almacen-de-boton.component'
import { ProcesosComponent } from './gestionDeProcesos/procesos/procesos.component'
import { MaquinasComponent } from './gestionDeProcesos/maquinas/maquinas.component'
import { FamiliaDeProcesosComponent } from './gestionDeProcesos/familia-de-procesos/familia-de-procesos.component'
import { TamanosComponent } from './gestionDeProcesos/tamanos/tamanos.component'
import { ColoresComponent } from './gestionDeProcesos/colores/colores.component'
import { TerminadosComponent } from './gestionDeProcesos/terminados/terminados.component'
import { ModelosCompletosComponent } from './gestionDeProcesos/modelos-completos/modelos-completos.component'
import { ModelosComponent } from './gestionDeProcesos/modelos/modelos.component'
import { PruebaParaDetallesComponent } from './prueba-para-detalles/prueba-para-detalles.component'
import { RevisionDeFoliosComponent } from './gestionDeFolios/revision/revision-de-folios/revision-de-folios.component'
import { FoliosSeguimientoComponent } from './gestionDeFolios/seguimiento/folios-seguimiento/folios-seguimiento.component'
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard'
import { PermisosGuard } from '../services/guards/permisos.guard'
import { AlmacenDeProductoTerminadoComponent } from './almacenes/almacenDeProductoTerminado/almacen-de-producto-terminado.component'
import { StockAlmacenProductoTerminadoComponent } from './almacenes/almacenDeProductoTerminado/stock/stock-almacen-producto-terminado.component'
import { AlamacenProduccion as AlmacenProduccion } from './almacenes/almacenDeMateriaPrimaYHerramientas/almacen-produccion.component'
import { AlmacenDescripcionComponent } from './almacenes/almacenDescripcion/almacen-descripcion.component'
import { TenidoComponent } from './departamentos/tenido/tenido/tenido.component'
import { ProveedorComponent } from './proveedor/proveedor.component'
import { DivisaComponent } from './divisa/divisa.component'
import { RequisicionComponent } from './almacenes/requisicion/requisicion.component'
import { EmpleadoComponent } from './recursosHumanos/empleado/empleado.component'
import { CursosComponent } from './recursosHumanos/cursos/cursos.component'
import { AreasComponent } from './recursosHumanos/areas/areas.component'
import { PuestosComponent } from './recursosHumanos/puestos/puestos.component'
import { DepartamentoComponent } from './departamento/departamento.component'
import { AlmacenESComponent } from './alamacenes/almacen-es/almacen-es.component'
import { ReporteDeFaltantesProductoTerminadoComponent } from './reportes/reporte-de-faltantes-producto-terminado/reporte-de-faltantes-producto-terminado.component'
import { ReporteDeFaltantesAlmacenDeProduccionComponent } from './reportes/reporte-de-faltantes-almacen-de-produccion/reporte-de-faltantes-almacen-de-produccion.component'
import { ReportePersonalizadoAlmacenProduccionComponent } from './almacenes/reportePersonalizadoAlmacenProduccion/reporte-personalizado-almacen-produccion.component'
import { RPersonalizadoAlmacenProduccionComponent } from './reportes/r-personalizado-almacen-produccion/r-personalizado-almacen-produccion.component'
import { ProgramacionTransformacionComponent } from './programacion/programacion-transformacion/programacion-transformacion.component'
import { ProgramacionTransformacionReporteComponent } from './programacion/programacion-transformacion/programacion-transformacion-reporte/programacion-transformacion-reporte.component'
import { ProcesosCrearModificarComponent } from './gestionDeProcesos/procesos/procesos-crear-modificar.component'
import { RevisionDeOrdenesAbstractoComponent } from './gestionDeFolios/revision/revision-de-ordenes-abstracto/revision-de-ordenes-abstracto.component'
import { FoliosCrearModificarComponent } from './gestionDeFolios/folios/folios-crear-modificar.component'
import { ColoresCrearModificarComponent } from './gestionDeProcesos/colores/colores-crear-modificar.component'
import { ModelosCrearModificarComponent } from './gestionDeProcesos/modelos/modelos-crear-modificar.component'
import { TamanosCrearModificarComponent } from './gestionDeProcesos/tamanos/tamanos-crear-modificar.component'
import { TerminadosCrearModificarComponent } from './gestionDeProcesos/terminados/terminados-crear-modificar.component'
import { FamiliaDeProcesosCrearModificarComponent } from './gestionDeProcesos/familiaDeProcesos/familia-de-procesos-crear-modificar.component'
import { ModelosCompletosCrearModificarComponent } from './gestionDeProcesos/modelos-completos/modelos-completos-crear-modificar.component'
import { ClientesCrearModificarComponent } from './clientes/clientes-crear-modificar.component'
import { UsuarioCrearComponent } from './usuarios/usuario-crear/usuario-crear.component'
import { UsuarioLeerComponent } from './usuarios/usuario-leer/usuario-leer.component'
import { UsuarioDetalleComponent } from './usuarios/usuario-detalle/usuario-detalle.component'
import permisosConfig from 'src/app/config/permisos.config'
import permisosKeysConfig from '../config/permisosKeys.config'
import permisos from 'src/app/config/permisos.config'

const pagesRoutes: Routes = [
  // Redirecciona a PagesComponent para separar el login
  // de la estructura principal.
  // {
  //     // Esta es la ruta padre y tiene hijos. Esto permite la separación
  //     // entre el login y el dashboard para los templates.
  //     path: '',
  //     component: PagesComponent,
  //     canActivate: [LoginGuardGuard],
  //     children: [
  // Sección de estudio.

  //  <!--
  //  =====================================
  //   Principal
  //  =====================================
  //  -->
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Dashboard',
      roles: [permisosKeysConfig.login]
    }
  },

  //  <!--
  //  =====================================
  //   END Principal
  //  =====================================
  //  -->

  // <!--
  // =====================================
  //  Reportes
  // =====================================
  // -->

  {
    path: 'reportes/productoTerminado/faltantes',
    component: ReporteDeFaltantesProductoTerminadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Reporte de faltantes de producto terminado',
      roles: [permisosKeysConfig["menu:reportes:productoTerminado:faltantes"]
      ]}
  },
  {
    path: 'reportes/almacenDeProduccion/faltantes',
    component: ReporteDeFaltantesAlmacenDeProduccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Reporte de faltantes - Almacen de produccion',
      roles: [permisosKeysConfig["menu:reportes:almacenDeProduccion:faltantes"]]
    }
  },
  {
    path: 'reportes/almacenDeProduccion/personalizado',
    component: ReportePersonalizadoAlmacenProduccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Reporte personalizado - Almacen de produccion',
      roles: [permisosKeysConfig["menu:reportes:almacenDeProduccion:personalizado"]]
    }
  },
  {
    path: 'reportes/almacenDeProduccion/personalizado/:id',
    component: RPersonalizadoAlmacenProduccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Reporte personalizado - Almacen de produccion',
      roles: [permisosKeysConfig["menu:reportes:almacenDeProduccion:personalizado"]]
    }
  },
  {
    path: 'reportes/transformacion',
    component: ProgramacionTransformacionReporteComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Reporte de transformacion',
      roles: [permisosKeysConfig["menu:reportes:transformacion"]]
    }
  },

  // <!--
  // =====================================
  //  END Reportes
  // =====================================
  // -->

  // <!--
  // =====================================
  //  Almacen
  // =====================================
  // -->

  {
    path: 'almacen/produccion',
    component: AlmacenProduccion,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Materia prima y herramienta',
      roles: [permisosKeysConfig["menu:almacen:produccion"]]
    }
  },

  {
    path: 'almacen/productoTerminado',
    component: AlmacenDeProductoTerminadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Almacen de producto terminado',
      roles: [permisosKeysConfig["menu:almacen:productoTerminado"]]
    }
  },
  {
    path: 'almacen/produccion/entradasYSalidas',
    component: AlmacenESComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Entradas y salidas de almacen',
      roles: [permisosKeysConfig["menu:almacen:produccion:entradasYSalidas"]]
    }
  },
  {
    path: 'almacen/requisiciones',
    component: RequisicionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Requisiciones de articulos',
      roles: [permisosKeysConfig["menu:almacen:requisiciones"]]
    }
  },
  {
    path: 'almacen/reportesPersonalizados',
    component: ReportePersonalizadoAlmacenProduccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Gestion de reportes personalizados',
      roles: [permisosKeysConfig["menu:almacen:reportesPersonalizados"]]
    }
  },

  // <!--
  // =====================================
  //  END Almacen
  // =====================================
  // -->

  // <!--
  // =====================================
  //  CONTROL DE PRODUCCION
  // =====================================
  // -->

  {
    path: 'folios/revision',
    component: RevisionDeFoliosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Revision de folios a produccion',
      roles: [permisosKeysConfig["menu:controlDeProduccion:folios:revision"]]
    }
  },
  {
    path: 'folios/revision/:id',
    component: RevisionDeOrdenesAbstractoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Generar ordenes para folio',
      roles: [permisosKeysConfig["menu:controlDeProduccion:folios:revision"]
      ]}
  },
  {
    path: 'folios/seguimiento',
    component: FoliosSeguimientoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Seguimiento de folios.',
      roles: [permisosKeysConfig["menu:controlDeProduccion:folios:seguimiento"]]
    }
  },
  {
    path: 'folios/asignarOrdenes',
    component: ProgramacionTransformacionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Asignar ordenes a maquinas.',
      roles: [permisosKeysConfig["menu:controlDeProduccion:folios:asignarOrdenes"]]
    }
  },

  // <!--
  // =====================================
  //  END CONTROL DE PRODUCCION
  // =====================================
  // -->

  // <!--
  // =====================================
  //  INGENIERIA
  // =====================================
  // -->

  // <!--
  // =====================================
  //  END INGENIERIA
  // =====================================
  // -->

  {
    path: 'procesos',
    component: ProcesosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Procesos',
      roles: [permisosKeysConfig["menu:ingenieria:procesos"]]
    }
  },
  {
    path: 'proceso/crear',
    component: ProcesosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Proceso',
      roles: [permisosKeysConfig["proceso:crear"]]
    }
  },
  {
    path: 'proceso/modificar/:id',
    component: ProcesosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Proceso',
      roles: [permisosKeysConfig["proceso:modificar"]]
    }
  },

  {
    path: 'maquinas',
    component: MaquinasComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestión de Maquinas',
      roles: [permisosKeysConfig["menu:ingenieria:maquinas"]]
    }
  },

  {
    path: 'modelos',
    component: ModelosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Modelos',
      roles: [permisosKeysConfig["menu:ingenieria:modelos"]]
    }
  },
  {
    path: 'modelo/crear',
    component: ModelosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Modelos',
      roles: [permisosKeysConfig["modelo:crear"]
      ]}
  },
  {
    path: 'modelo/modificar/:id',
    component: ModelosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Modelos',
      roles: [permisosKeysConfig["modelo:modificar"]
      ]}
  },

  {
    path: 'tamanos',
    component: TamanosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Tamanos',
      roles: [permisosKeysConfig["menu:ingenieria:tamanos"]]
    }
  },
  {
    path: 'tamano/crear',
    component: TamanosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Tamanos',
      roles: [permisosKeysConfig["tamano:crear"]]
    }
  },
  {
    path: 'tamano/modificar/:id',
    component: TamanosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de Tamanos',
      roles: [permisosKeysConfig["tamano:modificar"]]
    }
  },

  {
    path: 'colores',
    component: ColoresComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de colores',
      roles: [permisosKeysConfig["menu:ingenieria:colores"]]
    }
  },
  {
    path: 'color/crear',
    component: ColoresCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de colores',
      roles: [permisosKeysConfig["color:crear"]]
    }
  },
  {
    path: 'color/modificar/:id',
    component: ColoresCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de colores',
      roles: [permisosKeysConfig["color:modificar"]]
    }
  },

  {
    path: 'terminados',
    component: TerminadosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de terminados',
      roles: [permisosKeysConfig["menu:ingenieria:terminados"] ]
    }
  },
  {
    path: 'terminado/crear',
    component: TerminadosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de terminados',
      roles: [permisosKeysConfig["terminado:crear"]]
    }
  },
  {
    path: 'terminado/modificar/:id',
    component: TerminadosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de terminados',
      roles: [permisosKeysConfig["terminado:modificar"]]
    }
  },

  {
    path: 'sku',
    component: ModelosCompletosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de SKU - Produccion',
      roles: [permisosKeysConfig["menu:ingenieria:sku"]]
    }
  },
  {
    path: 'sku/crear',
    component: ModelosCompletosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de SKU - Produccion',
      roles: [permisosKeysConfig["modeloCompleto:crear"]]
    }
  },
  {
    path: 'sku/modificar/:id',
    component: ModelosCompletosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de SKU - Produccion',
      roles: [permisosKeysConfig["modeloCompleto:modificar"]]
    }
  },
  {
    path: 'familiaDeProcesos',
    component: FamiliaDeProcesosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestión de Familias de Procesos',
      roles: [permisosKeysConfig["menu:ingenieria:familiaDeProcesos"]
      ]}
  },
  {
    path: 'familiaDeProcesos/crear',
    component: FamiliaDeProcesosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestión de Familias de Procesos',
      roles: [permisosKeysConfig["familiaDeProcesos:crear"]]
    }
  },
  {
    path: 'familiaDeProcesos/modificar/:id',
    component: FamiliaDeProcesosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestión de Familias de Procesos',
      roles: [permisosKeysConfig["familiaDeProcesos:modificar"]]
    }
  },
  // {
  //   path: "familiaDeProcesos/detalle/:id",
  //   component: FamiliaDeProcesosDetalleComponent,
  //   canActivate: [VerificaTokenGuard, PermisosGuard],
  //   data: {
  //     titulo: "Detalle de Familia de Procesos",
  //     roles: [permisosKeysConfig.]
  //   }
  // },

  // <!--
  // =====================================
  //  Manejo de folios
  // =====================================
  // -->

  // <!--
  // =====================================
  //  VENTAS
  // =====================================
  // -->

  {
    path: 'ventas/misFolios',
    component: PruebaParaDetallesComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: { titulo: 'Mis folios.', roles: [permisosKeysConfig["menu:ventas"]]}
  },
  {
    path: 'ventas/misFolios/crear',
    component: FoliosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: { titulo: 'Crear folio', roles: [permisosKeysConfig["menu:ventas:misFolios"]]}
  },
  {
    path: 'ventas/misFolios/editar/:id',
    component: FoliosCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: { titulo: 'Crear folio', roles: [permisosKeysConfig["folio:modificar"]]}
  },
  {
    path: 'ventas/stock',
    component: StockAlmacenProductoTerminadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Minimos y maximos de productos en almacen',
      roles: [permisosKeysConfig["menu:ventas:stock"]]
    }
  },

  // <!--
  // =====================================
  //  END VENTAS
  // =====================================
  // -->
  // <!--
  // =====================================
  //  COMPRAS
  // =====================================
  // -->

  {
    path: 'proveedores',
    component: ProveedorComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: { titulo: 'Proveedores.', roles: [permisosKeysConfig["menu:proveedores"]
    ]}},
  {
    path: 'divisas',
    component: DivisaComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: { titulo: 'Divisas', roles: [permisosKeysConfig["menu:divisas"]
    ]}},

  // <!--
  // =====================================
  //  END COMPRAS
  // =====================================
  // -->

  // <!--
  // =====================================
  //  ADMINISTRADOR
  // =====================================
  // -->

  // Mantenimientos


  {
    path: 'usuarios',
    component: UsuarioLeerComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Usuarios',
      roles: [permisosKeysConfig["menu:administrador:usuarios"]]
    }
  },

  {
    path: 'usuario/crear',
    component: UsuarioCrearComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Usuarios',
      roles: [permisosKeysConfig["administrador:usuario:crear"]
      ]}
  },
  {
    path: 'usuario/modificar/:id',
    component: UsuarioCrearComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Usuario',
      roles: [permisosKeysConfig["usuario:modificar"]]
    }
  },
  {
    path: 'usuario/detalle/:id',
    component:UsuarioDetalleComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Usuario',
      roles: [permisosKeysConfig["administrador:usuario:leer"]]
    }
  },





  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Mantenimientos de clientes',
      roles: [permisosKeysConfig["menu:administrador:clientes"]]
    }
  },
  {
    path: 'cliente/crear',
    component: ClientesCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Mantenimientos de clientes',
      roles: [permisosKeysConfig["cliente:crear"]
      ]}
  },
  {
    path: 'cliente/modificar/:id',
    component: ClientesCrearModificarComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Mantenimientos de clientes',
      roles: [permisosKeysConfig["cliente:modificar"]]
    }
  },

  {
    path: 'almacenDescripcion',
    component: AlmacenDescripcionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Almacenes',
      roles: [permisosKeysConfig["menu:administrador:almacenDescripcion"]]
    }
  },

  // <!--
  // =====================================
  //  END ADMINISTRADOR
  // =====================================
  // -->

  // <!--
  // =====================================
  //  PRODUCCION
  // =====================================
  // -->

  {
    path: 'produccion/controlDeProduccion',
    component: ControlDeProduccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:controlDeProduccion"]]
    }
  },
  {
    path: 'produccion/almacenDeBoton',
    component: AlmacenDeBotonComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Almacen de boton',
      roles: [permisosKeysConfig["menu:produccion:almacenDeBoton"]]
    }
  },
  {
    path: 'produccion/materiales',
    component: MaterialesComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:materiales"]]
    }
  },
  {
    path: 'produccion/pastilla',
    component: PastillaComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:pastilla"]]
    }
  },
  {
    path: 'produccion/transformacion',
    component: TransformacionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:reportes:transformacion"]
      ]}
  },
  {
    path: 'produccion/laser',
    component: LaserComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:laser"]
      ]}
  },
  {
    path: 'produccion/pulido',
    component: PulidoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:pulido"]]
    }
  },
  {
    path: 'produccion/tenido',
    component: TenidoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:tenido"]]
    }
  },
  {
    path: 'produccion/seleccion',
    component: SeleccionComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:seleccion"]]
    }
  },
  {
    path: 'produccion/empaque',
    component: EmpaqueComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:empaque"]]
    }
  },
  {
    path: 'produccion/metalizado',
    component: MetalizadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:metalizado"]
      ]}
  },
  {
    path: 'produccion/barnizado',
    component: BarnizadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:barnizado"]]
    }
  },
  {
    path: 'produccion/burato',
    component: BuratoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:burato"]]
    }
  },
  {
    path: 'produccion/productoTerminado',
    component: ProductoTerminadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Registro de órdenes',
      roles: [permisosKeysConfig["menu:produccion:productoTerminado"]]
    }
  },

  // <!--
  // =====================================
  //  END PRODUCCION
  // =====================================
  // -->

  // <!--
  // =====================================
  //  RH
  // =====================================
  // -->

  {
    path: 'empleados',
    component: EmpleadoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de empleados',
      roles: [permisosKeysConfig["menu:rh:empleados"]]
    }
  },
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de cursos',
      roles: [permisosKeysConfig["menu:rh:cursos"]]
    }
  },
  {
    path: 'areas',
    component: AreasComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de areas',
      roles: [permisosKeysConfig["menu:administrador:areas"]]
    }
  },

  {
    path: 'puestos',
    component: PuestosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Gestion de puestos',
      roles: [permisosKeysConfig["menu:rh:puestos"]]
    }
  },

  // <!--
  // =====================================
  //  END RH
  // =====================================
  // -->

  // =================================+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // -->



  {
    path: 'departamentos',
    component: DepartamentoComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Departamentos',
      roles: [permisosKeysConfig["menu:administrador:departamentos"]]
    }
  },

  {
    path: 'perfil',
    component: ProfileComponent,
    data: { titulo: 'Perfil de usuario.' }
  },

  // Esta sección es para el trabajo

  {
    path: 'produccion',
    component: SeguimientoDeFoliosComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],
    data: {
      titulo: 'Seguimiento de folios',
      roles: [permisosKeysConfig["menu:controlDeProduccion:folios:seguimiento"]]
    }
  },

  
  // Redirige al dashboard cuando no se ha puesto nada en la url.
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'account-settings',
    component: AccountsSettingsComponent,
    canActivate: [VerificaTokenGuard, PermisosGuard],

    data: {
      titulo: 'Informaciónde la cuenta',
      roles: [permisosKeysConfig.login]
    }
  }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)
