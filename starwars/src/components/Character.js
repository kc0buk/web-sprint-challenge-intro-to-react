// Write your Character component here
import React from 'react'
import { Box, SubHeadlineH2, Bold, BodyText } from '../styles/styles'

const Character = (props) => {
    const { info } = props

    return (
        <Box width='40%'>
        <SubHeadlineH2>{info.name}</SubHeadlineH2>
        <BodyText><Bold>Born: </Bold>{info.birth_year}</BodyText>
        <BodyText><Bold>Height: </Bold>{info.height}</BodyText>
        <BodyText><Bold>Mass: </Bold>{info.mass}</BodyText>
        </Box>
    )
}

export default Character