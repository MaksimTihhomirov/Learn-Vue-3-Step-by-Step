export default {
    template: `
        <div class="border border-gray-600 rounded-xl p-6 bg-gray-700/30">
            <slot></slot>

            <template v-if="$slots.footer">
                <footer class="border-t border-gray-600 mt-6 pt-6">
                    <slot name="footer"></slot>
                </footer>
            </template>
        </div>
    `
}