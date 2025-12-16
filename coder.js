// Mapas base
const BASE =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789. !?";

const ARCANO =
  "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟ";

const SIB =
  "☠⚰⚱⚵⚶⚷☣☥☯⚛⚡⛧⛨⛩☢☨☩✞✟✠✡☄⚙⚗⚚⚒⚔⚜⚑⚐☘☙☁☂☃❄❅❆✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂";

const B64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Utils
const utf8ToB64 = s =>
  btoa(unescape(encodeURIComponent(s)));

const b64ToUtf8 = s =>
  decodeURIComponent(escape(atob(s)));

// Etapas
const txtToArcano = txt =>
  [...txt].map(c => ARCANO[BASE.indexOf(c) || 0]).join("");

const arcanoToTxt = arc =>
  [...arc].map(c => BASE[ARCANO.indexOf(c) || 0]).join("");

const b64ToSib = b64 =>
  [...b64].map(c => SIB[B64.indexOf(c) || 0]).join("");

const sibToB64 = sib =>
  [...sib].map(c => B64[SIB.indexOf(c) || 0]).join("");

const xorShift = txt => {
  let out = "";
  for (let i = 0; i < txt.length; i++) {
    out += String.fromCharCode(
      txt.charCodeAt(i) ^ ((i * 31) % 255)
    );
  }
  return out;
};

const corromper = txt =>
  txt.replace(/./g, (c, i) =>
    c + (i % 17 === 0 ? "\u200B" : "")
  );

const limpar = txt =>
  txt.replace(/[\u200B\u200C\u200D]/g, "");

// API
export function code(text) {
  return corromper(
    utf8ToB64(
      xorShift(
        b64ToSib(
          utf8ToB64(
            txtToArcano(text)
          )
        )
      )
    )
  );
}

export function decode(text) {
  return arcanoToTxt(
    b64ToUtf8(
      sibToB64(
        xorShift(
          b64ToUtf8(
            limpar(text)
          )
        )
      )
    )
  );
                                                   }
