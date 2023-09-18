import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)
        })
    }, [])

    return (
        <Text>Id: {route.params.id} </Text>
    )
}

export default FilmesDetalhes