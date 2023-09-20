<template>
  <section class="flex flex-col items-center justify-center h-[calc(90vh-64px)] ">
    <div>
      <div class="text-center">
        <h1 class="text-4xl sm:text-6xl font-bold leading-[48px] sm:leading-[72px]">
          Criação de Sites
        </h1>
        <h2 class=" text-2xl mt-4 sm:text-3xl font-bold text-color-title">
          Alcance resultados reais com um novo site
        </h2>

        <h5 class="mt-4 text-gray-text text-center">
          Tenha um site com alta taxa de conversão, com ferramentas de SEO para <br>
          atingir as primeiras páginas do google
        </h5>

      </div>
      <div class="mt-10 max-w-[48rem] w-full flex items-center gap-2 flex-col">
        <a href="#" class="flex w-full max-w-[20rem]">
          <button
            class="bg-[#F57343] w-full text-white mx-auto mt-0 text-base px-2 py-3 border-none rounded-md flex justify-center hover:opacity-90">
            Fale com um especialista
          </button>
        </a>
        <p class="text-gray-text text-md">Faça um orçamento</p>
      </div>

      <div class="absolute top-1/2 right-32 transform -translate-y-1/2">
        <img :src="person" alt="imagem home" class="animate-fade-left" />
      </div>

      <div class="absolute left-32 transform -translate-y-1/2 ">
        <img :src="person2" alt="imagem home" class="animate-fade-right" />
      </div>
    </div>

  </section>
</template>

<script setup>
import person from "../assets/person.png";
import person2 from "../assets/person2.png";
</script>


<style scoped>
.animate-fade-right {
  animation: fade-in-right 1.4s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-left {
  animation: fade-in-left 1.4s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
