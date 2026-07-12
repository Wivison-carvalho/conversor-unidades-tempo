# Testes do Conversor de Unidades de Tempo

Este arquivo apresenta testes manuais realizados no projeto.

## Testes de conversão

| Valor | De | Para | Resultado esperado |
|------|----|------|--------------------|
| 60 | Segundo | Minuto | 1 minuto |
| 120 | Minuto | Hora | 2 horas |
| 48 | Hora | Dia | 2 dias |
| 14 | Dia | Semana | 2 semanas |
| 1 | Semana | Dia | 7 dias |
| 2 | Hora | Minuto | 120 minutos |

## Testes de validação

| Situação testada | Resultado esperado |
|------------------|--------------------|
| Campo vazio | Exibir mensagem de erro |
| Valor inválido | Exibir mensagem de erro |
| Valor negativo | Exibir mensagem de erro |

## Observação

Os testes foram realizados manualmente abrindo o arquivo `index.html` no navegador.