import Table from 'react-bootstrap/Table';

function Footer() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 4 }).map((_, index) => (
            <th key={index}>Plant List</th>
            // <th key={index}>Quantity</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total</td>
          {Array.from({ length: 4 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      
        
      </tbody>
    </Table>
  );
}

export default Footer;