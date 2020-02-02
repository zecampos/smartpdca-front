import React from 'react';
import 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    alignmentBaseline: 'center',
    heigth: '10vh',
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Step5({ handleInputChange, values }) {
  const classes = useStyles();

  return (
    <Grid style={{ maxWidth: '100%' }} container spacing={2}>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            value={values.nome_informado}
            onChange={value =>
              handleInputChange('nome_informado', value.target.value)
            }
            id="outlined-basic-2"
            label="Informado"
            variant="outlined"
          />
        </FormControl>
      </Grid>

      <Grid item xs={8}>
        <FormControl className={classes.formControl}>
          <TextField
            value={values.observacao_informado}
            onChange={value =>
              handleInputChange('observacao_informado', value.target.value)
            }
            id="outlined-basic-1"
            label="Observação informado"
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
