<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>✨ Malla Psicología ULagos ✨</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Malla Interactiva Psicología ULagos</h1>
  <div id="malla"></div>
  <script>
    const ramos = [
      // Semestre 1
      { semestre: 1, codigo: "PSIC001", nombre: "Enfoques psicológicos" },
      { semestre: 1, codigo: "PSIC002", nombre: "Bases biológicas del comportamiento" },
      { semestre: 1, codigo: "PSIC003", nombre: "Socioantropología" },
      { semestre: 1, codigo: "PSIC004", nombre: "Epistemología y filosofía" },
      { semestre: 1, codigo: "PSIC005", nombre: "Desarrollo personal e integración I" },
      { semestre: 1, codigo: "PSIC006", nombre: "Competencias transversales I" },
      { semestre: 1, codigo: "CTRAP I", nombre: "TICS" },

      // Semestre 2
      { semestre: 2, codigo: "PSIC006P", nombre: "Procesos Psicológicos", requisitos: ["PSIC001"] },
      { semestre: 2, codigo: "PSIC007", nombre: "Ciclo Vital I" },
      { semestre: 2, codigo: "PSIC008", nombre: "Neuropsicología", requisitos: ["PSIC002"] },
      { semestre: 2, codigo: "PSIC009", nombre: "Bases sociales del Comportamiento", requisitos: ["PSIC003"] },
      { semestre: 2, codigo: "PSIC010", nombre: "Desarrollo personal e integración II", requisitos: ["PSIC005"] },
      { semestre: 2, codigo: "CTRAP III", nombre: "Competencias transversales II", requisitos: ["CTRAP I"] },

      // Semestre 3
      { semestre: 3, codigo: "PSIC011", nombre: "Psicología de la Personalidad", requisitos: ["PSIC006P"] },
      { semestre: 3, codigo: "PSIC012", nombre: "Ciclo Vital II", requisitos: ["PSIC007"] },
      { semestre: 3, codigo: "PSIC013", nombre: "Psicopatología", requisitos: ["PSIC008"] },
      { semestre: 3, codigo: "PSIC014", nombre: "Metodología de la investigación", requisitos: ["PSIC004"] },
      { semestre: 3, codigo: "PSIC015", nombre: "Desarrollo personal e integración III", requisitos: ["PSIC010"] },
      { semestre: 3, codigo: "CTRAP IV", nombre: "Inglés I" },

      // Semestre 4
      { semestre: 4, codigo: "PSIC016", nombre: "Evaluación psicológica en niños y adolescentes", requisitos: ["PSIC007", "PSIC011"] },
      { semestre: 4, codigo: "PSIC017", nombre: "Evaluación psicológica en adultos", requisitos: ["PSIC012", "PSIC011"] },
      { semestre: 4, codigo: "PSIC018", nombre: "Psicología de grupos", requisitos: ["PSIC009"] },
      { semestre: 4, codigo: "PSIC019", nombre: "Estadística aplicada", requisitos: ["PSIC014", "PSIC015"] },
      { semestre: 4, codigo: "PSIC020", nombre: "Desarrollo personal e integración IV", requisitos: ["PSIC015"] },
      { semestre: 4, codigo: "CTRAP V", nombre: "Inglés II", requisitos: ["CTRAP IV"] },

      // Semestre 5
      { semestre: 5, codigo: "PSIC021", nombre: "Psicología Organizacional", requisitos: ["PSIC017", "PSIC018"] },
      { semestre: 5, codigo: "PSIC022", nombre: "Psicología Social", requisitos: ["PSIC018"] },
      { semestre: 5, codigo: "PSIC023", nombre: "Métodos cuantitativos de investigación", requisitos: ["PSIC019"] },
      { semestre: 5, codigo: "PSICELEC I", nombre: "Electivo I" },
      { semestre: 5, codigo: "CTRAP VI", nombre: "Inglés III", requisitos: ["CTRAP V"] },
      { semestre: 5, codigo: "CTRAP VII", nombre: "Medio ambiente y desarrollo regional" },

      // Semestre 6
      { semestre: 6, codigo: "PSIC024", nombre: "Psicología clínica I", requisitos: ["PSIC016", "PSIC017"] },
      { semestre: 6, codigo: "PSIC025", nombre: "Psicología educacional I", requisitos: ["PSIC016", "PSIC018"] },
      { semestre: 6, codigo: "PSIC026", nombre: "Gestión de personas", requisitos: ["PSIC021"] },
      { semestre: 6, codigo: "PSIC027", nombre: "Psicología comunitaria", requisitos: ["PSIC022"] },
      { semestre: 6, codigo: "PSIC028", nombre: "Métodos cualitativos de investigación", requisitos: ["PSIC014"] },
      { semestre: 6, codigo: "CTRAP VIII", nombre: "Inglés IV", requisitos: ["CTRAP VI"] },
      { semestre: 6, codigo: "CTRAP IX", nombre: "Salud, autocuidado y desarrollo del estudiante", requisitos: ["CTRAP VII"] },

      // Semestre 7
      { semestre: 7, codigo: "PSIC029", nombre: "Psicología clínica II", requisitos: ["PSIC024"] },
      { semestre: 7, codigo: "PSIC030", nombre: "Psicología educacional II", requisitos: ["PSIC025"] },
      { semestre: 7, codigo: "PSIC031", nombre: "Estrategias de intervención organizacional", requisitos: ["PSIC026"] },
      { semestre: 7, codigo: "PSIC032", nombre: "Estrategias de intervención socio-comunitaria", requisitos: ["PSIC027"] },
      { semestre: 7, codigo: "PSICELEC II", nombre: "Electivo II", requisitos: ["PSICELEC I"] },

      // Semestre 8
      { semestre: 8, codigo: "PSIC033", nombre: "Estrategias de intervención clínica", requisitos: ["PSIC029"] },
      { semestre: 8, codigo: "PSIC034", nombre: "Estrategias de intervención psicoeducativa", requisitos: ["PSIC030"] },
      { semestre: 8, codigo: "PSIC035", nombre: "Seminario I", requisitos: ["PSIC029", "PSIC030", "PSIC031", "PSIC032"] },
      { semestre: 8, codigo: "PSIC036", nombre: "Ética y rol del psicólogo", requisitos: ["PSIC020"] },
      { semestre: 8, codigo: "CTRAP X", nombre: "Emprendimiento e innovación", requisitos: ["CTRAP IX"] },

      // Semestre 9
      { semestre: 9, codigo: "PSIC037", nombre: "Práctica Profesional I", requisitos: ["PSIC035"] },
      { semestre: 9, codigo: "PSIC038", nombre: "Seminario II", requisitos: ["PSIC035"] },

      // Semestre 10
      { semestre: 10, codigo: "PSIC039", nombre: "Práctica Profesional II", requisitos: ["PSIC037"] },
      { semestre: 10, codigo: "PSIC040", nombre: "Examen de título", requisitos: ["PSIC039"] }
    ];

    const malla = document.getElementById("malla");
    const aprobadas = new Set();

    function puedeDesbloquear(ramo) {
      if (!ramo.requisitos) return true;
      return ramo.requisitos.every(req => aprobadas.has(req));
    }

    function renderMalla() {
      malla.innerHTML = "";
      for (let s = 1; s <= 10; s++) {
        const cont = document.createElement("div");
        cont.className = "semestre";
        cont.innerHTML = `<h2>Semestre ${s}</h2>`;
        const delSemestre = ramos.filter(r => r.semestre === s);
        delSemestre.forEach(r => {
          const div = document.createElement("div");
          const desbloqueado = puedeDesbloquear(r);
          div.textContent = `${r.codigo} - ${r.nombre}`;
          div.className = "asignatura";
          if (!desbloqueado && !aprobadas.has(r.codigo)) {
            div.classList.add("bloqueada");
          } else if (aprobadas.has(r.codigo)) {
            div.classList.add("aprobada");
          }
          div.onclick = () => {
            if (!desbloqueado && !aprobadas.has(r.codigo)) return;
            if (aprobadas.has(r.codigo)) {
              aprobadas.delete(r.codigo);
            } else {
              aprobadas.add(r.codigo);
            }
            renderMalla();
          };
          cont.appendChild(div);
        });
        malla.appendChild(cont);
      }
    }

    renderMalla();
  </script>
</body>
</html>
