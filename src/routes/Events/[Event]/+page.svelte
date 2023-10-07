<script>
    import Footer from "../../Footer.svelte";
    let open = false
    import { page } from '$app/stores';
    const Event =$page.params.Event;
    // Function to split text into paragraphs based on #
    function splitContent(content) {
        return content.split("#");
    }
    // let paragraphs = splitContent(record.Text_Input);
    console.log(Event);
    export let data;
</script>



{#each data?.records as record}
    {#if Event===record.Link}
    <div class="bg-gray-100 py-60">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                            <img>
                            <img src={`${record.Image_Link}`}>
                        </div>
                        <div class="flex -mx-2 mb-4">
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                            </div>
                            <div class="w-1/2 px-2">
                                <button class="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        <h2 class="text-2xl font-bold mb-2">Product Name</h2>
                        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                            ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <span class="font-bold text-gray-700">Price:</span>
                                <span class="text-gray-600">$29.99</span>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700">Loaction:</span>
                                <span class="text-gray-600">{`${record.Location}`}</span>

                            </div>
                        </div>

                        <div>
                            <span class="font-bold text-gray-700">Product Description:</span>
                            <p class="text-gray-600 text-sm mt-2">{#each splitContent(record.Text_Input) as paragraph}
                                <p>{paragraph}</p>
                            {/each}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    {/if}
{/each}


<Footer/>