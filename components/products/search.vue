<template>
  <div class="search__bar">
    <b-input-group class="input">
      <b-input-group-prepend class="icon">
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input placeholder="Buscar producto"></b-form-input>
    </b-input-group>
    <b-dropdown id="dropdown-1" block text="Marca" class="input drop">
      <b-dropdown-item>First Action</b-dropdown-item>
      <b-dropdown-item>Second Action</b-dropdown-item>
      <b-dropdown-item>Third Action</b-dropdown-item>
    </b-dropdown>
    <b-button class="input">Buscar</b-button>
  </div>
</template>

<script>
export default {};
</script>
 
</style>