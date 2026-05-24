export default {
    template: `
        <button
            class="bg-blue-600 text-white border rounded px-12 py-4 relative"
            :class="{ 'is-loading': processing }"
            :disabled="processing"
        >
            <slot />
        </button>
    `,

    data() {
        return {
            processing: true
        };
    }
}