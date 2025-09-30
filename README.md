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
- **Clase 3**: Integración con Google Gemini AI y arquitectura modular
- **Clase 4**: Sistema de comandos avanzado y tipos de usuario
- **Clase 5**: Modos de conversación y envío de medios
- **Clase 6**: [Contenido por definir]

## 🛠️ Tecnologías Utilizadas

- **Evolution API** - Para la integración con WhatsApp
- **Node.js & Express** - Servidor backend para manejar webhooks
- **Google Gemini AI** - Inteligencia artificial para respuestas inteligentes
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
GEMINI_API_KEY=tu_api_key_de_gemini
PORT=3000
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

### Clase 3: Integración con Google Gemini AI y arquitectura modular
- Integración con Google Gemini AI para respuestas inteligentes
- Refactorización del código en arquitectura modular (controllers/utils)
- Implementación del servicio de IA con instrucciones del sistema
- Manejo de errores mejorado para la IA
- Separación de responsabilidades en diferentes módulos

### Clase 4: Sistema de comandos avanzado y tipos de usuario
- Implementación de sistema de comandos con `/`
- Diferenciación entre usuarios admin y usuarios normales
- Comandos específicos por tipo de usuario
- Sistema de permisos básico
- Validación y ejecución de comandos

### Clase 5: Modos de conversación y envío de medios
- Implementación de modos de conversación (general, soporte, ventas)
- Sistema de cambio de modo por comando
- Envío de archivos y documentos
- Instrucciones del sistema personalizadas por modo y tipo de usuario
- Persistencia temporal de estados de usuario

#### Funcionalidades implementadas:
- ✅ Servidor Express funcionando en puerto 3000
- ✅ Webhook para recibir mensajes de WhatsApp
- ✅ Integración completa con Google Gemini AI
- ✅ Sistema de comandos avanzado (/help, /info, /manual, etc.)
- ✅ Diferenciación de tipos de usuario (admin/user)
- ✅ Modos de conversación (general, soporte, ventas)
- ✅ Envío de texto, documentos y medios
- ✅ Instrucciones del sistema personalizadas
- ✅ Arquitectura modular y escalable
- ✅ Manejo de errores robusto
- ✅ Logging de mensajes con Morgan
- ✅ Configuración con variables de entorno

## 📖 Documentación

### Estructura del Proyecto

```
whatsbots/
├── app.js                    # Servidor principal
├── controllers/              # Controladores de la aplicación
│   └── messageController.js  # Controlador principal de mensajes
├── utils/                    # Utilidades y servicios
│   ├── geminiResponse.js     # Servicio de Google Gemini AI
│   └── messageUtils.js       # Utilidades para manejo de mensajes
├── docker-compose.yml        # Configuración de Docker
├── package.json             # Dependencias del proyecto
├── .env                     # Variables de entorno (no incluido en git)
├── .env.example             # Ejemplo de variables de entorno
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Documentación del proyecto
```

### API Endpoints

- `GET /` - Endpoint de prueba que retorna "Hola"
- `POST /webhook` - Recibe eventos de Evolution API y procesa mensajes con IA

### Comandos Disponibles

#### Comandos para Usuarios:
- `/help` - Muestra la lista de comandos disponibles
- `/info` - Información sobre el bot
- `/manual` - Descarga el manual de usuario (PDF)
- `/modo_soporte` - Activa el modo soporte técnico
- `/modo_ventas` - Activa el modo ventas
- `/modo_general` - Activa el modo general

#### Comandos Adicionales para Admins:
- `/usuarios` - Gestión de usuarios (solo admins)

### Modos de Conversación

- **Modo General**: Conversación estándar con respuestas generales
- **Modo Soporte**: Especializado en resolución de problemas técnicos
- **Modo Ventas**: Enfocado en productos, precios y decisiones de compra

### Tipos de Usuario

- **Usuario Normal**: Acceso a comandos básicos y funcionalidades estándar
- **Admin**: Acceso completo a todos los comandos y funcionalidades avanzadas

## 🎓 Instructor
- **Iván Martínez** - Desarrollador Full Stack y experto en integración de APIs

Curso impartido para CCOL
---

*Este README se actualiza con el contenido de cada clase del curso.*
