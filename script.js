const units = {
  segundo: {
    label: "Segundo",
    factor: 1
  },
  minuto: {
    label: "Minuto",
    factor: 60
  },
  hora: {
    label: "Hora",
    factor: 3600
  },
  dia: {
    label: "Dia",
    factor: 86400
  },
  semana: {
    label: "Semana",
    factor: 604800
  }
};

const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const convertButton = document.getElementById("convertButton");
const clearButton = document.getElementById("clearButton");
const result = document.getElementById("result");

function formatNumber(value) {
  if (Number.isInteger(value)) {
    return value.toString();
  }

  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 6
  });
}

function showError(message) {
  result.className = "result error";
  result.textContent = message;
}

function convert() {
  const rawValue = valueInput.value.trim();

  if (rawValue === "") {
    showError("Digite um valor.");
    return;
  }

  const value = Number(rawValue.replace(",", "."));

  if (Number.isNaN(value)) {
    showError("Digite um valor numérico válido.");
    return;
  }

  if (value < 0) {
    showError("Digite um valor positivo.");
    return;
  }

  const from = fromSelect.value;
  const to = toSelect.value;
  const converted = (value * units[from].factor) / units[to].factor;
  const fromLabel = units[from].label.toLowerCase();
  const toLabel = units[to].label.toLowerCase();

  result.className = "result";
  result.textContent = `${formatNumber(value)} ${fromLabel}(s) = ${formatNumber(converted)} ${toLabel}(s)`;
}

function clearForm() {
  valueInput.value = "";
  fromSelect.value = "segundo";
  toSelect.value = "minuto";
  result.className = "result";
  result.textContent = "";
  valueInput.focus();
}

convertButton.addEventListener("click", convert);
clearButton.addEventListener("click", clearForm);
valueInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});