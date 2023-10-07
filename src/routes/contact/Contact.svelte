<script>
    import anime from "animejs";
    import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		animateMain();
	});

	afterUpdate(() => {
		animateMain();
	});

	function animateMain() {
		anime({
		targets: [".contact-container"],
		translateY: ['150%', 0],
		opacity: [0, 1],
		easing: 'easeInOutSine',
		duration: 1500,
		});
    };

</script>
<style>
    :root {
        overflow-x: hidden;
    }
</style>
<div class="max-w-screen">
    <div class="py-32 flex justify-center items-center lg:flex-row flex-col ">
        <div class="md:col-span-4 p-10 pl-10 text-text select-none">

            <h3 class="lg:text-7xl text-5xl leading-normal bg-gradient-to-r  to-gradient1 from-gradient2 text-transparent bg-clip-text  select-none tracking-tight font-final ">
                CONTACT US
            </h3>

            <div class="flex items-center mt-5 space-x-3">
                <span class="text-lg max-w-xl">We're committed to providing exceptional service. Contact us for any assistance you may need. </span>
            </div>
            
        </div>
        <form action="?/contact" method="POST" class="md:col-span-8 p-10 my-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 md:mb-0">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="name">
                        First Name
                    </label>
                    <input type="text" name="name" class="appearance-none block w-full bg-gray-200/70 text-black rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100" placeholder="">

                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="email">
                        Email Address
                    </label>
                    <input type="email" name="email" class="appearance-none block w-full bg-gray-200/70 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500" placeholder="">
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-text/80 text-xs font-bold mb-2" for="Message">
                        Your Message
                    </label>
                    <input name="message" type="text" class="appearance-none block w-full bg-gray-200/70 text-black border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500">

                </div>
                <div class="flex justify-between w-full px-3 pt-6">
                    <button class="shadow bg-gradient-to-tr from-gradient1 to-gradient2 duration-700 ease-in-out transition-all hover:border-2 rounded-lg border-2 border-gradient1 text-white font-bold py-3 px-8" type="submit">
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>
</div>





