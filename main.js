import { code, decode } from "./coder.js";

const $ = id => document.getElementById(id);

const input  = $("input");
const output = $("output");

$("encode").onclick = () => run(code);
$("decode").onclick = () => run(decode);

$("copy").onclick = async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    console.log("Copiado!");
  } catch {
    console.error("Falha ao copiar");
  }
};

function run(fn) {
  try {
    output.textContent = fn(input.value);
  } catch (e) {
    output.textContent = "ERR: " + e.message;
  }
}
