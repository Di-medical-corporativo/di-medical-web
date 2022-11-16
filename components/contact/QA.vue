<template>
  <div class="qa">
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#FAFAFA"
        fill-opacity="1"
        d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,213.3C672,224,768,160,864,133.3C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <h1 class="qa__title" data-aos="fade-right">Preguntas frecuentes</h1>
    <div class="qa__questions" role="tablist">
      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-1>¿Precio de los productos?</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-1"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Contamos con un equipo de atención a clientes que fortalece nuestra calidad del servicio donde responderán de manera inmediata a tus cotizaciones.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-2>¿Tiempos de entrega y envío?</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Tenemos más de 3500 productos de entrega inmediata. Di-medical se esfuerza al máximo para que los artículos lleguen a su destino en un plazo de 1 a 5 días hábiles.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-3>¿Formas de pago?</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Tenemos pagos con tarjeta y transferencia electrónica. A nuestros clientes frecuentes y que cumplen con algunos requisitos ofertamos créditos.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="qa__question">
        <b-card-header role="tab" class="qa__header">
          <b-card-text block v-b-toggle.accordion-4>¿Ofrecen descuentos?</b-card-text>
        </b-card-header>
        <b-collapse
          id="accordion-4"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>Realizamos descuentos atractivos y a nuestros clientes frecuentes damos precios especiales por compras por volumen.</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>
