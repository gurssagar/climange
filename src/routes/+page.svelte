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
    const landingPageLottieFile2 ="farming.json"
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
                class="flex justify-center items-center flex-col lg:px-0 px-2 gap-2 z-[2]"
            >
                <!-- {console.log(data?.animationsLoaded)} -->
                {#if data?.animationsLoaded === "false"}
                    <Typewriter cursor={true} interval="50" mode="concurrent">
                        <h2
                            class="lg:text-xl text-lg select-none text-black/90 font-instrument"
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
                <p class="lg:text-lg text-md get-started max-w-[600px] text-text pt-6 pb-2">
                    Leveraging drones alongside PUSA Bio-Decomposer technology offers a cost-effective solution to effectively eliminate stubble burning.
                </p>
                    
                <a href="/register">
                    <div class="b mx-auto h-16 w-60 flex justify-center items-center">
                        <div class="i h-16 w-60 bg-gradient-to-br from-gradient1 to-gradient2 items-center rounded-full cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                        </div>
                        <a class="text-center text-white text-xl font-semibold z-10 pointer-events-none font-display">GET STARTED</a>
                    </div>
                </a>
                <!-- <button class="know-more mt-4 py-2 px-4 text-xl font-instrument text-text border-2 border-gradient2 hover:bg-gradient2 rounded-xl cursor-pointer">
                    Know More
                </button> -->
                <!-- <p class="font-instrument lg:text-2xl text-md lg:max-w-[650px] max-w-[350px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum lorem.</p> -->
            </div>
            <div class="rounded-3xl w-[600px] h-auto lg:p-0 p-10">
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
            <nav class="flex justify-center items-center md:flex-col flex-col  lg:px-12 px-4 gap-16">
            <div class="lg:w-[450px] block">
                <h1
                                class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
                            >
                                Problems
                            </h1>
            </div>
                
            <div class="flex justify-end items-center lg:flex-row flex-col gap-8">
                    <a
                    href="#"
                    class= " flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Economic Losses
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            It can result in economic losses for the agriculture sector, as the nutrients in crop residues are lost, and farmers may face fines or penalties for illegal burning.
                        </p>
                    </div>
                    
                </a>
                <a
                    href="#"
                    class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                        class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Legal Consequences
                        </h5>
                        <p
                            class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            In many regions, stubble burning is illegal, and farmers engaging in the practice can face legal consequences.
                        </p>
                    </div>
                    
                </a>


                <a
                        href="#"
                        class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
                >
                    <div>
                        <h5
                                class="mb-2 lg:text-xl text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            Social Disputes
                        </h5>
                        <p
                                class="font-normal lg:text-md text-sm text-center text-gray-900 dark:text-gray-400"
                        >
                            Stubble burning can lead to conflicts between farmers and neighboring communities due to the negative impacts on air quality and health.
                        </p>
                    </div>

                </a>

                <a
                        href="#"
                        class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                            The release of carbon dioxide and other greenhouse gases from burning contributes to global climate change.
                        </p>
                    </div>

                </a>


                <a
                        href="#"
                        class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                            Instead of burning, crop residues can be used for various purposes, such as mulching, composting, or bioenergy production, which are more environmentally friendly and economically valuable.                        </p>
                    </div>

                </a>

            </div>


                <div class="flex justify-end items-center lg:flex-row flex-col gap-8">
                    <a
                            href="#"
                            class= " flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                The burning of crop residues releases harmful pollutants and particulate matter into the air, contributing to poor air quality and respiratory issues.

                            </p>
                        </div>

                    </a>
                    <a
                            href="#"
                            class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                Prolonged exposure to the smoke from stubble burning can lead to various health problems, including respiratory diseases, eye irritation, and allergies.
                            </p>
                        </div>

                    </a>


                    <a
                            href="#"
                            class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                Stubble burning depletes soil nutrients, harms soil health, and contributes to soil erosion. It also releases greenhouse gases, exacerbating climate change.
                            </p>
                        </div>

                    </a>

                    <a
                            href="#"
                            class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                The practice can harm local ecosystems and wildlife by destroying habitats and reducing food sources.
                            </p>
                        </div>

                    </a>


                    <a
                            href="#"
                            class=" flex justify-center items-center min-h-[250px] lg:w-1/2 p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                Thick smoke from stubble burning can reduce visibility, increasing the risk of accidents on roads and highways.
                            </p>
                        </div>

                    </a>

                </div>

            </nav>

        <nav class="flex justify-between items-center lg:flex-col flex-col  lg:px-12 px-4 gap-16">
            <div class=" block pt-80">
                <h1
                        class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
                >
                    Benefits of PUSA Bio Decomposer
                </h1>
            </div>
<div>

                <div class="mt-10">
                <div class="lg:flex block items-center gap-4 justify-center">
                <a
                        href="#"
                        class="lg:flex-grow-1 lg:mr-0  lg:w-1/5 lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                            PUSA Bio-Decomposer is used to treat crop residues, such as rice straw and wheat straw, left in the fields after harvest.
                        </p>
                    </div>

                </a>

                    <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-1/5 lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                The technology involves the application of a mixture containing beneficial microbes to the crop residues.
                            </p>
                        </div>

                    </a>

                    <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-1/5 lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                These microbes accelerate the natural decomposition process of crop residues, breaking them down into organic matter.
                            </p>
                        </div>

                    </a>
                    <a
                            href="#"
                            class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-1/5 lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                                PUSA Bio-Decomposer enhances nutrient recycling, returning valuable organic matter and nutrients to the soil, which can improve soil health and fertility.
                            </p>
                        </div>

                    </a>


                <a
                        href="#"
                        class="lg:flex-grow-1 lg:w-1/5 lg:mt-0 mt-8 lg:mt-0 mt-4 lg:mt-0 mt-4 lg:flex-shrink-0 flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                            By effectively decomposing crop residues, it reduces the need for stubble burning, which in turn helps mitigate air pollution and environmental damage.
                        </p>
                    </div>

                </a>

            </div>

            </div>



    <div class="mt-10">
        <div class="lg:flex block justify-center  gap-4">
            <a
                    href="#"
                    class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-1/5 lg:mt-0 mt-8 lg:flex-shrink-0  flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                        The organic matter added to the soil enhances its structure, moisture retention capacity, and nutrient availability, leading to improved crop yields over time.
                    </p>
                </div>

            </a>

            <a
                    href="#"
                    class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-1/5 lg:mt-0 mt-8 lg:flex-shrink-0  flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                        PUSA Bio-Decomposer helps reduce greenhouse gas emissions associated with stubble burning, contributing to environmental conservation.
                    </p>
                </div>

            </a>

            <a
                    href="#"
                    class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:lg:w-1/5 lg:mt-0 mt-8 lg:flex-shrink-0  flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                        In regions where stubble burning is a prevalent issue, government authorities may promote and subsidize the use of PUSA Bio-Decomposer to encourage its adoption by farmers.
                    </p>
                </div>

            </a>

            <a
                    href="#"
                    class="lg:flex-grow-1 lg:lg:lg:lg:mr-0 lg:w-1/5 lg:mt-0 mt-8 lg:flex-shrink-0  flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                        It can be applied at the community level, where farmers collectively use the technology to manage crop residues and reduce the harmful effects of stubble burning.
                    </p>
                </div>

            </a>

            <a
                    href="#"
                    class="lg:flex-grow-1 lg:w-1/5 lg:mt-0 mt-4 lg:flex-shrink-0  flex justify-center items-center min-h-[250px] p-6 border-2 border-gradient2 rounded-2xl dark:bg-gray-800  hover:bg-gradient1/10 transition-all duration-300 ease-in-out hover:border-gradient1"
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
                        By planting trees and training individuals, we aim to create
                        a positive ripple effect in our community. A greener
                        environment will improve the overall quality of life, while
                        individuals will gain valuable skills and a sense of
                        purpose.
                    </p>
                </div>

            </a>

        </div>

    </div>


</div>
        </nav>
        

    </div>
    
    <nav class="flex justify-between items-center lg:flex-col flex-col  lg:pt-60 lg:px-12 px-4">
        <h1
            class="dila-denge pt-24 text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
        >
            Why does it matter?
        </h1>

<div class="flex pt-20">
        <p
            class="font-normal w-1/2 max-w-[800px] text-lg lg:px-0 px-4 text-center text-gray-900 dark:text-gray-400 pt-5"
        >
            <br> Crop burning matters significantly due to its adverse impacts on health, the environment, and the economy. It releases harmful pollutants and particulate matter into the air, leading to poor air quality and various health problems. Prolonged exposure to the smoke can cause respiratory issues, cardiovascular diseases, and eye irritation, particularly affecting vulnerable populations.

            <br> <br>Environmental damage results from crop burning, including soil nutrient depletion, reduced fertility, and soil erosion. It also contributes to climate change by emitting greenhouse gases. Loss of biodiversity occurs as habitats are destroyed, affecting local wildlife and plant species.

            <br> <br>Economically, crop burning leads to losses in the agriculture sector, with nutrients in crop residues wasted and reduced crop yields in subsequent seasons. It can also disrupt transportation and daily activities due to reduced visibility. In many regions, it is illegal, resulting in legal consequences and social conflicts between farmers and neighboring communities.

            <br> <br>Crop burning is a wasteful practice, as crop residues can be utilized for mulching, composting, or bioenergy production. Implementing sustainable alternatives like no-till farming or technologies such as PUSA Bio-Decomposer is crucial to mitigate these negative impacts and promote healthier, more environmentally friendly agricultural practices.
        </p>

        <div class="rounded-3xl lg:w-[600px] h-auto lg:p-0 p-10 lg:ml-20 ">
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
    </nav>

    <nav class="lottie overflow-hidden">
        <div
            class="lg:py-48 py-24 lg:flex flex-col dark:bg-gray-950 overflow-hidden"
        >
            <!-- <Saos animation="-global-from-left 1.2s cubic-bezier(.62,.04,.51,.98) both" once={true}></Saos> -->
            <h1
                class="dila-denge text-center bg-gradient-to-r from-gradient1 to-gradient2 text-transparent bg-clip-text text-[44px] lg:text-7xl text-4xl select-none block font-instrument overflow-visible font-[900]"
            >
                Supporting the Homeless<br /> Essential Supplies
            </h1>
            <div class="p-10 justify-center items-center text-text m-0 flex">
                <p
                    class="font-instrument text-center lg:text-xl text-md text center select-none max-w-[750px]"
                >
                    Offering essential items and support to those experiencing
                    homelessness with compassion.
                </p>
            </div>
            <div
                class=" py-20 px-4 lg:px-20 just font-instrument select-none flex justify-center items-center flex-wrap gap-8"
            >
                {#each data?.records as record}
                    <article
                        class=" rounded-3xl bg-gradient1/10 lg:w-1/5 transition xl:max-w-[800px] dark:bg-gray-900 hover:shadow-lg"
                    >
                        <div class="lg:block lg:basis-56">
                            <img
                                alt="Guitar"
                                src={`${record.Image_Link}`}
                                class="aspect-square h-full w-full object-cover"
                            />
                        </div>

                        <div class="flex flex-1 flex-col justify-between">
                            <div
                                class="border-s border-gray-900/10 p-4 lg:border-l-transparent lg:p-6"
                            >
                                <a href="/">
                                    <h3
                                        class="font-bold text-center uppercase text-lg lg:text-xl text-text"
                                    >
                                        {`${record.Heading}`}
                                    </h3>
                                </a>

                                <p
                                    class="mt-2 line-clamp-3 lg:text-lg/relaxed text-lg text-text"
                                >
                                    {`${record.Text_Input}`}
                                </p>
                            </div>

                            <div class="lg:flex w-full">
                                <a
                                    href={`/Events/${record.Link}`}
                                    class="w-full block bg-gradient1/40 bg-secondary px-5 py-3 text-center lg:text-xs text-xs uppercase text-text transition lg:rounded-bl-3xl rounded-b-3xl"
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
