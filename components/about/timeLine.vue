<template>
  <div class="timeline">
    <svg
      class="timeline__svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#fafafa"
        fill-opacity="1"
        d="M0,0L48,5.3C96,11,192,21,288,69.3C384,117,480,203,576,218.7C672,235,768,181,864,149.3C960,117,1056,107,1152,133.3C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <h1 class="timeline__title" data-aos="fade-right">Nuesta historia</h1>
    <div class="timeline__content">
      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
          <b-icon icon="arrow-down-circle-fill" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content">
          <h2 :style="{ 'text-align': 'right' }">2011</h2>
          <p>En el año 2011 inició la idea y emprendimiento de este proyecto</p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
          <b-icon icon="building" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content right">
          <h2 :style="{ 'text-align': 'left'}">2012</h2>
          <p>
            En el año 2012 se fundó  <strong class="dimedical__word">Di medical</strong> donde se creo su identidad, diseñando su nombre y logotipo
          </p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
           <b-icon icon="door-open-fill" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content">
          <h2 :style="{ 'text-align': 'right' }">2016</h2>
          <p>
            En el año 2016, se constituyó la empresa <strong class="dimedical__word">Di medical</strong> <br />
            Se crea la alianza con la Marca Salter Labs, haciendonos
            distribuidores directos en Territorio Nacional
          </p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
         <b-icon icon="hammer" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content right">
          <h2 :style="{ 'text-align': 'left'}">2018</h2>
          <p>En el año 2018, se constituye la surcursal <strong class="dimedicaldelsur__word">Di-medical del Sur</strong></p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="21px"
            height="20px"
            viewBox="0 0 21 20"
            enable-background="new 0 0 21 20"
            xml:space="preserve"
          >
            <path
              fill="#FFFFFF"
              d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999
	c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499
	l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822
	c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345
	c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"
            />
          </svg>
        </div>
        <div class="timeline-content">
          <h2 :style="{ 'text-align': 'right' }">2020</h2>
          <p>
            <strong class="dimedicaldelsur__word">Di-medical del Sur</strong>, crea la alianza con la Marca Salter Labs,
            haciendonos distribuidores directos en Territorio Nacional
          </p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
          <b-icon icon="award-fill" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content right">
          <h2 :style="{ 'text-align': 'left'}">2021</h2>
          <p>
            En el año 2021 se constituye <strong class="dimedical__word">Di medical corporativo</strong>
            <br />
            <strong class="dimedical__word">Di medical corporativo</strong>, crea la alianza con la Marca ResMed , Baño
            Facil y Longfian, haciéndonos distribuidores directos en Territorio
            Nacional
          </p>
        </div>
      </div>

      <div class="timeline-item" data-aos="fade-down">
        <div class="timeline-icon">
          <b-icon icon="flag-fill" class="timeline-icon-image" style="width: 20px; height: 20px;"></b-icon>
        </div>
        <div class="timeline-content">
          <h2 :style="{ 'text-align': 'right' }">2022</h2>
          <p>
            En el año 2022 <strong class="dimedical__word">Di medical corporativo</strong> crea la alianza con la Marca
            Bicakcilar, haciéndonos distribuidores directos de sus productos en
            Territorio Nacional 
            <br/>
            <strong class="dimedical__word">Di medical corporativo</strong> y <strong class="dimedicaldelsur__word">Di-medical del Sur</strong>
            cuenta con más 600 clientes satisfechos
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>