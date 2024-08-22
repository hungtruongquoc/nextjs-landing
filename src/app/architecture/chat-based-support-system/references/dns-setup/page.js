export default function ReferenceDnsSetup() {
    return (<>
            <h2 className="font-bold text-3xl my-6">Pointing DNS to a Next.js App in Kubernetes</h2>
            <p>To point a DNS record to a frontend service (like a Next.js app) running inside a Kubernetes cluster, you
                typically follow these steps:</p>

            <h3 className="font-bold text-2xl my-4">Expose the Frontend Service</h3>
            <p>First, you need to expose your Next.js application using a Kubernetes Service. This Service will handle
                incoming traffic and route it to the appropriate Pods running your app.</p>

            <h4 className="font-bold text-2xl my-2">Example Service Definition:</h4>
          <textarea readOnly className="text-black w-full" rows={10}>
apiVersion: v1
kind: Service
metadata:
  name: nextjs-service
spec:
  selector:
    app: nextjs
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000  # assuming Next.js runs on port 3000
  type: LoadBalancer
          </textarea>
            <ul className="fa-ul">
                <li><strong>Selector:</strong> Matches the Pods running your Next.js app.</li>
                <li><strong>Port:</strong> The port exposed to the external network.</li>
                <li><strong>TargetPort:</strong> The port where your Next.js app is listening inside the Pod.</li>
                <li><strong>Type: LoadBalancer:</strong> This exposes the service via a cloud provider’s load balancer,
                    which is the typical approach in a cloud environment.
                </li>
            </ul>

            <h3 className="font-bold text-2xl my-4">Get the External IP Address</h3>
            <p>After applying the Service manifest, Kubernetes will provision a LoadBalancer (if you’re using a cloud
                provider) and assign an external IP address to the Service.</p>
            <p>You can check the status and get the external IP by running:</p>

            <pre><code>kubectl get services</code></pre>
            <p>You’ll see an external IP address listed once the LoadBalancer is ready.</p>

            <h3 className="font-bold text-2xl my-4">Configure DNS</h3>
            <p><strong>Pointing DNS to External IP:</strong> Once you have the external IP, you need to update your DNS
                records with your domain registrar or DNS provider to point to this IP.</p>
            <p><strong>A Record:</strong> If you have an IP address, you will create an A record in your DNS settings.
            </p>
            <ul>
                <li><strong>Host:</strong> <code>www</code> or <code>@</code> (for the root domain).</li>
                <li><strong>Points to:</strong> The external IP address of your LoadBalancer.</li>
                <li><strong>TTL:</strong> Use the default TTL or a low value (like 300 seconds) if you’re testing.</li>
            </ul>

            <h3 className="font-bold text-2xl my-4">Using an Ingress Controller (Optional but Recommended)</h3>
            <p><strong>Ingress:</strong> Instead of directly exposing the service, you can use an Ingress controller for
                more complex routing and SSL termination. An Ingress allows you to define rules that route external
                HTTP/HTTPS traffic to your service.</p>
            <p><strong>Ingress Controller:</strong> Deploy an Ingress controller like NGINX Ingress or Traefik in your
                Kubernetes cluster.</p>

            <h4 className="font-bold text-2xl my-2">Example Ingress Definition:</h4>

<textarea readOnly className="text-black w-full" rows={10}>
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: nextjs-ingress
    annotations:
        nginx.ingress.kubernetes.io/rewrite-target: /
    spec:
        rules:
        - host: myapp.example.com
        http:
          paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nextjs-service
                port:
                  number: 80
</textarea>

            <ul>
                <li><strong>Host:</strong> This is your domain name (e.g., <code>myapp.example.com</code>).</li>
                <li><strong>Backend Service:</strong> This specifies the service handling the traffic.</li>
            </ul>

            <h3 className="font-bold text-2xl my-4">5. <strong>Point DNS to the Ingress Controller</strong></h3>
            <p>Once the Ingress is set up, you’ll get an external IP address for the Ingress controller.</p>
            <p>Update your DNS A record to point to this IP address.</p>

            <h3 className="font-bold text-2xl my-4">6. <strong>Handling SSL/TLS (HTTPS)</strong></h3>
            <p>For HTTPS, you’ll need to obtain an SSL certificate. This can be automated
                using <strong>Cert-Manager</strong> with Let’s Encrypt in Kubernetes.</p>
            <p>You’d add annotations to your Ingress to handle SSL certificates.</p>

            <h4 className="font-bold text-2xl my-2">Example SSL Annotations in Ingress:</h4>
            <textarea readOnly className="text-black w-full" rows={10}>
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nextjs-ingress
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: nextjs-cert
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nextjs-service
            port:
              number: 80
            </textarea>

            <h3 className="font-bold text-2xl my-4">7. <strong>Verify DNS and Deployment</strong></h3>
            <p>After configuring the DNS, it may take some time for the changes to propagate. Once propagated,
                accessing <code>myapp.example.com</code> should route traffic to your Next.js application running in
                Kubernetes.</p>

            <h3 className="font-bold text-2xl my-4">Summary:</h3>
            <ul>
                <li><strong>Expose your Next.js app using a Service (LoadBalancer or Ingress).</strong></li>
                <li><strong>Get the external IP address assigned to the Service or Ingress.</strong></li>
                <li><strong>Point your DNS A record to this external IP.</strong></li>
                <li><strong>(Optional) Use an Ingress for advanced routing and SSL termination.</strong></li>
            </ul>
            <p>This approach ensures your Next.js application is accessible via a custom domain, leveraging Kubernetes’
                capabilities for scalability, availability, and easy management.</p>
        </>
    )
}
