'use client'

import { useActionState } from 'react'
import { addItem } from './actions'



export function Form({ id }: { id?: string }) {
    
    const initialState = {
        success: false
    };
    const [state, formAction, pending] = useActionState(
        async (state: { success: boolean } | null, formData: FormData) => {
            return await addItem(formData, initialState);
        },
        initialState
    );

    return (
        <form action={formAction}>
            <input type="text" name="text" required />
            <p aria-live="polite">{state?.success ? 'Success!' : ''}</p>
            <button disabled={pending}>Add question</button>
        </form>
    )
}