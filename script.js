
console.log("JavaScript conectado correctamente");


const textos = {

    es: {

        perfil: "Especialista en Inteligencia Artificial y Big Data",
        formacion: "Técnico Superior en Automatización y Robótica Industrial",

        experiencia: "Experiencia",
        educacion: "Educación",
        tecnologias: "Tecnologías y Conocimientos",
        idiomas: "Idiomas",
        certificados: "Certificaciones y Cursos",

        citracc_puesto: "Técnico Auxiliar ",
        citracc_funcion1: "Sustitución de placas de control en equipos feeder y rectificadores de instalaciones ferroviarias.",
        citracc_funcion2: "Mantenimiento preventivo y correctivo de recuperadores de energía en instalaciones de ADIF.",
        citracc_funcion3: "Sustitución y mantenimiento de ventiladores en carros inversores.",
        citracc_funcion4: "Ejecución de tareas de mantenimiento correctivo de segundo nivel en equipos e instalaciones de TMB.",
        inconet_puesto: "Becario ",
        inconet_funcion1: "Elaboración y actualización de documentación técnica en Excel para el registro y control de dispositivos en instalaciones industriales.",
        inconet_funcion2: "Modificación de esquemas eléctricos en AutoCAD como apoyo a la puesta en marcha de instalaciones industriales.",
        inconet_funcion3: "Redacción y actualización de manuales de usuario y documentación técnica en Microsoft Word.",
        citracc_fecha: "| Noviembre 2025 - Mayo 2026",
        inconet_fecha: "| Octubre 2023 - Junio 2024",

        educacion1_titulo: "Máster de FP / Curso de Especialización en Inteligencia Artificial y Big Data ",
        educacion2_titulo: "Grado Superior en Automatización y Robótica Industrial ",
        educacionFecha1: "| 2024 - 2025",
        educacionFecha2: "| 2022 - 2024",

        tecnologia1: "Programación y Desarrollo",
        tecnologia2: "Análisis de Datos e Inteligencia Artificial",
        tecnologia3: "Automatización y Robótica Industrial",
        tecnologia4: "Diseño y Herramientas Industriales",
        tecnologia5: "Conocimientos Industriales",
        conocimiento1: "Electricidad",
        conocimiento2: "Neumática",
        conocimiento3: "Hidráulica",

        idioma1_nombre: "Español",
        idioma1_nivel: "Nativo",
        idioma2_nombre: "Catalán",
        idioma2_nivel: "Nativo",
        idioma3_nombre: "Inglés",

        certificado1: "Curso Nivel Básico PRL en Construcción (60 horas)",
        certificado2: "Curso de Montaje y Mantenimiento de Instalaciones de AT y BT (6 horas)",
        fecha1: "| Diciembre 2025",
        fecha2: "| Enero 2026",

    },


    en: {

        perfil: "Artificial Intelligence and Big Data Specialist",
        formacion: "Higher Technician in Industrial Automation and Robotics",

        experiencia: "Experience",
        educacion: "Education",
        tecnologias: "Technologies and Skills",
        idiomas: "Languages",
        certificados: "Certifications and Courses",

        citracc_puesto: "Assistant Technician ",
        citracc_funcion1: "Replacement of control boards in feeder and rectifier equipment of railway installations.",
        citracc_funcion2: "Preventive and corrective maintenance of energy recovery systems in ADIF installations.",
        citracc_funcion3: "Replacement and maintenance of fans in inverter units.",
        citracc_funcion4: "Execution of second-level corrective maintenance tasks on TMB equipment and installations.",
        inconet_puesto: "Intern ",
        inconet_funcion1: "Preparation and updating of technical documentation in Excel for the registration and control of devices in industrial installations.",
        inconet_funcion2: "Modification of electrical diagrams in AutoCAD to support the commissioning of industrial installations.",
        inconet_funcion3: "Writing and updating user manuals and technical documentation in Microsoft Word.",
        citracc_fecha: "| November 2025 - May 2026",
        inconet_fecha: "| October 2023 - June 2024",

        educacion1_titulo: "Higher Vocational Training Master's Degree / Specialization Course in Artificial Intelligence and Big Data ",
        educacion2_titulo: "Higher Technician Degree in Industrial Automation and Robotics ",
        educacionFecha1: "| 2024 - 2025",
        educacionFecha2: "| 2022 - 2024",

        tecnologia1: "Programming and Development",
        tecnologia2: "Data Analysis and Artificial Intelligence",
        tecnologia3: "Industrial Automation and Robotics",
        tecnologia4: "Industrial Design and Tools",
        tecnologia5: "Industrial Knowledge",
        conocimiento1: "Electricity",
        conocimiento2: "Pneumatics",
        conocimiento3: "Hydraulics",

        idioma1_nombre: "Spanish",
        idioma1_nivel: "Native",
        idioma2_nombre: "Catalan",
        idioma2_nivel: "Native",
        idioma3_nombre: "English",

        certificado1: "Basic Occupational Risk Prevention Course in Construction (60 hours)",
        certificado2: "High and Low Voltage Installation Assembly and Maintenance Course (6 hours)",
        fecha1: "| December 2025",
        fecha2: "| January 2026",

    }

};



