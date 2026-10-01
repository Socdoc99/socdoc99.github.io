---
title: 'Tiendas Agent — Asistente conversacional sobre SQL Server'
summary: 'Asistente conversacional para administradores de tienda que responde preguntas sobre ventas, tickets, productos, precios e inventario, consultando una base SQL Server a través de un agente LangGraph.'
stack: ['Python', 'FastAPI', 'LangGraph', 'SQL Server', 'Azure Key Vault', 'Azure AI Search']
status: 'Proyecto personal en migración activa; fases iniciales completas, partes posteriores bloqueadas por configuración de infraestructura'
repoUrl: 'https://github.com/Socdoc99/tiendas-agent-azure-rag'
order: 2
---

## El problema

Proyecto personal de aprendizaje de arquitectura en Azure: construir un asistente que permita a un administrador de tienda autorizado preguntar, en lenguaje natural, por sus propias ventas, tickets, productos, precios e inventario, sin tener que escribir SQL ni abrir un dashboard.

## La solución

La fuente de datos principal es un SQL Server operativo, consultado a través de una capa semántica con alcance por tenant y un motor de consultas de solo lectura:

```
Chat del cliente -> FastAPI -> agente LangGraph -> query_database
                                        -> vistas semánticas -> SQL Server (solo lectura)
```

El servidor construye un `TenantContext` inmutable a partir de configuración del lado del servidor. El motor de consultas valida un único `SELECT` T-SQL de solo lectura, resuelve la vista semántica correspondiente mediante una lista permitida, inyecta el tenant del lado del servidor y ejecuta la consulta con `ApplicationIntent=ReadOnly`. El modelo de lenguaje solo ve los nombres de las vistas lógicas y el contrato de la herramienta `query_database`, nunca las tablas físicas ni los identificadores de tenant.

Azure AI Search queda desplegado para una futura función de documentación, pero no es parte del camino crítico de las consultas de ventas.

## Decisiones técnicas

El proyecto parte de un prototipo validado localmente ("Agente IA TiendasON"), que se trata como material de referencia de solo lectura: no se modifica directamente, sino que sus módulos (tenant, base de datos, capa semántica, motor de consultas, agente, chat, UI) se migran de forma incremental a la arquitectura objetivo en Azure.

El proveedor de modelo de lenguaje es configurable (actualmente OpenAI vía una clave resuelta desde Azure Key Vault en tiempo de ejecución), sin dependencia de Microsoft Foundry para la arquitectura objetivo.

## Estado actual

Migración en curso, documentada fase por fase: las fases 0, 1 y 2A están completas; la fase 2B (Container Apps) está pendiente por disponibilidad regional de capacidad en Azure. Las fases 3 y 4 (capa de dominio con alcance por tenant y contratos de LangGraph/chat) ya están migradas. La fase 5 (proveedor de modelo configurable) tiene sus pruebas locales en verde, pero una prueba real contra Azure está bloqueada por permisos RBAC del plano de datos de Key Vault. Las fases 6 a 8 siguen pendientes.
