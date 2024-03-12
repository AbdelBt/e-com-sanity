
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "@/app/interface";


async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc){
        _id,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;
  const data = await client.fetch(query);
  return data;
}


export default async function All(){
  const data: simplifiedProduct[] = await getData();

    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-full lg:px-8">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
             Nos produits pour tout le monde
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                      <h3 className=" text-gray-700">
                          <Link href={`/product/${product.slug}`}>
                          {product.name}
                          </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">{product.categoryName}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">€{product.price}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}