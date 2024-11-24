# UNAMarket

UNAMarket es una aplicación web para la compra y venta de alimentos dentro de la UNAM, desarrollada con React y Flask.

## Requisitos Previos

Antes de ejecutar la aplicación, se debe de tener instalado:

- Python 3.x
- Node.js y npm
- MySQL o MariaDB

## Configuración Inicial

### Base de Datos
1. Instalar MySQL o MariaDB en el sistema.
2. Localizar el archivo `setup.sql` en la raíz del proyecto
3. Ejecutar el script SQL para crear la base de datos y sus tablas:
   ```sql
   mysql -u [usuario] -p < setup.sql
   ```

### Backend (Flask)
1. Navegar al directorio del backend:
   ```bash
   cd app-flask
   ```
2. Instalar las dependencias de Python desde el archivo requirements:
   ```bash
   pip install -r requirements.txt
   ```

### Frontend (React)
1. Navegar al directorio del frontend:
   ```bash
   cd app-react
   ```
2. Instalar las dependencias de Node.js:
   ```bash
   npm install
   ```

## Ejecutar la Aplicación

### 1. Iniciar el Backend
En el directorio `app-flask`:
```bash
python3 app.py
```

### 2. Iniciar el Frontend
En el directorio `app-react`:
```bash
npm start
```
La aplicación se abrirá automáticamente en el navegador predeterminado.

## Guía de Uso

### Registro de Usuarios
- Los usuarios pueden registrarse como compradores o vendedores utilizando su correo electrónico
- Al registrarse, recibirán un correo electrónico con asunto "[UNAMarket]Bienvenido a UNAMarket" que contendrá su contraseña inicial

### Funcionalidades para Vendedores
- Publicar productos para la venta
- Gestionar inventario de productos
- Ver lista de compradores interesados
- Comunicarse con compradores potenciales

### Funcionalidades para Compradores
- Explorar catálogo de productos disponibles
- Contactar a vendedores
- Realizar transacciones de compra
- Ver historial de compras