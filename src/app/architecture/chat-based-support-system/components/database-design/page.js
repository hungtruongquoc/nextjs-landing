export default function ComponentDatabasesForChatBasedSupportSystem() {
    return (
        <>
            <h2 className="font-bold text-3xl my-6">Databases</h2>

            <ol>
                <li><strong>Relational Database (RDBMS):</strong>
                    <ul className="fa-ul">
                        <li><strong>Purpose:</strong> This database is used for storing structured data, such as user
                            and agent profiles, transactional data (like FEMA forms), and other relational data.
                        </li>
                        <li><strong>Integration:</strong> The Authentication Service interacts with this database to
                            fetch user and agent profiles, while the Chat Services might access it for transactional
                            data.
                        </li>
                    </ul>
                </li>
                <li><strong>MongoDB (NoSQL Database):</strong>
                    <ul className="fa-ul">
                        <li><strong>Purpose:</strong> MongoDB is used for storing unstructured or semi-structured data,
                            such as chat session data, which includes the history of chat messages.
                        </li>
                        <li><strong>Integration:</strong> The Chat Services interact with MongoDB to store and retrieve
                            chat session data. This is ideal for handling large volumes of chat data with flexible
                            schema requirements.
                        </li>
                    </ul>
                </li>
                <li><strong>Cache (Redis):</strong>
                    <ul className="fa-ul">
                        <li><strong>Purpose:</strong> Redis is used as an in-memory data store to cache active chat
                            lists, chat statuses, and timestamps. This improves the performance of real-time features by
                            reducing the need to query the database directly for frequently accessed data.
                        </li>
                        <li><strong>Integration:</strong> The Chat Services update Redis with the latest chat data, and
                            the Notification Services can quickly retrieve this data to notify agents about new chats or
                            status changes.
                        </li>
                    </ul>
                </li>
            </ol>

            <h2>Including Databases in the Kubernetes Cluster:</h2>

            <ul>
                <li><strong>Relational Database (RDBMS):</strong>
                    <ul className="fa-ul">
                        <li>Typically, a relational database like PostgreSQL or MySQL could be hosted outside the
                            Kubernetes cluster, managed by a dedicated database service (e.g., Amazon RDS, Google Cloud
                            SQL). However, if you want to keep everything within the cluster, you can run a stateful set
                            for the database, ensuring high availability and data persistence.
                        </li>
                        <li><strong>Recommendation:</strong> Depending on the scale and criticality of the data, it
                            might be better to host this outside Kubernetes using a managed service for better backup,
                            scaling, and performance.
                        </li>
                    </ul>
                </li>
                <li><strong>MongoDB (NoSQL Database):</strong>
                    <ul className="fa-ul">
                        <li>Similar to the relational database, MongoDB can be hosted either inside or outside the
                            Kubernetes cluster. Inside Kubernetes, you would run MongoDB as a stateful set with
                            persistent volumes.
                        </li>
                        <li><strong>Recommendation:</strong> If scalability and high availability are crucial, consider
                            using a managed MongoDB service (e.g., MongoDB Atlas) outside Kubernetes, or run it within
                            Kubernetes with proper replication and backup strategies.
                        </li>
                    </ul>
                </li>
                <li><strong>Redis (Cache):</strong>
                    <ul className="fa-ul">
                        <li>Redis is often deployed within the Kubernetes cluster as a stateful set or as part of a
                            Redis cluster, ensuring high availability and failover support.
                        </li>
                        <li><strong>Recommendation:</strong> Running Redis inside Kubernetes is common practice and
                            works well for caching purposes, especially when low-latency access to data is essential.
                        </li>
                    </ul>
                </li>
            </ul>

            <h2 className="font-bold text-3xl my-6">Summary</h2>
            <ul className="fa-ul">
                <li><strong>Kubernetes Cluster Integration:</strong> You can include all databases (RDBMS, MongoDB,
                    Redis) within the Kubernetes cluster, but it’s important to consider the operational overhead and
                    the need for high availability, backups, and scaling.
                </li>
                <li><strong>Managed Services:</strong> For production-grade deployments, especially for the relational
                    database and possibly MongoDB, managed services outside the Kubernetes cluster are often preferred
                    for their reliability, ease of management, and scaling capabilities.
                </li>
                <li><strong>Redis:</strong> Hosting Redis within Kubernetes is common and provides fast access to
                    frequently accessed data, which is crucial for real-time chat applications.
                </li>
            </ul>

        </>
    )
}
