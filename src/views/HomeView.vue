<script>
import Card from "@/components/cards/CardComponent.vue";
import axios from "axios";
export default {
  components: { Card },
  data: () => ({
    ceps: [],
    address: [],
    form: {
      cep: "",
    },
  }),
  methods: {
    addCep(e) {
      e.preventDefault();
      if (!this.form.cep) alert("cep inválido!");
      if (this.ceps.find((c) => c === this.form.cep))
        alert("cep já está sendo listado!");

      if (this.form.cep && !this.ceps.find((c) => c === this.form.cep)) {
        this.ceps.push(this.form.cep);
        this.form.cep = "";
      }
    },
    async generateAdress() {
      this.address = [];
      if (!this.ceps.length) alert("Não há ceps na lista");

      this.ceps?.forEach(async (cep) => {
        const newcep = cep.split(".").join("").split("-").join("");
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${newcep}/json/`
        );
        if (!data.erro) this.address.push(data);
        else {
          alert(`Cep ${cep} não encontrado`);
        }
      });
    },
    removeAddress(cep) {
      const index = this.address.findIndex((c) => {
        return c.cep === cep;
      });
      this.address.splice(index, 1);
    },
    removeCep(cep) {
      const index = this.ceps.findIndex((c) => {
        return c === cep;
      });
      this.ceps.splice(index, 1);
    },
  },
};
</script>
<template>
  <div id="container">
    <!-- Input to add cep -->
    <form @submit="addCep">
      <div id="main-container" class="search">
        <input
          type="text"
          placeholder="insira o CEP"
          v-mask="'##.###-###'"
          v-model="form.cep"
        />
        <button type="submit">
          <img
            src="@/assets/icone-plus.svg"
            alt="My Happy SVG"
            style="margin-right: 13px"
          />
          Adicionar endereço
        </button>
      </div>
    </form>
    <!-- List ceps -->
    <div v-if="ceps.length">
      <div
        id="main-container"
        class="list-ceps"
        v-for="(cep, index) in ceps"
        :key="index"
      >
        <img
          src="@/assets/icone-lugar.svg"
          alt="My Happy SVG"
          width="20.53"
          height="29.33"
          style="margin-right: 13px; cursor: pointer"
        />
        <div class="label-cep">CEP</div>
        <div class="label-value">{{ cep }}</div>
        <img
          @click="removeCep(cep)"
          class="trash-icon"
          src="@/assets/icone-lixo.svg"
          alt="My Happy SVG"
          width="20.53"
          height="29.33"
          style="margin-left: 13px"
        />
      </div>
    </div>
    <div id="main-container" v-else>Não há ceps na lista.</div>
    <div id="main-container" class="address-button">
      <button @click="generateAdress">Gerar endereços</button>
    </div>
    <hr id="main-container" />
    <!-- Card to list address -->
    <div id="card-container" v-if="address.length">
      <Card :address="address" @remove-address="removeAddress" />
    </div>
  </div>
</template>
