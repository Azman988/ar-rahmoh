import { Header } from './Header'
import { products } from '../../products'
import WhatsAppOrderBtn from './WhatsappBtn'
import './Product.css'

export function Product() {
    return (
        <>
            <Header />
            <main>
                <h4 className='text-center py-3'>All Products</h4>
                <div className="grid-container px-4 py-3">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="bg-white p-4 product-card">
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <div style={{ maxWidth: '210px', height: 210, overflow: 'hidden' }} className="border rounded-3 mb-3">
                                        <img src={product.img} alt={product.name} className='w-100' style={{ objectFit: 'cover', }} />
                                    </div>
                                </div>

                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <h6 style={{ fontWeight: 'bold', fontFamily: 'Exo' }}> {product.name} </h6>

                                    <p style={{ marginBottom: 1 }}>Benefits:</p>

                                    <ul className='list-unstyled d-flex flex-column align-items-center gap-1' style={{ fontSize: 14, color: '#555' }}>
                                        {product.desc.map(descp => {
                                            return (
                                                <li key={descp.option} style={{ fontFamily: 'Glory', maxWidth: '250px' }}>
                                                    <span className='fw-bold me-1'>✓</span>
                                                    {descp.option}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <div className='text-center mt-4'>
                                        <WhatsAppOrderBtn productName={product.name} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center text-center py-3 disclaimer'>
                    <p>
                        <span className='fw-bold'>Disclaimer:</span> All our products are 100% natural and inspired by traditional Islamic values. They are designed to support your body wellness naturally.
                    </p>
                    <WhatsAppOrderBtn consult={'consult'} />
                </div>
            </main>
        </>
    )
}