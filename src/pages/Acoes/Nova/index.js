import React, { useState } from 'react';

import Step1 from '../../../components/Foms/Step1';
import Step2 from '../../../components/Foms/Step2';
import Step3 from '../../../components/Foms/Step3';
import Step4 from '../../../components/Foms/Step4';
import Step5 from '../../../components/Foms/Step5';
import Step6 from '../../../components/Foms/Step6';
import Steps from '../../../components/Steps';

export default function Nova() {
  const [values, setValues] = useState({
    conjunto: '',
    fase: '',
    descricao: '',
    link_principal: '',
    nome_responsavel: '',
    situacao_responsavel: '',
    observacao_responsavel: '',
    data_conclusao_responsavel: '',
    nome_aprovador: '',
    situacao_aprovador: '',
    observacao_aprovador: '',
    data_conclusao_aprovador: '',
    nome_contador: '',
    situacao_contador: '',
    observacao_contador: '',
    data_conclusao_contador: ' ',
    nome_informado: '',
    observacao_informado: '',
    receita_prevista: 0,
    despesa_prevista: 0,
    saldo_previsto: 0,
    receita_realizada: 0,
    despesa_realizada: 0,
    saldo_realizado: 0,
  });

  function handleInputChange(name, value) {
    setValues({ ...values, [name]: value });
  }
  function dataConclusaoFn(nextState, name) {
    console.log('nextState', nextState.target.value);
    setValues({
      ...values,
      [name]: nextState.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log('form', values);
  }

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
  const steps = [
    {
      name: 'Step 1',
      component: (
        <Step1
          handleInputChange={handleInputChange}
          conjuntos={conjuntos}
          matriz={matriz}
          fase={fase}
          values={values}
        />
      ),
    },
    {
      name: 'Step 2',
      component: (
        <Step2
          handleInputChange={handleInputChange}
          dataConclusaoFn={dataConclusaoFn}
          values={values}
        />
      ),
    },
    {
      name: 'Step 3',
      component: (
        <Step3
          handleInputChange={handleInputChange}
          dataConclusaoFn={dataConclusaoFn}
          values={values}
        />
      ),
    },
    {
      name: 'Step 4',
      component: (
        <Step4
          handleInputChange={handleInputChange}
          dataConclusaoFn={dataConclusaoFn}
          values={values}
        />
      ),
    },
    {
      name: 'Step 5',
      component: (
        <Step5 handleInputChange={handleInputChange} values={values} />
      ),
    },
    {
      name: 'Step 6',
      component: (
        <Step6 handleInputChange={handleInputChange} values={values} />
      ),
    },
  ];
  return (
    <Steps />
    // <Container>
    //   <Row className="justify-content-center">
    //     <Col sm={12} xs={12} md={8} lg={8} xl={8}>
    //       <StepWizard>
    //         <Step1
    //           handleInputChange={handleInputChange}
    //           conjuntos={conjuntos}
    //           matriz={matriz}
    //           fase={fase}
    //           values={values}
    //         />
    //         <Step2
    //           handleInputChange={handleInputChange}
    //           dataConclusaoFn={dataConclusaoFn}
    //           values={values}
    //         />
    //         <Step3
    //           handleInputChange={handleInputChange}
    //           dataConclusaoFn={dataConclusaoFn}
    //           values={values}
    //         />
    //         <Step4
    //           handleInputChange={handleInputChange}
    //           dataConclusaoFn={dataConclusaoFn}
    //           values={values}
    //         />
    //         <Step5 handleInputChange={handleInputChange} values={values} />

    //         <Step6 handleInputChange={handleInputChange} values={values} />
    //       </StepWizard>
    //       <Button onClick={handleSubmit} variant="primary" type="submit">
    //         Enviar
    //       </Button>
    //     </Col>
    //   </Row>
    // </Container>
  );
}
