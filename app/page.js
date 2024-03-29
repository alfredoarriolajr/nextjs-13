import { Suspense } from 'react';
import TodosList from './todos/TodosList';

export default function Page() {
    return (
        <div className='flex flex-col space-y-10'>
            <Suspense
                fallback={
                    <p className='text-red-500'>Loading the Todos.....</p>
                }>
                <h1>Loading Todos</h1>
                <div className='flex space-x-2'>
                    <TodosList />
                </div>
            </Suspense>

            <Suspense
                fallback={
                    <p className='text-blue-500'>
                        Loading the Shopping Trolley.....
                    </p>
                }>
                <h1>Loading Shopping Trolley</h1>
                <div className='flex space-x-2'>
                    <TodosList />
                </div>
            </Suspense>
        </div>
    );
}
