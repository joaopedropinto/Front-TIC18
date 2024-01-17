// Função para buscar notícias de uma API pública
const getNewsData = async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=science&apiKey=b6d0a095694e47688abb7b023ccd1aff&language=pt');
    const data = await response.json();
    return data.articles.slice(0, 5).map((article) => article.title);
  } catch (error) {
    console.error('Erro ao obter notícias:', error);
    return [];
  }
};
// Função para buscar a previsão do tempo de uma API pública
const getWeatherData = async () => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=weather&apiKey=b6d0a095694e47688abb7b023ccd1aff&language=pt');
    const data = await response.json();
    return data.articles.slice(0, 5).map((article) => article.title);
  } catch (error) {
    console.error('Erro ao obter previsão do tempo:', error);
    return 'Não disponível';
  }
};

// Função para preencher o quadro de notícias
const fillNews = async () => {
  const newsContainer = document.querySelector('.container-news');
  if (newsContainer) {
    const newsData = await getNewsData();
    newsData.forEach((newsItem) => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('news');
      newsElement.innerHTML = `<h4>${newsItem}</h4>`;
      newsContainer.appendChild(newsElement);
    });
  }
};

// Função para preencher o quadro de previsão do tempo
const fillWeather = async () => {
  const weatherContainer = document.querySelector('.container-results');
  if (weatherContainer) {
    const weatherData = await getWeatherData();
    weatherData.forEach((weatherItem) => {
      const weatherElement = document.createElement('div');
      weatherElement.classList.add('results');
      weatherElement.innerHTML = `<h4>${weatherItem}</h4>`;
      weatherContainer.appendChild(weatherElement);
    })
  }
};

// Chame as funções para preencher os quadros quando a página carregar
window.addEventListener('load', () => {
  fillNews();
  fillWeather();
});
