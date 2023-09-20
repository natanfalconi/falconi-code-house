<template>
    <!-- <section class="my-10 flex flex-col items-center h-auto w-4/5 mx-auto relative">
        <div class="bg-[#f4f3f7] p-8 rounded-md">
            <h2 class="sm:text-center text-2xl mt-4 sm:text-3xl font-bold text-color-title">
                Entre em contato e mude a história da sua empresa
            </h2>

            <form class="mt-6">
                <div class="flex">
                    <div class="flex flex-col gap-2">
                        <label for="name">Nome Completo</label>
                        <input type="text" name="name" id="name" placeholder="Seu nome">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email">E-mail</label>
                        <input type="text" name="email" id="email" placeholder="Seu melhor e-mail">
                    </div>
                </div>

                <div class="w-40 mt-6">
                    <textarea name="description" id="description" class=" resize-none"></textarea>
                </div>
            </form>
            <div class="absolute -left-28 top-0">
                <img :src="person2" alt="imagem home" />
            </div>
        </div>

    </section> -->

    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Entre em
                contato
            </h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
                Seu sucesso online começa com um site de qualidade! Entre em contato para transformar sua presença online.
            </p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        E-mail
                    </label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="seu melhor email" required>
                </div>
                <div>
                    <label for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titulo</label>
                    <input type="text" id="title"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Deixe-nos saber como podemos ajudá-lo" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua
                        mensagem</label>
                    <textarea id="message" rows="6"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Deixe seu comentário..."></textarea>
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-white rounded-md bg-[#F57343] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                    Enviar Mensagem
                </button>
            </form>
        </div>
    </section>
</template>
  
<script setup>
</script>
  