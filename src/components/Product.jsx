import { Header } from './Header'
import { products } from '../../products'
import WhatsAppOrderBtn from './WhatsappBtn'
import './Product.css'

export function Product() {
    return (
        <>
            <Header />
            <section>
                <div>
                    <img src="./product.webp" alt="product" className="mb-2 w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
                </div>
                <div className="grid-container px-4 py-3">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="p-4 pt-5 product-card">
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <div style={{ maxWidth: '210px', height: 210, overflow: 'hidden' }} className="border rounded-3 mb-3">
                                        <img src={product.img} alt={product.name} className='w-100' style={{ objectFit: 'cover', }} loading='lazy' />
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <h6 style={{ fontWeight: 'bold', fontFamily: 'Exo' }}> {product.name} </h6>

                                    <div className='text-start'>
                                        {/* <p style={{marginBottom: 1, marginLeft: 0}}>Benefits:</p> */}

                                        <ul className='list-unstyled mx-2' style={{ fontSize: 15, color: '#555' }}>
                                            {product.desc.map(descp => {
                                                return (
                                                    <li key={descp.option} style={{ fontFamily: 'Glory', maxWidth: '250px' }}>
                                                        <span className='fw-bold me-1'>✓</span>
                                                        {descp.option}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    
                                    <div className='text-center mt-4'>
                                        <WhatsAppOrderBtn productName={product.name} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p className='text-center fw-bold text-success'>We're looking forward to add more products soon!</p>
                <div className='text-center p-3 disclaimer'>
                    <span className='fw-bold'>Disclaimer:</span> All our products are 100% natural and inspired by traditional Islamic values. They are designed to support your body wellness naturally.
                </div>
            </section>
        </>
    )
}