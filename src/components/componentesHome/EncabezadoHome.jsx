import { TextField} from '@mui/material';
import { Search } from '@mui/icons-material';
import { Encabezado } from '../Encabezado.jsx';

export function EncabezadoHome() {
  return (
    <header className='header'>
      <section className="sombraHeader">
        <Encabezado></Encabezado>

        <section className="textoEncabezado">

          <h1 >Tu hogar temporal, tu espacio de crecimiento.</h1>
          <TextField style={
            { width: '50%', border: '1px solid var(--black)' , backgroundColor: 'var(--white)' , borderRadius: '10px'  }} 
            InputProps={{startAdornment: (
                <Search />
              )}}

            placeholder='Descubre apartaestudios, casas, habitaciones...' 
            variant='outlined' ></TextField>
          <h3 className="texto-h3">Descubre habitaciones, apartamentos y más, donde te sentirás en casa mientras alcanzas tus metas.</h3>
        </section>
      </section>

    </header>
  )
}