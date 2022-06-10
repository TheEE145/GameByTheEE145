const bundles = {};

const language_change_languages = '\n0 - EN_eu\n1 - RU_ru\n2 - UK_ua\n3 - door';
bundles['EN_eu'] = {
    'money': 'Money',
    'power': 'Power',
    'income': 'Income',

    'rename': 'Rename player',
    'revatar': 'Change avatar',

    'wrongname': 'only latin letters and 0-9, _. and max name length is 16 letters (min 4).',
    'newname': 'write new player name',

    'newlanguage': 'select new language,' + language_change_languages,
    'wrlanguage': 'language not found'
};

bundles['RU_ru'] = {
    'money': 'Деньги',
    'power': 'Сила',
    'income': 'Прибуток',

    'rename': 'Переименновать игрока',
    'revatar': 'Изменить аватар',

    'wrongname': 'только латинские буквы, 0-9, _ и длинна имени не должно перевышать 16 или быть меньше 4.',
    'newname': 'напишите новое имя игрока',
    
    'newlanguage': 'выберите новый язык,' + language_change_languages,
    'wrlanguage': 'язык не найден'
};

bundles['UK_ua'] = {
    'money': 'Гроші',
    'power': 'Сила',
    'income': 'Прибуток',

    'rename': 'Перейменувати гравця',
    'revatar': 'Змінити аватар',

    'wrongname': 'тільки англійські букви, 0-9, і "_" и довжинна імени має бути більше ніж 4 і меньше ніж 16',
    'newname': 'напишіть нове ім`я гравця',
    
    'newlanguage': 'виберіть нову мову,' + language_change_languages,
    'wrlanguage': 'мова не знайдена'
};

bundles['door'] = {
    'money': 'door',
    'power': 'door',
    'income': 'door',
    
    'rename': 'door',
    'revatar': 'door',

    'wrongname': 'door',
    'newname': 'door',

    'newlanguage': 'door' + language_change_languages,
    'wrlanguage': 'door'
};