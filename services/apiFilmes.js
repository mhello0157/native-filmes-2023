import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjI5NDEzMWE3NTdlZmY5NDViMTMwZWZmNWY5NjdmNyIsInN1YiI6IjY0ZjY2NTExYWM0MTYxMDBjNDk3YTEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wIvKox6ax-VIQ0VSGvMvyTI64P_YVZzxPIKLMYl93EU '
    }
})

export default apiFilmes