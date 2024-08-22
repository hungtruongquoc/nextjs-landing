export default function ComponentMonitoringChatBasedSupportSystem() {
    return (
        <>
            <h2 className="font-bold text-3xl my-6">Monitoring</h2>

            <ol className="fa-ul">
                <li><strong>Core System</strong>
                    <ul className="fa-ul">
                        <li><strong>API Gateway:</strong> Continues to handle incoming requests, including WebSocket
                            connections, authentication, chat services, and notification services.
                        </li>
                        <li><strong>Authentication Service:</strong> Manages user and agent authentication, interacting
                            with the relational database for profile data.
                        </li>
                        <li><strong>Chat Service:</strong> Stateless services that handle chat operations, interacting
                            with MongoDB for chat session data and Redis for real-time data like active chat lists and
                            statuses.
                        </li>
                        <li><strong>Notification Services:</strong> Handles notifications for agents when new chat
                            requests are received, interacting with Kafka for messaging.
                        </li>
                    </ul>
                </li>
                <li><strong>Monitoring Components:</strong>
                    <ul className="fa-ul">
                        <li><strong>Prometheus, Grafana, Alertmanager:</strong> These components are integrated into the
                            system to monitor the health and performance of services. They collect metrics, visualize
                            them, and trigger alerts based on predefined thresholds.
                        </li>
                    </ul>
                </li>
                <li><strong>Analytics Services:</strong>
                    <ul className="fa-ul">
                        <li><strong>Kafka Ingestion for Data Analytics:</strong> Collects analytic data from different
                            event sources, such as chat interactions, notification events, and other system events. This
                            data is ingested into Kafka for processing.
                        </li>
                        <li><strong>ETL Service:</strong> Extract, Transform, Load (ETL) services that process the raw
                            data ingested by Kafka. The ETL service transforms the data into a format suitable for
                            storage in the data warehouse.
                        </li>
                        <li><strong>Data Warehouse:</strong> A dedicated storage solution for analytics data, where
                            transformed data is stored and made available for reporting, querying, and analysis. This
                            data warehouse could be implemented using technologies like Amazon Redshift, Google
                            BigQuery, or similar.
                        </li>
                        <li><strong>Integration:</strong> The analytics services are integrated into the system,
                            allowing the collection and processing of data in real-time and storing it for later
                            analysis.
                        </li>
                    </ul>
                </li>
                <li><strong>Data Flow for Analytics:</strong>
                    <ul className="fa-ul">
                        <li><strong>Real-Time Data Capture:</strong> As events occur (e.g., new chats, notifications),
                            they are captured by Kafka Ingestion for Data Analytics.
                        </li>
                        <li><strong>ETL Processing:</strong> The ETL Service processes the data, preparing it for
                            long-term storage in the Data Warehouse.
                        </li>
                        <li><strong>Data Warehouse:</strong> The processed data is stored in the Data Warehouse, where
                            it can be queried for insights, reports, and analytics.
                        </li>
                    </ul>
                </li>
            </ol>

            <h2 className="font-bold text-3xl my-6">Summary</h2>
            <ul className="fa-ul">
                <li><strong>Analytics Integration:</strong> The diagram correctly shows how analytics services are
                    integrated into the system, with data flowing from various services through Kafka, processed by ETL
                    services, and finally stored in a Data Warehouse.
                </li>
                <li><strong>Data Flow:</strong> The flow of data for analytics is well-represented, ensuring that
                    real-time data is captured, processed, and stored efficiently.
                </li>
                <li><strong>Infrastructure Integration:</strong> The analytics infrastructure, including Kafka, ETL
                    services, and the Data Warehouse, is correctly positioned within the overall architecture, allowing
                    for scalable and flexible data processing and storage.
                </li>
            </ul>

            <p>Overall, the diagram effectively demonstrates how analytics services are integrated into the system,
                providing a comprehensive view of how data is managed from capture to analysis within your
                architecture.</p>

        </>
    )
}
