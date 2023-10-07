import { error, redirect } from '@sveltejs/kit';

export const actions = {
    contact: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        try {

            await locals.pb.collection('Contact').create({...body });

        } catch (err) {
            alert('Something went wrong');
        }

        throw redirect(303, '/submitted');
    }
};