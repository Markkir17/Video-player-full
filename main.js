const avatar = {
  name: 'Аватар',
  link: 'avatar.html',
  source: 'https://m.media-amazon.com/images/S/pv-target-images/eb7e43681e6fbd29e9525357604ff9fb32a753cef1974d4a0c626cadf2bc790a._UR1920,1080_SX720_FMjpg_.jpg'
};
const titanik = {
  name: 'Титаник',
  link: 'titanik.html',
  source: 'http://mtsby.server-img.lfstrm.tv/images/archive-images/media/96/88/968863b66daae1c34a47aaee160bb904.jpg'
  
};
const odiniodin = {
  name: '1+1',
  link: '1+1.html',
  source: 'https://storage.yandexcloud.net/node-v1-s1/src/V1_di4DVkaCv0W2ZczMUDAzZw.jpeg'
  
};
const avatar2 = {
  name: 'Аватар: Путь воды',
  link: 'avatar2.html',
  source: 'https://a.d-cd.net/hGdA7cIgc37dy2wGLleuIDqVv4A-1920.jpg'
  
};
const boichklub = {
  name: 'Бойцовский клуб',
  link: 'boichovskiikiub.html',
  source: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67a40ed84d5f4d15d117f7b1_67a4169d89a16f5704317c61/scale_1200'
  
};
const butterfly = {
  name: 'Эффект бабочки',
  link: 'butterfly.html',
  source: 'http://images-s.kinorium.com/movie/poster/232162/w1500_50294606.jpg'
  
};
const django = {
  name: 'Джанго: освобождённый',
  link: 'django.html',
  source: 'http://avatars.mds.yandex.net/get-vthumb/1585807/69516e33c7c00f3445775205b1b157e3/800x450'
  
};
const oddindoma = {
  name: 'Один дома',
  link: 'odindoma.html',
  source: 'https://avatars.mds.yandex.net/get-vthumb/1344725/1d0fd13062c5e6187689cf08b1ad5f22/564x318_1'
  
};
const odindoma2 = {
  name: 'Один дома 2',
  link: 'odindoma2.html',
  source: 'https://cdn.culture.ru/images/2d64b183-111c-52c0-b3cb-f08d569d9e80'
  
};
const tachki = {
  name: 'Тачки',
  link: 'tachki.html',
  source: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/7db308df-b062-4234-96e7-18e26d6c1025/3840x'
  
};
const tachki2 = {
  name: 'Тачки 2',
  link: 'tachki2.html',
  source: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/6d7b1173-8c8f-4671-96ba-cf0aa1fc9491/3840x',
};
const tachki3 = {
  name: 'Тачки 3',
  link: 'tachki3.html',
  source: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/18936975-b827-4ff6-a85f-f45f5f7a536f/3840x'
  
};
const igraraka = {
  name: 'Игра в кальмара',
  link: 'igrakrabafull.html',
  source: 'https://pic.rutubelist.ru/video/2024-12-26/d5/fb/d5fbfe7694e8a9a22dc324d2bb38bf07.jpg'
  
};
const djon1 = {
  name: 'Джон Уик',
  link: 'djon1.html',
  source: 'https://pic.rutubelist.ru/video/2025-01-22/98/fa/98fa2cecb3c8c6c4052821f756475394.jpg'
  
};
const djon2 = {
  name: 'Джон Уик 2',
  link: 'djon2.html',
  source: 'http://images-s.kinorium.com/movie/poster/1488316/w1500_50291614.jpg'
  
};
const djon3 = {
  name: 'Джон Уик 3',
  link: 'djon3.html',
  source: 'http://images-s.kinorium.com/movie/poster/1606958/w1500_51625054.jpg'
  
};
const djon4 = {
  name: 'Джон Уик 4',
  link: 'djon4.html',
  source: 'https://images-s.kinorium.com/movie/poster/2055679/w1500_51825399.jpg'
  
};
const arr = [avatar, titanik,odiniodin,avatar2,boichklub,butterfly,django,igraraka,djon1,djon2,djon3,djon4,tachki,
  tachki2,tachki3

];
function start() {
  const arr2 = [];
  if (document.getElementById('search').value) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].name
          .toLowerCase()
          .indexOf(
            String(document.getElementById('search').value).toLowerCase()
          ) != -1
      ) {
        arr2.push(arr[i]);
      }
    }
  }
  const html = arr2
    .map((item) => `<li><a href="${item.link}"><img class="movielist" src="${item.source}" alt="${item.name}"></a></li>`)
    .join('');
  document.querySelector('ul').innerHTML = html;
}
