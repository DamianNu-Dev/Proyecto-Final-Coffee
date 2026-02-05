
# Coffee App - Arquitectura Frontend para Consumo de API

Este proyecto implementa una arquitectura frontend moderna para consumir un backend desarrollado en Java Spring Boot. El frontend está construido con React Native y se comunica exclusivamente con el backend mediante peticiones HTTP.

## Estructura de Carpetas

```
src/
  api/                # Servicios para consumir los endpoints del backend (fetch, axios, etc.)
  domain/             # Modelos para mapear la respuesta del backend
  application/        # Casos de uso (hooks o funciones que orquestan llamadas a la api)
  presentation/
    components/       # Componentes UI reutilizables
    screens/          # Pantallas de la aplicación
```

## Descripción de la Arquitectura

- **api/**: Aquí se definen los servicios para interactuar con el backend (ejemplo: productApi.js, userApi.js).
- **domain/**: Modelos y tipos para mapear y tipar los datos recibidos del backend.
- **application/**: Casos de uso, hooks o funciones que gestionan la lógica de consumo de datos y estados.
- **presentation/**: Componentes y pantallas que muestran la información al usuario.

## Flujo de la Aplicación

1. **Usuario** interactúa con la UI (presentation).
2. La UI llama a los **casos de uso** (application).
3. Los casos de uso consumen los **servicios api**.
4. Los servicios api interactúan con el **backend** y devuelven los datos.
5. Los datos se mapean con los **modelos domain** y se muestran en la UI.

## Backend
- El backend se desarrolla por separado usando Java + Spring Boot.
- Expone endpoints RESTful para productos, usuarios y compras.
- El frontend solo consume estos endpoints, no almacena lógica de negocio.

## Rol de Usuario
- Solo existe un rol: **Usuario**.
- El usuario puede **visualizar** y **comprar productos**.

---

Esta arquitectura facilita la escalabilidad, mantenibilidad y una clara separación entre frontend y backend.
