import Assignment from './Assignment.js';

export default {
    components: { Assignment },

    props: {
        assignments: Array,
        title: String
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2 mb-4">
                <button
                    v-for="tag in tags"
                    @click="currentTag = tag"
                    class="border rounded px-2 py-1 text-xs"
                    :class="{ 'border-blue-500 text-blue-500': tag === currentTag }"
                >
                    {{ tag }}
                </button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600 mb-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        },

        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}