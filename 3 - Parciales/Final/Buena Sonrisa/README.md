# Heroku
https://buenasonrisa.herokuapp.com/login

![image](https://user-images.githubusercontent.com/40859246/86357856-decd0e80-bc44-11ea-9cf9-3ffb15d9581b.png)

# Requerimientos de la aplicación

Debemos realizar un sistema según las necesidades y deseos del cliente, para eso tenemos una
breve descripción de lo que el cliente nos comenta acerca de su negocio.

“La clínica Buena Sonrisa, especialista en salud
dental,​ cuenta actualmente con siete consultorios
(más otros tres que están en construcción), dos
laboratorios (uno especializado en diagnóstico por
imágenes, y otro en mecánica dental), y una sala
de espera general. Está abierta al público de lunes
a viernes en el horario de 8:00 a 19:00, y los
sábados en el horario de 8:00 a 14:00.

Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su
disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos
son asignados de forma centralizada por el área de recepción, que recibe las solicitudes
personalmente, por teléfono, por e-mail o a través del sitio web de la clínica. La duración mínima de
un turno es de 15 minutos.”
Estamos necesitando un sistema para que cada uno de los tipos de usuarios realicen las tareas
que se detallan a continuación.


**#Administrador**
Puede dar de alta:( Clientes, Especialistas, Recepcionista).
Podrá ver, estadísticas:
1- De los empleados:
Los días y horarios que se Ingresaron al sistema.
Cantidad de turnos realizados de todos por especialidad.
2- De los turnos:
Cantidad de turnos entre fechas dadas.
Cantidad de días sin turnos por especialidad.
Los realizados por especialidad.
Los cancelados por especialidad.
Los realizados por Clientes.
Los realizados por recepcionista.
3- De las especialidades:
La más usada.
La menos usada.
Mejores comentarios.
Peores comentarios.

**#Cliente**
El cliente puede pedir un turno y seleccionar el especialista. Tener en cuenta la
disponibilidad del especialista.
Al realizar la solicitud de turno se le otorgará un código que identifica la sala que le
corresponde.
El cliente puede ver los turnos pedidos.
Al terminar la visita con el especialista, el cliente podrá realizar una encuesta con una
puntuación del 1 al 10 para:
a-La clínica.
b-El especialista.
c-Y un breve texto de hasta 66 caracteres describiendo la experiencia (buena o
mala) que tuvo en su atención.


**#Recepcionista**
El recepcionista puede pedir un turno para un cliente que llamó de forma telefónica o
tratamiento pedido por el especialista.
El recepcionista podrá cancelar turnos.
En la sala de espera se verán los consultorios ocupadas y el próximo a ser ocupado.


**#Especialistas**
El especialista podrá ver los turnos que tiene por fecha.
Marca quien vino de los paciente
permite cargar un breve reseña de los trabajos realizados en el paciente.

### Correcciones durante la cursada

#### TP FINAL

#### SISTEMA FUNCIONANDO

```
Registro,
Login con
perfiles y
pantallas
Captcha
propio o
google y
subido a la
web
Generar
documentos
excel o pdf
Manejo de
imágenes
Pipes y
Directivas
Readme
corrección
final
```

## Condiciones de aprobación

**Aprobación directa**
Subido a la web
Login
Readme
Estilos
Imágenes
1- Poder registrarse como usuario con imagen
2- Pedir un turno
3- Ser atendido por el profesional.
4- Que el profesional guarde una reseña
5- Que el usuario pueda ver la reseña.
6- Que el usuario puede cargar la encuesta de satisfacción.
**Final , lo anterior más** ...
7- Poder descargar archivos PDF
8- Poder descargar archivos .csv
9- Validaciones de formularios
10- Captcha (Google y propio)
11- Pipe(3), Directivas(3), Spinner y Favicon
12- Estadísticas
