export const projects = [
    {
        name: 'Beetrack',
        url: 'https://beetrack.io/home-en/',
        industry: 'Asset Management',
        techStack: [
            {
                items: [
                    "Runtime: PHP 8.2, Laravel 11, Lumen",
                    "Database: MariaDB",
                    "Frontend: VueJS",
                    "Messaage, Queue: Redis"
                ]
            }
        ]
    },
    {
        name: 'Take Command Health',
        url: 'https://app.takecommandhealth.com/sign-in?next=/member-portal',
        industry: 'Healthcare',
        techStack: [
            {
                title: "legacy",
                items: ["Runtime: Python, Django, Celery", "Database: PostgreSQL", "Frontend: ReactJS"]
            },
            {
                title: "new implementation",
                items: ["Runtime: Java 17, AWS Lambda", "Database: RDS PostgreSQL, DynamoDB",
                    "Frontend: ReactJS, Amplify", "Inter-service: SQS, SNS", "File Storage: S3"]
            },
        ]
    }
]
