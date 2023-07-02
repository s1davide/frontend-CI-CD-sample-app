# Next.js Basic Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## CI/CD Deployment
This repository is set up with CI/CD using GitHub Actions. When you push changes to the master branch, a pipeline will automatically run the following steps:

Run tests to ensure the code passes all the required checks.
Deploy the application to the server.
To ensure successful deployment, make sure you have the following secrets set up:

`APP_NAME`: Name of the application (used for PM2).\
`BACKEND_ENDPOINT`: URL of the backend endpoint (if no SSL certificate, use http without a trailing slash).\
`FOLDER_PROJECT`: Name of the folder that will be cloned on the server (e.g., frontend).\
`GH_TOKEN`: GitHub token with repository read permissions (manually generated).\
`HOST`: Domain or IP address of the server, without protocol or trailing slash (e.g., EC2 instance).\
`SSH_KEY`: SSH key pair generated for the EC2 instance to enable SSH connection and deployment.\
`USERNAME`: Username for logging in to the instance.\
After setting up these secrets, you can push changes to the repository. The application will be automatically deployed to the EC2 instance created with the CloudFormation template. Make sure to establish a proper relationship between the repository and the EC2 instance.

Please note that this application is deployed on an EC2 instance created using the CloudFormation template.

https://github.com/s1davide/cloudformation-technical-test

For more details on Next.js deployment, you can check out our Next.js deployment documentation.

If you have any feedback or would like to contribute, please visit the Next.js GitHub repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
