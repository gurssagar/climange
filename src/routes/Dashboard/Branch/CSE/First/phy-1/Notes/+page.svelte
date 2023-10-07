<!-- App.svelte -->
<script>
    export let data;

</script>

<div class="pl-40 pt-10 font-instrument">
    <div class="px-40 pt-40 grid lg:grid-cols-4 grid-col-4 gap-6 lg:pt-[80px] lg:pb-[180px]">
        {#each data?.records as record}

            <article class="bg-primary/20 transition hover:shadow-xl dark:bg-gray-900 ">
                                <div class="lg:block lg:basis-56">
                    
                </div>

                <div class="flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                        <a href="#">
                            <h3 class="font-bold h-16 text-center uppercase text-lg lg:text-xl text-gray-900 dark:text-white">
                                {`${record.Name}`}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-center lg:text-lg/relaxed text-lg text-gray-700 dark:text-white">
                            {`${record.Author}`}
                        </p>
                    </div>

                    <div class="">
                        <a
                                href={`${record.Link}`}
                                class="inline-block align-bottom bg-primary/50 px-5 py-3 text-center lg:text-xs text-xs uppercase text-white transition hover:bg-primary/40 w-full"
                        >
                            Read Now
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</div>

