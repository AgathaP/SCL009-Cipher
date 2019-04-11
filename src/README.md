# Llavero


Alt="imágen de la interfaz"



 ***La aplicación que mantendrá seguras tus contraseñas***

 

# Indice


* Definición del producto

* Proceso creativo

	* Encuesta

	* Control de flujo

	* Sketch 

* Organización

* Qué vas a encontrar en la interfaz



# Definición del producto

En tiempos dónde todo lo manejamos a través de dispositivos tecnológicos, una de las principales preocupaciones es no olvidar las constraseñas que nos permiten ingresar a nuestras cuentas en distintos sitios web, desde foros, facebook, hasta cosas aún más importantes de proteger, como cuentas en páginas de instituciones bancarias. Son demasiadas las contraseñas que debemos manejar a diario, y es además, poco seguro ponerle una misma contraseña a todas nuestras cuentas.

Por lo que esta aplicación está pensada en hacer que una misma contraseña sirva para todas nuestras cuentas de manera segura.



## *Quiénes son nuestros usuarios*

Estamos dirigidos a una población mayor de edad, que maneja por medio de Internet  gran parte de su vida. Por lo que debe tener varias contraseñas para los distintos sitios que frecuenta.



## *Cómo pretendemos resolver estas necesidades.*

Como ya sabemos, manejar una misma clave para todas nuestras cuentas en la red, es inseguro, sin embargo, hoy en día nos manejamos casi en su totalidad por medio de Internet, por lo que recordar claves distintas para todas nuestras cuentas en sitios web, se torna complicado. Es por está razón que ***** ofrece simplicidad y seguridad.

El usuario deberá recordar una única clave, ya que lo único que cambiará en sus contraseñas, entre una página y otra, será el número de desplazamiento que usó al momento de codificarla en nuestro sitio.

Incluso si recordar esto parece difícil, censemos en que aunque anotásemos nuestro numero de desplazamiento en un papel, no necesitaríamos anotar la contraseña, por lo que aun así nuestras cuentas estarían protegidas.



# Proceso creativo

A continuación se muestra el proceso que se llevó a cabo para la creación de *****. Desde una simple idea hasta la pantalla de su dispositivo.



## Encuesta

Teniendo cómo única idea clara la creación de una interfaz capás de cifrar y descifrar un texto, realicé una encuesta que me permitiera saber cual es la necesidad real de los usuarios frente a una página de estas características. De esta forma, dando prioridad a los resultados, opté por la creación de una aplicación que fuese capás de cifrar y descifrar contraseñas.



### **¿Con qué fin usarían una aplicación que cifre un texto?**

![Encuesta que define el uso de la app](/img/encuesta-uso-app.png)

![Otro uso de una app de cifrado](/img/otra-opcion-de-uso.png)


## Control de flujo
La imagen representa en detalle las interacciones entre usuario e interfaz.

![control de flujo](/img/control-de-flujo.png)

## Sketch (prototipo de baja fidelidad)
Estas son las distintas pantallas dentro de ****.

Después de realizar algunos testeos, se resolvió omitir el nombre, darle funcionalidad al logo, para que hiciera conexión con la página principal y eliminar las instrucciones de la página antes mencionada

![Pantalla del home](/img/sketch.png)

### testeo con sketch
A pesar de la poca calidad de los videos, los testeos con posibles usuarios fueron de vital importancia, ya que gracias a sus opiniones se hicieron mejoras a la aplicación; como la eliminación de un input para el nombre, y modificaciones en el contenido.

![url-de-los-videos]

# Organización y metodología
Para un optimo avance del proyecto, utilicé [Trello](https://trello.com/b/CQygonll/cipher-009)

### **En el desarrollo del proyecto**

* Un archivo en HTML5 le dió la estructura a la interfaz.

* En un archivo CSS se aloja toda la parte de diseño.

* Un archivo JS unicamente para la lógica y en un archivo JS a parte todo lo que es manejo del DOM.

* Se uso vanilla Javascript.

* También se usó, aunque en menor medida, el framework *Materialize*


# Futuras mejoras
En una primera instancia la pantalla inicial estaba pensado poner un carrusel, que para efectos de los test fue descartado por ahora, pero que en un futuro estará funcional en la interfaz.
Pensando en hacer una página más didactica, también me gustaría agregar algun video y/o imágen explicativa de cómo hacer uso correcto de ella.
Además, como prioridad, está agregar la funcionalidad de codificar y decodificar otros caracteres y un contador que permita al usuario cuantos carácteres ha digitado y por tanto cuantos le quedan.