<!-- App.svelte -->
<script>
    import anime from "animejs";
    import { afterUpdate } from "svelte";
    import { onMount } from "svelte";
    import Typewriter from "svelte-typewriter";
    import Blob from "./blob.svelte";
    let LottiePlayer;
    let mainContainer;
    let acceptTerms = false;
    let upperText = "Eliminate stubble burning for a cleaner environment.";
    let lowerText = "Stop Stubble Burning";
    export let data;
    const a = "/static/bg2.jpg";
    let controlsLayout = [];
    const landingPageLottieFile = "plant2.json";
    const droneLottieFile = "drone.json";
    const landingPageLottieFile2 = "farming.json";
    const pricingLotteFile = "pricing.json"
    const mobilefile = "animat.json";
    onMount(async () => {
        const module = await import("@lottiefiles/svelte-lottie-player");
        LottiePlayer = module.LottiePlayer;
        animateMain();
        // if (data?.animationsLoaded === 'false') {
        //     document.cookie = `animationsLoaded=true; path="/"`;
        // }
    });
    let TN = [];

    onMount(() => {
        TN = data?.records;
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
                    left: y,
                },
                {
                    top: (y - 200).toString() + "px",
                    left: (x - 300).toString() + "px",
                },
            ],
            {
                duration: 10000,
                iterations: 1,
                delay: 400,
                easing: "cubic-bezier(0.49, 0.47, 0.63, 0.85)",
            }
        );
        // x = e.clientX - rect.x;
        // y = e.clientY - rect.y;
        // console.log(`x: ${e.clientX - rect.x}, y: ${e.clientY - rect.y}`)
    }

    // const updateAnimationsLoaded = () => {document.cookie = `animationsLoaded=true; path="/"`};

    function animateMain() {
        // anime({
        //     targets: [".dila-denge"],
        //     translateY: ["-80%", 0],
        //     rotate: ["-10deg", 0],
        //     scale: [0, 1],
        //     opacity: [0, 1],
        //     easing: "spring(1, 80, 10, 4)",
        //     duration: 200,
        // });
        // anime({
        //     targets: [".everything-else", "header"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 1000,
        // });
        // anime({
        //     targets: [".lottie"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 2000,
        // });
        // anime({
        //     targets: [".get-started"],
        //     opacity: [0, 1],
        //     easing: "easeInSine",
        //     duration: 500,
        // });
    }
    afterUpdate(() => {
        animateMain();
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="lg:bg-background">
    <nav
        class="main-container flex justify-center text-center lg:px-12 px-4 dark:bg-gray-950 overflow-hidden lg:overflow-hidden pb-12"
    >
        <Blob />
        <div
            class="xl:pt-[150px] pt-[150px] xl:pb-[200px] pb-[100px] flex justify-center items-center xl:gap-16 md:gap-12 gap-8 select-none xl:flex-row flex-col"
        >
            <div
                class="flex-wrap flex justify-center items-center flex-col lg:px-0 px-2 gap-2 z-[2]"
            >
                <!-- {console.log(data?.animationsLoaded)} -->
                {#if data?.animationsLoaded === "false"}
                    <Typewriter cursor={true} interval="50" mode="concurrent">
                        <h2
                            class="lg:text-xl text-sm select-none text-black/90 font-instrument"
                        >
                            {upperText}
                        </h2>
                    </Typewriter>
                {/if}
                {#if data?.animationsLoaded === "true"}
                    <h2
                        class="lg:text-xl text-lg select-none text-black/90 font-instrument"
                    >
                        {upperText}
                    </h2>
                {/if}
                <h2
                    class="dila-denge bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
                >
                    {lowerText}
                </h2>
                <p
                    class="lg:text-lg text-md get-started max-w-[600px] text-text pt-6 pb-2"
                >
                    Leveraging drones alongside PUSA Bio-Decomposer technology
                    offers a <b>cost-effective solution</b> to effectively eliminate
                    stubble burning.
                </p>

                <a href="/register">
                    <div
                        class="b mx-auto lg:h-16 lg:w-60 w-48 h-12 flex justify-center items-center"
                    >
                        <div
                            class="i lg:h-16 lg:w-60 w-48 h-12 bg-gradient-to-br from-gradient1 to-gradient2 items-center rounded-full cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
                        />
                        <a
                            class="text-center text-white lg:text-xl text-lg font-semibold z-10 pointer-events-none font-display"
                            >GET STARTED</a
                        >
                    </div>
                </a>
                <!-- <button class="know-more mt-4 py-2 px-4 text-xl font-instrument text-text border-2 border-gradient2 hover:bg-gradient2 rounded-xl cursor-pointer">
                    Know More
                </button> -->
                <!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
            </div>
            <div
                class="rounded-3xl flex justify-center items-center lg:w-[600px] w-[350px] h-auto lg:p-0 p-10"
            >
                <lottie-player
                    src={landingPageLottieFile}
                    background="transparent"
                    speed="1"
                    direction="1"
                    mode="normal"
                    loop
                    autoplay
                />
            </div>
        </div>
    </nav>
    <div class="flex justify-center items-center gap-12 flex-col lg:px-20 px-2">
        <nav class="flex justify-center items-center md:flex-col flex-col lg:px-12 px-4 gap-16 max-w-[2000px]">
            <div class="lg:w-[450px] block">
                <h1 class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">
                    Problems
                </h1>
            </div>
        
            <div class="flex justify-center items-center lg:flex-row flex-col flex-wrap gap-8">
                <!-- Box 1 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Economic Losses
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            It can result in economic losses for the agriculture sector, as the nutrients in crop residues are lost, and farmers may face fines or penalties for illegal burning.
                        </p>
                    </div>
                </a>
        
                <!-- Box 2 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Legal Consequences
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            In many regions, stubble burning is illegal, and farmers engaging in the practice can face legal consequences.
                        </p>
                    </div>
                </a>
        
                <!-- Box 3 -->
                <a href="#" class="flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1">
                    <div>
                        <h5 class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Social Disputes
                        </h5>
                        <p class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400">
                            Stubble burning can lead to conflicts between farmers and neighboring communities due to the negative impacts on air quality and health.
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Global Climate Impact
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            The release of carbon dioxide and other greenhouse
                            gases from burning contributes to global climate
                            change.
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Alternative Resource Loss
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Instead of burning, crop residues can be used for
                            various purposes, such as mulching, composting, or
                            bioenergy production, which are more environmentally
                            friendly and economically valuable.
                        </p>
                    </div>
                </a>
        
                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Air Pollution
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            The burning of crop residues releases harmful
                            pollutants and particulate matter into the air,
                            contributing to poor air quality and respiratory
                            issues.
                        </p>
                    </div>
                </a>
                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Health Risks
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Prolonged exposure to the smoke from stubble burning
                            can lead to various health problems, including
                            respiratory diseases, eye irritation, and allergies.
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Environmental Damage
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Stubble burning depletes soil nutrients, harms soil
                            health, and contributes to soil erosion. It also
                            releases greenhouse gases, exacerbating climate
                            change.
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Loss of Biodiversity
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            The practice can harm local ecosystems and wildlife
                            by destroying habitats and reducing food sources.
                        </p>
                    </div>
                </a>

                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-[calc(33%-20px)] w-full p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                            class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Visibility Issues
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Thick smoke from stubble burning can reduce
                            visibility, increasing the risk of accidents on
                            roads and highways.
                        </p>
                    </div>
                </a>
            </div>
        </nav>        

        <nav class="flex justify-center items-center md:flex-col flex-col lg:px-12 px-4 gap-16 max-w-[2000px]">
            <div class="lg:max-w-[1200px] block">
                <h1 class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]">
                    Benefits of PUSA Bio Decomposer
                </h1>
            </div>
        
            <div class="flex justify-center items-center lg:flex-row flex-col flex-wrap gap-8">
                <!-- Box 1 -->
                <a
                href="#"
                class="lg:flex-grow-1 lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
            >
                <div>
                    <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Crop Residue Management
                    </h5>
                    <p
                        class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                    >
                        PUSA Bio-Decomposer is used to treat crop
                        residues, such as rice straw and wheat
                        straw, left in the fields after harvest.
                    </p>
                </div>
            </a>

            <a
                href="#"
                class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
            >
                <div>
                    <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Microbial Inoculation
                    </h5>
                    <p
                        class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                    >
                        The technology involves the application of a
                        mixture containing beneficial microbes to
                        the crop residues.
                    </p>
                </div>
            </a>

            <a
                href="#"
                class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
            >
                <div>
                    <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Accelerated Decomposition
                    </h5>
                    <p
                        class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                    >
                        These microbes accelerate the natural
                        decomposition process of crop residues,
                        breaking them down into organic matter.
                    </p>
                </div>
            </a>
            <a
                href="#"
                class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
            >
                <div>
                    <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Nutrient Recycling
                    </h5>
                    <p
                        class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                    >
                        PUSA Bio-Decomposer enhances nutrient
                        recycling, returning valuable organic matter
                        and nutrients to the soil, which can improve
                        soil health and fertility.
                    </p>
                </div>
            </a>

            <a
                href="#"
                class="lg:flex-grow-1 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
            >
                <div>
                    <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                    >
                        Reduction in Stubble Burning
                    </h5>
                    <p
                        class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                    >
                        By effectively decomposing crop residues, it
                        reduces the need for stubble burning, which
                        in turn helps mitigate air pollution and
                        environmental damage.
                    </p>
                </div>
            </a>
            <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                        >
                            <div>
                                <h5
                                    class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Improved Soil Health
                                </h5>
                                <p
                                    class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                                >
                                    The organic matter added to the soil
                                    enhances its structure, moisture retention
                                    capacity, and nutrient availability, leading
                                    to improved crop yields over time.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                        >
                            <div>
                                <h5
                                    class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Environmental Benefits
                                </h5>
                                <p
                                    class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                                >
                                    PUSA Bio-Decomposer helps reduce greenhouse
                                    gas emissions associated with stubble
                                    burning, contributing to environmental
                                    conservation.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                        >
                            <div>
                                <h5
                                    class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Government Initiatives
                                </h5>
                                <p
                                    class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                                >
                                    In regions where stubble burning is a
                                    prevalent issue, government authorities may
                                    promote and subsidize the use of PUSA
                                    Bio-Decomposer to encourage its adoption by
                                    farmers.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-8 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                        >
                            <div>
                                <h5
                                    class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Community-Based Approach
                                </h5>
                                <p
                                    class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                                >
                                    It can be applied at the community level,
                                    where farmers collectively use the
                                    technology to manage crop residues and
                                    reduce the harmful effects of stubble
                                    burning.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="lg:flex-grow-1 lg:w-[calc(33%-20px)] w-full lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800 hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                        >
                            <div>
                                <h5
                                    class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Community Impact
                                </h5>
                                <p
                                    class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                                >
                                    By planting trees and training individuals,
                                    we aim to create a positive ripple effect in
                                    our community. A greener environment will
                                    improve the overall quality of life, while
                                    individuals will gain valuable skills and a
                                    sense of purpose.
                                </p>
                            </div>
                        </a>
            </div>
        </nav>    

    </div>

    <nav
        class="flex justify-center items-center lg:flex-col flex-col lg:pt-2 lg:px-12 px-4"
    >
        <h1
            class="dila-denge pt-24 text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
        >
            Why does it matter?
        </h1>

        <div class="flex flex-col lg:flex-row lg:gap-16 gap-8 pt-20">
            <p
                class="font-normal max-w-[800px] text-lg lg:px-0 px-4 text-center text-gray-900 dark:text-gray-400 pt-5"
            >
                <br /> Crop burning matters significantly due to its adverse
                impacts on health, the environment, and the economy. It releases
                harmful pollutants and particulate matter into the air, leading
                to <b>poor air quality and various health problems</b>. Prolonged
                exposure to the smoke can cause respiratory issues,
                cardiovascular diseases, and eye irritation, particularly
                affecting vulnerable populations.

                <br /> <br />Environmental damage results from crop burning,
                including soil nutrient depletion, reduced fertility, and soil
                erosion. It also contributes to <b>
                    climate change by emitting
                    greenhouse gases
                </b>. Loss of biodiversity occurs as habitats are
                destroyed, affecting local wildlife and plant species.

                <br /> <br />Economically, crop burning leads to losses in the
                agriculture sector, with nutrients in crop residues wasted and
                reduced crop yields in subsequent seasons. It can also <b>
                    disrupt
                    transportation and daily activities due to reduced visibility
                </b>.
                In many regions, it is illegal, resulting in legal consequences
                and social conflicts between farmers and neighboring
                communities.

                <br /> <br />Crop burning is a wasteful practice, as crop
                residues can be utilized for mulching, composting, or bioenergy
                production. Implementing sustainable alternatives like <b>
                    no-till
                    farming
                </b> or technologies such as <b>PUSA Bio-Decomposer</b> is crucial
                to mitigate these negative impacts and promote healthier, more
                <b>environmentally friendly</b> agricultural practices.
            </p>
            <div class="w-full flex justify-center items-center">
                <div class="rounded-3xl lg:w-[600px] h-auto lg:p-0 p-10">
                    <lottie-player
                        src={landingPageLottieFile2}
                        background="transparent"
                        speed="1"
                        direction="1"
                        mode="normal"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </div>
    </nav>

    <nav
        class="flex justify-center items-center lg:flex-col flex-col lg:pt-2 lg:px-12 px-4 pb-12"
    >
        <h1
            class="dila-denge pt-24 text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
        >
            Rent A Drone
        </h1>

        <div class="flex flex-col lg:gap-16 gap-8 lg:flex-row-reverse pt-20">
            <p
                class="font-normal max-w-[800px] text-lg lg:px-0 px-4 text-center text-gray-900 dark:text-gray-400 pt-5"
            >
                Our Agricultural Drone Rental service is a game-changer for
                    farmers looking to enhance the effectiveness of applying PUSA
                Bio-Decomposer. Our <b>specialized drones</b> are equipped with
                precision spraying capabilities, allowing you to evenly and
                efficiently distribute the bio-decomposer across your fields.
                This targeted approach ensures <b>optimal decomposition</b> of crop
                residues, improving soil health and reducing the need for
                burning.
                <br /><br />
                With our rental service, you can access this advanced technology
                without the financial burden of drone ownership. Our expert operators
                will assist you in setting up and executing precise spraying missions,
                guaranteeing that you get the most out of your PUSA Bio-Decomposer
                applications.
            </p>
            <div class="w-full flex justify-center items-center">
                <div
                    class="rounded-3xl flex justify-center items-center lg:w-[400px] h-auto lg:p-0 p-10"
                >
                    <lottie-player
                        src={droneLottieFile}
                        background="transparent"
                        speed="1"
                        direction="1"
                        mode="normal"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </div>
    </nav>
    <section
        class="w-full py-12 flex flex-col gap-12 items-center justify-center pb-48 text-text"
    >
            <h1
            class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
        >
            Our Pricing
        </h1>    
        <div class="container px-4 md:px-6 w-full">
            <div class="flex justify-center lg:flex-row flex-col w-full items-center gap-6 md:gap-8">
                
                <p
                class="font-normal max-w-[800px] text-lg lg:px-0 px-4 text-center text-gray-900 dark:text-gray-400 "
                    >
                    Renting a drone for PUSA Bio-Decomposer application at a rate of <b>₹600 per day</b> offers an affordable and efficient solution for farmers and agronomists. Our specialized agricultural drones are equipped with precision spraying capabilities, making them ideal for applying PUSA Bio-Decomposer with pinpoint accuracy.
                    <br><br>
                    With this rental service, you gain access to <b>cutting-edge technology</b> without the high upfront costs of ownership. Our expert operators will assist in setting up and executing precise spraying missions, ensuring thorough coverage and efficient decomposition of crop residues.
                    </p>

                <div class="flex justify-center items-center">
                    <div class="rounded-3xl flex justify-center items-center lg:w-[350px] h-auto lg:p-0 p-10">
                        <lottie-player
                            src={pricingLotteFile}
                            background="transparent"
                            speed="1"
                            direction="1"
                            mode="normal"
                            loop
                            autoplay
                        />
                    </div>
                </div>

            </div>
            <div class="flex justify-center w-full items-center gap-6 mt-8 md:gap-8">
            <div
                    class="relative w-[500px] flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-center border border-gradient2">
                    <div
                        class="px-3 py-1 text-sm text-white bg-gradient-to-r from-gradient1 to-gradient2 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        Popular
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-center">Pro</h3>
                        <div
                            class="mt-4 text-center text-zinc-600 dark:text-zinc-400"
                        >
                            <span class="text-4xl font-bold"> <sup class="text-xl">₹</sup> 600 </span>
                            / acre
                        </div>
                        <ul class="mt-4 space-y-2">
                            <li class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class=" text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
                                    ><polyline points="20 6 9 17 4 12" /></svg
                                >
                                Efficient Spraying by Drone
                            </li>
                            <li class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                                    ><polyline points="20 6 9 17 4 12" /></svg
                                >
                                Faster Execution
                            </li>
                            <li class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                                    ><polyline points="20 6 9 17 4 12" /></svg
                                >
                                Includes Cost of PUSA Bio-Decomposer
                            </li>
                            <li class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                                    ><polyline points="20 6 9 17 4 12" /></svg
                                >
                                Ability To Sell Excess Manure
                            </li>
                            <li class="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
                                    ><polyline points="20 6 9 17 4 12" /></svg
                                >
                                24/7 Support
                            </li>
                        </ul>
                    </div>
                    <div class="mt-6">
                        <button
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-gradient1 to-gradient2 text-background"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
