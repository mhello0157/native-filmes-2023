import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}?`).then(resultado => {
            setFilme(resultado.data)
        })
    }, [])

    return (
<>
        <Card> 
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">{item.overview}</Text>
          </Card.Content>
        </Card>
        <Card> 
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">{item.overview}</Text>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">{item.overview}</Text>
          </Card.Content>
        </Card>
</>
    )
}

export default FilmesDetalhes