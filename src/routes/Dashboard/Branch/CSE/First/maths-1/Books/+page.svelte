<!-- App.svelte -->
<script>
    export let data;

</script>

<div class="pl-40 font-instrument h-screen pb-100">
    <div class="px-40 pt-60 grid lg:grid-cols-2 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[180px]">
        {#each data?.records as record}

            <article class="lg:flex bg-primary/20 transition hover:shadow-xl dark:bg-gray-900 ">
                                <div class="lg:block lg:basis-56">
                    <img
                            alt="Guitar"
                            src={`${record.Image_Link}`}
                            class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-lg lg:text-xl text-gray-900 dark:text-white">
                                {`${record.Name}`}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg text-gray-700 dark:text-white">
                            {`${record.Author}`}
                        </p>
                    </div>

                    <div class="lg:flex lg:items-end lg:justify-end">
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

