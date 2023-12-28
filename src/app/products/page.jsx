'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {db} from '@/firebase'

export default function Home() {
  const [products, setProducts]= useState([])

  useEffect(() => {
    const getproducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs);
    };
    getproducts();
  }, [products]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products ? products.map((product)=>{
        return <div key={product.id}>{product.data().name}</div>
      }): null}

     
    </main>
  )
}
