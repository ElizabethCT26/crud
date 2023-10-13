import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const produc = [
  { id: 1, Guitarra: "No se", Precio: 1500, Modelo: "Tu", Marca: "Yo" },
  { id: 2, Guitarra: "No se", Precio: 1500, Modelo: "Tu", Marca: "Yo" },
  { id: 3, Guitarra: "No se", Precio: 1500, Modelo: "Tu", Marca: "Yo" },
];

class App extends React.Component {
  state = {
    produc: produc,
    form: {
      id: '',
      Guitarra: '',
      Precio: '',
      Modelo: '',
      Marca: ''
    },
    modalInsert: false,
    modalEditar: false
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };

  mostrarModalActualizar = (dato) => {
    this.setState({ 
    form: dato,
    modalActualizar: true
    });
  };

  ocultarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsert: true });
  };

  ocultarModalInsertar = () => {
    this.setState({ modalInsert: false });
  };


  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.id=this.state.produc.length+1;
    var lista=this.state.produc;
    lista.push(valorNuevo);
    this.setState({produc:lista,modalInsert: false});
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <Button color='success' onClick={this.mostrarModalInsertar}>Ingresar nuevo modelo de guitarra</Button>
          <br /><br />
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Guitarra</th>
                <th>Precio</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produc.map((Element) => (
                <tr key={Element.id}>
                  <td>{Element.id}</td>
                  <td>{Element.Guitarra}</td>
                  <td>{Element.Precio}</td>
                  <td>{Element.Modelo}</td>
                  <td>{Element.Marca}</td>
                  <td>
                    <Button color='primary' >Editar</Button>
                    <Button color='danger' onClick={this.ocultarModalActualizar()}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>id:</label>
              <input className='form-control' readOnly type='text' value={this.state.produc.length + 1}></input>
            </FormGroup>
            <FormGroup>
              <label>Guitarra:</label>
              <input className='form-control' name='Guitarra' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Precio:</label>
              <input className='form-control' name='Precio' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Modelo:</label>
              <input className='form-control' name='Modelo' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Marca:</label>
              <input className='form-control' name='Marca' type='text' onChange={this.handleChange}></input>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
            <Button color="danger" onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
          </ModalFooter>

          <ModalBody>
            <FormGroup>
              <label>id:</label>
              <input className='form-control' readOnly type='text' value={this.state.produc.length + 1}></input>
            </FormGroup>
            <FormGroup>
              <label>Guitarra:</label>
              <input className='form-control' name='Guitarra' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Precio:</label>
              <input className='form-control' name='Precio' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Modelo:</label>
              <input className='form-control' name='Modelo' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Marca:</label>
              <input className='form-control' name='Marca' type='text' onChange={this.handleChange}></input>
            </FormGroup>
          </ModalBody>
        </Modal>



        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>id:</label>
              <input className='form-control' readOnly type='text' value={this.state.produc.length + 1}></input>
            </FormGroup>
            <FormGroup>
              <label>Guitarra:</label>
              <input className='form-control' name='Guitarra' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Precio:</label>
              <input className='form-control' name='Precio' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Modelo:</label>
              <input className='form-control' name='Modelo' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Marca:</label>
              <input className='form-control' name='Marca' type='text' onChange={this.handleChange}></input>
            </FormGroup>
          </ModalBody>

          <ModalFooter>

          </ModalFooter>

          <ModalBody>
            <FormGroup>
              <label>id:</label>

            </FormGroup>
            <FormGroup>
              <label>Guitarra:</label>
              <input className='form-control' name='Guitarra' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Precio:</label>
              <input className='form-control' name='Precio' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Modelo:</label>
              <input className='form-control' name='Modelo' type='text' onChange={this.handleChange}></input>
            </FormGroup>
            <FormGroup>
              <label>Marca:</label>
              <input className='form-control' name='Marca' type='text' onChange={this.handleChange}></input>
            </FormGroup>
          </ModalBody>
        </Modal>

                

      </>
    );
  } 
}

export default App;
