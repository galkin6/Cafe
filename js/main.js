

function init() {
 // Создание карты.
 let map = new ymaps.Map('map', {
  center: [50.86068, 39.083165],

  zoom: 17

 });

 let placemark = new ymaps.Placemark([50.86068, 39.083165], {}, {
  iconLayout: 'default#image',
  iconImageHref: '/image/Marker-Map.svg',
  iconImageSize: [20, 20],
  iconImageOffset: [0, 0]
 });

 map.geoObjects.add(placemark);



 map.controls.remove('geolocationControl'); // удаляем геолокацию
 map.controls.remove('searchControl'); // удаляем поиск
 map.controls.remove('trafficControl'); // удаляем контроль трафика
 map.controls.remove('typeSelector'); // удаляем тип
 map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
 map.controls.remove('zoomControl'); // удаляем контрол зуммирования
 map.controls.remove('rulerControl'); // удаляем контрол правил
}

ymaps.ready(init);
