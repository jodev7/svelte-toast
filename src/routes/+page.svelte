<script lang="ts">
import toast, {Toaster} from '../lib'
const handleClick = () => {
    toast.success('sdasda')
}
</script>


<button on:click={handleClick}>Click</button>
<Toaster />

<style>
    button {
        @apply absolute top-[50%] left-[50%] p-3 text-4xl rounded-xl text-[#fa0000];
        background-color: black;
    }
</style>