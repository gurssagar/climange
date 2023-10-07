<!-- App.svelte -->
<script>
    export let data;
</script>

<div class="px-44 font-instrument overflow-hidden">
    <div class=" py-20 px-4 lg:px-10 just font-instrument select-none flex justify-center items-center flex-wrap gap-8">
        {#each data?.records as record}

            <article class="lg:flex bg-secondary/40 transition max-w-[800px] dark:bg-gray-900 hover:shadow-lg">
                <div class="lg:block hidden rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 lg:text-xs text-xs font-bold uppercase text-text"
                    >
                        <span>{`${record.Year}`}</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>{`${record.Date}`}</span>
                    </time>
                </div>

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
                            <h3 class="font-bold uppercase text-lg lg:text-xl  text-text">
                                {`${record.Heading}`}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg  text-text">
                            {`${record.Text_Input}`}
                        </p>
                    </div>

                    <div class="lg:flex lg:items-end lg:justify-end">
                        <a
                                href={`/Events/${record.Link}`}
                                class="block bg-secondary px-5 py-3 text-center lg:text-xs text-xs uppercase text-text transition "
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</div>
