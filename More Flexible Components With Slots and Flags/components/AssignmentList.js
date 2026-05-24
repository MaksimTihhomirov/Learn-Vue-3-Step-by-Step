import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';

export default {
    components: { Assignment, AssignmentTags },

    props: {
        assignments: Array,
        title: String,
        canToggle: Boolean
    },

    template: `
        <section v-show="assignments.length" class="mb-8">
            <h2 class="font-bold text-xl mb-2 flex justify-between">
                {{ title }}
                <span>({{ filteredAssignments.length }})</span>

                <button
                    v-show="canToggle"
                    @click="$emit('toggle')"
                    class="ml-4"
                >
                    &times;
                </button>
            </h2>

            <assignment-tags
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            ></assignment-tags>

            <ul class="border border-gray-500 divide-y divide-gray-500 mt-4">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>

            <slot></slot>
        </section>
    `,

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}

