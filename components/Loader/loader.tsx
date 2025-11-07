import React from 'react';
import { Bouncy } from 'ldrs/react';
import 'ldrs/react/Bouncy.css';

const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            <Bouncy
                size="20"
                speed="1.6"
                color="white"
            />
        </div>
    );
};

export default Loader;
