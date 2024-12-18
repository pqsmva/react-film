export const api_key = '4255de84'


export const getByName = async (name) => {
    const fetchData = await fetch(`https://omdbapi.com/?s=${name}&apikey=${api_key}`)
    const jsonData = await fetchData.json()

    return jsonData
}