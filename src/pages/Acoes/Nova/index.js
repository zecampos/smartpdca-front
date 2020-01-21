import React, { useState } from 'react';

// import { Container } from './styles';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import InputMask from 'react-input-mask';

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

  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} xs={12} md={8} lg={8} xl={8}>
          <Form>
            <Form.Group>
              <Form.Label>Conjunto</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('conjunto', value.target.value)
                }
                as="select"
              >
                {conjuntos.map(item => (
                  <option key={item.nome}>{item.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Matriz</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('matriz', value.target.value)
                }
                as="select"
              >
                {matriz.map(item => (
                  <option key={item.nome}>{item.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Fase</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('fase', value.target.value)
                }
                as="select"
              >
                {fase.map(item => (
                  <option key={item.nome}>{item.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('descricao', value.target.value)
                }
                value={values.descricao}
                placeholder="O que deve ser Feito?"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Anexo Principal</Form.Label>
              <input
                className="form-control-file"
                type="file"
                label="Anexo Principal"
                accept="*"
                // ref={ref => (this.fileUpload = ref)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Principal</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('link_principal', value.target.value)
                }
                value={values.link_principal}
                placeholder="http://www...."
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('nome_responsavel', value.target.value)
                }
                value={values.nome_responsavel}
                placeholder="Nome"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Situação Responsavel</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('situacao_responsavel', value.target.value)
                }
                value={values.situacao_responsavel}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Observação Responsavel</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange(
                    'observacao_responsavel',
                    value.target.value
                  )
                }
                value={values.observacao_responsavel}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Conclusão</Form.Label>
              <InputMask
                className="form-control"
                mask="99/99/9999"
                value={values.data_conclusao_responsavel}
                onChange={value =>
                  dataConclusaoFn(value, 'data_conclusao_responsavel')
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Aprovador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('nome_aprovador', value.target.value)
                }
                value={values.nome_aprovador}
                placeholder="Nome"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Situação Aprovador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('situacao_aprovador', value.target.value)
                }
                value={values.situacao_aprovador}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Observação Aprovador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('observacao_aprovador', value.target.value)
                }
                value={values.observacao_aprovador}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Conclusão</Form.Label>
              <InputMask
                className="form-control"
                mask="99/99/9999"
                value={values.data_conclusao_aprovador}
                onChange={value =>
                  dataConclusaoFn(value, 'data_conclusao_aprovador')
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Contador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('nome_contador', value.target.value)
                }
                value={values.nome_contador}
                placeholder="Nome"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Situação Contador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('situacao_contador', value.target.value)
                }
                value={values.situacao_contador}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Observação Contador</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('observacao_contador', value.target.value)
                }
                value={values.observacao_contador}
                placeholder=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Conclusão</Form.Label>
              <InputMask
                className="form-control"
                mask="99/99/9999"
                value={values.data_conclusao_contador}
                onChange={value =>
                  dataConclusaoFn(value, 'data_conclusao_contador')
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Informado</Form.Label>
              <Form.Control placeholder="Nome" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Observação Informado</Form.Label>
              <Form.Control
                onChange={value =>
                  handleInputChange('observacao_informado', value.target.value)
                }
                value={values.observacao_informado}
                placeholder=""
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Receita Prevista</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('receita_prevista', value.target.value)
                  }
                  value={values.receita_prevista}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Despesa Prevista</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('despesa_prevista', value.target.value)
                  }
                  value={values.despesa_prevista}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Saldo Previsto</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('saldo_previsto', value.target.value)
                  }
                  value={values.saldo_previsto}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Receita Realizada</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('receita_realizada', value.target.value)
                  }
                  value={values.receita_realizada}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Despesa Realizada</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('despesa_realizada', value.target.value)
                  }
                  value={values.despesa_realizada}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Saldo Realizado</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>R$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={value =>
                    handleInputChange('saldo_realizado', value.target.value)
                  }
                  value={values.saldo_realizado}
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
