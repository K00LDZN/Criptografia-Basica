import {code, decode} from './coder.js';

    const $ = id => document.getElementById(id);

    const inp = $("code");
    const out = $("result");

    $("codebtn").onclick = () => {
      try {
        out.textContent = code(inp.value);
      } catch (e) {
        out.textContent = "ERR: " + e;
      }
    };

    $("decodebtn").onclick = () => {
      try {
        out.textContent = decode(inp.value);
      } catch (e) {
        out.textContent = "ERR: " + e;
      }
    };
    $("copy").onclick = async ()=>{
  try {
    await navigator.clipboard.writeText(out.textContent);
    console.log('Copiado!');
  } catch (err) {
    console.error('Falha ao copiar:', err);
  }
}