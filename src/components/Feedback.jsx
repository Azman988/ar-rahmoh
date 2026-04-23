import './Feedback.css';

export function Feedback({home}) {
    return (
        <section className='py-4 comment-section'>
            <h5 className='text-center mb-3'>
                {home ? "Client's Comments" : "Feedback"}
            </h5>
            <div className='d-flex flex-column flex-md-row align-items-stretch gap-3 px-5 px-md-4'>
                <div className='comment-div'>
                    <h6>Mr Yussuf</h6>
                    <div className='comment'>
                        "Alhamdullilah and thanks to Ar Rahmah Islamic Cure and Blood Cupping Therapy for the exceptional treatment I recieved from them. With the combination of their Hijamah, Sauna and bee venom therapy, my healthy self was replaced. Their service was handled with professionalism and care for my well-being."
                    </div>
                    <p>Lagos.</p>
                </div>
                <div className='comment-div'>
                    <h6>Mrs Ruqoyah</h6>
                    <div className='comment'>
                        "Ar Rahmah Islamic Cure and Blood Cupping Therapy is such a great blessing, There Fibriod Shrinker medication is really working, the disease is just urinated like nothing. May Allah bless your company more and more"
                    </div>
                    <p>Osun.</p>
                </div>
                <div className='comment-div'>
                    <h6>Alfa Usman</h6>
                    <div className='comment'>
                        "Jedi Jedi is nobody's mate, At Ar-rahmah islamic cure and blood cupping you're confirm. May Allah never let you short of His mercy and blessings. The Agbo Jedi is really great, like i never experience the pain. I'll insha Allah recommend more customers for you."
                    </div>
                    <p>Ibadan.</p>
                </div>
            </div>
        </section>
    )
}