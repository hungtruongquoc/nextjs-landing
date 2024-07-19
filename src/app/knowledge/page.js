'use client'

import Image from "next/image";
import {PhotoView, PhotoProvider} from 'react-photo-view';
import Tooltip from '@mui/material/Tooltip';

export default function KnowledgePage() {
    return (
        <div className="flex flex-col gap-5 py-5">
            <h2 className="text-2xl font-bold">Data Analytics System with AWS</h2>
            <PhotoProvider>
                <PhotoView src="/DataAnalyticsInfrastructureWithAWS.png">
                    <Tooltip title="Click or tap to view" arrow>
                        <Image
                            src="/DataAnalyticsInfrastructureWithAWS.png"
                            alt="Data Analytics Infrastructure with AWS"
                            width={900}
                            height={500}
                        />
                    </Tooltip>
                </PhotoView>
            </PhotoProvider>
            <h2 className="text-2xl font-bold">Serverless Deployment with AWS</h2>
            <PhotoProvider>
                <PhotoView src="/Serverless.png">
                    <Tooltip title="Click or tap to view" arrow>
                        <Image
                            src="/Serverless.png"
                            alt="Serverless Deployment with AWS"
                            width={900}
                            height={500}
                        />
                    </Tooltip>
                </PhotoView>
            </PhotoProvider>
            <h2 className="text-2xl font-bold">EC2 Deployment with AWS</h2>
            <PhotoProvider>
                <PhotoView src="/With EC2.png">
                    <Tooltip title="Click or tap to view" arrow>
                        <Image
                            src="/With EC2.png"
                            alt="EC2 Deployment with AWS"
                            width={900}
                            height={500}
                        />
                    </Tooltip>
                </PhotoView>
            </PhotoProvider>
        </div>
    );
}
