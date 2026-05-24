export default {
    props: {
        assignment: Object
    },

    template: `
        <li class="flex justify-between items-center p-4 text-lg font-bold">
            {{ assignment.name }}

            <input
                type="checkbox"
                v-model="assignment.complete"
            >
        </li>
    `
}