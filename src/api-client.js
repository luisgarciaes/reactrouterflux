const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e1d3c6828d51457ab756b037debea05c&format=json';

function getMusicData() {
    return fetch(URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.artists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[0]['#text']
            }
        }))
        .catch(error => console.log(error.toString()))
}

export { getMusicData }
