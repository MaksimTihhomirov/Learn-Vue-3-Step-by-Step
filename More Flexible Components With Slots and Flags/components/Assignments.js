import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">

            <assignment-list
                :assignments="filters.inProgress"
                title="In Progress"
            >
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>

        </section>
    `,

    data() {
        return {
            showCompleted: true,

            assignments: [
                { name: 'Finish project', complete: false, id: 1, tag: 'math' },
                { name: 'Read chapter 4', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in homework', complete: false, id: 3, tag: 'math' },
                { name: 'Finish Laracasts video', complete: true, id: 4, tag: 'programming' }
            ]
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
                tag: 'math'
            });
        }
    }
}