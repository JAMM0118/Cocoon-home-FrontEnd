import React, { useState } from 'react';
import './OwnerProfile.css';

const OwnerProfile = () => {
  const [visibleProperties, setVisibleProperties] = useState(1);
  const [visibleComments, setVisibleComments] = useState(2);

  // Mock data for properties with reservation status
  const properties = [
    {
      id: 1,
      image: "property_image_url_1",
      location: "Centro de la ciudad",
      price: 800,
      size: "2 habitaciones, 1 baño",
      rules: "No mascotas",
      status: "reservado"
    },
    {
      id: 2,
      image: "property_image_url_2",
      location: "Zona residencial",
      price: 1200,
      size: "3 habitaciones, 2 baños",
      rules: "Mascotas permitidas",
      status: "disponible"
    },
    {
      id: 3,
      image: "property_image_url_3",
      location: "Barrio universitario",
      price: 600,
      size: "1 habitación, 1 baño",
      rules: "Solo estudiantes",
      status: "reservado"
    }
  ];

  const comments = [
    { 
      id: 1, 
      text: "Excelente propietario, muy atento y responsable.", 
      author: "Juan Pérez",
      date: "Hace 2 meses"
    },
    { 
      id: 2, 
      text: "Siempre cumple con el mantenimiento de la propiedad.", 
      author: "María González",
      date: "Hace 3 meses"
    },
    { 
      id: 3, 
      text: "Comunicación rápida y clara con los inquilinos.", 
      author: "Carlos Rodríguez",
      date: "Hace 4 meses"
    }
  ];

  const loadMoreProperties = () => {
    setVisibleProperties(prev => Math.min(prev + 1, properties.length));
  };

  const loadMoreComments = () => {
    setVisibleComments(prev => Math.min(prev + 2, comments.length));
  };

  return (
    <div className="owner-profile">
      <div className="profile-header">
        <img 
          src="profile_picture_url" 
          alt="Foto de perfil" 
          className="profile-pic" 
        />
        <div className="profile-header-info">
          <h2 className="profile-name">Juan Pérez</h2>
          <p className="bio">Propietario con 5 años de experiencia en arrendamiento en el centro de la ciudad.</p>
        </div>
      </div>
      
      <div className="contact-info">
        <h3 className="section-title">Información de Contacto</h3>
        <p>📞 Teléfono: +57 123 456 7890</p>
        <p>✉️ Correo electrónico: ejemplo@correo.com</p>
      </div>
      
      <div className="properties">
        <h3 className="section-title">Propiedades ofrecidas</h3>
        <div className="properties-list">
          {properties.slice(0, visibleProperties).map(property => (
            <div key={property.id} className="property">
              <img 
                src={property.image} 
                alt="Foto de la propiedad" 
                className="property-pic" 
              />
              <div className={`property-details ${property.status === 'reservado' ? 'reserved' : 'available'}`}>
                <p>📍 Ubicación: {property.location}</p>
                <p>💰 Precio mensual: ${property.price}</p>
                <p>🏠 Tamaño: {property.size}</p>
                <p>📌 Reglas: {property.rules}</p>
                <p>🔑 Estado: 
                  <span className={`property-status ${property.status}`}>
                    {property.status === 'reservado' ? 'Reservado' : 'Disponible'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleProperties < properties.length && (
          <button 
            className="load-more-btn" 
            onClick={loadMoreProperties}
          >
            Cargar más propiedades
          </button>
        )}
      </div>
      
      <div className="rental-history">
        <h3 className="section-title">Historial como propietario</h3>
        <div className="comments-section">
          {comments.slice(0, visibleComments).map(comment => (
            <div key={comment.id} className="comment">
              <p>💬 {comment.text}</p>
              <small>- {comment.author}, {comment.date}</small>
            </div>
          ))}
        </div>
        {visibleComments < comments.length && (
          <button 
            className="load-more-btn" 
            onClick={loadMoreComments}
          >
            Cargar más comentarios
          </button>
        )}
      </div>
      
      <div className="verifications">
        <h3 className="section-title">Verificaciones</h3>
        <p>🆔 Documento de identificación: <span className="verification-status">Verificado</span></p>
        <p>🏘️ Propiedad de los inmuebles: <span className="verification-status">Verificado</span></p>
      </div>
    </div>
  );
};

export default OwnerProfile;