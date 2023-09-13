<template>
    <section class="flex flex-col bg-[#f4f3f7]">
        <div class="w-4/5 mx-auto mb-8">

            <div class="mt-10">
                <p class="mb-2 text-[#864BD8] font-medium uppercase">
                    Cases de sucesso
                </p>
                <h2 class="text-xl sm:text-4xl font-bold">
                    Clientes que fazendo sucesso por terem escolhido certo!
                </h2>
                <span class="text-gray-text">Employee and Employment Company. </span>
            </div>

            <div class="grid grid-cols-3 gap-4 my-8">

                <div class="flex-1 w-[335px] min-h-[350px] bg-[#ffffff] rounded-md">

                    <img :src="image" alt="iamge empresa 1">

                    <div class="p-4">

                        <div class="mb-4">
                            <h2 class="font-bold text-xl">Empresa 1</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus.</p>
                        </div>

                        <a href="#" class="text-red-500 hover:underline">
                            Veja mais >
                        </a>
                    </div>
                </div>
                <div class="flex-1 w-[335px] min-h-[350px] bg-[#ffffff] rounded-md">

                    <img :src="image" alt="iamge empresa 1">

                    <div class="p-4">
                        <div class="mb-4">
                            <h2 class="font-bold text-xl">Empresa 2</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus.</p>
                        </div>

                        <a href="#" class="text-red-500 hover:underline">
                            Veja mais >
                        </a>
                    </div>
                </div>
                <div class="flex-1 w-[335px] min-h-[350px] bg-[#ffffff] rounded-md">

                    <img :src="image" alt="iamge empresa 1">

                    <div class="p-4">

                        <div class="mb-4">
                            <h2 class="font-bold text-xl">Empresa 3</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, natus.</p>
                        </div>

                        <a href="#" class="text-red-500 hover:underline">
                            Veja mais >
                        </a>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>
  
<script setup>
import image from "../assets/image.png";
</script>
  