const materias = {
  "Semestre 1": [
    { nombre: "INGLES I" },
    { nombre: "ANATOMIA E HISTOLOGIA GENERAL" },
    { nombre: "BIOLOGIA CELULAR, MOLECULAR Y GENETICA" },
    { nombre: "BIOQUIMICA" },
    { nombre: "DERECHO CONSTITUCIONAL GENERAL" },
    { nombre: "ANATOMIA DENTAL Y OCLUSION" },
    { nombre: "BIOMATERIALES DENTALES" },
    { nombre: "METODOLOGIA DE LA INVESTIGACION Y BIOESTADISTICA" },
    { nombre: "CATEDRA COLEGIAL" }
  ],
  "Semestre 2": [
    { nombre: "INGLES II", prerequisitos: ["INGLES I"] },
    { nombre: "EMBRIOLOGÍA E HISTOLOGÍA OROFACIAL", prerequisitos: ["ANATOMIA E HISTOLOGIA GENERAL", "BIOLOGIA CELULAR, MOLECULAR Y GENETICA"] },
    { nombre: "FISIOLOGÍA", prerequisitos: ["ANATOMIA E HISTOLOGIA GENERAL", "BIOLOGIA CELULAR, MOLECULAR Y GENETICA", "BIOQUIMICA"] },
    { nombre: "MICROBIOLOGÍA E INMUNOLOGÍA", prerequisitos: ["BIOLOGIA CELULAR, MOLECULAR Y GENETICA", "BIOQUIMICA"] },
    { nombre: "ETICA Y BIOETICA" },
    { nombre: "FUNCIÓN Y DISFUNCIÓN TEMPOROMANDIBULAR", prerequisitos: ["ANATOMIA DENTAL Y OCLUSION", "ANATOMIA E HISTOLOGIA GENERAL"] },
    { nombre: "IMAGENOLOGÍA", prerequisitos: ["ANATOMIA DENTAL Y OCLUSION", "ANATOMIA E HISTOLOGIA GENERAL"] },
    { nombre: "EPIDEMIOLOGÍA", prerequisitos: ["METODOLOGIA DE LA INVESTIGACION Y BIOESTADISTICA"] }
  ],
  "Semestre 3": [
    { nombre: "INGLES III", prerequisitos: ["INGLES II"] },
    { nombre: "ENDODONCIA Y TRAUMATOLOGIA DENTOALVEOLAR", prerequisitos: ["FISIOLOGÍA", "IMAGENOLOGÍA", "MICROBIOLOGÍA E INMUNOLOGÍA"] },
    { nombre: "PATOLOGÍA GENERAL Y ORAL", prerequisitos: ["FISIOLOGÍA", "MICROBIOLOGÍA E INMUNOLOGÍA", "EMBRIOLOGÍA E HISTOLOGÍA OROFACIAL"] },
    { nombre: "PSICOLOGIA DINAMICA" },
    { nombre: "CARIOLOGIA Y ODONTOLOGIA RESTAURATIVA", prerequisitos: ["FISIOLOGÍA", "IMAGENOLOGÍA", "MICROBIOLOGÍA E INMUNOLOGÍA", "FUNCIÓN Y DISFUNCIÓN TEMPOROMANDIBULAR"] },
    { nombre: "PERIODONCIA Y BIOLOGIA ORAL", prerequisitos: ["FISIOLOGÍA", "IMAGENOLOGÍA", "MICROBIOLOGÍA E INMUNOLOGÍA"] },
    { nombre: "INTRODUCCION A LA CLINICA", prerequisitos: ["ENDODONCIA Y TRAUMATOLOGIA DENTOALVEOLAR", "MICROBIOLOGÍA E INMUNOLOGÍA", "CARIOLOGIA Y ODONTOLOGIA RESTAURATIVA"] },
    { nombre: "EPIDEMIOLOGÍA ORAL, PROMOCION Y PREVENCION", prerequisitos: ["EPIDEMIOLOGÍA"] }
  ],
  "Semestre 4": [
    { nombre: "INGLES IV", prerequisitos: ["INGLES III"] },
    { nombre: "FARMACOLOGIA Y TERAPEUTICA", prerequisitos: ["PATOLOGÍA GENERAL Y ORAL"] },
    { nombre: "PSICOLOGIA CLINICA", prerequisitos: ["PSICOLOGIA DINAMICA"] },
    { nombre: "ANESTESIOLOGÍA Y CIRUGÍA ORAL", prerequisitos: ["PATOLOGÍA GENERAL Y ORAL"] },
    { nombre: "ODONTOLOGÍA PEDIÁTRICA. DESARROLLO Y CRECIMIENTO", prerequisitos: ["ENDODONCIA Y TRAUMATOLOGIA DENTOALVEOLAR", "CARIOLOGIA Y ODONTOLOGIA RESTAURATIVA", "PERIODONCIA Y BIOLOGIA ORAL"] },
    { nombre: "PROSTODONCIA", prerequisitos: ["ENDODONCIA Y TRAUMATOLOGIA DENTOALVEOLAR", "CARIOLOGIA Y ODONTOLOGIA RESTAURATIVA", "PERIODONCIA Y BIOLOGIA ORAL"] },
    { nombre: "CLÍNICAS DE PROMOCIÓN Y PREVENCION", prerequisitos: ["PERIODONCIA Y BIOLOGIA ORAL", "EPIDEMIOLOGÍA ORAL, PROMOCION Y PREVENCION", "INTRODUCCION A LA CLINICA", "CARIOLOGIA Y ODONTOLOGIA RESTAURATIVA"] },
    { nombre: "ESTRUCTURA DE LA SALUD EN COLOMBIA" }
  ],
  "Semestre 5": [
    { nombre: "ADMINISTRACION Y DESARROLLO ORGANIZACIONAL" },
    { nombre: "FUNDAMENTOS DE MEDICINA INTERNA", prerequisitos: ["FARMACOLOGIA Y TERAPEUTICA"] },
    { nombre: "CLINICA PEDIATRICA I", prerequisitos: ["FARMACOLOGIA Y TERAPEUTICA", "CLÍNICAS DE PROMOCIÓN Y PREVENCION", "ANESTESIOLOGÍA Y CIRUGÍA ORAL", "ODONTOLOGÍA PEDIÁTRICA. DESARROLLO Y CRECIMIENTO"] },
    { nombre: "ODONTOLOGIA IMPLANTOLOGICA", prerequisitos: ["PROSTODONCIA", "ANESTESIOLOGÍA Y CIRUGÍA ORAL"] },
    { nombre: "ORTODONCIA Y ORTOPEDIA MAXILAR", prerequisitos: ["ODONTOLOGÍA PEDIÁTRICA. DESARROLLO Y CRECIMIENTO"] },
    { nombre: "CLINICA INTEGRADA Y EVIDENCIA CIENTIFICA I", prerequisitos: ["FARMACOLOGIA Y TERAPEUTICA", "CLÍNICAS DE PROMOCIÓN Y PREVENCION", "PROSTODONCIA", "ANESTESIOLOGÍA Y CIRUGÍA ORAL"] },
    { nombre: "ODONTOLOGIA COMUNITARIA", prerequisitos: ["ESTRUCTURA DE LA SALUD EN COLOMBIA"] }
  ],
  "Semestre 6": [
    { nombre: "GERENCIA ESTRATÉGICA" },
    { nombre: "CONTROL DEL DOLOR Y LA ANSIEDAD", prerequisitos: ["FARMACOLOGIA Y TERAPEUTICA"] },
    { nombre: "MEDICINA LEGAL Y ODONTOLOGÍA FORENSE" },
    { nombre: "ELECTIVA I" },
    { nombre: "COMPETENCIAS CIUDADANAS" },
    { nombre: "CLÍNICA INTEGRADA Y EVIDENCIA CIENTÍFICA II", prerequisitos: ["CLINICA INTEGRADA Y EVIDENCIA CIENTIFICA I"] },
    { nombre: "CLINICA PEDIATRICA II", prerequisitos: ["CLINICA PEDIATRICA I", "ORTODONCIA Y ORTOPEDIA MAXILAR"] },
    { nombre: "LECTURA CRITICA Y COMUNICACION ORAL Y ESCRITA" },
    { nombre: "SABER PRO INGLES" }
  ],
  "Semestre 7": [
    { nombre: "MEDICINA ORAL", prerequisitos: ["FUNDAMENTOS DE MEDICINA INTERNA"] },
    { nombre: "ELECTIVA II" },
    { nombre: "RAZONAMIENTO CUANTITATIVO" },
    { nombre: "CLINICA INTEGRADA Y EVIDENCIA CIENTIFICA III", prerequisitos: ["CLÍNICA INTEGRADA Y EVIDENCIA CIENTÍFICA II"] },
    { nombre: "CLÍNICA PEDIÁTRICA III", prerequisitos: ["CLINICA PEDIATRICA II"] },
    { nombre: "COMPETENCIAS CIUDADANAS" },
    { nombre: "LECTURA CRITICA Y COMUNICACION ORAL Y ESCRITA" },
    { nombre: "RAZONAMIENTO CUANTITATIVO" },
    { nombre: "SABER PRO INGLES" }
  ],
  "Semestre 8": [
    { nombre: "ROTACIÓN HOSPITALARIA", prerequisitos: ["MEDICINA ORAL"] },
    { nombre: "RESPONSABILIDAD GENERAL MEDICA" },
    { nombre: "DIAGNOSTICO Y TRATAMIENTO EN SALUD ORAL" },
    { nombre: "ENFASIS PROFESIONAL", prerequisitos: ["CLINICA INTEGRADA Y EVIDENCIA CIENTIFICA III", "CLÍNICA PEDIÁTRICA III"] },
    { nombre: "ENFASIS PROFESIONAL SOCIAL", prerequisitos: ["ODONTOLOGIA COMUNITARIA", "GERENCIA ESTRATÉGICA"] },
    { nombre: "ATENCION EN SALUD" },
    { nombre: "PROMOCION DE LA SALUD Y PREVENCION DE LA ENFERMEDAD" }
  ]
};

const completadas = new Set(JSON.parse(localStorage.getItem('completadas')) || []);
const contenedor = document.getElementById("semestres");

function render() {
  contenedor.innerHTML = "";
  Object.entries(materias).forEach(([semestre, lista]) => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${semestre}</h2>`;
    const ul = document.createElement("ul");

    lista.forEach(materia => {
      const li = document.createElement("li");
      li.textContent = materia.nombre;

      const requisitos = materia.prerequisitos || [];
      const habilitada = requisitos.every(r => completadas.has(r));

      if (!habilitada && requisitos.length > 0) {
        li.classList.add("locked");
      } else {
        li.addEventListener("click", () => {
          if (li.classList.contains("done")) {
            completadas.delete(materia.nombre);
            li.classList.remove("done");
          } else {
            completadas.add(materia.nombre);
            li.classList.add("done");
          }
          localStorage.setItem('completadas', JSON.stringify([...completadas]));
          render();
        });
      }

      if (completadas.has(materia.nombre)) {
        li.classList.add("done");
      }

      ul.appendChild(li);
    });

    div.appendChild(ul);
    contenedor.appendChild(div);
  });
}

render();
