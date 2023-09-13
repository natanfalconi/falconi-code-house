<template>
    <footer class="w-4/5 mx-auto">
        <section class="flex my-10 flex-col sm:grid sm:grid-cols-4 gap-4 w-full mb-8">
            <div class="">
                <a href="/">
                    <img :src="codeHouse" alt="logo code house - footer" class="w-1/3">
                </a>
                <div class="mt-4 flex gap-2">
                    <a href="#" aria-label="email">
                        <!-- <unicon name="envelope-alt" fill="#fff" /> -->
                        email
                    </a>
                    <a href="#" aria-label="instagram">
                        <!-- <unicon name="instagram" fill="#fff" /> -->
                        instagram
                    </a>
                </div>
                <p class="mt-4">Siga nas redes sociais</p>
            </div>

            <div class='flex flex-col flex-nowrap gap-2'>
                <strong class="text-color-title">Empresa</strong>
                <a href="#" class="text-gray-text">Sobre</a>
                <a href="#" class="text-gray-text">Recuros</a>
            </div>
            <div class='flex flex-col flex-nowrap gap-2'>
                <strong class="text-color-title">Produto</strong>
                <a href="#" class="text-gray-text">Planos</a>
                <a href="#" class="text-gray-text">Documentação</a>
            </div>
            <div class='flex flex-col flex-nowrap gap-2'>
                <strong class="text-color-title">Legal</strong>
                <a href="#" class="text-gray-text">Termos de uso</a>
                <router-link to="/privacy-policy" class="text-gray-text">Política de Privacidade</router-link>
            </div>
        </section>

        <div class="mb-4 text-sm font-bold text-gray-400">
            <a href="https://codeincoffee.com.br">Falconi Code House</a>
            - Todos os direitos reservados
            &#169 {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>
  
<script setup>
import codeHouse from "../assets/code_house.png";
</script>
  