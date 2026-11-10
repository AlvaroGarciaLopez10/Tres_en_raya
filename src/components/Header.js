import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';



export default function Header(props){
    return <Card className="text-center" style={{ width: '18rem', margin: 'auto auto 10px' }}>
        <Card.Body>
            <CardTitle>Cabecera</CardTitle>
            <CardText>Turn of {props.turn}</CardText>
        </Card.Body>
    </Card>



}
