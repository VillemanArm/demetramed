# Demetramed

## Описание проекта

Это frontend часть проекта по исследованию фотографий клеточных структур на наличие патологий с применением нейросетевого анализа.

Фрэймворк Quasar был выбран потому что он предоставляем библиотеку сложных настраиваемых компонентов использование которых сократит время разработки.

## Запуск проекта

1. Установить последнюю стабильную (LTS) версию Node.js. https://nodejs.org/en/download/package-manager

2. Скачать файлы репозитория из ветки master

3. Установить зависимости проекта

```bash
npm install
```

4. Для просмотра проекта и внесения изменений запустить сервер разработки

```bash
npm run dev
```

5. Для сборки запустить команду

```bash
npm run build
```

## Особенности проекта

Проект имеет модульную архитектуру со следующими слоями:

1. layout - универсальная разметка для нескольких страниц, принимающая страницы как содержимое.
2. page - страница сайта на которую настроен роутинг содержит разметку для одного или нескольких модулей, но не содержит логику.
3. module - крупный самостоятельный элемент интерфейса, который содержит логику и имеет отдельное хранилище, данные которого используются в компонентах этого модуля.
4. component - небольшой элемент модуля, предназначенный для выполнения части его логики.
5. ui - универсальные элементы интерфейса, которые могут быть использованы в любом месте проекта. Бизнес логику не содержат, но возвращают наверх события на которые можно настроить выполнение бизнес логики. События и принимаемые параметры описаны в комментариях к каждому ui компоненту.

Для корректного отображения изображений в собранном проекте их надо сохранять в папке src/assets/img/, а пути к ним указывать через ~assets/img/...

## Deploy проекта

Production сборка проекта находится в папке dist/spa/. Она будет работать при расположении на любом домене при условии, что этот домен будет указан в CORS настройках сервера.

При смене домена сервера нужно изменить переменную serverURL в файле dist/spa/settings.js

Если spa будет находиться не в корневой директории домена, нужно прописать publicPath в файле dist/spa/settings.js
