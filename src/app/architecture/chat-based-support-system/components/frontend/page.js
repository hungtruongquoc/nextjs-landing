import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faFile} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";

export default function ArchitectureComponentFrontend() {
    return (
        <>
            <h2 className="font-bold text-3xl my-6">Frontend</h2>
            My recommendation would be either NextJS, NuxtJS, or SSR Angular. Followings are my reasoning:
            <h3 className="font-bold text-2xl my-4">Better Kubernetes Integration</h3>
            <ul className="fa-ul">
                <li>
                    <FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Deploying to
                    Kubernetes: Once your application is
                    containerized, it can be deployed to a
                    Kubernetes cluster. Kubernetes manages the deployment, scaling, and operations of your
                    containers across a cluster of machines.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Pod and
                    Deployment Management: Your frontend application will be deployed as a Kubernetes
                    Deployment, which manages a set of identical Pods (the smallest deployable units in Kubernetes).
                    Kubernetes ensures that the desired number of Pods is always running, even if some fail.
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Scaling</h3>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Horizontal Pod Autoscaling:
                    Kubernetes can automatically scale the number of Pods running your
                    frontend application based on CPU usage or other custom metrics. This is particularly useful
                    during an
                    emergency when the traffic might surge unexpectedly.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Load Balancing: Kubernetes has
                    built-in support for load balancing across Pods, ensuring
                    that
                    incoming requests are evenly distributed and that no single instance is overwhelmed.
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Service Discovery</h3>
            <p>
                Kubernetes Services: A Kubernetes Service defines a logical set of Pods and a policy by which to
                access them. It abstracts away the details of how Pods are scaled and replaced, providing a stable
                endpoint for accessing your frontend application.</p>
            <h3 className="font-bold text-2xl my-4">Configuration Management</h3>
            <p>ConfigMaps and Secrets: Kubernetes allows you to manage configuration and sensitive information
                (like API keys) separately from your application code using ConfigMaps and Secrets. This makes it
                easy
                to update configuration without rebuilding your Docker image.</p>
            <h3 className="font-bold text-2xl my-4">CI/CD Integration</h3>
            <p>Continuous Deployment: Integrate your Kubernetes deployment with a CI/CD pipeline (e.g., using
                Jenkins, GitLab CI, or GitHub Actions) to automatically build and deploy new versions of your
                application to the Kubernetes cluster as changes are made.</p>
            <h3 className="font-bold text-2xl my-4">Monitoring and Logging</h3>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Prometheus and Grafana: Use
                    Prometheus and Grafana for monitoring the performance and health of
                    your application in the Kubernetes cluster.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Centralized Logging: Integrate
                    a centralized logging system (e.g., ELK stack, Fluentd) to
                    aggregate logs from all Pods, making it easier to debug and monitor the application.
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Security</h3>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Network Policies: Define
                    Kubernetes Network Policies to control the traffic between different
                    services in your cluster, ensuring that only authorized services can communicate with your
                    frontend.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Pod Security: Use Kubernetes
                    security features to enforce best practices like running
                    containers
                    with non-root users and restricting access to sensitive resources.
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Rolling Updates and Rollbacks</h3>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Rolling Updates: Kubernetes
                    supports rolling updates, allowing you to update your application
                    without downtime. New Pods with the updated application are gradually rolled out, and old ones
                    are
                    terminated.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Rollbacks: If something goes
                    wrong during an update, Kubernetes allows you to quickly roll back
                    to
                    a previous version.
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Service Mesh Integration</h3>
            <p>Istio or Linkerd: Integrate a service mesh like Istio or Linkerd to manage and secure the
                communication between services in your Kubernetes cluster. This can provide additional features
                like
                traffic management, observability, and security.</p>
            <h3 className="font-bold text-2xl my-4">Conjunction with CDN</h3>
            Using a CDN in conjunction with your Next.js app running in Kubernetes can significantly enhance
            performance, especially for delivering static assets like images, CSS, JavaScript files, and even
            pre-rendered pages.
            <h4 className="font-bold text-2xl my-2">How to Integrate a CDN with a Next.js App in Kubernetes</h4>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Static Asset Delivery
                    <p>Static File Handling: You can configure your Next.js app to use a CDN for delivering
                        static assets. Next.js allows you to set a `basePath` or `assetPrefix` to specify the CDN
                        URL
                        for serving static files.</p>
                    <p><span className="font-bold">Example:</span> In your <code>next.config.js</code>:</p>
                    <pre>
                            <code>
                                {`module.exports = {assetPrefix: 'https://cdn.example.com',}`}
                            </code>
                        </pre>
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Serving Static Files via CDN:
                    This means that when your app references static assets, they
                    will be served from the CDN rather than directly from the Kubernetes cluster, reducing latency
                    and
                    offloading traffic from your servers.
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Edge Caching:
                    <ul>
                        <li>- CDN Edge Servers: CDNs typically have edge servers located around the world, which
                            can
                            cache
                            your Next.js app’s static content, ensuring that users receive content from a server
                            geographically
                            close to them. This improves load times and reduces latency.
                        </li>
                        <li>- Cache Control: You can configure cache headers in your Next.js app to optimize how
                            content
                            is
                            cached on the CDN.
                        </li>
                    </ul>
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Dynamic Content Delivery:
                    <p>Fallback to Origin: For dynamic content (which Next.js can generate on-demand), the CDN can
                        be
                        configured to forward requests to your Kubernetes cluster when the content is not available
                        in
                        the
                        CDN&apos;s cache. The Kubernetes service can then serve the content, which can subsequently
                        be
                        cached by
                        the CDN.</p>
                </li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Deployment Strategy:
                    <p>Hybrid Deployment: Use the CDN for static content and offload dynamic requests to your
                        Kubernetes cluster. This setup balances the load between the CDN (for static assets) and the
                        Kubernetes cluster (for dynamic, server-side rendered content).</p>
                    <p>
                        Next.js with ISR: If you&apos;re using Incremental Static Regeneration (ISR) in Next.js,
                        you can
                        combine it with CDN caching to serve pre-rendered pages that are periodically updated.</p>
                </li>
            </ul>
            <h3 className="font-bold text-2xl my-4">Summary</h3>
            <p>By deploying your Next.js or Nuxt.js frontend application on Kubernetes, you gain robust control over
                the deployment process, scalability, monitoring, and security, making it an ideal solution for
                large-scale, mission-critical applications like the chat-based support system I&apos;m
                designing.</p>
            <p>
                Using a CDN with a Next.js app deployed in Kubernetes is not only possible but often recommended.
                The
                CDN helps by:
            </p>
            <ul className="fa-ul">
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Offloading static content delivery from your Kubernetes cluster, reducing the load on your
                    servers.</li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Enhancing performance by serving content from edge locations closer to users.</li>
                <li><FontAwesomeIcon icon={faCircle} listItem fixedWidth size="2xs"/> Allowing you to efficiently serve both static and dynamic content through a combination of CDN
                    caching
                    and Kubernetes-based backend services.</li>
            </ul>
        </>
    )
}
