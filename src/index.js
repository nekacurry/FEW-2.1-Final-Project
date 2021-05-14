// Functions

function getAPODByDate(apiKey, date) {
  const path = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
  return getAPOD(path)

}


async function getAPOD(path) {
  
  try {
      // try something
      const res = await fetch(path)
      const json = await res.json()
      const APODData = {
          title: json.title,
          date: json.date,
          explanation: json.explanation,
          url: json.url
      }
      return APODData
  } catch(err) {
      // handle errors
      return err
  }

}

export {
  getAPODByDate
}