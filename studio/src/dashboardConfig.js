export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603ef4745ea3198f646b734c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6cm516tg',
                  apiId: '11d0d81c-7d26-45fc-bee6-12c379de2152'
                },
                {
                  buildHookId: '603ef4756bfd8884954593b8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4pcsjmqq',
                  apiId: '00764267-f015-435e-8da8-b5e3fed5e781'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DoctorDerek/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4pcsjmqq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
