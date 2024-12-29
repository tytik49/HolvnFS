// Фильмы
const movies = [
  {
    title: "Побег из Шоушенка",
    description: "История Энди Дюфрейна, который борется за свободу.",
    video: "https://www.dropbox.com/s/abc123xyz456/shawshank.mp4?raw=1",
    thumbnail: "images/shawshank.jpg"
  },
  {
    title: "Начало",
    description: "Сложный мир снов и реальности.",
    video: "https://www.dropbox.com/s/def456ghi789/inception.mp4?raw=1",
    thumbnail: "images/inception.jpg"
  }
];

// Сериалы
const series = [
  {
    title: "Дети перемен",
    description: "История подростков, пытающихся найти себя в сложном мире.",
    thumbnail: "images/deti_peremen.jpg",
    episodes: [
      {
        episode: "Серия 1",
        video: "https://drive.google.com/file/d/1CxYKnBuiL841WB-9WOGCd-qKQY62Wo74/preview"
      },
      {
        episode: "Серия 2",
        video: "https://www.dropbox.com/s/jkl456def789/deti_peremen_s01e02.mp4?raw=1"
      }
    ]
  }
];

// Рендер фильмов
const moviesContainer = document.querySelector('#movies .movies-container');
movies.forEach(movie => {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `
    <img src="${movie.thumbnail}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
    <video controls width="100%">
      <source src="${movie.video}" type="video/mp4">
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  `;
  moviesContainer.appendChild(movieElement);
});

// Рендер сериалов
const seriesContainer = document.querySelector('#series .movies-container');
series.forEach(show => {
  const seriesElement = document.createElement('div');
  seriesElement.classList.add('series');
  seriesElement.innerHTML = `
    <img src="${show.thumbnail}" alt="${show.title}">
    <h3>${show.title}</h3>
    <p>${show.description}</p>
    <div class="episodes">
      ${show.episodes
        .map(
          episode => `
        <div class="episode">
          <h4>${episode.episode}</h4>
          <video controls width="100%">
            <source src="${episode.video}" type="video/mp4">
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>
      `
        )
        .join('')}
    </div>
  `;
  seriesContainer.appendChild(seriesElement);
});
