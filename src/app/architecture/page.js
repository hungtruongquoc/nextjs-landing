import dynamic from "next/dynamic";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";

const D3Diagram = dynamic(() => import('../../components/architecture_chart'), {ssr: false});

export default function ArchitecturePage() {
    return (<div className="flex flex-col gap-5 py-5">
        <h1 className="text-2xl font-bold">The Architecture of Service Deployment on Railway</h1>
        <D3Diagram/>
        <h1 className="text-2xl font-bold">Design a System for Large Scale Chat-based Support System</h1>
        <h2 className="font-bold text-xl mb-2">Executive Summary</h2>
        <p>This document outlines the architecture of a Kubernetes-based chat support system designed to manage
            real-time communication between clients and support agents. The system integrates various components for
            handling user interactions, authentication, notifications, analytics, and monitoring to ensure a scalable,
            reliable, and secure platform.</p>
        <h3 className="font-bold text-lg mb-2">Key Features</h3>
        <ul>
            <li>
                <strong>Client Interaction:</strong>
                <p>The system efficiently handles requests for static content and real-time communications through a
                    combination of Cloud CDN, Ingress Controllers, and API Gateway, ensuring fast content delivery and
                    reliable WebSocket connections for real-time chat.</p>
            </li>
            <li>
                <strong>Authentication:</strong>
                <p>User and agent authentication are managed by a stateless Authentication Service, which interacts with
                    a relational database to validate credentials and manage user profiles, providing secure access to
                    the system.</p>
            </li>
            <li>
                <strong>Chat Services:</strong>
                <p>Stateless chat services process client requests, managing chat sessions with data stored in MongoDB
                    and actively cached in Redis. This ensures quick retrieval of active chat lists and session
                    statuses, enabling efficient support interactions.</p>
            </li>
            <li>
                <strong>Notifications:</strong>
                <p>The system delivers real-time notifications to agents, leveraging Kafka for reliable messaging and
                    ensuring that agents are promptly informed of new chat requests or other significant events.</p>
            </li>
            <li>
                <strong>Analytics:</strong>
                <p>Comprehensive data collection and processing are facilitated through Kafka Ingestion and ETL
                    services, storing analytics data in a Data Warehouse for in-depth reporting and system performance
                    analysis.</p>
            </li>
            <li>
                <strong>Monitoring:</strong>
                <p>Continuous monitoring of system health and performance is achieved using Prometheus, Grafana, and
                    Alertmanager. These tools provide real-time insights and trigger alerts to maintain system
                    reliability and responsiveness.</p>
            </li>
        </ul>

        <h3 className="font-bold text-lg mb-2">Conclusion</h3>
        <p>This architecture ensures a robust and scalable platform capable of handling high volumes of real-time
            interactions, while also providing advanced monitoring, analytics, and notification capabilities. The
            integration of third-party services for authentication and notifications further enhances the system&apos;s
            flexibility and reliability, making it well-suited for large-scale deployments in dynamic environments.</p>
        <Link href="/architecture/chat-based-support-system" passHref>
            <strong><FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth/> View the Design Documentation</strong>
        </Link>
    </div>)
}
