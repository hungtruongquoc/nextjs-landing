'use client'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle, faFile} from '@fortawesome/pro-solid-svg-icons'
import Image from "next/image";
import ChatBasedSupportCenter from '../../../../public/ChatBasedSupportCenter.png'
import {PhotoView, PhotoProvider} from 'react-photo-view';
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

export default function ChatBasedSupportSystem() {
    return (<div className="my-8">
            <div id="disclaimer" className="mb-4">
                <span className="font-semibold text-lg mr-1.5">Disclaimer</span>
                <span className="text-neutral-700">The problem described in this document is purely hypothetical and does not represent a
                real-world system. It has been created solely for the purpose of exercising and refining my skills in
                software system design. I have no intention to violate any protected intellectual property, and any
                    similarities to existing systems are purely coincidental.</span>
            </div>
            <h1 className="font-bold text-2xl mt-8 mb-6">Table of Contents</h1>
            <ul className="fa-ul mb-8">
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/components/frontend">
                        Components of Frontend
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/components/backend">
                        Components of Backend
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/components/database-design">
                        Components of Databases
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/erd">
                        Entity Relationship Diagram
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/components/monitoring">
                        Components of Monitoring
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFile} listItem fixedWidth/>
                    <Link href="/architecture/chat-based-support-system/references/dns-setup">
                        Reference for DNS Setup
                    </Link>
                </li>
            </ul>
            <div id="problem-statement" className="mb-4">
                <h1 className="font-bold text-2xl mb-2">Problem Statements</h1>
                <h2 className="font-bold text-xl mb-2" id="description">Description</h2>
                <p>
                    A company aims to develop a robust chat-based support system designed to serve a large metropolitan
                    area comparable in size to Houston, TX. The system must be capable of handling an extreme surge in
                    real-time requests during emergency events, such as a hurricane similar to Hurricane Harvey. During
                    such events, it is anticipated that up to two-thirds of the city&apos;s population may seek
                    assistance,
                    necessitating reliable support for food, housing, and federal assistance processes like FEMA
                    applications.</p>

                <p>The system must maintain high availability and reliability, adhering to a Service Level Agreement
                    (SLA) of 90% even under peak load conditions. Additionally, FindHelp requires the system to include
                    advanced analytics capabilities to analyze and extract insights from the chat content, which will be
                    critical for improving service delivery and understanding user needs during crises.</p>

                <p className="mb-2">This scenario presents a significant challenge in terms of scalability, real-time
                    processing, and
                    data analytics, making it a large-scale problem that demands careful architectural design and
                    strategic implementation.
                </p>
                <h2 className="font-bold text-xl mb-2" id="geographical-scope">Geographical Scope</h2>
                <p className="mb-2">Houston, TX, is a large metropolitan area with a population of over 2 million
                    people. Designing a
                    system
                    that can cater to such a vast area and population automatically puts it in the category of
                    large-scale
                    problems.</p>
                <h2 className="font-bold text-xl mb-2" id="surging-requests">Real-Time Surge Handling</h2>
                <p className="mb-2">Handling a surge in real-time requests during an emergency event like Hurricane
                    Harvey, where
                    potentially
                    two-thirds of the city&apos;s population could be seeking assistance, demands a system that can
                    scale
                    massively and quickly. This involves high levels of concurrency, low-latency response times, and
                    robust
                    load balancing.</p>

                <h2 className="font-bold text-xl mb-2" id="high-availability-compliance">High Availability and SLA
                    Compliance</h2>
                <p className="mb-2">The requirement to comply with a Service Level Agreement (SLA)
                    of 90% under such stressful conditions adds another layer of complexity. Ensuring that the system
                    remains
                    available and performs reliably even during peak loads is challenging, especially with potential
                    infrastructure failures during a disaster.</p>

                <h2 className="font-bold text-xl mb-2" id="data-analytics">Data Analytics</h2>
                <p className="mb-2">Providing facilities for analytics on the chat content adds another dimension to the
                    problem. The system would need to not only handle real-time communication but also process and
                    analyze
                    large
                    volumes of chat data to extract meaningful insights. This could involve natural language processing
                    (NLP),
                    sentiment analysis, and real-time data processing, all of which are resource-intensive.</p>

                <h2 className="font-bold text-xl mb-2" id="compliance-security">Compliance and Security</h2>
                <p className="mb-2">Given the nature of the data (emergency assistance, FEMA-related queries),
                    the system would likely need to comply with various data protection regulations, ensuring that
                    sensitive
                    information is handled securely.</p>

                <h2 className="font-bold text-xl mb-2" id="resilience-disaster-recovery">Resilience and Disaster
                    Recovery</h2>
                <p className="mb-2">The system would need to be resilient to infrastructure failures,
                    especially in a disaster scenario. This includes planning for disaster recovery, failover
                    mechanisms,
                    and
                    ensuring minimal downtime.</p>
                <h2 className="font-bold text-xl mb-2" id="features">Features</h2>
                <ul className="fa-ul">
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Allows the frontend to get a
                        list of support chat real-time
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Allows an agent to select a
                        support chat item to initiate the chat with a customer
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Shows a list of chat sorted by
                        time received in real-time for agents to monitor
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Send notifications to an agent
                        whenever there is a new chat request received
                    </li>
                </ul>
            </div>
            <div id="solution">
                <h1 className="font-bold text-2xl mb-2">Solution</h1>
                <h2 className="font-bold text-xl mb-2">Overview</h2>
                <PhotoProvider>
                    <PhotoView src="/ChatBasedSupportCenter.png">
                        <Tooltip title="Click or tap to view" arrow followCursor placement="top">
                            <Image
                                src={ChatBasedSupportCenter}
                                alt="overview diagram of chat based support center"
                                width={900}
                                height={500}
                            />
                        </Tooltip>
                    </PhotoView>
                </PhotoProvider>
                <h3 className="font-bold text-lg capitalize mt-2">high level design</h3>
                Designing the backend for these requirements involves several key building blocks, each addressing
                specific aspects of real-time communication, data storage, notification handling, and scalability.
                Here’s a breakdown of the architecture and potential tech stack:
                <h4 className="font-bold">Real-Time Communication</h4>
                <ul className="fa-ul">
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> WebSocket Server: Use
                        WebSockets for real-time communication between the backend and the
                        frontend. WebSockets allow for bi-directional communication, which is ideal for updating chat
                        lists in real-time and notifying agents when new chat requests are received.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Technology: You can implement
                        WebSockets using <code>Socket.IO (Node.js)</code>, <code>Spring WebSocket
                            (Java)</code>, or <code>Django Channels (Python)</code>. <code>Socket.IO</code> is a popular
                        choice for Node.js
                        applications due to its ease of use and wide adoption.
                    </li>
                </ul>
                <h4 className="font-bold">Backend Services</h4>
                <ul className="fa-ul">
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        API Gateway: Deploy an API Gateway to handle all incoming API requests, including those related
                        to chat management. The API Gateway can route requests to appropriate microservices.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        Authentication Service: A dedicated service for handling user authentication (e.g., JWT tokens).
                        This ensures secure communication between the frontend, backend, and agents.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        Chat Service: The core service responsible for managing chat sessions, storing chat history, and
                        providing real-time updates to agents and customers.
                    </li>
                </ul>
                <ul className="fa-ul">Key Functionality
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Fetching chat lists.</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Initiating and managing chat
                        sessions.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Storing chat messages and
                        metadata (timestamps, status, etc.).
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Notification Service: This
                        service sends real-time notifications to agents when new chat
                        requests are received. This can be implemented using WebSockets, Push Notifications, or
                        integration with a messaging platform like Firebase Cloud Messaging (FCM) or Amazon SNS.
                    </li>
                </ul>
                <ul className="fa-ul">Database Design
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> <span className="font-bold">NoSQL Database (e.g., MongoDB, DynamoDB)</span>:
                        For storing chat
                        messages and session metadata. NoSQL databases are ideal for storing unstructured or
                        semi-structured data, like chat logs, and can handle high volumes of concurrent read/write
                        operations.</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> <span className="font-bold">Relational Database (e.g., PostgreSQL, MySQL)</span>:
                        For managing
                        structured data such as user profiles, agent details, and chat session metadata (if needed).
                        RDBMS are suitable for transactions and maintaining relational integrity.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> <span
                        className="font-bold">Redis</span>: Use <span className="font-bold">Redis</span> as an
                        in-memory database to store real-time session data, including active chat lists, chat statuses,
                        and timestamps. Redis is particularly effective for handling real-time data with low latency.
                    </li>
                </ul>
                <ul className="fa-ul">Message Queues
                    <li>
                        Apache Kafka or RabbitMQ: For handling real-time event streams, such as new chat requests or
                        notifications. Kafka can be used to decouple components, ensuring that the chat service,
                        notification
                        service, and analytics can scale independently.
                    </li>
                </ul>
                <ul className="fa-ul">Real-Time Data Updates
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        <code>Event-Driven Architecture</code>: Implement an event-driven architecture where different
                        microservices
                        communicate via events. For example, when a new chat request is created, an event is published
                        to a
                        message queue, which triggers updates to the chat list and sends notifications to agents.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        <code>Pub/Sub Messaging</code>: Use a Pub/Sub model (e.g., Google Pub/Sub, AWS SNS) to push
                        updates
                        to multiple
                        subscribers (e.g., agent dashboards, analytics services) in real-time.
                    </li>
                </ul>
                <ul className="fa-ul">Notification System
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> WebSocket Notifications: Send
                        real-time notifications to connected agents using WebSockets
                        whenever a new chat request is received.</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        Push Notifications: For agents not connected to the WebSocket, use push notifications (via FCM
                        or
                        SNS) to alert them of new chat requests.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>
                        Queue-based Notifications: Use a message queue to ensure reliable delivery of notifications,
                        even
                        under high load.
                    </li>
                </ul>
                <ul className="fa-ul">Sorting and Filtering
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Sorted Data Structures: Use
                        sorted sets in Redis to maintain a real-time list of chat sessions
                        sorted by time received. Redis&apos; sorted sets allow you to sort elements with a score (e.g.,
                        timestamps)</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Indexes: Implement appropriate
                        indexing in your database (e.g., time-based indexes in MongoDB) to
                        enable efficient retrieval and sorting of chat sessions.
                    </li>
                </ul>
                <ul className="fa-ul">Scalability and Fault Tolerance
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Microservices Architecture:
                        Break down the backend into microservices (Chat Service, Notification
                        Service, etc.), allowing each service to scale independently.</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Horizontal Scaling: Deploy
                        services across multiple instances and load balance the incoming
                        requests using Kubernetes or a cloud provider’s load balancer.
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Resilience: Use circuit
                        breakers (e.g., Hystrix, Resilience4j) to prevent cascading failures and
                        ensure that if one service fails, it doesn’t bring down the entire system.
                    </li>
                </ul>
                <ul className="fa-ul">Analytics
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Real-time Analytics:
                        Stream chat data to a real-time analytics service (e.g., using Apache Kafka)
                        for monitoring agent performance, chat volumes, and response times.</li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Data Warehouse: Store chat logs
                        in a data warehouse (e.g., Amazon Redshift, Google BigQuery) for
                        long-term analysis and reporting.
                    </li>
                </ul>
                <h3 className="font-bold text-lg capitalize mt-2">Tentative Tech Stack</h3>
                <ul className="fa-ul">
                    <li>
                        <FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Frontend: NextJS, NuxtJS, or
                        SSR Angular
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> API Gateway: AWS API Gateway,
                        Nginx, Kong, Caddy
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/><FontAwesomeIcon
                        icon={faCircle} listItem fixedWidth size="2xs"/> WebSocket Server: Socket.IO (Node.js), Django
                        Channels (Python)
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Chat Service: Node.js
                        with Express, Spring Boot (Java), or Django (Python)
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Database: MongoDB or
                        DynamoDB (NoSQL), PostgreSQL or MySQL (RDBMS)
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>In-Memory Data Store:
                        Redis
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Message Queue: RabbitMQ,
                        Apache Kafka
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Notification Service:
                        Firebase Cloud Messaging (FCM), AWS SNS
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Container Orchestration:
                        Kubernetes
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Real-time Data Streaming:
                        Apache Kafka
                    </li>
                    <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/>Monitoring: Prometheus,
                        Grafana
                    </li>
                </ul>
                <h2 className="font-bold text-xl my-2">Request Flow Description from the Provided Diagram</h2>
                <p>The diagram outlines the architecture of a Kubernetes-based chat support system, integrating various
                    components for handling user interactions, authentication, notifications, analytics, and monitoring.
                    Below is a detailed description of the request flows within this architecture:</p>

                <h3 className="font-bold text-lg capitalize mt-2">1. Client Interaction</h3>
                <ul>
                    <li>
                        <strong>Static Files & Generated Pages:</strong>
                        <p>A client (either a mobile client or a web client) requests static files (e.g., CSS,
                            JavaScript) or generated pages from the system.</p>
                        <p>These requests are routed through the <strong>Cloud CDN</strong> (for static files) or
                            the <strong>Ingress Controller</strong> (for generated pages). The Ingress Controller
                            forwards the requests to the <strong>Next.js</strong> application running in the Kubernetes
                            cluster, which generates and returns the requested content.</p>
                    </li>
                    <li>
                        <strong>WebSocket Connection:</strong>
                        <p>The client establishes a WebSocket connection for real-time communication, such as chat
                            messaging.</p>
                        <p>The WebSocket connection is routed through the <strong>Ingress Controller</strong> and then
                            directed to the <strong>API Gateway</strong>. The API Gateway maintains the WebSocket
                            connection and forwards any messages to the appropriate services.</p>
                    </li>
                </ul>

                <h3 className="font-bold text-lg capitalize mt-2">2. Authentication Flow</h3>
                <ul>
                    <li>
                        <p>When a user or agent initiates an action that requires authentication (e.g., logging in,
                            accessing secure resources), the request is routed through the <strong>API Gateway</strong>.
                        </p>
                        <p>The API Gateway forwards the request to the <strong>Authentication Service</strong>. The
                            Authentication Service, which is stateless, interacts with the <strong>Relational
                                Database</strong> to validate user credentials or retrieve user profiles. Once
                            authenticated, the service returns a response to the API Gateway, which then allows the user
                            or agent to proceed with the requested action.</p>
                    </li>
                </ul>

                <h3 className="font-bold text-lg capitalize mt-2">3. Chat Service Flow</h3>
                <ul>
                    <li>
                        <p>A client requests to initiate a chat, send a message, or retrieve chat history.</p>
                        <p>The request is sent to the <strong>API Gateway</strong>, which forwards it to the <strong>Kafka
                            Ingestion for Chat Services</strong>. Kafka handles the message ingestion and routes it to
                            the appropriate <strong>Chat Service</strong> instance.</p>
                        <p>The Chat Service, being stateless, retrieves or stores the relevant chat data
                            from <strong>MongoDB</strong> (for chat sessions) and updates the <strong>Redis
                                Cache</strong> with active chat lists, statuses, and timestamps.</p>
                        <p>The response from the Chat Service is then sent back through Kafka to the API Gateway, which
                            delivers the response to the client.</p>
                    </li>
                </ul>

                <h3 className="font-bold text-lg capitalize mt-2">4. Notification Flow</h3>
                <ul>
                    <li>
                        <p>When a new chat request is received, or any other significant event occurs, a notification
                            needs to be sent to the appropriate agent.</p>
                        <p>The Chat Service or relevant component sends a notification request to the <strong>Notification
                            Services</strong> via the <strong>API Gateway</strong>.</p>
                        <p>The Notification Service may use the <strong>Kafka Ingestion for Notification
                            Services</strong> to handle the notification requests, ensuring they are processed reliably.
                        </p>
                        <p>The notification is then sent to the agent, possibly using a third-party service
                            like <strong>OneSignal</strong> (not shown in the diagram but could be integrated into the
                            Notification Services).</p>
                    </li>
                </ul>

                <h3 className="font-bold text-lg capitalize mt-2">5. Analytics Flow</h3>
                <ul>
                    <li>
                        <p>The system continuously generates data for analytics, such as chat interactions, user
                            behavior, and system performance metrics.</p>
                        <p>This data is ingested by <strong>Kafka Ingestion for Data Analytics</strong>, which collects
                            and routes the data to the <strong>ETL Service</strong> (Extract, Transform, Load).</p>
                        <p>The ETL Service processes the data and stores it in the <strong>Data Warehouse</strong> for
                            later analysis. This data can be used for generating reports, monitoring trends, and
                            improving system performance.</p>
                    </li>
                </ul>

                <h3 className="font-bold text-lg capitalize mt-2">6. Monitoring Flow</h3>
                <ul>
                    <li>
                        <p>The system&apos;s health and performance metrics are continuously monitored.</p>
                        <p>Metrics from various components (e.g., API Gateway, Chat Services, Databases) are collected
                            by <strong>Prometheus</strong>.</p>
                        <p>These metrics are visualized using <strong>Grafana</strong>, allowing administrators to
                            monitor the system&apos;s status in real-time.</p>
                        <p><strong>Alertmanager</strong> is configured to trigger alerts based on predefined thresholds,
                            ensuring that any issues are promptly addressed.</p>
                    </li>
                </ul>

                <h2 className="font-bold text-xl mb-2" id="compliance-security">Summary</h2>
                <p>
                    - <strong>Client Requests:</strong> Handled through the CDN and Ingress for static content, with
                    WebSocket connections managed by the API Gateway for real-time interactions.<br/>
                    - <strong>Authentication:</strong> Managed by the Authentication Service, which interacts with the
                    Relational Database to validate users and agents.<br/>
                    - <strong>Chat Services:</strong> Messages and chat sessions are processed by stateless Chat
                    Services, with data stored in MongoDB and cached in Redis.<br/>
                    - <strong>Notifications:</strong> Delivered to agents through the Notification Services, leveraging
                    Kafka for reliable messaging.<br/>
                    - <strong>Analytics:</strong> Data collected across the system is processed by the ETL Service and
                    stored in a Data Warehouse for analysis.<br/>
                    - <strong>Monitoring:</strong> System health and performance are continuously monitored using
                    Prometheus, Grafana, and Alertmanager.
                </p>
            </div>
        </div>
    )
}
