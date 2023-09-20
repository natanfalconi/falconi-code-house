<template>
  <header class="flex items-center justify-between w-4/5 mx-auto">
    <router-link to="/" class="mr-2 sm:mr-0">
      <img :src="codeHouse" alt="logo do site" class="w-1/4">
    </router-link>
    <div class="flex items-center gap-6">
      <nav class="sm:flex gap-6 hidden">
        <router-link to="#about">Sobre</router-link>
        <!-- <router-link to="#benefits">Vantagens</router-link> -->
        <router-link to="#price">Projetos</router-link>
        <router-link to="#faq">Dúvidas</router-link>
      </nav>
      <router-link to="#" class="bg-[#864BD8] px-3 py-2 text-white rounded-md hover:opacity-80 transition-all">
        Entre em contato
      </router-link>
    </div>
  </header>
</template>

<script setup>
import codeHouse from "../assets/code_house.png";
</script>
