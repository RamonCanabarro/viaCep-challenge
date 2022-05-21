<script>
export default {
  props: {
    address: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeCep(cep) {
      this.$emit("remove-address", cep);
    },
  },
};
</script>

<template>
  <div class="card" v-for="(address, index) in address" :key="index">
    <div class="card-left">
      <img
        src="@/assets/icone-lugar.svg"
        alt="My Happy SVG"
        width="20.53"
        height="29.33"
        style="margin-right: 13px"
      />
      <div class="card-body">
        <div class="card-title">{{ address.localidade }}</div>
        <div class="card-subtitle">{{ address.logradouro }}</div>
      </div>
    </div>
    <div class="card-right">
      <img
        @click="removeCep(address.cep)"
        class="trash-icon"
        src="@/assets/icone-lixo.svg"
        alt="My Happy SVG"
        width="20.53"
        height="29.33"
        style="margin-right: 13px"
      />
    </div>
  </div>
</template>
