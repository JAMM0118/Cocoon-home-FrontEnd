import React, { useEffect, useState } from 'react';
import {
  Modal, Button, Card, CardContent, Typography,
  LinearProgress
} from '@mui/material';
import {Cancel} from '@mui/icons-material';
import { FormularioItems } from './FormularioItems';


export function FormularioPropiedades() {

  const [open, setOpen] = useState(true);
  const handleClose = ()=> setOpen(false);

  const [formulario, setFormulario] = useState({
    id: '',
    direccion: '',
    precio: '',
    habitaciones: '',
    banos: '',
    huespedes: '',
    amenidades: [],
    fotos: [],
    videos: []
  });
  const [progreso, setProgreso] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormulario({ ...formulario, [name]: [...formulario[name], ...files] });
  };

  const handleAmenidadChange = (amenidad) => {
    const nuevasAmenidades = formulario.amenidades.includes(amenidad)
      ? formulario.amenidades.filter(a => a !== amenidad)
      : [...formulario.amenidades, amenidad];
    setFormulario({ ...formulario, amenidades: nuevasAmenidades });
  };

  const calcularProgreso = () => {
    const campos = ['direccion', 'precio', 'habitaciones', 'banos', 'huespedes'];
    const camposLlenos = campos.filter(campo => formulario[campo] !== '').length;
    const progresoArchivos = (formulario.fotos.length > 0 || formulario.videos.length > 0) ? 1 : 0;
    const progresoAmenidades = formulario.amenidades.length > 0 ? 1 : 0;
    const nuevoProgreso = ((camposLlenos + progresoArchivos + progresoAmenidades) / (campos.length + 2)) * 100;

    setProgreso(Math.round(nuevoProgreso));
  };

  const agregarPropiedad = () => {
    if (formulario.direccion && formulario.precio && formulario.habitaciones && formulario.huespedes) {
      limpiarFormulario();
      handleClose();
      console.log(formulario);
    } else {
      alert('Por favor, llena todos los campos obligatorios');
    }
  };

  const limpiarFormulario = () => {
    setFormulario({
      id: '',
      direccion: '',
      precio: '',
      habitaciones: '',
      banos: '',
      huespedes: '',
      amenidades: [],
      fotos: [],
      videos: []
    });
  };

  useEffect(() => {
    calcularProgreso();
  }, [formulario]);
  return (
    <main >
      <Modal open={open} onClose={handleClose} style={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>

        <Card style={{ marginBottom: '16px', maxWidth: '100vh', maxHeight: '80vh', overflowY: 'auto' }}>
          <CardContent>

            <Typography variant="h5" gutterBottom> Agregar Propiedad
              <Button  href='/' style={{ float: 'right'  , borderRadius: '20px'}} variant='contained' ><Cancel /></Button>
            </Typography>
            
            <LinearProgress variant="determinate" value={progreso} style={{ margin: '16px' }} />

            <FormularioItems
              formulario={formulario}
              agregarPropiedad={agregarPropiedad}
              handleAmenidadChange={handleAmenidadChange}
              handleFileChange={handleFileChange}
              handleInputChange={handleInputChange}></FormularioItems>

          </CardContent>
          
        </Card>
      </Modal>

    </main>
  );
};