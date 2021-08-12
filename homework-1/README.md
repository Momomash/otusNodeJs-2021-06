#Description
Создание NPM пакета для показа дерева

Цель:

Написать функцию для показа древовидной структуры. Можно выполнять одну из двух предложенных примеров задач.

Пример данных: { "name": 1, "items": [{ "name": 2, "items": [{ "name": 3 }, { "name": 4 }] }, { "name": 5, "items": [{ "name": 6 }] }] }
Пример запуска программы: npm start 
1 |-- 2 | |-- 3 | |-- 4 |-- 5 |-- 6

Написать утилиту tree для удобного показа структуры файлов директории. Утилита должна принимать на вход обязательный аргумент — путь до директории для показа ее структуры. Также она должна понимать опцию глубину показа --depth, -d с числом в качестве значения. 
Пример (bash tree Node.js -d 2)
 
 Node.js |-- cluster | |-- index.js |-- domain | |-- error.js | |-- flow.js | |-- run.js |-- errors | |-- counter.js |-- try-catch.js |-- worker |-- index.js

4 directories, 7 files

#How to
task 1: ```node task1.js```

task 2: ```node task2.js <AnyPath> <depth(optional)> ```
