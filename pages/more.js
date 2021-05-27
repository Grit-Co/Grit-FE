import React from 'react';
import FooterNav from '../src/components/FooterNav';

export default function More() {
   
    return ( 
        <div>
            <main>
                <a href="/api/auth/logout">Logout</a>
            </main>
            <FooterNav />
        </div>
    )
}