const perfil = document.querySelector(".perfil");
const formacion = document.querySelector(".formacion");

const experiencia = document.querySelector(".experiencia h2");
const educacion = document.querySelector(".educacion h2");
const tecnologias = document.querySelector(".tecnologias h2");
const idiomas = document.querySelector(".idiomas h2");
const certificados = document.querySelector(".certificados h2");

const citraccPuesto = document.querySelector(".experiencia-item .puesto");
const citraccFuncion1 = document.querySelector(".experiencia-item .lista-funciones li:nth-child(1)");
const citraccFuncion2 = document.querySelector(".experiencia-item .lista-funciones li:nth-child(2)");
const citraccFuncion3 = document.querySelector(".experiencia-item .lista-funciones li:nth-child(3)");
const citraccFuncion4 = document.querySelector(".experiencia-item .lista-funciones li:nth-child(4)");
const inconetPuesto = document.querySelectorAll(".experiencia-item .puesto")[1];
const inconetFuncion1 = document.querySelectorAll(".experiencia-item .lista-funciones li")[4];
const inconetFuncion2 = document.querySelectorAll(".experiencia-item .lista-funciones li")[5];
const inconetFuncion3 = document.querySelectorAll(".experiencia-item .lista-funciones li")[6];
const experienciaFecha = document.querySelectorAll(".experiencia-item .fecha");

const educacionTitulo1 = document.querySelectorAll(".educacion-item .titulo-estudio")[0];
const educacionTitulo2 = document.querySelectorAll(".educacion-item .titulo-estudio")[1];
const educacionFecha = document.querySelectorAll(".educacion-item .fecha");

const tecnologiaTitulos = document.querySelectorAll(".bloque-tecnologia h3");
const conocimientos = document.querySelectorAll(".bloque-tecnologia:last-child .etiquetas span");

const idiomasNombre = document.querySelectorAll(".idioma h3");
const idiomasNivel = document.querySelectorAll(".idioma p");

const certificadosTitulo = document.querySelectorAll(".certificado h3");
const certificadosFecha = document.querySelectorAll(".certificado .fecha");

const botonEn = document.querySelector(".idioma-en");
const botonEs = document.querySelector(".idioma-es");

const botonDescargar = document.querySelector(".descargar-cv");

const botonOscuro = document.querySelector(".modo-oscuro");


