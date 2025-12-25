import React from 'react';
import { FaBox, FaUsers, FaStar } from 'react-icons/fa';

const StatsBar = () => {
    const stats = [
        {
            icon: <FaBox className="text-3xl text-cyan-400" />,
            number: '50K+',
            label: 'Products',
        },
        {
            icon: <FaUsers className="text-3xl text-cyan-400" />,
            number: '100K+',
            label: 'Happy Customers',
        },
        {
            icon: <FaStar className="text-3xl text-cyan-400" />,
            number: '4.9',
            label: 'Average Rating',
        },
    ];

    return (
        <section className="py-16 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="card-glass text-center p-8 hover-lift animate-slideUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;
