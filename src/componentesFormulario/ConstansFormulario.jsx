import {
  Tv, Wifi, Restaurant,
  DirectionsCar, LocalLaundryService, AcUnit, Laptop,
} from '@mui/icons-material';

export const renderPreview = (file) => {

  if (file.type.startsWith('image/')) {
    return ((<img src={URL.createObjectURL(file)} alt="Preview"
      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />)
    )
  }

  else if (file.type.startsWith('video/')) {
    return ((<video src={URL.createObjectURL(file)}
      alt="Preview"
      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} controls />)
    )
  }
  return null;
};

export const amenidades = [
  { icon: <Tv />, label: 'TV', value: 'tv' },
  { icon: <Wifi />, label: 'WiFi', value: 'wifi' },
  { icon: <Restaurant />, label: 'Cocina', value: 'cocina' },
  { icon: <DirectionsCar />, label: 'Garaje', value: 'garaje' },
  { icon: <LocalLaundryService />, label: 'Lavadora', value: 'lavadora' },
  { icon: <AcUnit />, label: 'Aire acondicionado', value: 'aire_acondicionado' },
  { icon: <Laptop />, label: 'Zona de trabajo', value: 'zona_trabajo' },
];




