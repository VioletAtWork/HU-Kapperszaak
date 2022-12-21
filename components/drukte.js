import React, { useState, useEffect } from 'react'
import * as d3 from 'd3';
import data from '../MachineLearning/JupyterNotebook/submission.csv';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    Button, Container, Text
} from '@chakra-ui/react'

const Drukte = () => {
    useEffect(() => {
        d3.csv(data, function(data) { console.log(data); });
    }, []);
    return (
        <div>

        </div>
    )
}

export default Drukte