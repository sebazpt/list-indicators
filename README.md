# Indicadores Financieros

Este es un servicio web que entrega los principales indicadores económicos para Chile.

Esta aplicación utiliza los datos desde [mindicador.cl](https://mindicador.cl/) servicio que mapea constantemente el sitio del Banco Central de Chile manteniendo así su base de datos actualizada con los últimos valores del día.

## Instalación

Este proyecto esta basado en el framework Angular V13.
Requieres tener instalado [Node.js](https://nodejs.org/) para su edición.
### Luego de instalar Node debes instalar Angular con npm. 

```bash
npm install @angular/cli
```
### Una vez instalado debes clonar el proyecto de su repositorio

```bash
git clone https://github.com/sebazpt/list-indicators.git
```

### Instalar las dependencias

```bash
npm install
```
### Y por último hacer correr la aplicación

```bash
ng serve
```

## Publicar en tu host
Para publicar la aplicación en tu host debes generar los archivos estaticos

```bash
ng build --prod
```

Esto creara una carpeta dist/list-indicators la cual debes subir en tu server.



## Licencia
[MIT](https://choosealicense.com/licenses/mit/)