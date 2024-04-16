import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Product',
}

export default function ProductPage() {
    return (
        <div >
            <h1 className="text-9xl">Trang Chính</h1>
            <p>this page product</p>
        </div>
    );
}