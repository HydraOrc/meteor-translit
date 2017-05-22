var options = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  ґ: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  і: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ы: 'y',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  ї: 'yi',
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

var keys = Object.keys(options).sort(function sortObjectKeys(a, b) { return b.length - a.length; });

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
