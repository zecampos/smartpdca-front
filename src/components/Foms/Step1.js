import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  TextField,
} from '@material-ui/core';

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

export default function Foms({
  handleInputChange,
  conjuntos,
  matriz,
  fase,
  values,
}) {
  const [link, setLink] = useState([]);

  const classes = useStyles();
  const links = link.map((item, i) => {
    if (!item) return null;
    return (
      <TextField
        value={item}
        id="outlined-basic"
        label="Link"
        variant="outlined"
        key={i}
      />
    );
  });
  return (
    <>
      <Grid style={{ maxWidth: '100%' }} container spacing={4}>
        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Conjunto</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.conjunto}
              onChange={value =>
                handleInputChange('conjunto', value.target.value)
              }
            >
              {conjuntos.map(item => (
                <MenuItem key={item.nome} value={item.nome}>
                  {item.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label1">Matriz</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select1"
              value={values.matriz}
              onChange={value =>
                handleInputChange('matriz', value.target.value)
              }
            >
              {matriz.map(item => (
                <MenuItem key={item.nome} value={item.nome}>
                  {item.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.formControl}>
            <InputLabel>Fase</InputLabel>
            <Select
              value={values.fase}
              onChange={value => handleInputChange('fase', value.target.value)}
            >
              {fase.map(item => (
                <MenuItem key={item.nome} value={item.nome}>
                  {item.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              value={values.descricao}
              onChange={value =>
                handleInputChange('descricao', value.target.value)
              }
              id="outlined-basic"
              label="O que deve ser Feito?"
              variant="outlined"
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
