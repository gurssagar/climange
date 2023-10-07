<!-- App.svelte -->
<script>
    export let data;

</script>

<div class="pl-40 font-instrument">
    <div class="px-40 pt-40 grid lg:grid-cols-4 grid-col-1 gap-6 lg:pt-[80px] lg:pb-[180px] rounded-xl">
        {#each data?.records as record}

            <article class="lg:flex-row bg-primary/20 transition hover:shadow-xl dark:bg-gray-900 rounded-xl">
                <div class="lg:block lg:basis-24 ">
                    <img
                            alt="Guitar"
                            src={`${record.Image_Link}`}
                            class="aspect-video h-full w-full object-cover rounded-t-xl"
                    />
                </div>

                <div class="flex-col justify-between ">
                    <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                        <a href="#">
                            <h3 class="font-bold uppercase text-center text-sm lg:text-sm text-gray-900 lg:h-8 dark:text-white">
                                {`${record.Name}`}
                            </h3>
                        </a>

                    </div>

                    <div class="w-full  ">
                        <a
                                href={`${record.Link}`}
                                class="block bg-primary/50 px-5 py-3 text-center lg:text-xs text-xs uppercase text-white transition hover:bg-primary/70 rounded-b-xl"
                        >
                            Watch Now
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</div>

