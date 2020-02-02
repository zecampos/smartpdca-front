import React from 'react';
import PropTypes from 'prop-types';

import { Form, InputGroup } from 'react-bootstrap';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      isNumericString
      prefix=""
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Step6({ handleInputChange, values }) {
  return (
    <Grid style={{ maxWidth: '100%' }} container spacing={2}>
      <Grid item xs={2}>
        <TextField
          label="Receita Prevista"
          value={values.receita_prevista}
          onChange={value =>
            handleInputChange('receita_prevista', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Despesa Prevista"
          value={values.despesa_prevista}
          onChange={value =>
            handleInputChange('despesa_prevista', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Saldo Previsto"
          value={values.saldo_previsto}
          onChange={value =>
            handleInputChange('saldo_previsto', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Receita Realizada"
          value={values.receita_realizada}
          onChange={value =>
            handleInputChange('receita_realizada', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Despesa Realizada"
          value={values.despesa_realizada}
          onChange={value =>
            handleInputChange('despesa_realizada', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Saldo Realizado"
          value={values.saldo_realizado}
          onChange={value =>
            handleInputChange('saldo_realizado', value.target.value)
          }
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
            inputComponent: NumberFormatCustom,
          }}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
