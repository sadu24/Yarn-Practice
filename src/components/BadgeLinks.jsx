import React from 'react';

const BadgeLinks = () => {
    const badges = [
        {
            label: 'Profile Views - Basic',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=blue&style=flat'
        },
        {
            label: 'Profile Views - HEX Color',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=%23ff5733&style=flat'
        },
        {
            label: 'Profile Views - Flat Square',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=green&style=flat-square'
        },
        {
            label: 'Profile Views - For the Badge',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=orange&style=for-the-badge'
        },
        {
            label: 'Profile Views - Social',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=red&style=social'
        },
        {
            label: 'Profile Views - Yellow with Pop Style',
            url: 'https://komarev.com/ghpvc/?username=sabbirmms&label=Profile%20views&color=yellow&style=pop'
        }
    ];

    return (
        <div className="p-5 rounded-lg shadow-md flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">GitHub Profile View Badges</h2>
            <ul className="space-y-2">
                {badges.map((badge, index) => (
                    <li key={index}>
                        <img 
                            src={badge.url} 
                            alt={badge.label} 
                            className="h-10" // Adjust the height as needed
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BadgeLinks;
