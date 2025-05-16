import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, price, image, category, storeId } = body;
    if (!name || !price || !image || !category || !storeId) {
      return new Response(JSON.stringify({ error: "Мэдээлэл дутуу байна" }), {
        status: 400,
      });
    }

    const newProduct = new Product({
      name,
      price,
      image,
      category,
      store: storeId,
    });

    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Серверийн алдаа" }), {
      status: 500,
    });
  }
}
