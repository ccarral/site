# Historia de este sitio.

::: date
23/10/2020
:::

Desde niño siempre he querido tener una página web. En parte, me fascinaba la
idea de tener un pequeño terreno sobre el cual construir mi casa en este vasto
mundo virtual. 

Mi primer sitio web fue escrito en Bloc de Notas. Un crudo "Hola Mundo" en HTML,
bajo la guía de la fuente universal del conocimiento para un niño en 2008: un
tutorial de Youtube. En ese momento, no sabía exactamente qué eran los verbos
HTTP,  no comprendía las sutilezas de la compra de un dominio web ni cómo
funcionaba un DNS (para ser justos, todavía no lo entiendo del todo). Satisfecho
con mi trabajo, apagué mi computadora y me salí a jugar lo que sea que los niños
de once años hacían en el 2008.

Once años después, me encuentro solo y aburrido en la biblioteca de la escuela.
Mi mirada recae en un libro de "O'Reilly" con bonitas
portadas de animales. Eso me basta para, en la siguiente hora, dedicarme a hacer
una sencilla página en HTML.

![Primer intento](./img1.png)


No llegué mucho más lejos que once años atrás, pero al menos ya sabía (más o
menos) qué era lo que estaba haciendo. La hora terminó y me fui a mi clase de
Cálculo II sin volver a tocarlo.
El nombre "Cosmic Cube" es experimental. No sabía de qué iba a tratar mi sitio
web, pero un libro que acababa de leer describía una red de computadoras apodada
de esa manera y era demasiado bueno para desaprovecharlo.

![Segundo intento](./img2.png)

Casi un año después, se me presentó una oportunidad para trabajar como
desarrollador web en una empresa. Todavía no salía de la carrera, ni poseía nada
mas que el conocimiento más superficial sobre el conjunto de tecnologías que
componen el Stack completo de desarrollo web al día de hoy, y sin embargo logré
colarme  en su curso de capacitación. Es aquí cuando los nombres Javascript y
CSS comienzan a tener algún significado en mi vida.
Por cuestiones de tiempo (y otras dificultades que implican el balancear la vida
académica y un curso intensivo de ocho horas), nunca entré a trabajar ahí. Sin
embargo, para eso entonces, ya creía saber lo suficiente de desarrollo web para
concretar un lejano sueño de la infancia. Lo que no sabía era que el descenso
por el agujero de gusano apenas comenzaba.

![Tercer intento](./img3.png)

Cuando tomé la decisión de seriamente dedicarme al desarrollo de un blog
personal, cometí un grave error: no ser claro ni honesto conmigo mismo con lo
que esperaba que mi página tuviera.  Se me hizo fácil agregarle una sección de
música (incluyendo llamadas indiscriminadas al API de Spotify) y una sección de
comentarios.  
Comencé utilizando Handlebars.js y pronto me dí cuenta de que no sería
suficiente para todo lo que tenía en mente. Entonces,
con esta idea megalomaniaca de crear el próximo [sopitas.com](https://www.sopitas.com/) me dí a la tarea de
aprender Vue.js como siguiente paso para convertirme en un desarrollador
"full stack".

Resulta que Vue.js es una gran plataforma para programar un sitio web "serio":
una SPA con render asíncrono y un API serio, con backend en Node y PostgreSQL.
Palabras de desarrollador serio. Sin embargo pronto recibí un cubetazo de agua
fría: no tenía idea de en dónde iba a hostear mi sitio web.
Hice cuentas y el costo de un servidor + el nombre de un dominio + el costo de
una base de datos en AWS era más de lo que estaba dispuesto a invertir en un
proyecto de vanidad. Dejé el proyecto a un lado y me dediqué a terminar mi
semestre.

Unos meses después, descubrí que github tiene la amabilidad de proveer de un
dominio completamente gratuito en su plataforma github pages. Esto era una gran
noticia, ya que esto significaba que no tenía que pagar un peso por el dominio y
hosteo de mi sitio web y las limitaciones de un sitio estático (como el que
puede ser hosteado en github) significaban un recorte significativo en mis
ambiciones para el sitio.

Un sitio estático. Esto quiere decir que este sitio pudo haber sido
escrito en su totalidad en HTML sin la necesidad de escribir una sola línea de
javascript.

Pero ya estoy aquí, y aprendí mucho en el camino.

Como nota técnica, este sitio es compilado a su forma estática gracias a
prerender-spa-plugin, un plugin para webpack que compila una SPA a un página
estática.

Disfruta la página, tomó mucho tiempo y aprendizaje llegar hasta aquí. Gracias
por leer.

*Nota:*  
Desde la fecha de esta publicación, la insfraestructura del sitio ha cambiado.
Al día de hoy, utiliza [VuePress](https://vuepress.vuejs.org/).

