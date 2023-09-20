<template>
    <article id="faq" class="py-16 text-color-title w-4/5 mx-auto">
        <div class="text-center mb-8">
            <h3 class="text-4xl font-bold">Tire suas dúvidas</h3>

            <h5 class="mt-4 text-gray-500 font-medium text-base">
                Algumas das principais duvidas sobre a empresa
            </h5>
        </div>

        <div v-for="(question, index) in questions" :key="question.title"
            class="hover:border hover:border-[#864BD8] py-4 px-3 mb-4 rounded-md cursor-pointer bg-[#f4f3f7]"
            @click="handleAccordion(index)">
            <button :class="['text-lg font-bold', { Active: question.isExpanded }]">
                <span class="text-[#864BD8]">0{{ index + 1 }}.</span> {{ question.title }}
            </button>

            <Collapse as="section" :when="question.isExpanded">
                <p class="CollapseContent mt-4 text-gray-500">
                    {{ question.answer }}
                </p>
            </Collapse>
        </div>
    </article>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Collapse } from 'vue-collapsed';

import faqData from './faq.json';

const questions = reactive(
    faqData.map(({ title, answer }, index) => ({
        title,
        answer,
        isExpanded: index === 0,
    }))
)

function handleAccordion(selectedIndex: number) {
    questions.forEach((_, index) => {
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
    })
}
</script>

<style scoped></style>