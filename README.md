# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
http://joxi.ru/52aPGxyCgb9LXm

# Получаем контакт по id
node index.js --action get --id 5
http://joxi.ru/J2bP0kyCgGx3Er

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
http://joxi.ru/Dr8JGD1UJzZVz2

# Удаляем контакт
node index.js --action remove --id=3
http://joxi.ru/Q2KPWb4Cyw99wA