botonEn.addEventListener("click", function () {

    perfil.textContent = textos.en.perfil;
    formacion.textContent = textos.en.formacion;

    experiencia.textContent = textos.en.experiencia;
    educacion.textContent = textos.en.educacion;
    tecnologias.textContent = textos.en.tecnologias;
    idiomas.textContent = textos.en.idiomas;
    certificados.textContent = textos.en.certificados;

    citraccPuesto.firstChild.textContent = textos.en.citracc_puesto;
    citraccFuncion1.textContent = textos.en.citracc_funcion1;
    citraccFuncion2.textContent = textos.en.citracc_funcion2;
    citraccFuncion3.textContent = textos.en.citracc_funcion3;
    citraccFuncion4.textContent = textos.en.citracc_funcion4;
    inconetPuesto.firstChild.textContent = textos.en.inconet_puesto;
    inconetFuncion1.textContent = textos.en.inconet_funcion1;
    inconetFuncion2.textContent = textos.en.inconet_funcion2;
    inconetFuncion3.textContent = textos.en.inconet_funcion3;
    experienciaFecha[0].textContent = textos.en.citracc_fecha;
    experienciaFecha[1].textContent = textos.en.inconet_fecha;

    educacionTitulo1.firstChild.textContent = textos.en.educacion1_titulo;
    educacionTitulo2.firstChild.textContent = textos.en.educacion2_titulo;
    educacionFecha[0].textContent = textos.en.educacionFecha1;
    educacionFecha[1].textContent = textos.en.educacionFecha2;

    tecnologiaTitulos[0].textContent = textos.en.tecnologia1;
    tecnologiaTitulos[1].textContent = textos.en.tecnologia2;
    tecnologiaTitulos[2].textContent = textos.en.tecnologia3;
    tecnologiaTitulos[3].textContent = textos.en.tecnologia4;
    tecnologiaTitulos[4].textContent = textos.en.tecnologia5;
    conocimientos[0].textContent = textos.en.conocimiento1;
    conocimientos[1].textContent = textos.en.conocimiento2;
    conocimientos[2].textContent = textos.en.conocimiento3;

    idiomasNombre[0].textContent = textos.en.idioma1_nombre;
    idiomasNombre[1].textContent = textos.en.idioma2_nombre;
    idiomasNombre[2].textContent = textos.en.idioma3_nombre;
    idiomasNivel[0].textContent = textos.en.idioma1_nivel;
    idiomasNivel[1].textContent = textos.en.idioma2_nivel;

    certificadosTitulo[0].textContent = textos.en.certificado1;
    certificadosTitulo[1].textContent = textos.en.certificado2;
    certificadosFecha[0].textContent = textos.en.fecha1;
    certificadosFecha[1].textContent = textos.en.fecha2;

});


botonEs.addEventListener("click", function () {

    perfil.textContent = textos.es.perfil;
    formacion.textContent = textos.es.formacion;

    experiencia.textContent = textos.es.experiencia;
    educacion.textContent = textos.es.educacion;
    tecnologias.textContent = textos.es.tecnologias;
    idiomas.textContent = textos.es.idiomas;
    certificados.textContent = textos.es.certificados;

    citraccPuesto.firstChild.textContent = textos.es.citracc_puesto;
    citraccFuncion1.textContent = textos.es.citracc_funcion1;
    citraccFuncion2.textContent = textos.es.citracc_funcion2;
    citraccFuncion3.textContent = textos.es.citracc_funcion3;
    citraccFuncion4.textContent = textos.es.citracc_funcion4;
    inconetPuesto.firstChild.textContent = textos.es.inconet_puesto;
    inconetFuncion1.textContent = textos.es.inconet_funcion1;
    inconetFuncion2.textContent = textos.es.inconet_funcion2;
    inconetFuncion3.textContent = textos.es.inconet_funcion3;
    experienciaFecha[0].textContent = textos.es.citracc_fecha;
    experienciaFecha[1].textContent = textos.es.inconet_fecha;

    educacionTitulo1.firstChild.textContent = textos.es.educacion1_titulo;
    educacionTitulo2.firstChild.textContent = textos.es.educacion2_titulo;
    educacionFecha[0].textContent = textos.es.educacionFecha1;
    educacionFecha[1].textContent = textos.es.educacionFecha2;

    tecnologiaTitulos[0].textContent = textos.es.tecnologia1;
    tecnologiaTitulos[1].textContent = textos.es.tecnologia2;
    tecnologiaTitulos[2].textContent = textos.es.tecnologia3;
    tecnologiaTitulos[3].textContent = textos.es.tecnologia4;
    tecnologiaTitulos[4].textContent = textos.es.tecnologia5;
    conocimientos[0].textContent = textos.es.conocimiento1;
    conocimientos[1].textContent = textos.es.conocimiento2;
    conocimientos[2].textContent = textos.es.conocimiento3;

    idiomasNombre[0].textContent = textos.es.idioma1_nombre;
    idiomasNombre[1].textContent = textos.es.idioma2_nombre;
    idiomasNombre[2].textContent = textos.es.idioma3_nombre;
    idiomasNivel[0].textContent = textos.es.idioma1_nivel;
    idiomasNivel[1].textContent = textos.es.idioma2_nivel;

    certificadosTitulo[0].textContent = textos.es.certificado1;
    certificadosTitulo[1].textContent = textos.es.certificado2;
    certificadosFecha[0].textContent = textos.es.fecha1;
    certificadosFecha[1].textContent = textos.es.fecha2;

});



botonDescargar.addEventListener("click", function () {

    window.print();

});



botonOscuro.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

});