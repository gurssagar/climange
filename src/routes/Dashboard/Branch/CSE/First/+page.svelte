<!-- App.svelte -->
<script>

    export let data;

</script>

<div class=" lg:pl-72 lg:px-0 px-6 pt-28 font-instrument overflow-hidden pb-16 h-screen">
    <div class="lg:px-10 px-4 flex justify-center items-center flex-wrap gap-6 lg:pt-[80px] lg:pb-[180px] ">


        {#each data?.records as record}
            <a href="{`First/${record.Link}`}">
                <div class="flex flex-col justify-center lg:w-[320px] w-[270px] lg:h-[120px] h-[100px] items-center hover:scale-[102%] ease-in-out duration-300 bg-gradient-to-r from-[#a753fa] via-[#743ee1] to-[#4d2cce] transition-all hover:shadow-xl rounded-xl">
                    <h1 class="font-bold uppercase text-center text-white dark:text-white">
                        {`${record.Subjects}`}
                    </h1>
                </div>
            </a>
        {/each}
    </div>

</div>