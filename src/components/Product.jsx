import { products } from '../../products'
import WhatsAppOrderBtn from './WhatsappBtn/WhatsappBtn'
import './Product.css'

export function Product() {
    return (
        <section>
            <div>
                <img src="./product.webp" alt="product" className="w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
            </div>

            <div className="text-center px-md-5 px-3 pt-4 intro">Our list of products comprises herbal solutions, spiritual & holistic remedies, dietetics, e.t.c which all products are 100% natural.</div>

            <div className='product-grid-wrapper'>
                <h6 className='header'>Shop Now</h6>

                <div className="grid-container px-4 py-3">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="p-4 product-card">
                                {/* Product Img */}
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <div style={{ width: '210px', height: '210px', overflow: 'hidden' }} className="border rounded-3 mb-3">
                                        <img src={product.img} alt={product.name} className='product-img' loading='lazy' />
                                    </div>
                                </div>
                                {/* Product Content */}
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <h6 style={{ fontWeight: 'bold', fontFamily: 'Exo' }}> {product.name} </h6>

                                    <ul className='list-unstyled mx-2 text-start' style={{ fontSize: 15, color: '#555' }}>
                                        {product.desc.map(descp => {
                                            return (
                                                <li key={descp.option} style={{ fontFamily: 'Glory', maxWidth: '250px' }}>
                                                    <span className='fw-bold me-1'>✓</span>
                                                    {descp.option}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    
                                    <div className='text-center mt-2'>
                                        <WhatsAppOrderBtn productName={product.name} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            

            <p className='text-center fw-bold text-success'>We look forward to adding more products soon!</p>

            <div className='d-flex align-items-center justify-content-center my-4'>
                <div className='p-2 ps-3 disclaimer'>
                    <span className='fw-bold'>Disclaimer:</span> All our products are 100% natural and inspired by traditional Islamic values. They are designed to support your body wellness naturally.
                </div>
            </div>
            
        </section>
    )
}