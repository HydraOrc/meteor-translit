module = function(map) {
  var keys = Object.keys(map).sort(function(a, b) {
    return b.length - a.length
  });

  function peek(str) {
    for (var i = 0; i < keys.length; i++) {
      if (startsWith(keys[i], str)) return keys[i]
    }
  }

  return function(str) {
    var out = ''
    while(str) {
      var key = peek(str)
      if (key) {
        out += map[key]
        str = str.slice(key.length)
      } else {
        out += str[0]
        str = str.slice(1)
      }
    }
    return out
  }
}

function startsWith(start, str) {
  for (var i = 0; i < start.length; i++) {
    if (start[i] != str[i]) return false
  }
  return true
}

translit = module({
  'А': 'A',
  'а': 'a',
  'Б': 'B',
  'б': 'b',
  'В': 'V',
  'в': 'v',
  'Г': 'G',
  'г': 'g',
  'Ґ': 'G',
  'ґ': 'g',
  'Д': 'D',
  'д': 'd',
  'Е': 'E',
  'е': 'e',
  'Ё': 'E',
  'ё': 'e',
  'Ж': 'Zh',
  'ж': 'zh',
  'З': 'Z',
  'з': 'z',
  'И': 'I',
  'и': 'i',
  'І': 'I',
  'і': 'i',
  'Й': 'Y',
  'й': 'y',
  'К': 'K',
  'к': 'k',
  'Л': 'L',
  'л': 'l',
  'М': 'M',
  'м': 'm',
  'Н': 'N',
  'н': 'n',
  'О': 'O',
  'о': 'o',
  'П': 'P',
  'п': 'p',
  'Р': 'R',
  'р': 'r',
  'С': 'S',
  'с': 's',
  'Т': 'T',
  'т': 't',
  'У': 'U',
  'у': 'u',
  'Ф': 'F',
  'ф': 'f',
  'Х': 'h',
  'х': 'h',
  'Ц': 'c',
  'ц': 'c',
  'Ч': 'Ch',
  'ч': 'ch',
  'Ш': 'Sh',
  'ш': 'sh',
  'Щ': 'Sch',
  'щ': 'sch',
  'Ь': '',
  'ь': '',
  'Ы': 'Y',
  'ы': 'y',
  'Ъ': '',
  'ъ': '',
  'Э': 'E',
  'э': 'e',
  'Ю': 'Yu',
  'ю': 'yu',
  'Я': 'Ya',
  'я': 'ya',
  'ї': 'yi',
  'Ї': 'Yi',
  'Є': 'Ye',
  'є': 'ye',
  ' ': '_',
  '?': '',
  '!': '',
  ':': '',
  '"': '',
  '`': '',
  '’': '',
  '\'': '',
  '»': '',
  '«': '',
  '“': '',
  '”': '',
  ',': '',
  '. ': '_',
  '.': '',
  ' - ': '_',
  ' – ': '_',
  ' — ': '_',
  '/': '_',
  ' (': '_',
  ') ': '_',
  '(': '',
  ')': ''
});
