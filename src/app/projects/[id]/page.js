"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {documentations} from "@/data/documentations";

export default function DocumentPage({ id }) {
    const [document, setDocument] = useState(null);

    useEffect(() => {
        // Fetch the document based on the id prop
        const selectedDocument = documentations.find(doc => doc.id === id);
        setDocument(selectedDocument);
    }, [id]);

    if (!document) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col gap-5 py-5">
            <h1 className="text-4xl font-black">{document.title}</h1>
            {document.docs.map((doc, index) => (
                <div key={index}>
                    <h2 className="text-2xl font-bold">{section.doc}</h2>
                    <Image
                        src={doc.imageUrl}
                        alt={doc.imageAlt}
                        width={900}
                        height={500}
                    />
                </div>
            ))}
        </div>
    );
}
