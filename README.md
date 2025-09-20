# 🤖 WhatsBot - Curso de Chatbots IA para WhatsApp

## 📋 Descripción del Proyecto

Este repositorio contiene el material y código del curso de creación de chatbots con Inteligencia Artificial para WhatsApp, utilizando Evolution API. El curso está diseñado para CCOL y se desarrolla a lo largo de 6 clases prácticas.

## 🎯 Objetivos del Curso

- Aprender a integrar Evolution API con WhatsApp
- Desarrollar chatbots inteligentes con capacidades de IA
- Implementar soluciones automatizadas de mensajería
- Construir un proyecto completo paso a paso

## 📚 Estructura del Curso

El curso se divide en **6 clases** donde iremos construyendo el proyecto de forma incremental:

- **Clase 1**: Configuración inicial y fundamentos
- **Clase 2**: Implementación de webhook y manejo de mensajes duplicados
- **Clase 3**: [Contenido por definir]
- **Clase 4**: [Contenido por definir]
- **Clase 5**: [Contenido por definir]
- **Clase 6**: [Contenido por definir]

## 🛠️ Tecnologías Utilizadas

- **Evolution API** - Para la integración con WhatsApp
- **Node.js & Express** - Servidor backend para manejar webhooks
- **Axios** - Cliente HTTP para comunicación con APIs
- **Morgan** - Middleware para logging de peticiones HTTP
- **dotenv** - Gestión de variables de entorno
- **Docker** - Para la containerización del proyecto

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- Evolution API configurada y ejecutándose

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPO]
cd whatsbots

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu AUTHENTICATION_API_KEY

# Ejecutar el servidor
npm start
```

### Variables de Entorno

Crear un archivo `.env` con:

```env
AUTHENTICATION_API_KEY=tu_api_key_de_evolution
```

## 📋 Contenido por Clase

### Clase 1: Configuración inicial y fundamentos
- Introducción a Evolution API
- Configuración del entorno de desarrollo
- Estructura básica del proyecto

### Clase 2: Implementación de webhook y manejo de mensajes duplicados
- Creación del servidor Express con webhook
- Implementación de endpoint `/webhook` para recibir mensajes
- Solución al problema de mensajes duplicados al reiniciar el servidor
- Configuración de respuestas automáticas
- Manejo de errores y logging

#### Funcionalidades implementadas:
- ✅ Servidor Express funcionando en puerto 3000
- ✅ Webhook para recibir mensajes de WhatsApp
- ✅ Respuesta automática a mensajes recibidos
- ✅ Logging de mensajes con Morgan
- ✅ Configuración con variables de entorno

## 📖 Documentación

### Estructura del Proyecto

```
whatsbots/
├── app.js              # Servidor principal con webhook
├── docker-compose.yml  # Configuración de Docker
├── package.json        # Dependencias del proyecto
├── .env               # Variables de entorno (no incluido en git)
└── README.md          # Documentación del proyecto
```

### API Endpoints

- `GET /` - Endpoint de prueba que retorna "Hola"
- `POST /webhook` - Recibe eventos de Evolution API

## 🎓 Instructor
- **Iván Martínez** - Desarrollador Full Stack y experto en integración de APIs

Curso impartido para CCOL
---

*Este README se actualiza con el contenido de cada clase del curso.*
