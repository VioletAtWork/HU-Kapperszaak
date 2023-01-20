import React from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {Box,} from "@chakra-ui/react";

export default function KapperDatePicker() {
    const [selected, setSelected] = React.useState(new Date());

    let footerDatePicker = <p>Kies een dag.</p>;
    if (selected) {
        footerDatePicker =
            <Box>
                <p
                    style={{
                        color: 'var(--chakra-colors-gray-500)',
                        fontSize: '0.875rem',   // 14px
                        fontWeight: 400,
                        lineHeight: 1.5,
                        margin: 0,
                    }}
                >
                    Je hebt gekozen voor:
                </p>
                <p
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                    }}
                >
                    {format(selected, 'PP')}
                </p>
            </Box>
        ;
    }
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
            }}
            p={4}
            borderRadius="md"

        >
            <DayPicker
                selectedDays={selected}
                onDayClick={setSelected}
            />
            {footerDatePicker}

        </Box>
    );
}