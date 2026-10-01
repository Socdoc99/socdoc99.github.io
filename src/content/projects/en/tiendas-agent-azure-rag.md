---
title: 'Tiendas Agent — Conversational assistant over SQL Server'
summary: 'A conversational assistant for shop administrators that answers questions about sales, tickets, products, prices and inventory, querying a SQL Server database through a LangGraph agent.'
stack: ['Python', 'FastAPI', 'LangGraph', 'SQL Server', 'Azure Key Vault', 'Azure AI Search']
status: 'Personal project under active migration; early phases complete, later ones blocked on infrastructure configuration'
repoUrl: 'https://github.com/Socdoc99/tiendas-agent-azure-rag'
order: 2
---

## The problem

A personal project for learning Azure architecture: build an assistant that lets an authorized shop administrator ask, in natural language, about their own sales, tickets, products, prices and inventory, without writing SQL or opening a dashboard.

## The solution

The primary data source is an operational SQL Server, queried through a tenant-scoped semantic layer and a readonly query engine:

```
Customer chat -> FastAPI -> LangGraph agent -> query_database
                                    -> semantic views -> SQL Server (readonly)
```

The server builds an immutable `TenantContext` from server-side configuration. The query engine validates a single readonly T-SQL `SELECT`, resolves the matching semantic view through an allowlist, injects the server-side tenant, and runs the query with `ApplicationIntent=ReadOnly`. The LLM only ever sees the logical view names and the `query_database` tool contract — never physical tables or tenant identifiers.

Azure AI Search stays deployed for a later documentation feature, but it is not part of the critical path for sales queries.

## Technical decisions

The project builds on a locally validated prototype ("Agente IA TiendasON"), treated as read-only reference material: it isn't modified directly — instead its modules (tenant, database, semantic layer, query engine, agent, chat, UI) are migrated incrementally to the target Azure architecture.

The LLM provider is configurable (currently OpenAI, with its API key resolved from Azure Key Vault at runtime), with no Microsoft Foundry runtime dependency in the target architecture.

## Current status

Migration in progress, tracked phase by phase: phases 0, 1 and 2A are complete; phase 2B (Container Apps) is pending Azure regional capacity. Phases 3 and 4 (tenant-scoped domain layer and LangGraph/chat contracts) are already migrated. Phase 5 (configurable LLM provider) has its local tests passing, but a real smoke test against Azure is blocked by Key Vault data-plane RBAC permissions. Phases 6 through 8 remain pending.
