import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.bgColor || null};
  margin: 30px auto;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  justify-content: ${props => props.justify || 'left'};
  align-items: ${props => props.align || 'center'};
  width: ${props => props.width || '100%'};
  text-align: ${props => props.testAlign || 'left'};
  /* border: 1px solid red; */
`

export const Box = styled.div`
    background-color: lightgrey;
    border-radius: 5px;
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    margin: ${props => props.margin || '20px 0'};
    padding: ${props => props.padding || '15px'};
    /* border: 1px solid grey; */
`

export const SubHeadlineH2 = styled.h2`
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    /* text-transform: ${props => props.textTransform || 'uppercase'};  */
`

export const Bold = styled.strong`
    font-weight: 700;
`

export const BodyText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
`