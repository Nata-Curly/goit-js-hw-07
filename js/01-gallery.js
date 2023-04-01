import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//      {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
const listItems = document.querySelector('.gallery');

(function () {
    const markup = galleryItems.map(({ preview, original, description }) =>
`<li li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`).join('');
    listItems.insertAdjacentHTML('beforeend', markup);
})()

listItems.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    // console.log(evt.target);
    evt.preventDefault();

const imageSource = evt.target.dataset.source;
    
const instance = basicLightbox.create(`
        <img
            src="${imageSource}"
        />
`, {onShow: () => {
    window.addEventListener('keydown', onCloseByEsc);
},  onClose: () => {
        window.addEventListener('keydown', onCloseByEsc);
    }});
instance.show();

function onCloseByEsc(evt) { 
    if (evt.code === "Escape") {
        instance.close();
        }
    }
}



// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на ul.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >, и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// < li class="gallery__item" >
//     <a class="gallery__link" href="large-image.jpg">
//         <img
//             class="gallery__image"
//             src="small-image.jpg"
//             data-source="large-image.jpg"
//             alt="Image description"
//         />
//     </a>
// </ >

//     Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно.У библиотеки basicLightbox есть метод для программного закрытия модального окна.