<template>
  <section class="mt-10 flex flex-col items-center justify-center w-4/5 mx-auto">
    <div class="mt-4">
      <p class="mb-2 text-[#0D8772] font-medium text-base uppercase max-w-[540px] sm:text-center">
        Isso é desempenho
      </p>
      <h2 class="sm:text-center text-xl sm:text-4xl font-bold">
        Passos simples para conseguir <br> seu próximo cliente
      </h2>
    </div>

    <div class="w-full flex gap-4 my-10">
      <div class="flex-1 w-[335px] h-[350px] border border-[#F2F2F2] rounded-md">
        <div class="flex flex-col items-center justify-center h-full px-8">

          <img :src="icon1" alt="icon card 1" class="w-1/4 mb-8">

          <h2 class="font-bold text-xl mb-4">Register You Accont</h2>

          <p class="text-gray-text text-center">
            Capitalize on low hanging fruit to identify added Override the digital.
          </p>
        </div>
      </div>

      <div class="flex-1 w-[335px] h-[350px] border border-[#F2F2F2] rounded-md">
        <div class="flex flex-col items-center justify-center h-full px-8">

          <img :src="icon2" alt="icon card 1" class="w-1/4 mb-8">

          <h2 class="font-bold text-xl mb-4">Register You Accont</h2>

          <p class="text-gray-text text-center">
            Capitalize on low hanging fruit to identify added Override the digital.
          </p>
        </div>
      </div>

      <div class="flex-1 w-[335px] h-[350px] border border-[#F2F2F2] rounded-md">
        <div class="flex flex-col items-center justify-center h-full px-8">

          <img :src="icon3" alt="icon card 1" class="w-1/4 mb-8">

          <h2 class="font-bold text-xl mb-4">Register You Accont</h2>

          <p class="text-gray-text text-center">
            Capitalize on low hanging fruit to identify added Override the digital.
          </p>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
</script>
