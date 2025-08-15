import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      <h1>BUTTON</h1>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      <br />
      <hr />

      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>

      <br />
      <hr />

      <Button href="#">Link</Button> <Button type="submit">Button</Button>
      <Button as="input" type="button" value="Input" />
      <Button as="input" type="submit" value="Submit" />
      <Button as="input" type="reset" value="Reset" />

      <br />
      <hr />

      <div className="d-flex gap-2 mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div className="d-flex gap-2">
        <Button variant="primary" size="sm">
          Small button
        </Button>
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>

      <br />
      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Block level button
        </Button>
        <Button variant="secondary" size="lg">
          Block level button
        </Button>
      </div>

      <br />
      <hr />

      <Button variant="primary" size="lg" active>
        Primary button
      </Button>
      <Button variant="secondary" size="lg" active>
        Button
      </Button>

      <br />
      <hr />

      <Button variant="primary" size="lg" disabled>
        Primary button
      </Button>
      <Button variant="secondary" size="lg" disabled>
        Button
      </Button>
      <Button href="#" variant="secondary" size="lg" disabled>
        Link
      </Button>


    </>
  )
}

export default App
