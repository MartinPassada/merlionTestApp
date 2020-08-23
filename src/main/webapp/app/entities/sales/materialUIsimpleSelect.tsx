import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SalesUpdate from './index'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [State, setState] = React.useState(props.value);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setState(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="stateLabel"
                    id="sales-state"
                    value={State}
                    onChange={handleChange}
                >
                    <MenuItem value={'IN_CHARGE'}>IN_CHARGE</MenuItem>
                    <MenuItem value={'SHIPPED'}>SHIPPED</MenuItem>
                    <MenuItem value={'DELIVERED'}>DELIVERED</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
