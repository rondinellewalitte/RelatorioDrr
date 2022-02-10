import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {
  nome: string;
  titulo_curso: string;
  avaliacao: string;
  data: string,
  depoimento: string;
}


export function TranscantionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('brief')
      .then(response => setTransactions(response.data));
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Curso</th>
            <th>Avalicão</th>
            <th>Data</th>
            <th>Depoimento</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr>
                <td>{transaction.nome}</td>
                <td className="deposit">{transaction.titulo_curso}</td>
                <td>{transaction.avaliacao}</td>
                <td>{transaction.data}</td>
                <td>{transaction.depoimento}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  )
}