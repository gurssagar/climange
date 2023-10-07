<!-- App.svelte -->
<script>
    ;
    import anime from 'animejs';
    import { afterUpdate } from 'svelte';
    import {onMount} from "svelte";
    import Typewriter from 'svelte-typewriter';
    import Blob from './blob.svelte';
    let LottiePlayer;
	let mainContainer;
    let acceptTerms = false;
    let upperText = "Building a Brighter Future for the Homeless";
    let lowerText = "The GreenTech Initiative";
    export let data;
    const a ='/static/bg2.jpg';
    let controlsLayout = [];
	const landingPageLottieFile = "plant2.json";
    const mobilefile= "animat.json";
    onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
		animateMain();
		// if (data?.animationsLoaded === 'false') {
        //     document.cookie = `animationsLoaded=true; path="/"`;
        // }
	});
    let TN=[];

    onMount(() => {
        TN = data?.records
    });

    let x = 0;
    let y = 0;

    function handleMouseMove(e) {
        x = e.clientX;
        y = e.clientY;
        const rect = e.currentTarget.getBoundingClientRect();
        document.getElementsByClassName(".spot-blur")[0].animate(
                [
                    {
                        top: x,
                        left: y
                    }
                    ,
                    { top: (y-200).toString() + "px",
                      left: (x-300).toString() + "px",
                    }
                ], {
                    duration: 10000,
                    iterations: 1,
                    delay: 400,
                    easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
                } 
            )
        // x = e.clientX - rect.x;
        // y = e.clientY - rect.y;
        // console.log(`x: ${e.clientX - rect.x}, y: ${e.clientY - rect.y}`)
    };

    // const updateAnimationsLoaded = () => {document.cookie = `animationsLoaded=true; path="/"`};

    function animateMain() {
		anime({
		targets: [".dila-denge"],
		translateY: ['-80%', 0],
		rotate: ["-10deg", 0],
		scale: [0, 1],
		opacity: [0, 1],
		easing: 'spring(1, 80, 10, 4)',
		duration: 200,
		});

        anime({
		targets: [".everything-else", "header"],
		opacity: [0,1],
		easing: 'easeInSine',
		duration: 1000,

		});

        anime({
		targets: [".lottie"],
		opacity: [0,1],
		easing: 'easeInSine',
		duration: 2000,
		});	
        anime({
		targets: [".get-started"],
		opacity: [0,1],
		easing: 'easeInSine',
		duration: 500,
		});	
	}
    afterUpdate(() => {
		animateMain();
	});
    
    

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="lg:bg-background">
    <nav class="main-container  flex justify-center text-center lg:px-16 px-4 dark:bg-gray-950 overflow-hidden lg:overflow-hidden pb-12">
        <Blob></Blob>
        <div class="xl:pt-[150px] pt-[150px] xl:pb-[200px] pb-[100px] flex justify-center items-center xl:gap-40 md:gap-28 select-none xl:flex-row flex-col">
            <div class="flex justify-center items-center flex-col lg:px-0 px-2 gap-2 z-[2]">
                <!-- {console.log(data?.animationsLoaded)} -->
                {#if data?.animationsLoaded === "false"}
                    <Typewriter cursor={true} interval=85 mode="concurrent">
                        <h2 class="lg:text-3xl text-xl select-none text-black/90 font-instrument">
                           {upperText}
                        </h2>
                    </Typewriter>
                {/if}
                {#if data?.animationsLoaded === "true"}
                    <h2 class="lg:text-3xl text-xl select-none text-black/90 font-instrument">
                        {upperText}
                    </h2>
                {/if}
                <h2 class="dila-denge bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible h-[80px] font-[900]">{lowerText}</h2>
                <p class="text-xl get-started max-w-[700px] text-text pb-2">Compassionately providing essentials, shelter, and hope to our homeless neighbors, helping them rebuild their lives with dignity and support.</p>
                <a href="/register" class="get-started btn rounded-xl py-1 px-6 bg-gradient1 hover:bg-gradient1/5 hover:text-text hover:border-gradient1 border-1 border-background text-background font-bold">Get Started</a>
                <!-- <button class="know-more mt-4 py-2 px-4 text-xl font-instrument text-text border-2 border-gradient2 hover:bg-gradient2 rounded-xl cursor-pointer">
                    Know More
                </button> -->
                <!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
            </div>
            <div class="rounded-3xl lg:p-0 p-10 ">
                <lottie-player src={landingPageLottieFile} background="transparent" speed="1" direction="1" mode="normal" loop autoplay></lottie-player>
            </div>


            
        </div>
    </nav>

    <nav class="lg:flex block">
        <h1 class="dila-denge pt-24 lg:w-1/3 text-center bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">PROBLEMS</h1>

        <a href="#" class="m-10 block lg:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Environmental Challenge</h5>
            <p class="font-normal text-lg text-center text-gray-900 dark:text-gray-400 pt-5">Pollution and climate change pose severe threats to our planet. Deforestation, urbanization, and industrialization have led to reduced green cover, contributing to rising pollution levels and global warming.</p>
        </a>
        <a href="#" class="block m-10 h-60 lg:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Social Challenge</h5>
            <p class="font-normal text-lg text-center text-gray-900 dark:text-gray-400 pt-5">Unemployment and homelessness are pressing issues, and many individuals lack access to training and opportunities to improve their lives.
            </p>
        </a>

    </nav>
    <nav class="lg:flex block">
        <h1 class="dila-denge lg:pl-20 lg:w-1/3 pt-24 pl-0 text-center bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">SOLUTIONS</h1>
<div class="block lg:pl-24 ">
        <a href="#" class="m-10 block  h-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Urban Reforestation</h5>
            <p>We will plant trees and other greenery in urban areas, increasing the overall green cover, improving air quality, and combating climate change. </p>
        </a>
        <a href="#" class="block m-10 p-6 h-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Skills Training</h5>
            <p class="font-normal text-lg text-center text-gray-900 dark:text-gray-400 pt-5">We will provide training in drone technology, urban forestry, and environmental management to unemployed and homeless individuals. This training will equip them with valuable skills for employment in the growing field of green technology.
            </p>
        </a>
</div>
        <div class="block">
            <a href="#" class="m-10 block  h-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Employment Opportunities</h5>
                <p>Our goal is to create sustainable employment opportunities within our project and connect participants with organizations in need of drone-assisted reforestation and green infrastructure development.
                </p>
            </a>
            <a href="#" class="block m-10 p-6 h-60 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Community Impact</h5>
                <p class="font-normal text-lg text-center text-gray-900 dark:text-gray-400 pt-5">By planting trees and training individuals, we aim to create a positive ripple effect in our community. A greener environment will improve the overall quality of life, while individuals will gain valuable skills and a sense of purpose.
                </p>
            </a>
        </div>

    </nav>

    <nav class="lg:flex block">
        <h1 class="dila-denge pt-24 pl-20 text-center bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">WHY IT MATTERS?</h1>

        <a href="#" class="m-10 block  pt-14 bg-white ">

            <p class="font-normal text-lg px-24 text-center text-gray-900 dark:text-gray-400 pt-5">Our visionary project seamlessly intertwines the principles of environmental stewardship and social empowerment, providing innovative solutions to confront not only the pressing issues of today but also the enduring challenges of tomorrow. This multifaceted initiative not only champions the cause of environmental sustainability but also extends a lifeline to marginalized individuals, granting them the opportunity to not only reclaim but also rejuvenate their lives. In doing so, we're not just addressing the urgent needs of our planet but also nurturing the seeds of a more equitable and sustainable future for all.</p>
        </a>


    </nav>



    <nav class="lottie overflow-hidden">

        <div class="lg:py-48 py-24 lg:flex flex-col dark:bg-gray-950 overflow-hidden">
            <!-- <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) both" once={true}></Saos> -->
            <h1 class="dila-denge  text-center bg-gradient-to-r from-gradient1 to-gradient2  text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible h-[80px] font-[900]">Supporting the Homeless<br> Essential Supplies</h1>
            <div class="p-10 justify-center items-center text-text m-0 flex">
                <p class="font-instrument text-center lg:text-xl text-md text center select-none max-w-[750px]">Offering essential items and support to those experiencing homelessness with compassion.</p>
            </div>
            <div class=" py-20 px-4 lg:px-20 just font-instrument select-none flex justify-center items-center flex-wrap gap-8">
                {#each data?.records as record}
                    <article class=" rounded-3xl bg-gradient1/10 lg:w-1/5 transition xl:max-w-[800px] dark:bg-gray-900 hover:shadow-lg">


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
                                        href={`/Events/${record.Link}`}
                                        class="w-full block bg-gradient1/40 bg-secondary px-5 py-3 text-center lg:text-xs text-xs uppercase text-text transition lg:rounded-bl-3xl rounded-b-3xl "
                                >
                                    Know More
                                </a>
                            </div>
                        </div>
                    </article>

                {/each}
            </div>
            <!-- </Saos> -->
        </div>
    </nav>

</div>
