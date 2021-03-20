import React from "react";
import { Button, Alert, Row, Col, Form } from "react-bootstrap";
const SignUp = () => {
  return (
    <div>
      <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ marginRight: "78%" }}>Nom et Prénom </Form.Label>
          <Form.Control type="Name" placeholder="Entrer votre Nom" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{ marginRight: "80%" }}>Adresse e-mail</Form.Label>
          <Form.Control type="email" placeholder="Entrer votre e-mail" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ marginRight: "80%" }}>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ marginRight: "75%" }}>
            Date de naissance
          </Form.Label>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="formBasicPassword">
          <Form.Control size="sm" as="select">
            <option>Jour</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label style={{ marginRight: "90%" }}>Genre</Form.Label>
          {[ "radio"].map((type) => (
            <div style={{ marginRight: "90%" }} key={`custom-inline-${type}`} className="mb-3">
              <Form.Check
                custom
                inline
                label="Homme"
                type={type}
                id={`custom-inline-${type}-Homme`}
              />
              <Form.Check
                custom
                inline
                label="Femme"
                type={type}
                id={`custom-inline-${type}-Femme`}
              />
            </div>
          ))}
        </Form.Group>
        <Button variant="primary" type="submit">
          Connexion
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
