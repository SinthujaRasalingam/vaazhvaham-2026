/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all dashboard routes
        source: '/(admindashboard|staffdashboard|managementdashboard|staffmanagement|addevent|addnews|addpublication|addstaff|deleteevent|deletenews|deletepublication|editevent|editnews|editpublication|editstaff|eventmanagement|newsmanagement|publicationmanagement|admineventmanagement|adminnewsmanagement|adminpublicationmanagement|staffeventmanagement|staffnewsmanagement|staffpublicationmanagement|managementeventmanagement|managementnewsmanagement|managementpublicationmanagement|permissionhandling)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/client/about',
      },
      {
        source: '/history',
        destination: '/client/history',
      },
      {
        source: '/founder',
        destination: '/client/founder',
      },
      {
        source: '/events',
        destination: '/client/events',
      },
      {
        source: '/news',
        destination: '/client/news',
      },
      {
        source: '/publication',
        destination: '/client/publication',
      },
      {
        source: '/gallery',
        destination: '/client/gallery',
      },
      {
        source: '/contact',
        destination: '/client/contact',
      },
      {
        source: '/support',
        destination: '/client/support',
      },
    ];
  },
}

export default nextConfig
