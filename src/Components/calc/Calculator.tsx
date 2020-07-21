import * as React from 'react';
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
  NONE = '',
}

const Calculator = () => {
  const [result, setResult] = React.useState(0);

  const [calculating, setCalculating] = React.useState(false);

  const [num, setNum] = React.useState(0);
  const [oper, setOper] = React.useState('');
  const handleNumber = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setNum(parseInt(e.currentTarget.innerHTML, 10));
  };
  const handleOper = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setOper(e.currentTarget.innerHTML);
  };

  React.useEffect(() => {
    switch (oper) {
      case OperType.CLEAR:
        setResult(0);
        break;
      case OperType.PLUS:
        setResult(prevState => prevState + num);
        break;
      case OperType.MINUS:
        setResult(prevState => prevState - num);
        break;
      case OperType.DIVIDE:
        setResult(prevState => prevState / num);
        break;
      case OperType.MULTI:
        setResult(prevState => prevState * num);
        break;
      case OperType.DOT:
        console.log('Operator dot is clicked');
        break;
      default:
        break;
    }
    setNum(0);
    setOper(OperType.NONE);
  }, [oper]);

  React.useEffect(() => {
    if (oper === OperType.NONE) {
      setResult(prevState => prevState * 10 + num);
    }
    // TODO : 동일한 숫자 눌리는 경우 업데이트 안됨
  }, [num]);

  return (
    <TopContainer>
      <ResultContent>{result}</ResultContent>
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
