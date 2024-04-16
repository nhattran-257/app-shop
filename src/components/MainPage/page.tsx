
export default function MainPage() {
    return (
        <>
            <section className="content-center bg-gray-800 text-white py-16 w-auto h-[44rem] bg-cover bg-[url(https://theme.hstatic.net/1000363124/1000462158/14/slideshow_1.jpg?v=1764)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* <h2 className="text-4xl font-semibold mb-4">Thời Trang Cho Mọi Người</h2>
                        <p className="mb-8">Chào mừng đến với cửa hàng quần áo của chúng tôi. Chúng tôi cung cấp các sản phẩm thời
                            trang
                            chất lượng với giá cả phải chăng.</p> */}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">Sản Phẩm Nổi Bật</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/400" className="w-full"></img>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Áo Thun Nam</h3>
                                <p className="text-gray-600">Mô tả ngắn về sản phẩm.</p>
                                <div className="mt-4">
                                    <span className="text-gray-800 font-semibold">$20</span>
                                    <a href="#" className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full ml-4">Thêm
                                        Vào Giỏ Hàng</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/400" className="w-full"></img>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Quần Jean Nữ</h3>
                                <p className="text-gray-600">Mô tả ngắn về sản phẩm.</p>
                                <div className="mt-4">
                                    <span className="text-gray-800 font-semibold">$30</span>
                                    <a href="#" className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full ml-4">Thêm
                                        Vào Giỏ Hàng</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="https://via.placeholder.com/400" className="w-full"></img>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Áo Sơ Mi Nữ</h3>
                                <p className="text-gray-600">Mô tả ngắn về sản phẩm.</p>
                                <div className="mt-4">
                                    <span className="text-gray-800 font-semibold">$25</span>
                                    <a href="#" className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full ml-4">Thêm
                                        Vào Giỏ Hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}