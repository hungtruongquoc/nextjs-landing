'use client'

import Image from "next/image";
import {PhotoView, PhotoProvider} from 'react-photo-view';
import Tooltip from '@mui/material/Tooltip';

const knowledgeImages = [
    {
        src: '/DataAnalyticsInfrastructureWithAWS.png',
        title: 'Data Analytics Infrastructure with AWS',
        altTitle: 'Data Analytics Infrastructure with AWS',
    },
    {
        src: '/Serverless.png',
        title: 'Serverless Deployment with AWS',
        altTitle: 'Serverless Deployment with AWS'
    }, {
        src: '/With EC2.png',
        title: 'EC2 Deployment with AWS',
        altTitle: 'EC2 Deployment with AWS'
    },
];

export default function KnowledgePage() {
    return (
        <div className="flex flex-col gap-5 py-5">
            {knowledgeImages.map((image, index) => (
                <div key={index}>
                    <h2 className="text-2xl font-bold py-5">{image.title}</h2>
                    <PhotoProvider>
                        <PhotoView src={image.src}>
                            <Tooltip title="Click or tap to view" arrow followCursor placement="top">
                                <Image
                                    src={image.src}
                                    alt="Data Analytics Infrastructure with AWS"
                                    width={900}
                                    height={500}
                                />
                            </Tooltip>
                        </PhotoView>
                    </PhotoProvider>
                </div>
            ))}
        </div>
    );
}
