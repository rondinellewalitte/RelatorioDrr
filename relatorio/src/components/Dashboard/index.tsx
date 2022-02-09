import { Container } from "./styles";
import { Summary } from "../Summary";
import { TranscantionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranscantionsTable />
    </Container>
  );
}