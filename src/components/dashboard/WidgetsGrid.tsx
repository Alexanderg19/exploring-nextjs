"use client"

import { IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );
    
  return (
    <div className="flex flex-wrap items-center justify-center">
        <SimpleWidget 
            subTitle='Productos agregados'
            title={ `${isCart}` }
            label='Contador'
            icon={ <IoCartOutline size={40} className='text-blue-500'/> }
            href='/dashboard/counter'
        />
    </div>
  )
}
