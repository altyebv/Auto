import React from 'react';

const SectionTitle = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{children}</h2>
        {subtitle && <p className="text-slate-600 text-lg">{subtitle}</p>}
    </div>
);

export default SectionTitle;