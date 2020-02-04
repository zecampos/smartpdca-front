import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Fab,
  Grid,
  CircularProgress,
} from '@material-ui/core';

import BackIcon from '@material-ui/icons/ArrowBackIosOutlined';

import Check from '@material-ui/icons/Check';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import axios from 'axios';

import Step1 from '../Foms/Step1';
import Step2 from '../Foms/Step2';
import Step3 from '../Foms/Step3';
import Step4 from '../Foms/Step4';
import Step5 from '../Foms/Step5';
import Step6 from '../Foms/Step6';
import Step7 from '../Foms/Step7';
import { sendDate } from '../../utils/parseDate';

const url = 'http://localhost:3333/';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  divLoading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  divLoading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
  },
}));

function getSteps() {
  return [
    'Informações Gerais',
    'Dados Responsavel',
    'Dados Aprovador',
    'Dados Contador',
    'Dados Informado',
    'Informações Financeira',
    'Arquivos & Links',
  ];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [links, setLinks] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    conjunto: '',
    fase: '',
    matriz: '',
    descricao: '',
    link_principal: '',
    nome_responsavel: '',
    situacao_responsavel: '',
    observacao_responsavel: '',
    data_conclusao_responsavel: new Date(),
    nome_aprovador: '',
    situacao_aprovador: '',
    observacao_aprovador: '',
    data_conclusao_aprovador: new Date(),
    nome_contador: '',
    situacao_contador: '',
    observacao_contador: '',
    data_conclusao_contador: new Date(),
    nome_informado: '',
    observacao_informado: '',
    receita_prevista: 0,
    despesa_prevista: 0,
    saldo_previsto: 0,
    receita_realizada: 0,
    despesa_realizada: 0,
    saldo_realizado: 0,
  });
  const conjuntos = [
    {
      nome: 'Programa',
    },
    {
      nome: 'Projeto',
    },
    {
      nome: 'Processo',
    },
    {
      nome: 'Plano/Etapa',
    },
  ];
  const matriz = [
    {
      nome: 'Saude & Segurança',
    },
    {
      nome: 'Redação',
    },
    {
      nome: 'Eventos',
    },
    {
      nome: 'MKT',
    },
    {
      nome: 'Vendas',
    },
    {
      nome: 'Ambiental',
    },
    {
      nome: 'Patrimonial',
    },
    {
      nome: 'Trabalhista',
    },
    {
      nome: 'Fiscal',
    },
    {
      nome: 'Financeiro',
    },
  ];
  const fase = [
    {
      nome: 'Planejamento',
    },
    {
      nome: 'Execucão',
    },
    {
      nome: 'Controle/Verificação',
    },
    {
      nome: 'Ajuste/Aprimoramento',
    },
  ];
  const situacao = [
    {
      id: 0,
      nome: 'Sem Ação',
    },
    {
      id: 1,
      nome: 'Em Execução',
    },
    {
      id: 2,
      nome: 'Aguardando Terceiro',
    },
    {
      id: 3,
      nome: 'Finalizado',
    },
  ];

  function handleInputChange(name, value) {
    setValues({ ...values, [name]: value });
  }
  function dataConclusaoFn(nextState, name) {
    setValues({
      ...values,
      [name]: nextState,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    values.data_conclusao_aprovador = sendDate(values.data_conclusao_aprovador);
    values.data_conclusao_contador = sendDate(values.data_conclusao_contador);
    values.data_conclusao_responsavel = sendDate(
      values.data_conclusao_responsavel
    );

    // setLoading(true);
    // try {
    //   const res = await axios.post(`${url}acoes`, values);
    //   console.log('res', res.data);
    //   setLoading(fase);
    // } catch (error) {
    //   console.log('erro', error);
    //   setLoading(false);
    // }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const setArrayLinks = () => {
    const l = links.map(item => item['label']);
    handleInputChange('link_principal', l.join());
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Step1
            handleInputChange={handleInputChange}
            conjuntos={conjuntos}
            matriz={matriz}
            fase={fase}
            values={values}
          />
        );
      case 1:
        return (
          <Step2
            handleInputChange={handleInputChange}
            dataConclusaoFn={dataConclusaoFn}
            values={values}
            situacao={situacao}
          />
        );
      case 2:
        return (
          <Step3
            handleInputChange={handleInputChange}
            dataConclusaoFn={dataConclusaoFn}
            values={values}
            situacao={situacao}
          />
        );
      case 3:
        return (
          <Step4
            handleInputChange={handleInputChange}
            dataConclusaoFn={dataConclusaoFn}
            values={values}
            situacao={situacao}
          />
        );
      case 4:
        return <Step5 handleInputChange={handleInputChange} values={values} />;
      case 5:
        return <Step6 handleInputChange={handleInputChange} values={values} />;

      case 6:
        return (
          <Step7
            setLinks={setLinks}
            links={links}
            handleInputChange={handleInputChange}
            values={values}
            uploads={uploads}
            setUploads={setUploads}
          />
        );
      default:
        return (
          <Typography className={classes.instructions}>
            Etapa desconhecida
          </Typography>
        );
    }
  }
  function finalStep() {
    return (
      <Grid alignContent="center" justify="center" container spacing={2}>
        <Grid item xs={4}>
          <Typography className={classes.instructions}>
            Todas as Etapas Completadas! Registrar Ações?
          </Typography>
          <Button
            className={classes.button}
            onClick={e => handleSubmit(e)}
            color="primary"
            variant="contained"
            fullWidth
          >
            Enviar
          </Button>
          <Button
            color="inherit"
            variant="contained"
            fullWidth
            onClick={handleReset}
            className={classes.button}
          >
            Resetar
          </Button>
        </Grid>
      </Grid>
    );
  }
  useEffect(() => {
    setArrayLinks();
  }, [activeStep === steps.length - 1]);
  return (
    <div className={classes.root}>
      {loading ? (
        <div className={classes.divLoading}>
          <CircularProgress title="Salvando Ações" size={40} />
        </div>
      ) : (
        <>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <div>
            {activeStep === steps.length ? (
              finalStep()
            ) : (
              <div>
                {getStepContent(activeStep)}

                <div style={{ marginTop: 20 }}>
                  <Fab
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    style={{
                      margin: 0,
                      top: 'auto',
                      right: 90,
                      bottom: 20,
                      left: 'auto',
                      position: 'fixed',
                    }}
                  >
                    <BackIcon />
                  </Fab>
                  <Fab
                    onClick={handleNext}
                    style={{
                      margin: 0,
                      top: 'auto',
                      right: 20,
                      bottom: 20,
                      left: 'auto',
                      position: 'fixed',
                    }}
                    color="primary"
                  >
                    {activeStep === steps.length - 1 ? (
                      <Check />
                    ) : (
                      <ArrowForwardIosIcon />
                    )}
                  </Fab>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
