#  Calculadora de Factorial

> Práctica de **Lógica de Programación 3** — Programa en JavaScript que calcula el factorial de un número ingresado por el usuario.

---

##  Descripción

Este programa solicita al usuario un número entero positivo a través de un campo de entrada (`input`), calcula su **factorial** y muestra el resultado tanto en la interfaz web (DOM) como en la consola del navegador.

### Características principales

-  **Validación de entrada**: Verifica que el dato ingresado sea de tipo `number`. Si no lo es, muestra un mensaje de error y permite volver a intentar.
-  **Cálculo iterativo**: Calcula el factorial usando un bucle `for` eficiente.
-  **Resultados visuales**: Muestra la expresión completa del factorial (ej: `5! = 5 × 4 × 3 × 2 × 1`) y el resultado formateado.
-  **Salida por consola**: Imprime el resultado en `console.log`.
-  **Historial de cálculos**: Guarda los últimos 10 cálculos realizados.
-  **Diseño responsivo**: Interfaz moderna que se adapta a cualquier dispositivo.

---

## 🚀 Cómo usar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/logica-programacion-3.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa un número entero positivo en el campo de texto.
4. Haz clic en **Calcular** o presiona **Enter**.
5. El resultado aparecerá en la pantalla y en la consola del navegador (`F12` > `Console`).

---

##  Pruebas

| Entrada | Salida esperada |
|---------|-----------------|
| `5`     | `120`           |
| `6`     | `720`           |
| `0`     | `1`             |
| `1`     | `1`             |
| `10`    | `3,628,800`     |
| `abc`   | Mensaje de error |
| `-3`    | Mensaje de error |

---

## 📁 Estructura del proyecto

```
logica-programacion-3/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos de la interfaz
├── js/
│   └── main.js         # Lógica del programa
└── README.md           # Este archivo
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — Estructura semántica
- **CSS3** — Diseño con glassmorphism, gradientes y animaciones
- **JavaScript (Vanilla)** — Lógica de validación y cálculo del factorial

---

##  ¿Qué es el factorial?

El factorial de un número entero positivo `n`, denotado como `n!`, es el producto de todos los enteros positivos desde `1` hasta `n`:

```
n! = n × (n-1) × (n-2) × ... × 2 × 1
```

Por convención, `0! = 1`.

**Ejemplo:**
```
5! = 5 × 4 × 3 × 2 × 1 = 120
6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
```

---

Este proyecto es parte de una práctica académica de Lógica de Programación.
