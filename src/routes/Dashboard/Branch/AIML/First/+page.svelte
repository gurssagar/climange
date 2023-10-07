<!-- App.svelte -->
<script>

    export let data;

</script>

<div class=" pl-40 pt-10 font-instrument overflow-hidden">
    <div class="lg:px-40 px-4 grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[180px] ">


        {#each data?.records as record}
            <a href="{`${record.Link}`}">
                <div class="flex h-44px flex-col justify-center p-12 items-center hover:scale-[102%] ease-in-out duration-300 bg-gradient-to-r from-[#a753fa] via-[#743ee1] to-[#4d2cce] transition-all hover:shadow-xl rounded-xl">
                    <h1 class="font-bold uppercase text-md lg:text-2xl text-center text-white dark:text-white">
                        {`${record.Subjects}`}
                    </h1>
                </div>
            </a>
        {/each}
    </div>

</div>
