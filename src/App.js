import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row
} from "react-bootstrap";

function App() {
  const [border, setBorder] = useState(0);
  const [kaitenRitu, setKaitenRitu] = useState(0);
  const [kaitenSuPerHour, setKaitenSuPerHour] = useState(0);
  const [kikaiWari, setKikaiWari] = useState(0);
  const [jikyu, setJikyu] = useState(0);

  const getKaitenTanka = ({ border, kaitenRitu }) => {
    return 1000 / border - 1000 / kaitenRitu;
  };

  const getJikyu = ({ kaitenTanka, kaitenSuPerHour }) => {
    return (kaitenTanka * kaitenSuPerHour).toFixed();
  };

  const getKikaiWari = ({ kaitenRitu, border }) => {
    const value = kaitenRitu / border;
    return (value * 100).toFixed();
  };

  const calc = () => {
    const kaitenTanka = getKaitenTanka({ border, kaitenRitu });
    const kikaiWari = getKikaiWari({ kaitenRitu, border });
    setKikaiWari(kikaiWari);
    const jikyu = getJikyu({ kaitenTanka, kaitenSuPerHour });
    setJikyu(jikyu);
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>ボーダー</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={border}
          type="number"
          onChange={e => setBorder(e.target.value)}
          placeholder="例: 16.5"
        />
        <InputGroup.Append>
          <InputGroup.Text>回転</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>1000円あたりの回転率</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={kaitenRitu}
          type="number"
          onChange={e => setKaitenRitu(e.target.value)}
          placeholder="例: 19.5"
        />
        <InputGroup.Append>
          <InputGroup.Text>回転</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>1時間あたりの回転数</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="number"
          value={kaitenSuPerHour}
          onChange={e => setKaitenSuPerHour(e.target.value)}
          placeholder="例: 180"
        />
        <InputGroup.Append>
          <InputGroup.Text>回転</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="primary" onClick={calc}>
        計算
      </Button>
      <Row className="justify-content-center h3">
        <Row className="justify-content-around w-50">
          <p>機械割： {kikaiWari}％</p>
          <p>時給： {jikyu}円</p>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
