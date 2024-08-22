export default function ComponentBackendForChatBasedSupportSystem() {
    return (
        <>
            <h2 className="font-bold text-3xl my-6">Backend</h2>
            <ol>
                <li><strong>Client Interaction:</strong>
                    <ul className="fa-ul">
                        <li><strong>Static Files & Generated Pages:</strong> The client (mobile or web) interacts with
                            the CDN for static files and with the Ingress for generated pages from the Next.js
                            application. This is handled efficiently by the CDN and the Kubernetes cluster.
                        </li>
                        <li><strong>WebSocket Connection:</strong> The client establishes a WebSocket connection, which
                            is routed through the Ingress and then the API Gateway, eventually reaching the WebSocket
                            handling service in the backend.
                        </li>
                    </ul>
                </li>
                <li><strong>API Gateway:</strong>
                    <ul className="fa-ul">
                        <li>The API Gateway serves as the central routing point for all incoming requests, including
                            WebSocket connections, authentication requests, and chat service requests.
                        </li>
                        <li><strong>Authentication:</strong> Authentication requests are routed from the API Gateway to
                            the Authentication Service to validate user credentials or tokens.
                        </li>
                        <li><strong>Chat Requests:</strong> Chat-related requests (e.g., starting a chat, fetching chat
                            history) are forwarded to the Kafka Ingestion for Chat Services through the API Gateway.
                        </li>
                    </ul>
                </li>
                <li><strong>Kafka Ingestion:</strong>
                    <ul className="fa-ul">
                        <li><strong>For Chat Services:</strong> Kafka is used to handle the messaging between the chat
                            service requests and the actual Chat Services. This setup allows for:
                        </li>
                        <ul className="fa-ul">
                            <li>Decoupling of services.</li>
                            <li>Handling high-throughput messaging.</li>
                            <li>Ensuring reliable message delivery and processing.</li>
                        </ul>
                        <li><strong>For Notification Services:</strong> Similarly, Kafka is used to ingest notification
                            requests and route them to the Notification Services. This ensures that notifications are
                            processed reliably and in real-time.
                        </li>
                    </ul>
                </li>
                <li><strong>Chat Services:</strong>
                    <ul className="fa-ul">
                        <li>Multiple instances of Chat Services are shown (scalable as needed), which process the actual
                            chat operations such as managing chat sessions, storing messages, and handling interactions
                            with the client.
                        </li>
                    </ul>
                </li>
                <li><strong>Notification Services:</strong>
                    <ul className="fa-ul">
                        <li>The Notification Services handle the sending of notifications to agents when new chat
                            requests are received or when other significant events occur. These services process the
                            messages ingested by Kafka.
                        </li>
                    </ul>
                </li>
            </ol>

            <h2 className="font-bold text-2xl my-4">Summary:</h2>
            <ul className="fa-ul">
                <li>The flow starts with client interactions, either requesting static content (handled by the CDN) or
                    dynamic content (handled by the API Gateway and backend services).
                </li>
                <li>The WebSocket connections are managed through the API Gateway, allowing for real-time,
                    bi-directional communication with the client.
                </li>
                <li>Kafka serves as the backbone for message ingestion and distribution, ensuring that chat and
                    notification services can operate independently and at scale.
                </li>
            </ul>
        </>
    )
}
