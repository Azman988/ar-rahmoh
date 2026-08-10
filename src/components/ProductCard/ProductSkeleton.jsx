import React from 'react';
import './ProductSkeleton.css';

export function ProductSkeleton() {
    // Generate an array of 12 skeleton cards to simulate a loading row layout structure
    const skeletonCards = Array(12).fill(0);

    return (
        <>
            {skeletonCards.map((_, index) => (
                <div key={index} className="col">
                    <div className="product-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between skeleton-container">
                        
                        {/* Upper Asset Loading Space */}
                        <div className="w-100 d-flex align-items-center justify-content-center mb-2">
                            <div className="product-img-wrapper border rounded-3 bg-light w-100 skeleton-pulse skeleton-image"></div>
                        </div>

                        {/* Title and Pricing Text Loading Slots */}
                        <div className="text-center d-flex flex-column align-items-center gap-2 mb-3">
                            <div className="skeleton-pulse skeleton-text skeleton-title"></div>
                            <div className="skeleton-pulse skeleton-text skeleton-title"></div>
                            <div className="skeleton-pulse skeleton-text skeleton-price"></div>
                        </div>

                        {/* Lower Action Elements Loading Space */}
                        <div className="pt-2 border-top border-light-dark mt-2">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <div className="skeleton-pulse skeleton-icon-btn"></div>
                                <div className="skeleton-pulse skeleton-counter-text"></div>
                                <div className="skeleton-pulse skeleton-icon-btn"></div>
                            </div>
                            <div className="skeleton-pulse skeleton-action-btn rounded-4"></div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    );
}
