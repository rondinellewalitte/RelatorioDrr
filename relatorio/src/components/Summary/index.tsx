import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Total Avaliações</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>552</strong>
      </div>

      <div>
        <header>
          <p>Média</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>5</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Ultíma Avaliações</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>Curso e Nota 10</strong>
      </div>
    </Container>
  );
};