export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60edfeea3c96356d690f0bf0',
                  title: 'Sanity Studio',
                  name: 'sanity-11-ty-blog-studio',
                  apiId: '1336a767-aee9-4bb6-bf6b-1e62c7e926be'
                },
                {
                  buildHookId: '60edfeeab58d9d62459259e2',
                  title: 'Blog Website',
                  name: 'sanity-11-ty-blog',
                  apiId: 'd52558b8-2e74-4305-b7f3-ce463a2d9273'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theapplegates/sanity-11ty-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11-ty-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
