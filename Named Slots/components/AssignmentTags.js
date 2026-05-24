export default {
    props: {
        initialTags: Array,
        currentTag: String
    },

    template: `
        <div class="flex gap-2 mb-4">
            <button
                v-for="tag in tags"
                :key="tag"
                @click="$emit('change', tag)"
                class="border rounded px-2 py-1 text-xs"
                :class="{ 'border-blue-500 text-blue-500': tag === currentTag }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}