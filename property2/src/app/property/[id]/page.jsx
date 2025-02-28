'use client';
import Image from 'next/image';
import { FaUsers, FaMusic, FaParking, FaWifi } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const propertyDetails = {
    1: {
        id: 1,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
    2: {
        id: 2,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
    3: {
        id: 3,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
    4: {
        id: 4,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
    5: {
        id: 5,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
    6: {
        id: 6,
        images: ["/apartment-1-1.jpg", "/apartment-1-2.jpg", "/apartment-1-3.jpg"],
        label: "Available",
        location: "Downtown Music Hall, New York",
        title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
        description: "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
        capacity: 500,
        stages: 2,
        area: "1000 m²",
        price: "$1,200",
        amenities: ["Professional Sound System", "Lighting Setup", "Green Room", "Bar Area", "Security System"],
        features: {
            parking: true,
            wifi: true,
            soundProof: true,
            backstageArea: true
        }
    },
};

const PropertyDetails = () => {
    const params = useParams();
    const property = propertyDetails[params.id];

    if (!property) {
        return <div className="container mx-auto px-6 py-12">Property not found</div>;
    }

    return (
        <div className="container mx-auto px-6 lg:px-20 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Image */}
                <div className="space-y-4">
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        width={800}
                        height={500}
                        className="rounded-xl w-full h-[500px] object-cover"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        {property.images.slice(1).map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`${property.title} ${index + 2}`}
                                width={200}
                                height={150}
                                className="rounded-xl w-full h-32 object-cover"
                            />
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                    <span className="bg-amber-800 text-white px-4 py-2 rounded-full">
                        {property.label}
                    </span>
                    <h1 className="text-3xl font-bold">{property.title}</h1>
                    <p className="text-amber-800 text-xl">{property.location}</p>
                    <p className="text-gray-600">{property.description}</p>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="border p-4 rounded-lg">
                            <FaUsers className="mx-auto text-2xl text-amber-800 mb-2" />
                            <p className="text-sm text-gray-600">Capacity</p>
                            <p className="font-bold">{property.capacity}</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <FaMusic className="mx-auto text-2xl text-amber-800 mb-2" />
                            <p className="text-sm text-gray-600">Stages</p>
                            <p className="font-bold">{property.stages}</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <TbRulerMeasure className="mx-auto text-2xl text-amber-800 mb-2" />
                            <p className="text-sm text-gray-600">Area</p>
                            <p className="font-bold">{property.area}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Amenities</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {property.amenities.map((amenity, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-2 h-2 bg-amber-800 rounded-full mr-2"></span>
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t pt-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-3xl font-bold">{property.price}</span>
                                <span className="text-gray-500">/night</span>
                            </div>
                            <button className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
