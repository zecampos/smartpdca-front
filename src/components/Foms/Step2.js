import React from 'react';
import 'date-fns';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  TextField,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import { ptBR } from 'date-fns/locale';

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

export default function Step2({
  handleInputChange,
  values,
  dataConclusaoFn,
  situacao,
}) {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <Grid style={{ maxWidth: '100%' }} container spacing={2}>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <TextField
            value={values.nome_responsavel}
            onChange={value =>
              handleInputChange('nome_responsavel', value.target.value)
            }
            id="outlined-basic-12"
            label="Responsável"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Situação Responsavel
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            value={values.situacao_responsavel}
            labelWidth={labelWidth}
            onChange={value =>
              handleInputChange('situacao_responsavel', value.target.value)
            }
          >
            {situacao.map(item => (
              <MenuItem key={item.nome} value={item.nome}>
                {item.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
            <KeyboardDatePicker
              inputVariant="outlined"
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              id="date-picker-inline"
              label="Data Conclusão"
              value={values.data_conclusao_responsavel}
              onChange={value =>
                dataConclusaoFn(value, 'data_conclusao_responsavel')
              }
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <TextField
            value={values.observacao_responsavel}
            onChange={value =>
              handleInputChange('observacao_responsavel', value.target.value)
            }
            id="outlined-basic-13"
            label="Observação Responsável"
            variant="outlined"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

Step2.protoTypes = {
  values: PropTypes.object,
};
