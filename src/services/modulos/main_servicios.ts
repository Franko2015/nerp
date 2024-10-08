// Administración
import { AdminService } from "@admin/admin.service";
import { AuditService } from "@admin/audit.service";
import { AuthService } from "@admin/auth.service";
import { ConfigService } from "@admin/config.service";
import { EnterpriseService } from "@admin/enterprise.service";
import { SettingsService } from "@admin/settings.service";
import { SubscriptionService } from "@admin/subscription.service";

// Contabilidad
import { ContabilidadService } from "@services/modulos/contabilidad/contabilidad.service";

// Inventario
import { InventoryService } from "@inventario/inventory.service";
import { ProductService } from "@inventario/product.service";
import { CategoriasService } from "@inventario/categorias.service";
import { ControlCalidadService } from "./inventario/control-calidad.service";

// RRHH
import { UserService } from "@rrhh/user.service";
import { AsistenciaService } from "./rrhh/asistencia.service";
import { ContratosService } from "./rrhh/contratos.service";
import { PagoSalariosService } from "./rrhh/pago-salarios.service";
import { TurnosService } from "./rrhh/turnos.service";

// Ventas
import { VentasService } from "@ventas/ventas.service";
import { FacturaVentasService } from "./ventas/factura-ventas.service";
import { PedidosService } from "./ventas/pedidos.service";

// Producción
import { ProduccionService } from "@produccion/produccion.service";
import { PlanificacionRiegosService } from "./produccion/planificacion-riegos.service";

// Distribución
import { DistribucionService } from "@distribucion/distribucion.service";

// Logística
import { LogisticaService } from "@logistica/logistica.service";

// Envíos
import { EnviosService } from "@envios/envios.service";

// Compras
import { ComprasService } from "@compras/compras.service";
import { DetalleCompraService } from "./compras/detalle-compra.service";
import { OrdenesCompraService } from "./compras/ordenes-compra.service";
import { ProveedoresService } from "./compras/proveedores.service";
import { StockInsumosService } from "./compras/stock-insumos.service";

// Facturación
import { FacturasService } from "@services/modulos/contabilidad/facturas.service";

// Otros servicios generales
import { ChatService } from "@services/chat/chat.service";
import { FileUploadService } from "@services/file-upload/file-upload.service";
import { NotificationService } from "@services/notification/notification.service";
import { ReportService } from "@services/report/report.service";


export const Administracion = {
    AdminService,
    AuditService,
    AuthService,
    ConfigService,
    EnterpriseService,
    SettingsService,
    SubscriptionService
};

export const Contabilidad = {
    ContabilidadService,
    FacturasService
};

export const Inventario = {
    InventoryService,
    ProductService,
    CategoriasService,
    ControlCalidadService
};

export const RRHH = {
    UserService,
    AsistenciaService,
    ContratosService,
    PagoSalariosService,
    TurnosService
};

export const Ventas = {
    VentasService,
    FacturaVentasService,
    PedidosService
};

export const Produccion = {
    ProduccionService,
    PlanificacionRiegosService
};

export const Distribucion = {
    DistribucionService
};

export const Logistica = {
    LogisticaService
};

export const Envios = {
    EnviosService
};

export const Compras = {
    ComprasService,
    DetalleCompraService,
    OrdenesCompraService,
    ProveedoresService,
    StockInsumosService
};

export const General = {
    ChatService,
    FileUploadService,
    NotificationService,
    ReportService
};