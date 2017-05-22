var options = {
  А: 'A',
  а: 'a',
  Б: 'B',
  б: 'b',
  В: 'V',
  в: 'v',
  Г: 'G',
  г: 'g',
  Ґ: 'G',
  ґ: 'g',
  Д: 'D',
  д: 'd',
  Е: 'E',
  е: 'e',
  Ё: 'E',
  ё: 'e',
  Ж: 'Zh',
  ж: 'zh',
  З: 'Z',
  з: 'z',
  И: 'I',
  и: 'i',
  І: 'I',
  і: 'i',
  Й: 'Y',
  й: 'y',
  К: 'K',
  к: 'k',
  Л: 'L',
  л: 'l',
  М: 'M',
  м: 'm',
  Н: 'N',
  н: 'n',
  О: 'O',
  о: 'o',
  П: 'P',
  п: 'p',
  Р: 'R',
  р: 'r',
  С: 'S',
  с: 's',
  Т: 'T',
  т: 't',
  У: 'U',
  у: 'u',
  Ф: 'F',
  ф: 'f',
  Х: 'h',
  х: 'h',
  Ц: 'c',
  ц: 'c',
  Ч: 'Ch',
  ч: 'ch',
  Ш: 'Sh',
  ш: 'sh',
  Щ: 'Sch',
  щ: 'sch',
  Ы: 'Y',
  ы: 'y',
  Э: 'E',
  э: 'e',
  Ю: 'Yu',
  ю: 'yu',
  Я: 'Ya',
  я: 'ya',
  ї: 'yi',
  Ї: 'Yi',
  Є: 'Ye',
  є: 'ye',
  _: '-',
  '-': '-',
  ' ': '-',
  '. ': '-',
  ' - ': '-',
  ' – ': '-',
  ' — ': '-',
  '/': '-',
  ' (': '-',
  ') ': '-'
};

var keys = Object.keys(options).sort((a, b) => (b.length - a.length));

var safeCharacterRegExp = /[A-Za-z0-9]/;

var startsWith = function startsWith(start, str) {
  for (var i = 0; i < start.length; i++) {
    if (start[i] !== str[i]) {
      return false;
    }
  }

  return true;
};

var peek = function peek(str) {
  for (var i = 0; i < keys.length; i++) {
    if (startsWith(keys[i], str)) {
      return keys[i];
    }
  }

  return false;
};

translit = function translit(str) {
  var result = '';

  var process = sanitizeString(str);

  while (process) {
    var key = peek(process);

    if (key) {
      result += options[key];
      process = process.slice(key.length);
    } else {
      if (safeCharacterRegExp.test(process[0])) {
        result += process[0];
      }

      process = process.slice(1);
    }
  }

  return result;
}
