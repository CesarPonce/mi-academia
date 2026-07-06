// ARCHIVO DE CONFIGURACIÓN CENTRALIZADA DE LIBROS, PRECIOS Y LINKS - CÉSAR PONCE
const CONFIG_LIBROS = {
    "emily-axelrod": {
        "nombre": "Emily Axelrod",
        "urlDescarga": "paginas-descarga/novelas/descarga-emilyaxelrod.html",
        "linkDrive": "https://drive.google.com/file/d/1q6H33s91oQ61_JC_c8ClmiZzwaPsBbEV/view?usp=sharing",
        "precioUSD": "9.00",
        "precioPEN": "35.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20de%20la%20novela%20Emily%20Axelrod"
    },
    
    "paciente-cero": {
        "nombre": "Paciente Cero",
        "urlDescarga": "paginas-descarga/novelas/descarga-paciente-cero.html",
        "linkDrive": "https://drive.google.com/file/d/1IzjiKa1azIeWTmkNIefCYd9-ycwwW32C/view?usp=sharing",
        "precioUSD": "9.00",
        "precioPEN": "35.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20de%20la%20novela%20Paciente%20Cero"
    },
    
    "valentina-nunez": {
        "nombre": "Valentina Nuñez",
        "urlDescarga": "paginas-descarga/novelas/descarga-valentina-nunez.html",
        "linkDrive": "https://drive.google.com/file/d/1ASbRy4XU0ugSk7AOCERAhuNQX940MnYO/view?usp=sharing",
        "precioUSD": "8.00",
        "precioPEN": "30.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20de%20la%20novela%20Valentina%20Nu%C3%B1ez"
    },
    
    "diario-pareja": {
        "nombre": "100 Desafíos Divertidos Para Hacer en Pareja",
        "urlDescarga": "paginas-descarga/novelas/descarga-diario-pareja.html",
        "linkDrive": "https://drive.google.com/file/d/1GmmnCO2dlvhoTDRc3olOCkbyngFM4o1i/view?usp=sharing",
        "precioUSD": "9.00",
        "precioPEN": "35.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20Diario%20de%20Parejas"
    },
    
    "diario-desamor": {
        "nombre": "Diario de Desamor Para Aprender del Amor",
        "urlDescarga": "paginas-descarga/novelas/descarga-diario-desamor.html",
        "linkDrive": "https://drive.google.com/file/d/1pfpA3fk9_4Mz6BaQv5Jfu87sPsIOUROd/view?usp=sharing",
        "precioUSD": "7.00",
        "precioPEN": "25.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20Diario%20de%20Desamor"
    },
    
    "activity-book": {
        "nombre": "Libro para Divertirse y Aprender con Actividades Variadas",
        "urlDescarga": "paginas-descarga/ninos/descarga-activity-book.html",
        "linkDrive": "https://drive.google.com/file/d/1zz6mEe6NOOi420xByqQTKWZpmTuM0G4j/view?usp=sharing",
        "precioUSD": "6.50",
        "precioPEN": "20.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20Activity%20Book"
    },
    
    "coloring-book": {
        "nombre": "Libro para Colorear Animalitos",
        "urlDescarga": "paginas-descarga/ninos/descarga-coloring-book.html",
        "linkDrive": "https://drive.google.com/file/d/1kRUfP34Qbbn-dSq_HQduH028Mf0wELSg/view?usp=sharing",
        "precioUSD": "6.50",
        "precioPEN": "20.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20Libro%20para%20Colorear"
    },
    
    "tracing-matching": {
        "nombre": "Libro para Aprender Frases Básicas en Inglés",
        "urlDescarga": "paginas-descarga/ninos/descarga-tracing-matching.html",
        "linkDrive": "https://drive.google.com/file/d/1bcq6YY-PoX2l69id7tRFQ1u9mnZbiMBr/view?usp=sharing",
        "precioUSD": "6.50",
        "precioPEN": "20.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20Libro%20de%20Frases%20en%20Ingl%C3%A9s"
    },
    
    "word-search": {
        "nombre": "Libro de Sopa de Letras en Inglés",
        "urlDescarga": "paginas-descarga/ninos/descarga-word-search.html",
        "linkDrive": "https://drive.google.com/file/d/1hO9OF15DH508V7mbdLPMHdDA0fZSmSSf/view?usp=sharing",
        "precioUSD": "6.50",
        "precioPEN": "20.00",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20de%20la%20Sopa%20de%20Letras"
    },
    
    "curso-ingles": {
        "nombre": "Curso de Inglés De Básico a Avanzado",
        "urlDescarga": "https://forms.gle/J1Kn6Ag6odeTPpbr6",
        "whatsappMsj": "Hola!%20Hice%20el%20pago%20del%20curso%20de%20Ingl%C3%A9s",
        "niveles": {
            "A1": { "pen": "100.00", "usd": "30.00", "desc": "Nivel A1 - Elementary" },
            "A2": { "pen": "120.00", "usd": "36.00", "desc": "Nivel A2 - Pre Intermediate" },
            "B1": { "pen": "130.00", "usd": "39.00", "desc": "Nivel B1 - Intermediate" },
            "B2": { "pen": "150.00", "usd": "45.00", "desc": "Nivel B2 - Upper Intermediate" },
            "C1": { "pen": "180.00", "usd": "54.00", "desc": "Nivel C1 - Advanced" },
            "C2": { "pen": "200.00", "usd": "60.00", "desc": "Nivel C2 - Proficiency" }
        }
    },
    
    "online-tutoring": {
        "whatsappMsj": "Hola%20Teacher%20C%C3%A9sar%2C%20estoy%20interesado%20en%20la%20tutor%C3%ADa%20online",
        "urlDescarga": "https://forms.gle/6YDgBVVUEHY7er3o6",
        "niveles": {
            "individual": { "pen": "30", "usd": "9", "desc": "Clase Individual (1 hora)" },
            "dos": { "pen": "50", "usd": "15", "desc": "Clase 2 Estudiantes (1 hora)" },
            "tres": { "pen": "60", "usd": "18", "desc": "Clase 3 Estudiantes (1 hora)" }
        }
    },
    
    "face-to-face-tutoring": {
        "whatsappMsj": "Hola%20Teacher%20C%C3%A9sar%2C%20estoy%20interesado%20en%20el%20face%20to%20face%20tutoring",
        "urlDescarga": "https://forms.gle/YGSC6ewxHGhHwDZT7",
        "niveles": {
            "individual": { "pen": "35", "usd": "10", "desc": "Clase Individual (1 hora)" },
            "dos": { "pen": "60", "usd": "18", "desc": "Clase 2 Estudiantes (1 hora)" },
            "tres": { "pen": "75", "usd": "22.5", "desc": "Clase 3 Estudiantes (1 hora)" }
        }
    }
	// Cuando tengas un libro nuevo, solo agregas una coma y copias el bloque.
};

