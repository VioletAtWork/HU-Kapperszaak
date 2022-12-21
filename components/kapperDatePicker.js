import {Box} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

const KapperDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Box>

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </Box>);
};

export default KapperDatePicker