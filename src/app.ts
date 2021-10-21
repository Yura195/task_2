const axios = require('axios');


/**
   * Получение запроса при помощи async await
   * @return получение строки запроса
   */
const getJokeWithAsyncAwait = async ():Promise<string> => {
	const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
	if (response.data.setup === undefined) {
		return '';
	}
	return response.data.setup;
};

/**
   * Получение запроса при помощи then catch
   * @return получение строки запроса
   */
const getJokeWithThenCatch = ():Promise<string> => {
	return axios
		.get('https://v2.jokeapi.dev/joke/Any')
		.then((response) => {
			if (response.data.setup === undefined) {
				return '';
			}
			return response.data.setup;
		})
		.catch((err) => console.log(err));
};

const jokeAsyncAwait = getJokeWithAsyncAwait().then((response) => {
	console.log(response);
});

const jokeThenCatch = getJokeWithThenCatch().then((response) => {
	console.log(response);
});

export {getJokeWithAsyncAwait,getJokeWithThenCatch}