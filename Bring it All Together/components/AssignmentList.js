import Assignment from './Assignment.js';

export default {
    components: {
        Assignment
    },

    props: {
        assignments: Array,
        title: String
    },

    template: `
        <section class="space-y-4">
            <h2 class="font-bold text-lg">
                {{ title }}
            </h2>

            <ul class="space-y-2">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `
}
