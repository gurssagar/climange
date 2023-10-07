<!-- App.svelte -->
<script>
    import Headevent from "./Headevent.svelte";
    import {onMount} from "svelte";

    let open = false
    export let data;
    let TN=[];

    onMount(() => {
        TN = data?.records
    });
</script>


<Headevent/>
<div class="font-instrument overflow-hidden">
    <div class=" py-20 px-4 lg:px-20 just font-instrument select-none flex justify-center items-center flex-wrap gap-8">

        {#each TN as record}
            <article class=" rounded-3xl bg-secondary/40 lg:w-1/5 transition xl:max-w-[800px] dark:bg-gray-900 hover:shadow-lg">


                <div class="lg:block lg:basis-56">
                    <img
                            alt="Guitar"
                            src={`${record.Image_Link}`}
                            class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6">
                        <a href="/">
                            <h3 class="font-bold  text-center uppercase text-lg lg:text-xl  text-text">
                                {`${record.Heading}`}
                            </h3>
                        </a>

                        <p class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg  text-text">
                            {`${record.Text_Input}`}
                        </p>
                    </div>

                    <div class="lg:flex w-full">
                        <a
                                href={`/Supplies/${record.Link}`}
                                class="w-full block bg-secondary px-5 py-3 text-center lg:text-xs text-xs uppercase text-text transition lg:rounded-bl-3xl rounded-b-3xl "
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </article>
            {/each}
    </div>
</div>

