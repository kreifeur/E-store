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
  const [newproduct,setNewproduct]= useState({
    name:''
  })

  useEffect(() => {
    const getproducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs);
    };
    getproducts();
  }, [products]);


  const addproduct = async () => {
    if (newproduct.name != "") {
      try {
        const docRef = await addDoc(collection(db, "products"), newproduct);
      } catch (e) {}
      setNewproduct({ name: ""});
    }
    else {
      alert('please enter cord' )
    }}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <input placeholder='product name' value={newproduct.name}  type="text" onChange={(e)=>setNewproduct({...newproduct , name: e.target.value})} />
            <button onClick={addproduct}>add product</button>
        </div>
      {products ? products.map((product)=>{
        return <div key={product.id}>
            <div>
            {product.data().name}
            </div>
            <button onClick={async () => {
                      await deleteDoc(doc(db, "products", product.id));
                    }}>delete</button>

            <button onClick={async () => {
                      await setDoc(doc(db, "products", product.id), {
                        name: "isis",
                      });
                    }}>update</button>
        </div>
      }): null}

     
    </main>
  )
}
