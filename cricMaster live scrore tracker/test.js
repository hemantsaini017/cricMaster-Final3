const btn = document.getElementById("btn");
const scorepara = document.getElementById("score");

btn.addEventListener("click", async () => {
  const url = 'https://cricket-live-data.p.rapidapi.com/series';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '62f2f57900msh0eefddfa08fa5cdp1f2ea3jsn145105238fa8',
      'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
    }
  };

  try {
    scorepara.textContent = "Fetching cricket series...";
    const response = await fetch(url, options);
    const data = await response.json();

    const seriesList = data.results || [];

    if (seriesList.length === 0) {
      scorepara.textContent = "No series found.";
      return;
    }
    const topSeries = seriesList.slice(0, 3).map(s => s.series_name).join(" | ");
    scorepara.textContent = `Top Series: ${topSeries}`;
  } 
  
  catch(error) {
    console.error(error);
    scorepara.textContent = "Failed to fetch series.";
  }
});


