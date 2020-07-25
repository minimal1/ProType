import * as React from 'react';
import Big from 'big.js';
import styled from 'styled-components';

enum ButtonType {
  NUMBER,
  OPER,
}

enum OperType {
  DIVIDE = '/',
  MULTI = '*',
  MINUS = '-',
  PLUS = '+',
  DOT = '.',
  CLEAR = 'C',
  DONE = '=',
  NONE = '',
}
const operate = (firstNum: string, secondNum: string, oper: string) => {
  const num1 = Big(firstNum || '0');
  const num2 = Big(
    secondNum ||
      (oper === OperType.DIVIDE || oper === OperType.MULTI ? '1' : '0'),
  );

  if (oper === OperType.PLUS) {
    return num1.plus(num2).toString();
  }
  if (oper === OperType.MINUS) {
    return num1.minus(num2).toString();
  }
  if (oper === OperType.DIVIDE) {
    if (num2.toString() === '0') {
      alert('Divide by 0 error');
      return '0';
    } else {
      return num1.div(num2).toString();
    }
  }
  if (oper === OperType.MULTI) {
    return num1.times(num2).toString();
  }
  return '0';
};

const Calculator = () => {
  const [result, setResult] = React.useState('');
  const [num, setNum] = React.useState('');

  const [oper, setOper] = React.useState('');
  const handleNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const div = e.target as HTMLDivElement;

    setNum(prev => (prev ? prev + div.innerHTML : div.innerHTML));
  };

  const handleOper = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    switch (e.currentTarget.innerHTML) {
      case OperType.CLEAR:
        setResult('');
        setNum('');
        setOper('');
        break;
      case OperType.DOT:
        if (num) {
          if (!num.includes('.')) {
            setNum(prev => prev + '.');
          }
        } else {
          setNum('0.');
        }
        break;
      case OperType.DONE:
        if (num && oper) {
          setResult(operate(result, num, oper));
          setNum('');
          setOper('');
        }
        break;
      default:
        if (oper) {
          setResult(operate(result, num, oper));
          setNum('');
          setOper(e.currentTarget.innerHTML);
        } else if (!num) {
          setOper(e.currentTarget.innerHTML);
        } else {
          setResult(num);
          setNum('');
          setOper(e.currentTarget.innerHTML);
        }
        break;
    }
  };
  return (
    <TopContainer>
      <ResultContent>{num || result || '0'}</ResultContent>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        C
      </CalcBtn>

      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        7
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        8
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        9
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        /
      </CalcBtn>

      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        4
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        5
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        6
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        *
      </CalcBtn>

      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        1
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        2
      </CalcBtn>
      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        3
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        -
      </CalcBtn>

      <CalcBtn btnType={ButtonType.NUMBER} onClick={handleNumber}>
        0
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        .
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        =
      </CalcBtn>
      <CalcBtn btnType={ButtonType.OPER} onClick={handleOper}>
        +
      </CalcBtn>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  border-radius: 10px;
`;

const ResultContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border: 3px solid #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  text-align: end;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 36px;
`;

const CalcBtn = styled.div<{ btnType: ButtonType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 5px;
  border: none;
  background-color: ${p =>
    p.btnType === ButtonType.NUMBER ? '#a2a2a2' : '#e2e2e2'};

  cursor: pointer;

  &:active {
    border: 2px solid black;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Calculator;
